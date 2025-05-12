import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { assets } from '../assets/assets';
import { useAuth } from "../context/AuthContext";
import { getAuth } from "firebase/auth";
import { Navigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {user} = useAuth()
  const auth = getAuth()
  const navigate = useNavigate()
  
  function handleLogout() {
    auth.signOut();
    navigate("/login");
  }

  return (
    <>
      <div className='navbar px-[80px] p-[50px] flex justify-between items-center relative'>
        <img src={assets.logo} alt='' className="w-[150px]" />

        {/* Hamburger for mobile */}
        <button className="sm:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <ul className={`navbarmenu sm:flex gap-[20px] font-semibold text-[18px] ${menuOpen ? 'flex flex-col absolute top-[100%] left-0 bg-white w-full p-4 shadow-md z-10' : 'hidden sm:flex'}`}>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "text-orange-500" : ""}>Home</NavLink></li>
          <li><NavLink to="/menu" className={({ isActive }) => isActive ? "text-orange-500" : ""}>Menu</NavLink></li>
          <li><NavLink to="/mobileApp" className={({ isActive }) => isActive ? "text-orange-500" : ""}>Mobile App</NavLink></li>
          <li><NavLink to="/contactUs" className={({ isActive }) => isActive ? "text-orange-500" : ""}>Contact us</NavLink></li>
        </ul>

        <div className="navbar-right flex items-center gap-[20px] sm:gap-[40px]">
  <img
    src={assets.search_icon}
    alt="search"
    className="w-[24px] h-[24px] cursor-pointer"
  />

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
    
    {
      user? <button onClick={handleLogout}>Log Out</button> : <Link to={"/signup"} className="text-[14px] px-3 py-[6px] border border-gray-300 rounded-full hover:bg-gray-100 transition hidden sm:block">
    Sign up
  </Link>
    }
   
</div>

      </div>
    </>
  );
}

export default Navbar;
