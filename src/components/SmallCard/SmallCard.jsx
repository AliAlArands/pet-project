import React, { useEffect, useState } from "react";
import rectangle from "./Rectangle.png";
import {
  AiFillDelete,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import "./small.css";
import petStore from "../../apis/petStore";
const SmallCard = ({ cartItem, deleteCartItem }) => {
  //   console.log(product);
  let cartId = localStorage.getItem("cartId");
  const [count, setCount] = useState(1);

  const removeOne = () => {
    if (count === 1) {
      useEffect(() => {
        const deleteCartItemLessThanOneQuantity = async () => {
          await petStore
            .delete(`carts/${cartId}`, {
              data: {
                product_id: product.id,
              },
            })
            .then(() => {
              deleteCartItem(product.id);
              console.log("Delete request successful:", response.data);
            })
            .catch((err) => {
              console.error("Error sending PUT request:", err);
            });
        }

        deleteCartItemLessThanOneQuantity();

      }, [])
    }
    else {
      useEffect(() => {
        const remove = async () => {
          await petStore
            .put(`carts/${cartId}`, {
              data: {
                product_id: product.id,
                quantity: count - 1,
              },
            })
            .then((response) => {
              console.log("PUT request successful:", response.data);
              setCount(count - 1)
            })
            .catch((error) => {
              console.error("Error sending PUT request:", error);
            });
        };
        remove()
      }, [])
    }
  };


  const addOne = () => {
    useEffect(() => {
      const add = async () => {
        await petStore
          .put(`carts/${cartId}`, {
            data: {
              product_id: product.id,
              quantity: count + 1,
            },
          })
          .then((response) => {
            console.log("PUT request successful:", response.data);
            setCount(count + 1)
          })
          .catch((error) => {
            console.error("Error sending PUT request:", error);
          });
      }

      add();
    })

  };
  return (
    <div className="d-flex justify-content-between align-items-center small-card">
      <img src={rectangle} alt="" className="small-card-img" />
      <div>
        <p className="small-card-title">{cartItem.title}</p>
        <p className="small-card-desc">{cartItem.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="samll-card-price">{cartItem.price}$</div>
          <div className="small-card-icons">
            {" "}
            <AiOutlineMinusCircle
              onClick={removeOne}
              className=" small-card-icon"
            />{" "}
            <span className="me-3">{count}</span>{" "}
            <AiOutlinePlusCircle
              onClick={() => addOne}
              className="small-card-icon"
            />{" "}
            <AiFillDelete
              className="small-card-icon"
              onClick={() => deleteCartItem(cartItem.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
