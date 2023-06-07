import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Connection from "./pages/connection";
import Inscription from "./pages/inscription";

function App() {
  return (
    <body>
      <header></header>

      <div className="Teacherr">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/inscription" element={<Inscription />} />
        </Routes>
      </div>
    </body>
  );
}

export default App;
