import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./forget.css";
const ForgetPassword = () => {
  return (
    <div className="contain background-gc">
      <Form className="form px-5">
        <div className="title mb-4">Forget Password</div>
        <Form.Group className="mb-5 w-100" controlId="formBasicEmail">
          <Form.Label className=" mb-1">Enter Your Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <div className="d-flex justify-content-center flex-column align-items-center ">
          <Button variant="primary" type="submit" className="w-100 mb-3">
            Send
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ForgetPassword;
