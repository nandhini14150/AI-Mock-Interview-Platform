import { useSearchParams, useNavigate } from "react-router-dom";
import "./DifficultySelection.css";

function DifficultySelection() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const category = searchParams.get("category") || "DSA";
  const topic = searchParams.get("topic");

  const startInterview = (difficulty) => {
    let url =
      `/interview?category=${encodeURIComponent(category)}` +
      `&difficulty=${encodeURIComponent(difficulty)}`;

    if (topic) {
      url += `&topic=${encodeURIComponent(topic)}`;
    }

    navigate(url);
  };

  return (
    <div className="difficulty-page">

      <nav className="difficulty-navbar">
        <div className="difficulty-logo">
          AI<span>Interview</span>
        </div>

        <button
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>
      </nav>

      <main className="difficulty-container">

        <div className="difficulty-header">
          <p>INTERVIEW PRACTICE</p>

          <h1>Choose Difficulty</h1>

          <h3>
            {category}
            {topic && ` • ${topic}`}
          </h3>

          <span>
            Select the difficulty level for your
            mock interview.
          </span>
        </div>

        <div className="difficulty-grid">

          <div
            className="difficulty-card easy"
            onClick={() => startInterview("Easy")}
          >
            <div className="difficulty-icon">
              🟢
            </div>

            <h2>Easy</h2>

            <p>
              Basic questions to build your
              fundamentals.
            </p>

            <button>Start Easy Interview →</button>
          </div>

          <div
            className="difficulty-card medium"
            onClick={() => startInterview("Medium")}
          >
            <div className="difficulty-icon">
              🟡
            </div>

            <h2>Medium</h2>

            <p>
              Intermediate questions to test
              your understanding.
            </p>

            <button>Start Medium Interview →</button>
          </div>

          <div
            className="difficulty-card hard"
            onClick={() => startInterview("Hard")}
          >
            <div className="difficulty-icon">
              🔴
            </div>

            <h2>Hard</h2>

            <p>
              Advanced questions for stronger
              interview preparation.
            </p>

            <button>Start Hard Interview →</button>
          </div>

        </div>

        <button
          className="back-btn"
          onClick={() =>
            topic
              ? navigate(
                  `/topics?category=${encodeURIComponent(category)}`
                )
              : navigate("/dashboard")
          }
        >
          ← Back
        </button>

      </main>
    </div>
  );
}

export default DifficultySelection;