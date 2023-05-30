import React, { useState } from "react";
import rectangle from "./Rectangle.png";
import {
  AiFillDelete,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import "./small.css";
const SmallCard = ({ product, deleteCartItem }) => {
  //   console.log(product);
  const [count, setCount] = useState(1);

  const removeOne = () => {
    if (count === 1) {
      deleteCartItem(product.id);
    }
    const newCount = count - 1;
    setCount(newCount);
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
            <AiOutlineMinusCircle
              onClick={removeOne}
              className=" small-card-icon"
            />{" "}
            <span className="me-3">{count}</span>{" "}
            <AiOutlinePlusCircle
              onClick={() => setCount(count + 1)}
              className="small-card-icon"
            />{" "}
            <AiFillDelete
              className="small-card-icon"
              onClick={() => deleteCartItem(product.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
