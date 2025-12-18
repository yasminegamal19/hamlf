import { memo, useState } from "react";
import "./Navbar.modules.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {

  const {t, i18n} = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary ${
          i18n.language === "ar" ? "lang-ar" : "lang-en"
        }`}
      >
        <div className="container">
          <Link className="navbar-brand" to="/" onClick={closeMenu}>
            <img src="/logo_main.webp" alt="logo" />
          </Link>

          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon bg-white"></span>
          </button>

          <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("navbar.about")}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/#about-us"
                      onClick={closeMenu}
                    >
                      {t("navbar.about_us")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/about-routes#mission"
                      onClick={closeMenu}
                    >
                      {t("navbar.mission")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/about-routes#vision"
                      onClick={closeMenu}
                    >
                      {t("navbar.vision")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/about-routes#future-aspirations"
                      onClick={closeMenu}
                    >
                      {t("navbar.future_aspirations")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/about-routes#our-services"
                      onClick={closeMenu}
                    >
                      {t("navbar.our_services")}{" "}
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("navbar.services")}{" "}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/#services"
                      onClick={closeMenu}
                    >
                      {t("navbar.services")}{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/about-routes#our-services"
                      onClick={closeMenu}
                    >
                      {t("navbar.legal_services")}{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/#join-legal-training"
                      onClick={closeMenu}
                    >
                      {t("navbar.legal_training_center")}{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/#legal-publications"
                      onClick={closeMenu}
                    >
                      {t("navbar.legal_publications")}{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/#find-employee"
                      onClick={closeMenu}
                    >
                      {t("navbar.find_employee")}{" "}
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/#pleadings" onClick={closeMenu}>
                  {t("navbar.pleadings")}{" "}
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/#questions" onClick={closeMenu}>
                  {t("navbar.faq")}{" "}
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/#contact-us"
                  onClick={closeMenu}
                >
                  {t("navbar.contact_us")}{" "}
                </Link>
              </li>
            </ul>
          </div>

          <div className="dropdown language-dropdown">
            <button
              className="btn btn-secondary  custom-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              <span>{i18n.language === "ar" ? "العربية" : "English"}</span>
              <i className="bi bi-caret-down-fill mx"></i>{" "}
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className=" ar btn dropdown-item"
                  onClick={() => i18n.changeLanguage("ar")}
                >
                  {t("navbar.language_ar")}{" "}
                </button>
              </li>
              <li>
                <button
                  className=" en btn dropdown-item"
                  onClick={() => i18n.changeLanguage("en")}
                >
                  {t("navbar.language_en")}{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default memo(Navbar);
