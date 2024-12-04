import logo from "./../assets/images/oou-logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex items-center z-10 justify-between p-3 px-10 bg-[#000016]">
      <img src={logo} alt="OOU-logo" />
      <nav className="hidden md:flex list-none gap-10 font-semibold text-white -ml-40">
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
      <div
        onClick={() => setNav(!nav)}
        className="flex md:hidden cursor-pointer text-white"
      >
        <RxHamburgerMenu size={30} />
      </div>

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[100%]  h-screen bg-black/90 z-10 duration-700 overflow-y-scroll"
            : "fixed top-0 left-[-100%] w-[100%] h-screen bg-black/80 z-10 duration-700 overflow-y-scroll delay-200"
        }
      >
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[80%] md:w-[60%] h-screen bg-white z-10 duration-700 overflow-y-scroll delay-200 rounded-tr-3xl rounded-br-3xl"
              : "fixed top-0 left-[-100%] w-[72wweX0%] md:w-[60%] h-screen bg-white z-10 duration-700 overflow-y-scroll"
          }
        >
          <div className="absolute top-3 right-5">
            <IoClose size={30} onClick={() => setNav(false)} />
          </div>
          <nav className="mt-20 flex flex-col list-none w-full items-start text-lg font-semibold space-y-7 px-5">
            <li onClick={() => setNav(false)} className="cursor-pointer hover:text-yellow-400 ease-in-out transition-all">
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setNav(false)}>
              <a
                className="cursor-pointer hover:text-yellow-400 ease-in-out transition-all"
                href="#objectives"
              >
                Objectives
              </a>
            </li>
            <li onClick={() => setNav(false)} className="cursor-pointer hover:text-yellow-400 ease-in-out transition-all">
              <Link to="/directorates">Directorates</Link>
            </li>
            <li onClick={() => setNav(false)} className="cursor-pointer hover:text-yellow-400 ease-in-out transition-all">
              <Link to="/forms">Placement Form</Link>
            </li>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
