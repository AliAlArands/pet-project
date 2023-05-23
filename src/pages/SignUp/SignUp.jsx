import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { BiUserCheck } from "react-icons/bi";
import "./signup.css";
const SignUp = () => {
  return (
    <>
      <div className="w-50 mx-auto">
        <div className="text-center d-flex flex-column mb-3">
          <div className="h2 mb-3 mt-5">Welcome</div>
          <div className="h3">sign up to continue your progress</div>

          <a className=" link-social-register" type="submit">
            <FaGoogle />{" "}
            <span className="google-register-link">sign up with google</span>
          </a>
          <a className=" link-social-register" type="submit">
            <FaFacebook />
            <span> sign up with facebook</span>
          </a>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="line-between"></div> <span className="or fs-3">OR</span>
          <div className="line-between"></div>
        </div>
        <Form className="w-50 mx-auto mt-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="px-1">User name/Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="px-1">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Label className="px-1">Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className="d-flex justify-content-center flex-column align-items-center ">
            <Button variant="primary" type="submit" className="w-100 mb-3">
              Create Account
            </Button>
            <Form.Text className="text-muted d-flex justify-content-around w-100 px-5">
              <p>Already have one?</p>
              <a href="#" className="link">
                Log in
              </a>
            </Form.Text>
          </div>
        </Form>
      </div>
    </>
  );
};

export default SignUp;
