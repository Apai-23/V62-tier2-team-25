import React, { useState } from "react";
import leafLogo from "../assets/leaf.png";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Check to see if there is an active session 
  const isAuthenticated = Boolean(
    localStorage.getItem("authToken") || localStorage.getItem("isAuthenticated")
  );

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <header className="w-full bg-[#F0EFED] py-5 px-6 relative">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-2 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={leafLogo}
              alt="DevTrajectory Leaf Logo"
              className="w-7 h-7 object-contain"
            />
            <div>
              <h1 className="text-lg md:text-xl font-bold tracking-tight flex items-center">
                <span className="text-black">Dev</span>
                <span className="text-emerald-700">Trajectory</span>
              </h1>
            </div>
          </Link>
        </div>

        {/* Desk view*/}
        <div className="hidden sm:flex items-center">
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-black bg-white border border-red-200 rounded-xl shadow-sm hover:bg-red-100 transition-all cursor-pointer"
            >
              Log out
            </button>
          ) : (
            <Link
              to="/login"
              className="text-black font-medium text-lg hover:text-emerald-700 transition-colors"
            >
              Log in
            </Link>
          )}
        </div>

        {/* Button for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-black focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu*/}
      {isOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-[#F0EFED] border-b border-slate-200 py-4 px-6 flex flex-col gap-4 shadow-md z-50">
          {isAuthenticated ? (
            <button
              onClick={() => {
                setIsOpen(false);
                handleLogout();
              }}
              className="text-red-600 font-medium text-base py-2 text-center bg-white border border-red-200 rounded-xl shadow-sm"
            >
              Log out
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="text-black font-medium text-base py-2 text-center"
            >
              Log in
            </Link>
          )}
        </div>
      )}
    </header>
  );
}