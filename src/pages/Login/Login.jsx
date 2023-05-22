import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
const Login = () => {
  return (
    <>
      <Form className="form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="px-1">User name/Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicPassword">
          <Form.Label className="px-1">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <Form.Text className="text-muted d-flex justify-content-end">
            <a href="#" className="link">
              Forget Password
            </a>
          </Form.Text>
        </Form.Group>

        <div className="d-flex justify-content-center flex-column align-items-center ">
          <Button variant="primary" type="submit" className="w-100 mb-3">
            Log in
          </Button>
          <Form.Text className="text-muted d-flex justify-content-around w-100 px-4">
            <p>Don't have an account</p>
            <a href="#" className="link">
              sign up
            </a>
          </Form.Text>
        </div>
      </Form>
    </>
  );
};

export default Login;
