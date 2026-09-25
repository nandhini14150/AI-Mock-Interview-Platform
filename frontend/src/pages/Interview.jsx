import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./Interview.css";

function Interview() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const selectedCategory =
    searchParams.get("category") || "DSA";

  const selectedTopic =
    searchParams.get("topic") || "";

  const selectedDifficulty =
    searchParams.get("difficulty") || "";

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);

  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [evaluating, setEvaluating] = useState(false);
  const [savingResult, setSavingResult] = useState(false);

  const [evaluationResult, setEvaluationResult] =
    useState(null);

  const [error, setError] = useState("");

  // ============================
  // LOAD QUESTIONS
  // ============================

  useEffect(() => {
    fetchQuestions();
  }, [
    selectedCategory,
    selectedTopic,
    selectedDifficulty,
  ]);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      setError("");
      setEvaluationResult(null);

      let url;

      if (selectedTopic && selectedDifficulty) {
        url =
          `https://ai-mock-interview-platform-5-jycy.onrender.com/api/interview/questions/category/` +
          `${encodeURIComponent(selectedCategory)}/topic/` +
          `${encodeURIComponent(selectedTopic)}/difficulty/` +
          `${encodeURIComponent(selectedDifficulty)}`;
      } else if (selectedDifficulty) {
        url =
          `https://ai-mock-interview-platform-5-jycy.onrender.com/api/interview/questions/category/` +
          `${encodeURIComponent(selectedCategory)}/difficulty/` +
          `${encodeURIComponent(selectedDifficulty)}`;
      } else if (selectedTopic) {
        url =
          `https://ai-mock-interview-platform-5-jycy.onrender.com/api/interview/questions/category/` +
          `${encodeURIComponent(selectedCategory)}/topic/` +
          `${encodeURIComponent(selectedTopic)}`;
      } else {
        url =
          `https://ai-mock-interview-platform-5-jycy.onrender.com/api/interview/questions/category/` +
          `${encodeURIComponent(selectedCategory)}`;
      }

      console.log("Fetching questions:", url);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `Server returned ${response.status}`
        );
      }

      const data = await response.json();

      console.log("Questions received:", data);

      if (!data || data.length === 0) {
        setQuestions([]);
        setError(
          "No questions found for this selection."
        );
        return;
      }

      // Shuffle questions
      const shuffled = [...data].sort(
        () => Math.random() - 0.5
      );

      // Maximum 5 questions
      const selectedQuestions =
        shuffled.slice(0, 5);

      setQuestions(selectedQuestions);
      setCurrentQuestion(0);
      setAnswer("");
      setScore(0);
      setCompleted(false);
      setEvaluationResult(null);

    } catch (err) {
      console.error(
        "Question loading error:",
        err
      );

      setError(
        "Unable to load questions. Please make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  // ============================
  // EVALUATE ANSWER
  // ============================

  const evaluateAnswer = async () => {
    try {
      setEvaluating(true);
      setError("");

      const response = await fetch(
        "https://ai-mock-interview-platform-5-jycy.onrender.com/api/evaluation/evaluate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question:
              questions[currentQuestion].question,
            answer: answer,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Evaluation server returned ${response.status}`
        );
      }

      const result = await response.json();

      console.log(
        "Evaluation result:",
        result
      );

      return result;

    } catch (err) {
      console.error(
        "Answer evaluation error:",
        err
      );

      setError(
        "Unable to evaluate your answer. Please make sure the backend is running."
      );

      return null;

    } finally {
      setEvaluating(false);
    }
  };

  // ============================
  // EVALUATE CURRENT QUESTION
  // ============================

  const handleNext = async () => {
    if (
      !answer.trim() ||
      evaluating
    ) {
      return;
    }

    const result =
      await evaluateAnswer();

    if (!result) {
      return;
    }

    setEvaluationResult(result);

    const questionScore =
      Number(result.score) || 0;

    setScore(
      (previousScore) =>
        previousScore + questionScore
    );
  };

  // ============================
  // SAVE FINAL RESULT
  // ============================

  const saveInterviewResult = async (
    finalScore
  ) => {
    try {
      setSavingResult(true);
      setError("");

      const userId =
        localStorage.getItem("userId");

      if (!userId) {
        setError(
          "User information not found. Please login again."
        );

        return false;
      }

      const maximumScore =
        questions.length * 10;

      const finalPercentage =
        maximumScore > 0
          ? Math.round(
              (finalScore / maximumScore) * 100
            )
          : 0;

      const resultData = {
  userId: Number(userId),
  category: selectedCategory,
  topic: selectedTopic || null,
  difficulty: selectedDifficulty || null,
  score: finalScore,
  maximumScore: maximumScore,
  percentage: finalPercentage,
  totalQuestions: questions.length,
};

      console.log(
        "Saving interview result:",
        resultData
      );

      const response = await fetch(
        "https://ai-mock-interview-platform-5-jycy.onrender.com/api/results/save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(resultData),
        }
      );

      if (!response.ok) {
        const errorData =
          await response.text();

        console.error(
          "Save result error:",
          errorData
        );

        throw new Error(
          "Failed to save interview result"
        );
      }

      const savedData =
        await response.json();

      console.log(
        "Interview result saved:",
        savedData
      );

      return true;

    } catch (err) {
      console.error(
        "Result saving error:",
        err
      );

      setError(
        "Interview completed, but the result could not be saved."
      );

      return false;

    } finally {
      setSavingResult(false);
    }
  };

  // ============================
  // CONTINUE
  // ============================

  const handleContinue = async () => {
    if (savingResult) {
      return;
    }

    if (
      currentQuestion ===
      questions.length - 1
    ) {
      const lastQuestionScore =
        Number(
          evaluationResult?.score
        ) || 0;

      const finalScore =
        score >= lastQuestionScore
          ? score
          : score + lastQuestionScore;

      const saved =
        await saveInterviewResult(
          finalScore
        );

      if (saved) {
        setScore(finalScore);
        setEvaluationResult(null);
        setAnswer("");
        setCompleted(true);
      }

      return;
    }

    setEvaluationResult(null);
    setAnswer("");

    setCurrentQuestion(
      (previousQuestion) =>
        previousQuestion + 1
    );
  };

  // ============================
  // RESTART
  // ============================

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswer("");
    setScore(0);
    setCompleted(false);
    setError("");
    setEvaluationResult(null);

    fetchQuestions();
  };

  // ============================
  // LOADING
  // ============================

  if (loading) {
    return (
      <div className="interview-page">
        <div className="result-card">
          <h1>Loading Interview...</h1>

          <p>
            Preparing your questions...
          </p>
        </div>
      </div>
    );
  }

  // ============================
  // ERROR
  // ============================

  if (error) {
    return (
      <div className="interview-page">
        <div className="result-card">

          <div className="result-icon">
            ⚠️
          </div>

          <h1>
            Unable to Continue Interview
          </h1>

          <p>{error}</p>

          <div className="result-buttons">

            <button
              className="restart-btn"
              onClick={fetchQuestions}
            >
              Try Again
            </button>

            <button
              className="dashboard-btn"
              onClick={() =>
                navigate("/dashboard")
              }
            >
              Back to Dashboard
            </button>

          </div>
        </div>
      </div>
    );
  }

  // ============================
  // FINAL RESULT
  // ============================

  if (completed) {
    const maximumScore =
      questions.length * 10;

    const percentage =
      maximumScore > 0
        ? Math.round(
            (score / maximumScore) * 100
          )
        : 0;

    return (
      <div className="interview-page">

        <div className="result-card">

          <div className="result-icon">
            🎉
          </div>

          <h1>
            Interview Completed!
          </h1>

          <p>
            You completed the{" "}
            <strong>
              {selectedCategory}
            </strong>{" "}
            mock interview.
          </p>

          {selectedTopic && (
            <p>
              Topic:{" "}
              <strong>
                {selectedTopic}
              </strong>
            </p>
          )}

          {selectedDifficulty && (
            <p>
              Difficulty:{" "}
              <strong>
                {selectedDifficulty}
              </strong>
            </p>
          )}

          <div className="final-score">

            <strong>
              {score}
            </strong>

            <span>
              / {maximumScore}
            </span>

          </div>

          <p className="score-text">
            Score: {percentage}%
          </p>

          <p className="score-text">
            Questions answered:{" "}
            {questions.length}
          </p>

          <div className="result-buttons">

            <button
              className="restart-btn"
              onClick={handleRestart}
            >
              Try Again
            </button>

            <button
              className="dashboard-btn"
              onClick={() =>
                navigate("/dashboard")
              }
            >
              Back to Dashboard
            </button>

          </div>

        </div>
      </div>
    );
  }

  // ============================
  // NO QUESTION
  // ============================

  if (!questions[currentQuestion]) {
    return (
      <div className="interview-page">

        <div className="result-card">

          <h1>
            No Question Available
          </h1>

          <button
            className="dashboard-btn"
            onClick={() =>
              navigate("/dashboard")
            }
          >
            Back to Dashboard
          </button>

        </div>

      </div>
    );
  }

  const question =
    questions[currentQuestion];

  // ============================
  // EVALUATION SCREEN
  // ============================

  if (evaluationResult) {
    return (
      <div className="interview-page">

        <nav className="interview-navbar">

          <div className="interview-logo">
            AI<span>Interview</span>
          </div>

          <button
            className="exit-btn"
            onClick={() =>
              navigate("/dashboard")
            }
          >
            Exit Interview
          </button>

        </nav>

        <main className="interview-container">

          <div className="evaluation-card">

            <div className="evaluation-header">

              <div className="evaluation-icon">

                {evaluationResult.score >= 8
                  ? "🎉"
                  : evaluationResult.score >= 6
                  ? "👍"
                  : "💡"}

              </div>

              <h1>
                Answer Evaluated
              </h1>

              <p>
                Question{" "}
                {currentQuestion + 1}{" "}
                of{" "}
                {questions.length}
              </p>

            </div>

            <div className="overall-score">

              <div className="score-number">
                {evaluationResult.score}
              </div>

              <div className="score-total">
                / 10
              </div>

            </div>

            <div className="evaluation-status">
              Status:{" "}
              <strong>
                {evaluationResult.status}
              </strong>
            </div>

            <div className="evaluation-breakdown">

              <div className="evaluation-item">
                <div className="evaluation-item-icon">
                  🎯
                </div>

                <div>
                  <h3>Correctness</h3>
                  <p>
                    {evaluationResult.correctness}/10
                  </p>
                </div>
              </div>

              <div className="evaluation-item">
                <div className="evaluation-item-icon">
                  📚
                </div>

                <div>
                  <h3>Completeness</h3>
                  <p>
                    {evaluationResult.completeness}/10
                  </p>
                </div>
              </div>

              <div className="evaluation-item">
                <div className="evaluation-item-icon">
                  💬
                </div>

                <div>
                  <h3>Clarity</h3>
                  <p>
                    {evaluationResult.clarity}/10
                  </p>
                </div>
              </div>

              <div className="evaluation-item">
                <div className="evaluation-item-icon">
                  🧠
                </div>

                <div>
                  <h3>Technical Accuracy</h3>
                  <p>
                    {evaluationResult.technicalAccuracy}/10
                  </p>
                </div>
              </div>

            </div>

            <div className="evaluation-section">

              <h2>
                📝 Feedback
              </h2>

              <p>
                {evaluationResult.feedback}
              </p>

            </div>

            <div className="evaluation-section">

              <h2>
                💪 Strengths
              </h2>

              {evaluationResult.strengths &&
              evaluationResult.strengths.length > 0 ? (

                <ul>
                  {evaluationResult.strengths.map(
                    (strength, index) => (
                      <li key={index}>
                        ✓ {strength}
                      </li>
                    )
                  )}
                </ul>

              ) : (
                <p>
                  Keep practicing to build
                  stronger answers.
                </p>
              )}

            </div>

            <div className="evaluation-section">

              <h2>
                📌 Areas to Improve
              </h2>

              {evaluationResult.improvements &&
              evaluationResult.improvements.length > 0 ? (

                <ul>
                  {evaluationResult.improvements.map(
                    (improvement, index) => (
                      <li key={index}>
                        • {improvement}
                      </li>
                    )
                  )}
                </ul>

              ) : (
                <p>
                  No major improvements
                  suggested.
                </p>
              )}

            </div>

            <div className="evaluation-actions">

              <button
                className="next-btn"
                onClick={handleContinue}
                disabled={savingResult}
              >
                {savingResult
                  ? "Saving Result..."
                  : currentQuestion ===
                    questions.length - 1
                  ? "View Final Result"
                  : "Next Question →"}
              </button>

            </div>

          </div>

        </main>
      </div>
    );
  }

  // ============================
  // QUESTION SCREEN
  // ============================

  return (
    <div className="interview-page">

      <nav className="interview-navbar">

        <div className="interview-logo">
          AI<span>Interview</span>
        </div>

        <button
          className="exit-btn"
          onClick={() =>
            navigate("/dashboard")
          }
        >
          Exit Interview
        </button>

      </nav>

      <main className="interview-container">

        <div className="interview-header">

          <div>

            <p className="interview-label">
              MOCK INTERVIEW
            </p>

            <h1>
              {selectedCategory} Interview
            </h1>

            {selectedTopic && (
              <p>
                Topic:{" "}
                <strong>
                  {selectedTopic}
                </strong>
              </p>
            )}

            {selectedDifficulty && (
              <p>
                Difficulty:{" "}
                <strong>
                  {selectedDifficulty}
                </strong>
              </p>
            )}

          </div>

          <div className="question-count">
            Question{" "}
            {currentQuestion + 1}{" "}
            /{" "}
            {questions.length}
          </div>

        </div>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width:
                `${
                  ((currentQuestion + 1) /
                    questions.length) *
                  100
                }%`,
            }}
          />

        </div>

        <div className="question-card">

          <div className="question-number">
            Topic:{" "}
            <strong>
              {question.topic}
            </strong>
          </div>

          <h2>
            {question.question}
          </h2>

          <label htmlFor="answer">
            Your Answer
          </label>

          <textarea
            id="answer"
            value={answer}
            onChange={(e) =>
              setAnswer(e.target.value)
            }
            placeholder="Type your answer here..."
            rows="8"
            disabled={evaluating}
          />

          <div className="interview-actions">

            <button
              className="next-btn"
              onClick={handleNext}
              disabled={
                !answer.trim() ||
                evaluating
              }
            >
              {evaluating
                ? "Evaluating..."
                : "Evaluate Answer"}
            </button>

          </div>

        </div>

      </main>
    </div>
  );
}

export default Interview;