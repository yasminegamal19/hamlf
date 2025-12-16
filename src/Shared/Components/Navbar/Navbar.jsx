import { memo, useState } from "react";
import "./Navbar.modules.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
                <Link className="nav-link dropdown-toggle" to="#">
                  من نحن
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/#about-us"
                      onClick={closeMenu}
                    >
                      من نحن
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/about-routes#mission"
                      onClick={closeMenu}
                    >
                      مهمتنا
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/about-routes#vision"
                      onClick={closeMenu}
                    >
                      رؤيتنا
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/about-routes#future-aspirations"
                      onClick={closeMenu}
                    >
                      تطلعاتنا المستقبلية
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/about-routes#our-services"
                      onClick={closeMenu}
                    >
                      خدماتنا
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#">
                  خدماتنا
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/#services"
                      onClick={closeMenu}
                    >
                      خدماتنا
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/about-routes#our-services"
                      onClick={closeMenu}
                    >
                      الخدمات القانونية
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/#join-legal-training"
                      onClick={closeMenu}
                    >
                      مركز التدريب القانوني
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/#legal-publications"
                      onClick={closeMenu}
                    >
                      الإصدارات القانونية
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/#find-employee"
                      onClick={closeMenu}
                    >
                      ابحث عن موظف
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/#pleadings" onClick={closeMenu}>
                  المرافعات
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/#questions" onClick={closeMenu}>
                  الأسئلة الشائعة
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/#contact-us"
                  onClick={closeMenu}
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              العربية
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  العربية
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  English
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default memo(Navbar);
