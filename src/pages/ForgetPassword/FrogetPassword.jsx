import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./forget.css";
import Back from "../../components/BackComponent/Back";
const ForgetPassword = () => {
  return (
    <>
    <Back/>
      <div className="contain  background-gc contain-forget">
        <Form className="form forget-form px-5 color-bg">
          <div className="title mx-auto">Forget Password</div>
          <Form.Group className="form-group-forget-password w-100 " controlId="formBasicEmail">
            <Form.Label className="label">Enter Your Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" className="customized-input"/>
          </Form.Group>
          <div className="d-flex justify-content-center flex-column align-items-center ">
            <Button variant="primary" type="submit" className="w-100 forget-btn submit-btn">
              Send
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default ForgetPassword;
