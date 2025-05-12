import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { assets } from '../assets/assets';
import { useAuth } from "../context/AuthContext";
import { getAuth } from "firebase/auth";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();
  const auth = getAuth();
  const navigate = useNavigate();

  function handleLogout() {
    auth.signOut();
    navigate("/login");
  }

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false); 
  };

  return (
    <>
      <div className='navbar px-[20px] py-[15px] sm:px-[40px] sm:py-[20px] flex justify-between items-center relative'>
        <img src={assets.logo} alt='' className="w-[120px] sm:w-[150px]" />

        {/* Hamburger for mobile */}
        <button className="sm:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Mobile Menu */}
        <ul className={`navbarmenu sm:flex gap-[20px] font-semibold text-[18px] transition-all duration-300 ${menuOpen ? 'flex flex-col absolute top-[100%] left-0 bg-white w-full p-4 shadow-md z-10' : 'hidden sm:flex'}`}>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "text-orange-500" : ""} onClick={handleLinkClick}>Home</NavLink></li>
          <li><NavLink to="/menu" className={({ isActive }) => isActive ? "text-orange-500" : ""} onClick={handleLinkClick}>Menu</NavLink></li>
          <li><NavLink to="/mobileApp" className={({ isActive }) => isActive ? "text-orange-500" : ""} onClick={handleLinkClick}>Mobile App</NavLink></li>
          <li><NavLink to="/contactUs" className={({ isActive }) => isActive ? "text-orange-500" : ""} onClick={handleLinkClick}>Contact us</NavLink></li>

          {/* Sign up or Log Out Button */}
          <li className="mt-4 sm:hidden">
            {user ? (
              <button onClick={handleLogout} className="w-full text-center py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                Log Out
              </button>
            ) : (
              <Link to="/signup" className="w-full text-center py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Sign Up
              </Link>
            )}
          </li>
        </ul>

        {/* Navbar-right (Cart icon + Sign up/Logout buttons for desktop) */}
        <div className="navbar-right flex items-center gap-[20px] sm:gap-[40px]">
          <div className="relative cursor-pointer">
            <Link to={"/cart"}>
              <img
                src={assets.basket_icon}
                alt="basket"
                className="w-[24px] h-[24px]"
              />
            </Link>
            <div className="absolute top-[-8px] right-[-8px] w-[10px] h-[10px] bg-red-500 rounded-full"></div>
          </div>

          {/* Desktop Sign Up / Log Out */}
          <div className="sm:flex gap-[20px] hidden sm:block">
            {user ? (
              <button onClick={handleLogout} className="text-[14px] px-3 py-[6px] border border-gray-300 rounded-full hover:bg-gray-100 transition">
                Log Out
              </button>
            ) : (
              <Link
                to={"/signup"}
                className="text-[14px] px-3 py-[6px] border border-gray-300 rounded-full hover:bg-gray-100 transition"
              >
                Sign Up
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
