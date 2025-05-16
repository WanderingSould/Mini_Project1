import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
// import Features from "./pages/Features";
import FloatingAssistant from "./components/FloatingAssistant";

function App() {
  return (
    
    <Routes>

      <Route path="/" element={<Homepage />} />
      {/* <Route path="/features" element={<Features />} /> */}
    </Routes>
  );
}

export default App;
