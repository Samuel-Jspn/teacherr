import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Connection from "./pages/connection";
import Inscription from "./pages/inscription";
import Accueil from "./pages/accueil";

function App() {
  return (
    <body>
      <header></header>

      <div className="Teacherr">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/accueil" element={<Accueil />} />
        </Routes>
      </div>
    </body>
  );
}

export default App;
