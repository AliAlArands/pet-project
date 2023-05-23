import React from "react";
import "./checkout.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FiUserCheck } from "react-icons/fi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { HiCreditCard } from "react-icons/hi";
import Rectangle from "./../../assets/Rectangle.png";
const Checkout = () => {
  let discount = true;
  return (
    <div className="container mb-5">
      <h2 className="my-5 px-3">payment methods</h2>
      <div className="sub-container d-flex justify-content-around align-items-center ">
        <div className="left">
          <div className="w-100 d-flex justify-content-center">
            <img src={Rectangle} alt="image" className="payment-img" />
          </div>
          <Form>
            <div className="first-line d-flex justify-content-between ">
              <Form.Label className="w-50 saved-card">
                use saved card :
              </Form.Label>
              <Form.Select className="w-50" size="sm">
                <option>mastercard</option>
              </Form.Select>
            </div>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="mb-0 px-2">name on card :</Form.Label>
              <div className="input-group">
                <Form.Control
                  type="text"
                  placeholder="Example"
                  className="input-field"
                />
                <FiUserCheck className="fs-4" />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label className="mb-0 px-2">card number :</Form.Label>
              <div className=" input-group">
                <Form.Control
                  type="number"
                  placeholder="123-456-789"
                  className="input-field"
                />
                <HiCreditCard className="fs-4" />
              </div>
            </Form.Group>
            <div className="last-line d-flex justify-content-between">
              <Form.Group className="mb-3 me-2" controlId="formBasicDate">
                <Form.Label className="mb-0 px-2">Expry day :</Form.Label>
                <div className=" input-group">
                  <Form.Control
                    type="date"
                    placeholder="MM / YY"
                    className="input-field"
                  />
                  {/* <MdDateRange /> */}
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCCV">
                <Form.Label className="mb-0 px-2">CCV :</Form.Label>
                <div className=" input-group">
                  <Form.Control
                    type="password"
                    placeholder="..."
                    className="input-field points"
                  />
                  <AiOutlineEyeInvisible className="fs-4" />
                </div>
              </Form.Group>
            </div>
          </Form>
        </div>
        <div className="right">
          <div className="data-rec">
            <span>Product Total</span>
            <span className="data-rec-price">100$</span>
          </div>

          <div className="data-rec">
            <span>Discount</span>
            <span className={discount && `discount`}>0%</span>
          </div>

          <div className="data-rec">
            <span>Delivery</span>
            <span>Free</span>
          </div>

          <div className="data-rec last">
            <span>Total</span>
            <span className="data-rec-price">100$</span>
          </div>

          <Button variant="primary" type="submit" className="w-100 bold">
            Order now
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
