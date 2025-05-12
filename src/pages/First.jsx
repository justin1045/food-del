import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Loader from "../pages/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function First() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the loading time here

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, [location.pathname]); // Trigger when the route changes

  return (
    <>
      <Navbar />
      {loading ? <Loader /> : <Outlet />}  {/* Show Loader while loading */}
      <Footer />
      <ToastContainer />
    </>
  );
}

export default First;
