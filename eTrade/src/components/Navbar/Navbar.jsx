import React from "react";
import { Search, Heart, ShoppingCart, User, ChevronDown } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <section className="Navbar">
        <div className="container">
          {/* TOP BAR */}
          <div
            className="d-flex justify-content-between"
            style={{ fontSize: "14px" }}
          >
            <div className="d-flex gap-3 py-2 px-4 text-muted">
              <span>English</span>
              <span>USD</span>
            </div>
            <div className="d-flex gap-3 py-2 px-4 text-muted">
              <span>Help</span>
              <span>Join Us</span>
              <span>Sign In</span>
            </div>
          </div>

          {/* MAIN NAVBAR */}
          <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3 rounded-4">
            <div className="container-fluid">
              {/* LOGO */}
              <a className="navbar-brand fw-bold text-primary d-flex align-items-center gap-1">
                <img src={logo} height="36" alt="Logo" />
              </a>

              {/* TOGGLE BUTTON MOBILE */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* MENU LINKS */}
              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarNav"
              >
                <ul className="navbar-nav gap-4 fs-6 fw-semibold">
                  <li className="nav-item">
                    <a className="nav-link active">Home</a>
                  </li>

                  {/* 🔻 SHOP DROPDOWN */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle d-flex align-items-center gap-1"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      Shop <ChevronDown size={16} />
                    </a>
                    <ul className="dropdown-menu shadow-lg py-3 px-2 rounded-3">
                      <li>
                        <a className="dropdown-item py-2" href="#">
                          Shop With Sidebar
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item py-2" href="#">
                          Shop No Sidebar
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item py-2" href="#">
                          Product Variation 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item py-2" href="#">
                          Product Variation 2
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item py-2" href="#">
                          Product Variation 3
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item py-2" href="#">
                          Product Variation 4
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item py-2" href="#">
                          Product Variation 5
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item py-2" href="#">
                          Product Variation 6
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item py-2" href="#">
                          Product Variation 7
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item py-2" href="#">
                          Product Variation 8
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* 🔻 PAGES DROPDOWN */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle d-flex align-items-center gap-1"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      Pages <ChevronDown size={16} />
                    </a>
                    <ul className="dropdown-menu shadow border-0 rounded-3 p-2">
                      <li>
                        <a className="dropdown-item">About Us</a>
                      </li>
                      <li>
                        <a className="dropdown-item">FAQ</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Profile</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">Contact</a>
                  </li>

                  {/* 🔻 BLOG DROPDOWN */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle d-flex align-items-center gap-1"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      Blog <ChevronDown size={16} />
                    </a>
                    <ul className="dropdown-menu shadow border-0 rounded-3 p-2">
                      <li>
                        <a className="dropdown-item">Latest Posts</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Tech News</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Reviews</a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link">Contact</a>
                  </li>
                </ul>
              </div>

              {/* RIGHT ICONS */}
              <ul className="nav-icons d-flex align-items-center gap-2 list-unstyled m-0">
                <li className="icon-li">
                  <Search size={23} strokeWidth={1.5} />
                </li>
                <li className="icon-li">
                  <Heart size={23} strokeWidth={1.5} />
                </li>
                <li className="icon-li position-relative">
                  <ShoppingCart size={23} strokeWidth={1.5} />
                  <span className="position-absolute top-0 start-100 badge rounded-pill cart-badge">
                  3
                </span>
                </li>
                <li className="icon-li">
                  <User size={23} strokeWidth={1.5} />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
