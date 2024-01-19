import { useAuth } from "./contexts/AuthContext";
import { Login, Register, Home } from "./pages/index";
// react router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
const App = () => {
  const user = useAuth();
  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="login" />;
    }
    return children;
  };
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#6085ff] to-[#7b96ec] flex justify-center items-center">
      <Router>
        <Routes>
          <Route
            path="/"
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
