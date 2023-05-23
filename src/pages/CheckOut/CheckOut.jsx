import React from "react";
import './Checkout.css';
import Form from 'react-bootstrap/Form';
import { FiUserCheck , HiCreditCard , MdDateRange , AiOutlineEyeInvisible } from 'react-icons';
const Checkout= () =>{
    return (
        <div className="container">
            <h2>payment methods</h2>
            <div className="sub-container">
                <div className="left">
                    <img src="./../../assets/Rectangle 351.png" alt="image" />
                    <Form>
                        <div className="first-line d-flex space-btween ">
                            <Form.Label>use saved card :</Form.Label>
                            <Form.Select size="sm">
                                <option>mastercard</option>
                            </Form.Select>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>name on  card :</Form.Label>
                            <Form.Control type="text" placeholder="Example" />
                            <FiUserCheck />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicNumber">
                            <Form.Label>card number :</Form.Label>
                            <Form.Control type="number" placeholder="123-456-789" />
                            <HiCreditCard />
                        </Form.Group>
                        <div className="last-line d-flex space-btween">
                            <Form.Group className="mb-3" controlId="formBasicDate">
                                <Form.Label>Expry day :</Form.Label>
                                <Form.Control type="date" placeholder="MM / YY" />
                                <MdDateRange />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCCV">
                                <Form.Label>CCV :</Form.Label>
                                <Form.Control type="password" placeholder="hidden" />
                                <AiOutlineEyeInvisible />
                            </Form.Group>
                        </div>

                    </Form>



                </div>
                <div className="right">
                    <Form>
                        <Form.Group className="mb-3 d-flex" controlId="formBasicline1">

                            <Form.Control type="txt" placeholder="Product Total" />
                            <Form.Label>100$</Form.Label>
                        </Form.Group>

                        <Form.Group className="mb-3 d-flex" controlId="formBasicline2">
                            <Form.Control type="text" placeholder="Discount " />
                            <Form.Label>0 %</Form.Label>
                        </Form.Group>

                        <Form.Group className="mb-3 d-flex" controlId="formBasicline3">
                            <Form.Control type="text" placeholder="Delivery " />
                            <Form.Label>Free</Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex" controlId="formBasicline4">
                            <Form.Control type="text" placeholder=" Total " />
                            <Form.Label>100$</Form.Label>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                        Order now
                        </Button>
                    </Form>
                </div>
            </div>

        </div>
    );
}
export default Checkout;