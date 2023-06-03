import React, { useEffect } from "react";
import "./card.css";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import image from "./../../assets/image.jpg";
import petStore from "../../apis/petStore";
import { useNavigate } from "react-router-dom";
import createCart from "../../apis/cartApi";
const Card = ({ product }) => {
  const navigate = useNavigate();
  const stars = Array(product.stars).fill(1); // Create an array with the specified count

  // when a customer clicks on add to cart it should create a cart and update it.
  const createCartOrUpdate = (productId) => {
    const cartId = createCart();

    petStore
      .put(`/carts/${cartId}/`, {
        data: {
          product_id: productId,
          quantity: 1,
        },
      })
      .catch((err) => console.log(err));
  };

  const showProduct = () => {
    const queryParam = encodeURIComponent(JSON.stringify(product));
    navigate(`/products/${product.id}?data=${queryParam}`);
  };
  return (
    <>
      <div className="card">
        <img src={image} />

        <div className="pt-3">
          <div
            className="product-name-stars"
            onClick={() => showProduct(product.id)}
          >
            <span className="product-name" onClick={showProduct}>
              {product.name}
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
