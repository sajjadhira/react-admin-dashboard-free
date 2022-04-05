import { Offcanvas, Collapse } from "react-bootstrap";

import { FaProductHunt, FaBraille, FaUsers } from "react-icons/fa";

import { BiCategoryAlt, BiChevronDown, BiCircle } from "react-icons/bi";

import { RiShieldUserFill } from "react-icons/ri";
import { useState } from "react";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const [categoriesmenu, setCategoriesmenu] = useState(false);
  const [suppliermenu, setSuppliermenu] = useState(false);
  const [usersmenu, setUsermenu] = useState(false);

  return (
    <>
      <Offcanvas.Header closeButton>
        <Link to="/">
          <Offcanvas.Title>
            <span className="brand-text">ReactPanel</span>
          </Offcanvas.Title>
        </Link>
      </Offcanvas.Header>
      <Offcanvas.Body className="p-2">
        <ul className="navbar-nav sidebar mt-5">
          <li>
            <div className="text-muted small fw-bold text-uppercase">Core</div>
          </li>

          <li className="mt-3">
            <Link to="/" className="nav-link px-3 sidebar-link">
              <span>
                <FaBraille className="me-2" />
              </span>
              <span>Dashboard</span>
            </Link>
          </li>

          <li className="mt-3">
            <Link to="/products/" className="nav-link px-3 sidebar-link">
              <span className="me-2">
                <FaProductHunt />
              </span>
              <span>Products</span>
            </Link>
          </li>

          {/* categoriesmenu */}
          <li className="mt-3">
            <Link
              to="#"
              onClick={() => setCategoriesmenu(!categoriesmenu)}
              aria-controls="categoriesmenu"
              aria-expanded={categoriesmenu}
              className="nav-link px-3 sidebar-link"
            >
              <span className="me-2">
                <BiCategoryAlt />{" "}
              </span>
              <span>Categories</span>
              <span className="right-icon ms-auto">
                <BiChevronDown />
              </span>
            </Link>

            <Collapse in={categoriesmenu}>
              <div id="categoriesmenu">
                <ul className="navbar-nav ps-5">
                  <li>
                    <a href="#" className="nav-link mt-2">
                      <span className="me-2 ms-2">
                        <BiCircle />
                      </span>
                      <span>Mobile</span>
                    </a>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>

          {/* suppliermenu */}

          <li className="mt-3">
            <Link
              to="#"
              onClick={() => setSuppliermenu(!suppliermenu)}
              aria-controls="suppliermenu"
              aria-expanded={suppliermenu}
              className="nav-link px-3 sidebar-link"
            >
              <span className="me-2">
                <RiShieldUserFill />{" "}
              </span>
              <span>Suppliers</span>
              <span className="right-icon ms-auto">
                <BiChevronDown />
              </span>
            </Link>

            <Collapse in={suppliermenu}>
              <div id="suppliermenu">
                <ul className="navbar-nav ps-5">
                  <li>
                    <a href="#" className="nav-link mt-2">
                      <span className="me-2 ms-2">
                        <BiCircle />
                      </span>
                      <span>All Supplier</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link mt-2">
                      <span className="me-2 ms-2">
                        <BiCircle />
                      </span>
                      <span>New Supplier</span>
                    </a>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>

          {/* Users */}

          <li className="mt-3">
            <Link
              to="#"
              onClick={() => setUsermenu(!usersmenu)}
              aria-controls="usersmenu"
              aria-expanded={usersmenu}
              className="nav-link px-3 sidebar-link"
            >
              <span className="me-2">
                <FaUsers />{" "}
              </span>
              <span>Users</span>
              <span className="right-icon ms-auto">
                <BiChevronDown />
              </span>
            </Link>

            <Collapse in={usersmenu}>
              <div id="usersmenu">
                <ul className="navbar-nav ps-5">
                  <li>
                    <a href="#" className="nav-link mt-2">
                      <span className="me-2 ms-2">
                        <BiCircle />
                      </span>
                      <span>All Users</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link mt-2">
                      <span className="me-2 ms-2">
                        <BiCircle />
                      </span>
                      <span>New User</span>
                    </a>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
        </ul>
      </Offcanvas.Body>
    </>
  );
};

export default Sidebar;
