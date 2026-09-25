import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./TopicSelection.css";

function TopicSelection() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const category =
    searchParams.get("category") || "DSA";

  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTopics();
  }, [category]);

  const fetchTopics = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://ai-mock-interview-platform-5-jycy.onrender.com/api/interview/questions/category/${encodeURIComponent(category)}`
      );

      if (!response.ok) {
        throw new Error(
          `Server returned ${response.status}`
        );
      }

      const data = await response.json();

      const uniqueTopics = [
        ...new Set(
          data
            .map((question) => question.topic)
            .filter(Boolean)
        ),
      ];

      setTopics(uniqueTopics);
    } catch (err) {
      console.error("Topic loading error:", err);

      setError(
        "Unable to load topics. Please make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  // Go to difficulty selection
  const startInterview = (topic) => {
    navigate(
      `/difficulty?category=${encodeURIComponent(
        category
      )}&topic=${encodeURIComponent(topic)}`
    );
  };

  // All category questions
  const startFullInterview = () => {
    navigate(
      `/difficulty?category=${encodeURIComponent(
        category
      )}`
    );
  };

  if (loading) {
    return (
      <div className="topic-page">
        <div className="topic-card">
          <div className="topic-icon">⏳</div>

          <h1>Loading Topics...</h1>

          <p>
            Finding available {category} topics.
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="topic-page">
        <div className="topic-card">
          <div className="topic-icon">⚠️</div>

          <h1>Unable to Load Topics</h1>

          <p>{error}</p>

          <div className="topic-actions">
            <button
              className="retry-btn"
              onClick={fetchTopics}
            >
              Try Again
            </button>

            <button
              className="back-btn"
              onClick={() =>
                navigate("/dashboard")
              }
            >
              ← Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="topic-page">

      <nav className="topic-navbar">

        <div className="topic-logo">
          AI<span>Interview</span>
        </div>

        <button
          className="exit-btn"
          onClick={() =>
            navigate("/dashboard")
          }
        >
          Dashboard
        </button>

      </nav>

      <main className="topic-container">

        <div className="topic-header">

          <p className="topic-label">
            INTERVIEW PRACTICE
          </p>

          <h1>Choose a Topic</h1>

          <p>
            Select a topic from{" "}
            <strong>{category}</strong>{" "}
            to continue.
          </p>

        </div>

        {/* All Category */}
        <div
          className="all-topic-card"
          onClick={startFullInterview}
        >

          <div className="all-topic-icon">
            🎯
          </div>

          <div>
            <h2>All {category} Topics</h2>

            <p>
              Practice questions from the
              complete {category} category.
            </p>
          </div>

          <span className="arrow">
            →
          </span>

        </div>

        {/* Individual Topics */}
        <div className="topics-grid">

          {topics.map((topic, index) => (

            <div
              className="topic-item"
              key={topic}
              onClick={() =>
                startInterview(topic)
              }
            >

              <div className="topic-number">
                {index + 1}
              </div>

              <div className="topic-details">

                <h3>{topic}</h3>

                <p>
                  Start {topic} practice
                </p>

              </div>

              <span className="topic-arrow">
                →
              </span>

            </div>

          ))}

        </div>

        {topics.length === 0 && (
          <div className="no-topics">

            <h2>No topics available</h2>

            <p>
              There are currently no topics
              available for this category.
            </p>

          </div>
        )}

        <button
          className="back-dashboard-btn"
          onClick={() =>
            navigate("/dashboard")
          }
        >
          ← Back to Dashboard
        </button>

      </main>
    </div>
  );
}

export default TopicSelection;