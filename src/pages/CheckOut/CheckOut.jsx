import React from "react";
import "./checkout.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FiUserCheck } from "react-icons/fi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { HiCreditCard } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import cardImage from "./../../assets/checkout/card-image.jpg";
import pay from "./../../assets/checkout/pay.svg";
import visa from "./../../assets/checkout/visa.svg";
import Back from "../../components/BackComponent/Back";
const Checkout = () => {
  let discount = false;
  return (
    <>
      <Back />
      <div className=" background-gc checkout-container">
        <h2 className="checkout-header">payment methods</h2>
        <div className="sub-container d-flex justify-content-between align-items-center ">
          <div className="left color-bg display-box-shadow">
            <div className="w-100 d-flex justify-content-center">
              <img src={cardImage} alt="image" className="payment-img" />
            </div>
            <Form>
              <div className="first-line d-flex justify-content-between payment-form-m">
                <Form.Label className="w-50 saved-card">
                  use saved card :
                </Form.Label>
                <Form.Select className="w-50" size="">
                  <option>mastercard</option>
                </Form.Select>
              </div>
              <Form.Group className="payment-form-m" controlId="formBasicName">
                <Form.Label className="label">name on card :</Form.Label>
                <div className="input-group">
                  <Form.Control
                    type="text"
                    placeholder="Example"
                    className="input-field"
                  />
                  <FiUserCheck className="payment-icon green" />
                </div>
              </Form.Group>
              <Form.Group
                className="payment-form-m"
                controlId="formBasicNumber"
              >
                <Form.Label className="label">card number :</Form.Label>
                <div className=" input-group">
                  <Form.Control
                    type="text"
                    placeholder="123-456-789"
                    className="input-field"
                  />
                  <HiCreditCard className="payment-icon green" />
                </div>
              </Form.Group>
              <div className="last-line d-flex justify-content-between">
                <Form.Group className="day" controlId="formBasicDate">
                  <Form.Label className="label">Expry day :</Form.Label>
                  <div className=" input-group">
                    <Form.Control
                      type="date"
                      placeholder="MM / YY"
                      className="input-field"
                    />
                    {/* <MdDateRange /> */}
                  </div>
                </Form.Group>
                <Form.Group className="ccv" controlId="formBasicCCV">
                  <Form.Label className="label">CCV :</Form.Label>
                  <div className=" input-group">
                    <Form.Control
                      type="password"
                      placeholder="..."
                      className="input-field points"
                    />
                    <AiOutlineEyeInvisible className="payment-icon" />
                  </div>
                </Form.Group>
              </div>
            </Form>
            <div className="cards">
              <img src={pay} alt="" />
              <img src={visa} alt="" />
            </div>
          </div>
          <div className="right display-box-shadow color-bg">
            <div className="data-rec">
              <span>Product Total</span>
              <span className="data-rec-price">100$</span>
            </div>
            <div className="data-rec">
              <span>Discount</span>
              <span className={discount ? `discount` : `data-rec-value`}>
                0%
              </span>
            </div>
            <div className="data-rec">
              <span>Delivery</span>
              <span className="data-rec-value">Free</span>
            </div>
            <div className="">
              <div className="address-rec">
                <span>Address</span>
                <FaChevronDown className="payment-icon" />
              </div>
              <input
                type="text"
                className="order-address"
                placeholder="Add your Adress"
              />
            </div>
            <div className="data-rec last">
              <span>Total</span>
              <span className="data-rec-price">100$</span>
            </div>
            <Button
              variant="primary"
              type="submit"
              className="w-100 payment-order-btn"
            >
              Order now
            </Button>
            <div className="d-flex align-items-center justify-content-center">
              <button className="btn btn-cancel-order">Cancel oreder</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Checkout;
