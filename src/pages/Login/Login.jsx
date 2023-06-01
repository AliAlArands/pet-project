import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import girlWithCat from "./../../assets/login/girlWithCat.jpg";
import "./login.css";
import Navbar from "../../components/Navbar/Navbar";
const Login = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center contain contain-login background-gc">
        <Form className="form login-form">
          <div className="title large-title log-in-title">Log In</div>
          <p className="welcome-label">Welcom Back.</p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="customized-input mb-5"
            />
          </Form.Group>
          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Label className="label">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="mb-3 customized-input"
            />
            <Form.Text className="text-muted d-flex justify-content-end">
              <a href="#" className="link">
                Forget Password
              </a>
            </Form.Text>
          </Form.Group>
          <div className="d-flex justify-content-center flex-column align-items-center ">
            <Button
              variant="primary"
              type="submit"
              className="w-100 mb-3 submit-btn"
            >
              Sign in
            </Button>
            <Form.Text className="text-muted d-flex justify-content-around w-100 px-4">
              <p>Don't have an account?</p>
              <a href="#" className="link">
                sign up
              </a>
            </Form.Text>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
