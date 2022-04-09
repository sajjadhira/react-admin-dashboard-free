import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Image, Card, Spinner } from "react-bootstrap";
import happy from "../images/happy.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  BsHeart,
  BsHeartHalf,
  BsHeartFill,
  BsEmojiHeartEyes,
} from "react-icons/bs";

const Login = () => {
  const [disabled, setDisabled] = useState(false);
  const [button, setButton] = useState("Login");
  const [heart, setHeart] = useState(<BsHeart />);
  const [heartclick, setHeartclick] = useState(0);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const accept_email = "admin@inihub.com";
  const accept_password = "123456";

  useEffect(() => {
    document.title = "Login";
    if (
      localStorage.getItem("logged") &&
      localStorage.getItem("logged") !== null
    ) {
      // window.location.href = "/";
      navigate("/reactpanel/");
    }
  }, [navigate]);

  const handleEmail = (e) => {
    const email_value = e.target.value;
    setEmail(email_value);
  };

  const handlePassword = (e) => {
    const password_value = e.target.value;
    setPassword(password_value);
  };

  const handleCheckbox = (e) => {
    const theCheckbox = e.target.value;
    setRemember(theCheckbox);
  };
  const handleHeart = () => {
    var newclick = heartclick + 1;
    setHeartclick(newclick);

    if (newclick === 0) {
      setHeart(<BsHeart />);
    } else if (newclick === 1) {
      setHeart(<BsHeartHalf />);
      toast.success("Nice shot! good start.");
    } else if (newclick === 2) {
      setHeart(<BsHeartFill />);
      toast.success("Awesome! 1 click more.");
    } else if (newclick === 3) {
      setHeart(<BsEmojiHeartEyes />);
      setEmail(accept_email);
      setPassword(accept_password);
      toast.success("Congratulations, You did it. now click to Login button!");
    } else if (newclick > 3) {
      const idOfToast = "edge";
      toast.info("Click to login button please.", {
        toastId: idOfToast,
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setDisabled(true);
    setButton(
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    );

    if (email === accept_email) {
      if (password === accept_password) {
        toast.success("Logged in successfully!");

        if (remember) {
          const futureDate = new Date();
          futureDate.setDate(futureDate.getDate() + 30);
        } else {
          // 1 minute for check purposne
          var minutesToAdd = 1;
          var currentDate = new Date();
          var futureDate = new Date(
            currentDate.getTime() + minutesToAdd * 60000
          );
        }

        localStorage.setItem("logged", true);
        localStorage.setItem("name", "Matt");
        localStorage.setItem("role", "superadmin");
        localStorage.setItem("token", "123456789abcdefgh");
        localStorage.setItem("session_time", futureDate);

        // setTimeout(() => {
        // window.location.href = "/";
        navigate("/reactpanel/");
        // }, 2000);
      } else {
        toast.error("Authentication error!");
        setDisabled(false);
        setButton("Login");
      }
    } else {
      setDisabled(false);
      setButton("Login");
      toast.error("Authentication error!");
    }
  };

  return (
    <>
      <ToastContainer />
      <main className="mt-3 pt-3">
        <div className="container">
          <Row className="mt-2 mb-5">
            <Col md={6} className="mt-5 d-xs-none">
              <Image className="happy-login mt-5" src={happy} />
            </Col>
            <Col md={6}>
              <Card className="p-2 p-md-5 pb-3 mt-5 auth-form">
                <h3 className="text-center fw-bold text-brand fs-1">Login</h3>
                <p className="text-center text-muted">
                  Please login to your account
                </p>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      required={true}
                      name="email"
                      onKeyUp={handleEmail}
                      defaultValue={email}
                    />
                  </Form.Group>

                  <Form.Group
                    className="ms-0 mb-3"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required={true}
                      name="password"
                      onKeyUp={handlePassword}
                      defaultValue={password}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Remember Me"
                      className="ms-2"
                      onChange={handleCheckbox}
                      defaultValue={remember}
                    />
                  </Form.Group>
                  <Button
                    variant="default w-100"
                    className="mt-2"
                    onClick={handleLogin}
                    type="submit"
                    disabled={disabled}
                  >
                    {button}
                  </Button>
                </Form>

                <div className="mt-4 text-center">
                  <p className="text-muted">
                    Please click to the heart icon 3 times to fill the
                    credential automatically.
                  </p>
                  <span
                    className="text-danger fs-1 heart-fun"
                    onClick={handleHeart}
                  >
                    {heart}
                  </span>
                </div>

                {/* <div className="mt-2">
                <Table striped bordered hover variant="light">
                  <thead>
                    <tr>
                      <th>Demo Email</th>
                      <th>Demo Password</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>admin@inihub.com</td>
                      <td>123456</td>
                    </tr>
                  </tbody>
                </Table>
              </div> */}
              </Card>
            </Col>
          </Row>
        </div>
      </main>
    </>
  );
};

export default Login;
