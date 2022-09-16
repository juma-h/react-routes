import { Routes, Route } from "react-router-dom";
import Login  from "./pages/Login";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import { ProtectedRoute } from "./components/ProtectedRoute";
import "./App.css";

export default function App() {

  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

