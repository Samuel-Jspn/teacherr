import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Connection from "./pages/connection";
import Inscription from "./pages/inscription";
import Accueil from "./pages/accueil";
import Profil from "./pages/profil";
import Mentions from "./pages/mentions";
import Editprofil from "./pages/editprofil";

function App() {
  return (
    <div className="Teacherr">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/auth/login" element={<Connection />} />
          <Route path="/auth/register" element={<Inscription />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/editprofil" element={<Editprofil />} />
        </Routes>
      </div>
  );
}

export default App;

