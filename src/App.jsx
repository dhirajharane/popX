import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingScreen from "./Components/LandingScreen";
import LoginScreen from "./Components/LoginScreen";
import SignupScreen from "./Components/SignupScreen";
import Profile from "./Components/Profile";
import MobileFrame from "./Components/MobileFrame";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  

  return (
    <BrowserRouter basename="/">
      <MobileFrame>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </MobileFrame>
    </BrowserRouter>
  )
}

export default App
