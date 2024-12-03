import "./App.css";
import HomePage from "./pages/HomePage";
import logo from "./assets/images/oou-logo.png";

function App() {
  return (
    <div className="container max-w-[1700px] mx-auto">
      <div className="">
        <div className="flex items-center fixed z-10 w-full justify-between p-3 px-10 bg-[#000016]">
          <img src={logo} alt="OOU-logo" />
          <nav className="flex list-none gap-10 font-semibold text-white -ml-40">
            <li className="cursor-pointer hover:text-yellow-400 ease-in-out transition-all">Home</li>
            <li className="cursor-pointer hover:text-yellow-400 ease-in-out transition-all">Directorates</li>
          </nav>
        </div>
        <div className="py-24">
          <HomePage />
        </div>
      </div>
    </div>
  );
}

export default App;
