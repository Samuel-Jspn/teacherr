import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Connection from "./pages/connection";
import Inscription from "./pages/inscription";
import Accueil from "./pages/accueil";

function App() {
  return (
    <div className="Teacherr">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;
