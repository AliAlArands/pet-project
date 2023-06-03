import React, { useEffect } from "react";
import "./card.css";
import { BsStarFill, BsPencil } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai"

import image from "./../../assets/image.jpg";

const Card = ({ product }) => {
    const stars = Array(product.stars).fill(1); // Create an array with the specified count

    return (
        <>
            <div className="card">
                <img src={image} />

                <div className="pt-3">
                    <div
                        className="product-name-stars"
                    >
                        <span className="product-name">
                            {product.title}
                        </span>
                        <span className="product-stars">
                            {stars.map((star, index) => (
                                <BsStarFill key={index} />
                            ))}
                        </span>
                    </div>
                    <p className="product-desc">{product.description}</p>
                    <div className="add-to-cart">
                        <span className="product-price">{product.price}$</span>
                        <div className="admin-icons">
                            <AiOutlineDelete className="admin-icon" />
                            <BsPencil className="admin-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
