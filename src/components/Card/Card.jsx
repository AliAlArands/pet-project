import React, { useEffect } from "react";
import "./card.css";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import image from "./../../assets/image.jpg";
import petStore from "../../apis/petStore";
const Card = ({ product }) => {
  const stars = Array(product.stars).fill(1); // Create an array with the specified count
  const createCartOrUpdate = (productId) => {
    let cartId = localStorage.getItem("cartId");

    if (!cartId) {
      petStore
        .post("/carts/")
        .then((res) => {
          cartId = res.data.cart.id;
          localStorage.setItem("cartId", cartId);
        })
        .catch((err) => console.log(err));
    }

    petStore
      .put(`/carts/${cartId}/`, {
        data: {
          product_id: productId,
          quantity: 1,
        },
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="card">
        <img src={image} />

        <div className="pt-3">
          <div className="product-name-stars">
            <span className="product-name">{product.title}</span>
            <span className="product-stars">
              {stars.map((star, index) => (
                <BsStarFill key={index} />
              ))}
            </span>
          </div>
          <p className="product-desc">{product.description}</p>
          <div className="add-to-cart">
            <span className="product-price">{product.price}$</span>
            <span
              className="btn btn-primary btn-add-to-card"
              onClick={() => {
                createCartOrUpdate(product.id);
              }}
            >
              Add to cart
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
