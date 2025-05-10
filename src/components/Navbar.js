import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";


const Navbar = () => {
  const { t } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCloseMenus = () => {
    setShowDropdown(false);
  };

  const handleNavLinkClick = () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={handleNavLinkClick}>
          <img src="/logoAmani.webp" alt="Amani Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={handleNavLinkClick}>
                {t("Services")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/plans" onClick={handleNavLinkClick}>
                {t("Pricing & Plans")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleNavLinkClick}>
                {t("About Us")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleNavLinkClick}>
                {t("Get in Touch")}
              </Link>
            </li>
            <li className="nav-item dropdown" ref={dropdownRef}>
              <button className="btn btn-light" onClick={() => setShowDropdown(!showDropdown)}>
                <span className="material-symbols-outlined">person</span>
              </button>
              {showDropdown && (
                <ul className="dropdown-menu show">
                  <li>
                    <Link className="dropdown-item" to="/client-portal" onClick={() => { handleCloseMenus(); handleNavLinkClick(); }}>
                      {t("Client Portal")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/operator-portal" onClick={() => { handleCloseMenus(); handleNavLinkClick(); }}>
                      {t("Operator Portal")}
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div id="google_translate_element" style={{ display: "none" }}></div>

    </nav>
  );
};

export default Navbar;