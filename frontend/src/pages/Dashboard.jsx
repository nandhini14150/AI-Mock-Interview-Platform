import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const userName =
    localStorage.getItem("userName") || "Student";

  const userEmail =
    localStorage.getItem("userEmail") || "";

  const userId =
    localStorage.getItem("userId");

  const [interviews, setInterviews] = useState([]);
  const [loadingHistory, setLoadingHistory] = useState(true);
  const [historyError, setHistoryError] = useState("");

  // ============================
  // LOAD INTERVIEW HISTORY
  // ============================

  useEffect(() => {
    fetchInterviewHistory();
  }, []);

  const fetchInterviewHistory = async () => {
    try {
      setLoadingHistory(true);
      setHistoryError("");

      if (!userId) {
        setInterviews([]);
        setLoadingHistory(false);
        return;
      }

      const response = await fetch(
        `http://localhost:8080/api/results/user/${userId}`
      );

      if (!response.ok) {
        throw new Error(
          `Server returned ${response.status}`
        );
      }

      const data = await response.json();

      console.log("Interview history:", data);

      setInterviews(data);

    } catch (error) {
      console.error(
        "History loading error:",
        error
      );

      setHistoryError(
        "Unable to load interview history."
      );

    } finally {
      setLoadingHistory(false);
    }
  };

  // ============================
  // STATISTICS
  // ============================

  const totalInterviews =
    interviews.length;

  const totalQuestions =
    interviews.reduce(
      (total, interview) =>
        total +
        (interview.totalQuestions || 0),
      0
    );

  const averageScore =
    totalInterviews > 0
      ? Math.round(
          interviews.reduce(
            (total, interview) =>
              total +
              (interview.percentage || 0),
            0
          ) / totalInterviews
        )
      : 0;

  const bestScore =
    totalInterviews > 0
      ? Math.max(
          ...interviews.map(
            (interview) =>
              interview.percentage || 0
          )
        )
      : 0;

  // ============================
  // LOGOUT
  // ============================

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userId");

    navigate("/login");
  };

  // ============================
  // FORMAT DATE
  // ============================

  const formatDate = (dateString) => {
    if (!dateString) {
      return "Date unavailable";
    }

    const date = new Date(dateString);

    return date.toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  // ============================
  // DASHBOARD
  // ============================

  return (
    <div className="dashboard">

      {/* ============================
          NAVBAR
      ============================ */}

      <nav className="dashboard-navbar">

        <div className="dashboard-logo">
          AI<span>Interview</span>
        </div>

        <div className="dashboard-user">

          <span>
            👤 {userName}
          </span>

          <button
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </nav>

      {/* ============================
          MAIN CONTENT
      ============================ */}

      <main className="dashboard-content">

        {/* ============================
            WELCOME SECTION
        ============================ */}

        <div className="welcome-section">

          <div>

            <p className="welcome-label">
              STUDENT DASHBOARD
            </p>

            <h1>
              Welcome, {userName}! 👋
            </h1>

            <p>
              Prepare for your next interview
              with AI-powered practice.
            </p>

            {userEmail && (
              <small>
                {userEmail}
              </small>
            )}

          </div>

          <button
            className="start-interview-btn"
            onClick={() =>
              navigate("/interview")
            }
          >
            Start Interview →
          </button>

        </div>

        {/* ============================
            STATISTICS
        ============================ */}

        <section className="stats-grid">

          {/* Interviews */}

          <div className="stat-card">

            <div className="stat-icon">
              🎯
            </div>

            <div>

              <h3>
                {totalInterviews}
              </h3>

              <p>
                Interviews Completed
              </p>

            </div>

          </div>

          {/* Average Score */}

          <div className="stat-card">

            <div className="stat-icon">
              ⭐
            </div>

            <div>

              <h3>
                {averageScore}%
              </h3>

              <p>
                Average Score
              </p>

            </div>

          </div>

          {/* Best Score */}

          <div className="stat-card">

            <div className="stat-icon">
              🏆
            </div>

            <div>

              <h3>
                {bestScore}%
              </h3>

              <p>
                Best Score
              </p>

            </div>

          </div>

          {/* Questions */}

          <div className="stat-card">

            <div className="stat-icon">
              📚
            </div>

            <div>

              <h3>
                {totalQuestions}
              </h3>

              <p>
                Questions Answered
              </p>

            </div>

          </div>

        </section>

        {/* ============================
            INTERVIEW CATEGORIES
        ============================ */}

        <section className="dashboard-section">

          <div className="section-heading">

            <div>

              <p>
                INTERVIEW PRACTICE
              </p>

              <h2>
                Choose a Category
              </h2>

            </div>

          </div>

          <div className="category-grid">

            {/* DSA */}

            <div
              className="dashboard-category"
              onClick={() =>
                navigate(
                  "/topics?category=DSA"
                )
              }
            >

              <span>💻</span>

              <h3>
                DSA
              </h3>

              <p>
                Data Structures & Algorithms
              </p>

            </div>

            {/* JAVA */}

            <div
              className="dashboard-category"
              onClick={() =>
                navigate(
                  "/topics?category=Java"
                )
              }
            >

              <span>☕</span>

              <h3>
                Java
              </h3>

              <p>
                Core Java & OOP Concepts
              </p>

            </div>

            {/* DBMS */}

            <div
              className="dashboard-category"
              onClick={() =>
                navigate(
                  "/topics?category=DBMS"
                )
              }
            >

              <span>🗄️</span>

              <h3>
                DBMS
              </h3>

              <p>
                Database Management Systems
              </p>

            </div>

            {/* OS */}

            <div
              className="dashboard-category"
              onClick={() =>
                navigate(
                  "/topics?category=OS"
                )
              }
            >

              <span>⚙️</span>

              <h3>
                Operating Systems
              </h3>

              <p>
                OS Concepts & Questions
              </p>

            </div>

            {/* HR */}

            <div
              className="dashboard-category"
              onClick={() =>
                navigate(
                  "/topics?category=HR"
                )
              }
            >

              <span>👔</span>

              <h3>
                HR
              </h3>

              <p>
                Behavioral Interview Questions
              </p>

            </div>

            {/* APTITUDE */}

            <div
              className="dashboard-category"
              onClick={() =>
                navigate(
                  "/topics?category=Aptitude"
                )
              }
            >

              <span>🧠</span>

              <h3>
                Aptitude
              </h3>

              <p>
                Logical & Quantitative Reasoning
              </p>

            </div>

          </div>

        </section>

        {/* ============================
            RECENT INTERVIEWS
        ============================ */}

        <section className="dashboard-section">

          <div className="section-heading">

            <div>

              <p>
                YOUR ACTIVITY
              </p>

              <h2>
                Recent Interviews
              </h2>

            </div>

            {interviews.length > 0 && (
              <button
                className="refresh-btn"
                onClick={
                  fetchInterviewHistory
                }
              >
                ↻ Refresh
              </button>
            )}

          </div>

          {/* Loading */}

          {loadingHistory && (

            <div className="empty-state">

              <div className="empty-icon">
                ⏳
              </div>

              <h3>
                Loading history...
              </h3>

              <p>
                Fetching your previous
                interviews.
              </p>

            </div>

          )}

          {/* Error */}

          {!loadingHistory &&
            historyError && (

              <div className="empty-state">

                <div className="empty-icon">
                  ⚠️
                </div>

                <h3>
                  Unable to load history
                </h3>

                <p>
                  {historyError}
                </p>

                <button
                  onClick={
                    fetchInterviewHistory
                  }
                >
                  Try Again
                </button>

              </div>

            )}

          {/* No interviews */}

          {!loadingHistory &&
            !historyError &&
            interviews.length === 0 && (

              <div className="empty-state">

                <div className="empty-icon">
                  📊
                </div>

                <h3>
                  No interviews yet
                </h3>

                <p>
                  Complete your first mock
                  interview and your
                  performance will appear here.
                </p>

                <button
                  onClick={() =>
                    navigate("/interview")
                  }
                >
                  Start Your First Interview
                </button>

              </div>

            )}

          {/* Interview History */}

          {!loadingHistory &&
            !historyError &&
            interviews.length > 0 && (

              <div className="interview-history">

                {interviews.map(
                  (interview) => (

                    <div
                      className="history-card"
                      key={interview.id}
                    >

                      <div className="history-icon">
                        🎯
                      </div>

                      <div className="history-info">

                        <h3>
                          {interview.category}
                        </h3>

                        <p>
                          {interview.topic
                            ? `Topic: ${interview.topic}`
                            : "Full Category Interview"}
                        </p>

                        <small>
                          {formatDate(
                            interview.completedAt
                          )}
                        </small>

                      </div>

                      <div className="history-score">

                        <strong>
                          {interview.percentage}%
                        </strong>

                        <span>
                          {interview.score}/
                          {interview.maximumScore}
                        </span>

                      </div>

                    </div>

                  )
                )}

              </div>

            )}

        </section>

      </main>

    </div>
  );
}

export default Dashboard;