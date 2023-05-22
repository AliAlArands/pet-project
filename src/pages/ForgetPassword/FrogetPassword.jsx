import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./forget.css";
const ForgetPassword = () => {
  return (
    <>
      <Form className="form text-center w-25 px-5">
        <div className="h3 mb-4">Forget Password</div>
        <Form.Group className="mb-5 text-center w-100" controlId="formBasicEmail">
          <Form.Label className="px-1 mb-1">Enter Your Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <div className="d-flex justify-content-center flex-column align-items-center ">
          <Button variant="primary" type="submit" className="w-100 mb-3">
            Send
          </Button>
        </div>
      </Form>
    </>
  );
};

export default ForgetPassword;
