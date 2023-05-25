import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./newPassword.css";
const NewPassword = () => {
  return (
    <>
      <div className="background-gc contain">
        <Form className="form">
          <div className="title">New Password</div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <div className="d-flex justify-content-center flex-column align-items-center ">
            <Button variant="primary" type="submit" className="w-100 mb-3">
              Send
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default NewPassword;
