import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import React from "react"; 
import "../assets/css/newheader-footer.css";
import { useTheme } from "../assets/context/themecontext.jsx";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  function getUp() {
    window.scrollTo(0, 0);
  }

  const finalHeaderStyle = {
    backgroundColor: "var(--header-bg, #924d11)", 
  };
  
  const textColor = {
    color: "var(--header-text, #ffffff)",
  };

  const toggleIconColorStyle = {
    color: theme === 'light' ? '#000000' : '#ffffff',
  };

  return (
    <header className="sticky-top">
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={finalHeaderStyle}
      >
        <div className="container">
          <Link
            className="navbar-brand d-flex align-items-center gap-2"
            to="/"
            onClick={getUp}
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "60px", height: "60px" }}
            />
            <h1
              className="m-0"
              style={{ fontFamily: "Allura", fontSize: "30px", ...textColor }}
            >
              El-Tabona
            </h1>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mx-auto gap-lg-4 mt-3 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-semibold theme-text-header" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold theme-text-header" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-semibold theme-text-header"
                  to="/products"
                >
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold theme-text-header" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold theme-text-header" to="/cart">
                  Cart
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-3 justify-content-center mt-4 mt-lg-0">
              <i className="fa-solid fa-magnifying-glass theme-text-header fs-5"></i>
              <Link to="/login-signup" onClick={getUp}>
  <i className="fa-solid fa-user theme-text-header fs-5"></i>
</Link>


              <button 
                onClick={toggleTheme} 
                className="btn theme-text-header p-0 m-0"
                style={toggleIconColorStyle}
                title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
              >
                <i className={`fs-5 fa-solid ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
