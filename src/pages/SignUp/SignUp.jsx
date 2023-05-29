import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { FaFacebook, FaGoogle, FaUser, FaLock } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import boyWithDog from "./../../assets/login/BoyWithDog.jpg"
// import { BiUserCheck } from "react-icons/bi";
import "./signup.css";
const SignUp = () => {
  return (
    <>
      <div className=" background-gc contain contain-register">
        <div className="social-register text-center d-flex flex-column mb-3">
          <div className="mb-5 mt-0 log-in-title text-start title">Welcome</div>

          <div className="d-flex justify-content-between align-items-center pb-5 social-media-register">
            <a className=" bg-primary link-social-register" type="submit">
              <FaGoogle className="mx-4 google-register-icon" />{" "}
              <span className="google-register-link">
                Sign Up with Google Account
              </span>
            </a>
            <a className=" link-social-register facebook" type="submit">
              <FaFacebook className="mx-4 facebook-register-icon" />
              <span>Sign Up with Facebook</span>
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center pb-3">
          <div className="line-between"></div> <span className="or">OR</span>
          <div className="line-between"></div>
        </div>
        <div className="d-flex justify-content-between algin-items-center">
          <Form className="sign-up-form mt-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
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
            <Form.Group className="mb-3" controlId="formBasicPassword">
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
            <Form.Group className="mb-5" controlId="formBasicPassword">
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
              <Form.Text className="text-muted d-flex justify-content-center w-100 px-5">
                <p className="me-2">I have an account!</p>
                <a href="#" className="link">
                  Sign in
                </a>
              </Form.Text>
            </div>
          </Form>

          <img src={boyWithDog} alt="" className="register-image" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
