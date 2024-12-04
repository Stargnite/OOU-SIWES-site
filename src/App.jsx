import "./App.css";
import HomePage from "./pages/HomePage";
import DirectoratesPage from "./pages/DirectoratesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlacementFormPage from "./pages/PlacementFormPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container max-w-[1700px] mx-auto">
    <Router>
      <div className="">
        <NavBar />
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
