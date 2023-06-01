import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { FaFacebook, FaGoogle, FaUser, FaLock } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import boyWithDog from "./../../assets/login/BoyWithDog.jpg";
import googleIcon from "./../../assets/home/googleIcon.svg";
import register from "./../../assets/home/Register.svg";
// import { BiUserCheck } from "react-icons/bi";
import "./signup.css";
import Navbar from "../../components/Navbar/Navbar";
const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className=" background-gc contain contain-register">
        <div className="signup-page-flex">
          <div className="first-section w-50">
            <div className="social-media-register">
              <a className=" link-social-register">
                <img
                  src={googleIcon}
                  alt=""
                  className=" me-4 google-register-icon"
                />
                <span className="google-register-link">
                  Sign Up with Google Account
                </span>
              </a>
              <a className=" link-social-register facebook">
                <FaFacebook className=" facebook-register-icon me-4" />
                <span>Sign Up with Facebook</span>
              </a>
            </div>
            <div className="or-container">
              <div className="line-between"></div>{" "}
              <span className="or">OR</span>
              <div className="line-between"></div>
            </div>
            <div className="d-flex justify-content-between algin-items-center">
              <Form className="sign-up-form">
                <Form.Group className="sign-up-form-group" controlId="formBasicEmail">
                  <Form.Label className="label-bold">
                    Email address or username
                  </Form.Label>
                  <div className="input-container">
                    <FaUser className="input-signup-icon" />
                    <Form.Control
                      type="email"
                      className="specified-input user-input"
                      placeholder="Type name"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="sign-up-form-group" controlId="formBasicPassword">
                  <Form.Label className="label-bold">Password</Form.Label>
                  <div className="input-container">
                    <FaLock className="input-signup-icon" />
                    <Form.Control
                      type="password"
                      className="specified-input"
                      placeholder="*******************"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="last-sign-up-form-group" controlId="formBasicPassword">
                  <Form.Label className="label-bold">Confirm Password</Form.Label>
                  <div className="input-container">
                    <FaLock className="input-signup-icon" />
                    <Form.Control
                      type="password"
                      className="specified-input"
                      placeholder="*******************"
                    />
                  </div>
                </Form.Group>
                <div className="d-flex justify-content-center flex-column align-items-center ">
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 mb-3 submit-btn"
                  >
                    Create Account <BsArrowRight />
                  </Button>
                  <Form.Text className="have-account">
                    <p className="me-2">I have an account!</p>
                    <a href="#" className="link">
                      Sign in
                    </a>
                  </Form.Text>
                </div>
              </Form>

            </div>
          </div>
          <div className="second-section">
            <div className="welcome">
              Welcome
            </div>
            <img src={register} alt="" className="sign-up-image" />
          </div>
        </div>
      </div>


    </>
  );
};

export default SignUp;
