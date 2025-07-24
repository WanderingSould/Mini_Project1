import { Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DemoPage from "./pages/DemoPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import LoginPage from "./pages/LoginPage"
import DownloadsPage from "./pages/DownloadsPage"
import SignupPage from "./pages/SignupPage"
import { Header } from "./components/Header"
import { RouteTransition } from "./components/RouteTransition"
import { PWAUpdatePrompt } from "./components/PWAUpdatePrompt"
import { useAuthStore } from "./lib/store"

function App() {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <PWAUpdatePrompt />
      <RouteTransition />
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        
        <Route path="/" element={<HomePage />} />
        <Route path="/demo" element={<PrivateRoute><DemoPage /></PrivateRoute>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/downloads" element={<DownloadsPage />} />
      </Routes>
    </div>
  )
}

export default App
