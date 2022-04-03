import {
  Navbar,
  Nav,
  Offcanvas,
  NavDropdown,
  Form,
  Container,
  FormControl,
  Button,
  InputGroup,
  Badge,
} from "react-bootstrap";

import { FaSearch } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

import { BsToggleOff } from "react-icons/bs";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

import { useMediaQuery } from "react-responsive";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => {
    setShow((s) => !s);
  };

  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  useEffect(() => {
    //   const isTabletDevice = useMediaQuery({
    //     query: "(min-device-width: 768px)",
    //   });

    //   const isLaptop = useMediaQuery({
    //     query: "(min-device-width: 1024px)",
    //   });

    if (isLaptop || isDesktop || isBigScreen) {
      setShow(true);
    }

    // if (isDesktop) {
    //   setShow(true);
    // }

    // if (isBigScreen) {
    //   setShow(true);
    // }
  });

  return (
    <>
      <Navbar bg="default" className="bg-light shadow" expand="lg">
        <Container fluid>
          <Link to="/">
            <Navbar.Brand className="brand-text me-2">ReactPanel</Navbar.Brand>
          </Link>

          <Button
            variant="default"
            onClick={toggleShow}
            className="me-auto text-brand"
          >
            <BsToggleOff className="fs-4" />
          </Button>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex ms-auto">
              <InputGroup className="my-3 my-lg-0">
                <FormControl
                  placeholder="Search..."
                  aria-label="Search..."
                  aria-describedby="basic-addon2"
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  className="bg-brand text-white"
                >
                  <FaSearch />
                </Button>
              </InputGroup>
            </Form>

            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>

            <Button variant="default">
              <IoMdNotificationsOutline className="fs-3 ms-0 me-0" />
              <Badge bg="danger">9</Badge>
            </Button>

            <Button variant="default">
              <BiMailSend className="fs-3 ms-0 me-0" />
              <Badge bg="primary">3</Badge>
            </Button>

            <NavDropdown title="Menu" id="navbarScrollingDropdown" align="end">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas
        id="navbarScroll"
        className="sidebar-nav bg-light"
        show={show}
        onHide={handleClose}
        backdrop={false}
        scroll={true}
      >
        <Sidebar />
      </Offcanvas>
    </>
  );
};

export default Header;
