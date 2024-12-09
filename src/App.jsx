import "./App.css";
import HomePage from "./pages/HomePage";
import DirectoratesPage from "./pages/DirectoratesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormsPage from "./pages/FormsPage";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="container max-w-[1700px] mx-auto">
      <Router>
        <div className="">
          <NavBar />
          <div className="pt-[4.53rem]">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/directorates" element={<DirectoratesPage />} />
              <Route path="/forms" element={<FormsPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
