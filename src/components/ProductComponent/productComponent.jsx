import dogFood from "./../../assets/products/dogFood.jpg";
import "./productComponent.css";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const ProductComponent = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const dataString = params.get('data');
  const dataObject = JSON.parse(decodeURIComponent(dataString));

  const stars = Array(dataObject.stars).fill(1); // Create an array with the specified count
  const [count, setCount] = useState(1);
  const addOne = () => {
    setCount(count + 1);
  };

  const minusOne = () => {
    if (count === 1) return;
    setCount(count - 1);
  };
  return (
    <>
      <div className="product-container-page background-gc">
        <div className="back-to-list">
          <FaArrowLeft className="back-to-list-icon" />
          <a href="" className="back-to-list-link">
            {" "}
            back to list
          </a>
        </div>
        <div className="product-page">
          <div className="product-first-section">
            <img src={dogFood} alt="" className="product-page-image" />
          </div>
          <div className="product-second-section">
            <h1 className="product-title">{dataObject.title}</h1>
            <div className="product-category-and-stars">
              <span className="product-category">CAT FOOD</span>
              <span className="product-stars">
                {stars.map((star, index) => (
                  <BsStarFill key={index} />
                ))}
              </span>
            </div>

            <div className="product-page-description">
              <p>Description</p>
              <p>{dataObject.description}</p>
            </div>

            <div className="add-product-to-card">
              <div className="product-page-cart">
                <span>Qty:</span>{" "}
                <span className="product-page-icon">
                  <AiOutlineMinusSquare onClick={minusOne} />
                </span>{" "}
                <span className="product-counts">{count}</span>{" "}
                <span className="product-page-icon">
                  <AiOutlinePlusSquare onClick={addOne} />
                </span>
              </div>
              <div className="product-page-price">{dataObject.price}</div>
            </div>
            <div className="d-flex justify-content-center algin-items-center">
              <button className="btn btn-add-to-card-product-page">
                ADD TO CARD
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductComponent;
