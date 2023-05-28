import React from "react";
import rectangle from "./Rectangle.png";
import {
  AiFillDelete,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import "./small.css";
const SmallCard = ({ product }) => {
//   console.log(product);
  const addOne = () => {
    console.log("add one");
  };
  return (
    <div className="d-flex justify-content-between align-items-center small-card">
      <img src={rectangle} alt="" className="small-card-img" />
      <div>
        <p className="small-card-title">{product.title}</p>
        <p className="small-card-desc">{product.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="samll-card-price">{product.price}$</div>
          <div className="small-card-icons">
            {" "}
            <AiOutlineMinusCircle onClick={addOne} className="mx-1" />{" "}
            <span className="mx-1">{product.count}</span>{" "}
            <AiOutlinePlusCircle className="mx-1" />{" "}
            <AiFillDelete className="mx-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
