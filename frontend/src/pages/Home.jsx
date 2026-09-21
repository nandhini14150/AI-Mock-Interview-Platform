import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          AI<span>Interview</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#categories">Categories</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-buttons">
          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="signup-btn">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">

          <div className="badge">
            🤖 AI-Powered Interview Preparation
          </div>

          <h1>
            Practice Interviews.
            <br />
            <span>Improve Your Skills.</span>
          </h1>

          <p>
            Prepare for technical interviews with an AI-powered
            mock interview platform that evaluates your answers
            and gives personalized feedback.
          </p>

          <div className="hero-buttons">
            <Link to="/login" className="primary-btn">
              Start Interview →
            </Link>

            <a href="#features" className="secondary-btn">
              Explore Features
            </a>
          </div>

          <div className="trust-text">
            ✓ AI Feedback &nbsp;&nbsp;
            ✓ Multiple Categories &nbsp;&nbsp;
            ✓ Performance Tracking
          </div>

        </div>

        {/* Interview Preview Card */}
        <div className="hero-card">

          <div className="card-header">
            <div>
              <small>Current Interview</small>
              <h3>Java Technical Interview</h3>
            </div>

            <div className="score">
              82%
            </div>
          </div>

          <div className="progress">
            <div className="progress-fill"></div>
          </div>

          <div className="question-box">
            <small>Question 3 of 5</small>

            <h4>
              What is the difference between
              ArrayList and LinkedList?
            </h4>

            <div className="answer-box">
              Your answer is being evaluated by AI...
            </div>
          </div>

          <div className="evaluation">

            <div className="evaluation-item">
              <span className="check">✓</span>
              <span>Correctness</span>
              <strong>90%</strong>
            </div>

            <div className="evaluation-item">
              <span className="check">✓</span>
              <span>Clarity</span>
              <strong>85%</strong>
            </div>

            <div className="evaluation-item">
              <span className="check">✓</span>
              <span>Technical Accuracy</span>
              <strong>80%</strong>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">

        <div className="section-title">
          <span>FEATURES</span>

          <h2>
            Everything you need to ace your interview
          </h2>

          <p>
            Practice smarter with personalized AI feedback
            and detailed performance analysis.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">🤖</div>

            <h3>AI-Powered Feedback</h3>

            <p>
              Get instant feedback on correctness,
              clarity and technical accuracy.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>

            <h3>Performance Tracking</h3>

            <p>
              Track your interview scores and
              identify areas for improvement.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>

            <h3>Multiple Categories</h3>

            <p>
              Practice DSA, Java, DBMS, OS,
              HR and Aptitude interviews.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📈</div>

            <h3>Personalized Improvement</h3>

            <p>
              Discover your strengths and receive
              suggestions to improve your weaknesses.
            </p>
          </div>

        </div>
      </section>

      {/* Categories Section */}
      <section className="categories" id="categories">

        <div className="section-title">
          <span>INTERVIEW CATEGORIES</span>

          <h2>
            Practice what matters
          </h2>

          <p>
            Choose a category and start practicing
            with AI-powered interview questions.
          </p>
        </div>

        <div className="category-grid">

          <div className="category-card">
            <span className="category-icon">💻</span>
            <h3>DSA</h3>
            <p>Data Structures & Algorithms</p>
          </div>

          <div className="category-card">
            <span className="category-icon">☕</span>
            <h3>Java</h3>
            <p>Core Java & OOP Concepts</p>
          </div>

          <div className="category-card">
            <span className="category-icon">🗄️</span>
            <h3>DBMS</h3>
            <p>Database Management Systems</p>
          </div>

          <div className="category-card">
            <span className="category-icon">⚙️</span>
            <h3>Operating Systems</h3>
            <p>OS Concepts & Questions</p>
          </div>

          <div className="category-card">
            <span className="category-icon">👔</span>
            <h3>HR</h3>
            <p>Behavioral Interview Questions</p>
          </div>

          <div className="category-card">
            <span className="category-icon">🧠</span>
            <h3>Aptitude</h3>
            <p>Logical & Quantitative Reasoning</p>
          </div>

        </div>
      </section>

      {/* About / CTA Section */}
      <section className="cta" id="about">

        <h2>
          Ready to improve your interview skills?
        </h2>

        <p>
          Start your first AI-powered mock interview today.
        </p>

        <Link to="/login" className="primary-btn">
          Start Your Interview →
        </Link>

      </section>

      {/* Footer */}
      <footer>

        <div className="footer-logo">
          AI<span>Interview</span>
        </div>

        <p>
          AI-powered interview preparation for students
          and aspiring software engineers.
        </p>

        <div className="footer-bottom">
          © 2026 AI Mock Interview Platform. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

export default Home;