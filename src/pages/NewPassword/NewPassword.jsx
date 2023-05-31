import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./newPassword.css";
const NewPassword = () => {
  return (
    <>
      <div className="background-gc contain">
        <Form className="form new-password-form">
          <div className="title">New Password</div>
          <Form.Group className="new-password-mb" controlId="formBasicEmail">
            <Form.Label className="label">New Password</Form.Label>
            <Form.Control type="password" className="customized-input" />
          </Form.Group>
          <Form.Group className="new-password-mb" controlId="formBasicPassword">
            <Form.Label className="label">Confirm Password</Form.Label>
            <Form.Control type="password" className="customized-input" />
          </Form.Group>
          <div className="d-flex justify-content-center flex-column align-items-center ">
            <Button
              variant="primary"
              type="submit"
              className="w-100 mb-3 submit-btn"
            >
              Send
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default NewPassword;
