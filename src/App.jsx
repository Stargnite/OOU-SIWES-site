import "./App.css";
import HomePage from "./pages/HomePage";
import logo from "./assets/images/oou-logo.png";
import DirectoratesPage from "./pages/DirectoratesPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PlacementFormPage from "./pages/PlacementFormPage";

function App() {
  return (
    <div className="container max-w-[1700px] mx-auto">
    <Router>
      <div className="">
        <div className="flex items-center z-10 justify-between p-3 px-10 bg-[#000016]">
          <img src={logo} alt="OOU-logo" />
          <nav className="flex list-none gap-10 font-semibold text-white -ml-40">
            <li className="cursor-pointer hover:text-yellow-400 ease-in-out transition-all">
              <Link to="/">Home</Link>
            </li>
            <a
              className="cursor-pointer hover:text-yellow-400 ease-in-out transition-all"
              href="#objectives"
            >
              Objectives
            </a>
            <li className="cursor-pointer hover:text-yellow-400 ease-in-out transition-all">
              <Link to="/directorates">Directorates</Link>
            </li>
            <li className="cursor-pointer hover:text-yellow-400 ease-in-out transition-all">
              <Link to="/forms">Placement Form</Link>
            </li>
            {/* <li className="cursor-pointer hover:text-yellow-400 ease-in-out transition-all">
              <Link to="/">News and Updates</Link>
            </li> */}
          </nav>
        </div>
        <Routes className="">
          <Route path="/" element={<HomePage />} />
          <Route path="/directorates" element={<DirectoratesPage />} />
          <Route path="/forms" element={<PlacementFormPage />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
