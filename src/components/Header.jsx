import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../assets/css/newheader-footer.css";
export default function Header() {
  function getUp() {
    window.scrollTo(0, 0);
  }

  return (
    <header className="sticky-top">
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#924d11" }}
      >
        <div className="container">
          {/* LOGO */}
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
              style={{ fontFamily: "Allura", fontSize: "30px" }}
            >
              El-Tabona
            </h1>
          </Link>

          {/* TOGGLER MOBILE */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* NAV LINKS */}
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mx-auto gap-lg-4 mt-3 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-white" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link fw-semibold text-white" to="/about">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link fw-semibold text-white"
                  to="/products"
                >
                  Shop
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link fw-semibold text-white" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            {/* RIGHT ICONS */}
            <div className="d-flex align-items-center gap-3 justify-content-center mt-4 mt-lg-0">
              <i className="fa-solid fa-magnifying-glass text-white fs-5"></i>
              <i className="fa-solid fa-user text-white fs-5"></i>
              <i className="fa-solid fa-cart-shopping text-white fs-5"></i>
              <span
                className="text-white fw-bold"
                style={{ cursor: "pointer" }}
              >
                AR
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
