import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QrWarningPage from "./pages/QrWarningPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QrWarningPage />} />
      </Routes>
    </Router>
  );
}

export default App;
