import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Interview from "./pages/Interview";
import TopicSelection from "./pages/TopicSelection";
import DifficultySelection from "./pages/DifficultySelection";

function App() {
  return (
    <Routes>

      {/* Home */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* Authentication */}
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* Student Dashboard */}
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      {/* Topic Selection */}
      <Route
        path="/topics"
        element={<TopicSelection />}
      />

      {/* Difficulty Selection */}
      <Route
        path="/difficulty"
        element={<DifficultySelection />}
      />

      {/* Mock Interview */}
      <Route
        path="/interview"
        element={<Interview />}
      />

      {/* Fallback */}
      <Route
        path="*"
        element={<Home />}
      />

    </Routes>
  );
}

export default App;