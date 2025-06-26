import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icons/css/flag-icons.min.css";
const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const userDropdownRef = useRef(null);
  const langDropdownRef = useRef(null);

  // Fermer les dropdowns si clic en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setShowUserDropdown(false);
      }
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target)
      ) {
        setShowLangDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavLinkClick = () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand" to="/" onClick={handleNavLinkClick}>
          <img src="/LogoAmani.webp" alt="Logo Amani" height="40" />
        </Link>

        {/* Toggler mobile */}
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

        {/* Contenu du menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">

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

            {/* Portail utilisateur */}
            <li className="nav-item dropdown" ref={userDropdownRef} style={{ position: "relative" }}>
              <button
                className="btn btn-light"
                onClick={() => setShowUserDropdown(prev => !prev)}
                aria-label="Portail"
              >
                <span className="material-symbols-outlined">person</span>
              </button>
              {showUserDropdown && (
                <ul className="dropdown-menu show" style={{ position: "absolute", right: 0 }}>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/client-portal"
                      onClick={() => {
                        setShowUserDropdown(false);
                        handleNavLinkClick();
                      }}
                    >
                      {t("Client Portal")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/operator-portal"
                      onClick={() => {
                        setShowUserDropdown(false);
                        handleNavLinkClick();
                      }}
                    >
                      {t("Operator Portal")}
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Menu langue 🌐 */}
            <li className="nav-item dropdown" ref={langDropdownRef} style={{ position: "relative" }}>
              <button
                className="btn btn-light"
                onClick={() => setShowLangDropdown(prev => !prev)}
                aria-label="Changer de langue"
              >
                {/* Affiche le drapeau de la langue active */}
                {i18n.language.startsWith("fr") && <span class="fi fi-fr"></span>}
                {i18n.language.startsWith("en") && <span class="fi fi-gb"></span>}
                {i18n.language.startsWith("es") && <span class="fi fi-es"></span>}
                {i18n.language.startsWith("it") && <span class="fi fi-it"></span>}
              </button>
              {showLangDropdown && (
                <ul className="dropdown-menu show" style={{ position: "absolute", right: 0 }}>
                  <li>
                    <button className="dropdown-item" onClick={() => { i18n.changeLanguage("fr"); setShowLangDropdown(false); }}>
                      <span class="fi fi-fr"></span>
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => { i18n.changeLanguage("en"); setShowLangDropdown(false); }}>
                     <span class="fi fi-gb"></span>
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => { i18n.changeLanguage("es"); setShowLangDropdown(false); }}>
                      <span class="fi fi-es"></span>
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => { i18n.changeLanguage("it"); setShowLangDropdown(false); }}>
                      <span class="fi fi-it"></span>
                    </button>
                  </li>
                </ul>
              )}
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
