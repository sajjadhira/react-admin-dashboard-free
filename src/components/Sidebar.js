import { Offcanvas, Collapse } from "react-bootstrap";

import { FaProductHunt, FaBraille } from "react-icons/fa";

import { BiCategoryAlt, BiChevronDown, BiCircle } from "react-icons/bi";

import { RiShieldUserFill } from "react-icons/ri";
import { useState } from "react";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const [categories, setCategories] = useState(false);
  const [suppliers, setSupplier] = useState(false);

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

          <li className="mt-2">
            <Link to="/" className="nav-link px-3 sidebar-link">
              <span>
                <FaBraille className="me-2" />
              </span>
              <span>Dashboard</span>
            </Link>
          </li>

          <li className="mt-2">
            <Link to="/products/" className="nav-link px-3 sidebar-link">
              <span className="me-2">
                <FaProductHunt />
              </span>
              <span>Products</span>
            </Link>
          </li>

          <li className="mt-2">
            <a
              href="#"
              onClick={() => setCategories(!categories)}
              aria-controls="categories"
              aria-expanded={categories}
              className="nav-link px-3 sidebar-link"
            >
              <span className="me-2">
                <BiCategoryAlt />{" "}
              </span>
              <span>Categories</span>
              <span className="right-icon ms-auto">
                <BiChevronDown />
              </span>
            </a>

            <Collapse in={categories}>
              <div id="categories">
                <ul className="navbar-nav ps-5">
                  <li>
                    <a href="#" className="nav-link">
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

          <li className="mt-2">
            <a
              href="#"
              onClick={() => setSupplier(!suppliers)}
              aria-controls="suppliers"
              aria-expanded={suppliers}
              className="nav-link px-3 sidebar-link"
            >
              <span className="me-2">
                <RiShieldUserFill />{" "}
              </span>
              <span>Suppliers</span>
              <span className="right-icon ms-auto">
                <BiChevronDown />
              </span>
            </a>

            <Collapse in={suppliers}>
              <div id="suppliers">
                <ul className="navbar-nav ps-5">
                  <li>
                    <a href="#" className="nav-link">
                      <span className="me-2 ms-2">
                        <BiCircle />
                      </span>
                      <span>All Suppliers</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link">
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
        </ul>
      </Offcanvas.Body>
    </>
  );
};

export default Sidebar;
