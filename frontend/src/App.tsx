import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import FeaturesPage from "./pages/FeaturesPage"
import ModulesPage from "./pages/ModulesPage"
import TechStackPage from "./pages/TechStackPage"
import UsersPage from "./pages/UsersPage"
import DemoPage from "./pages/DemoPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/modules" element={<ModulesPage />} />
        <Route path="/tech-stack" element={<TechStackPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App
