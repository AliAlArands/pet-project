import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./newPassword.css";
const NewPassword = () => {
  return (
    <>
      <Form className="form">
        <div className="h1 mb-4 text-center ">New Password</div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="px-1">New Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicPassword">
          <Form.Label className="px-1">Confirm Password</Form.Label>
          <Form.Control type="password" />
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

export default NewPassword;
