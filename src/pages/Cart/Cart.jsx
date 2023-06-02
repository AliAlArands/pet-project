import { useRef } from "react";
import "./cart.css";
import SmallCard from "../../components/SmallCard/SmallCard";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import Navbar from "../../components/Navbar/Navbar";
const Cart = ({ products, deleteCartItem }) => {
  const cartContainer = useRef(null);
  // console.log(products);
  const handleScrollUp = () => {
    if (cartContainer.current) {
      cartContainer.current.scrollBy({
        top: -100,
        behavior: "smooth",
      });
    }
  };

  const handleScrollDown = () => {
    if (cartContainer.current) {
      cartContainer.current.scrollBy({
        top: 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="background-gc contain-cart contain">
        <div>
          <h1 className="title">Your Cart</h1>
          <div className="d-flex justify-content-center align-items-start flex-column cart-container">
            <div className="d-flex justify-content-between algin-items-center cart-items-chevrons-container">
              <div ref={cartContainer} className="cart-items">
                <div>
                  {products.map((product) => {
                    // console.log(product.title);
                    return (
                      <div
                        className="d-flex justify-content-around align-items-center"
                        key={product.id}
                      >
                        {/* <AiOutlineCheck className="check-icon" /> */}
                        <SmallCard
                          product={product}
                          deleteCartItem={deleteCartItem}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center flex-column arrow-up-down">
                <BsChevronUp
                  className="chevron-icon arrow-up"
                  onClick={handleScrollUp}
                />
                <BsChevronDown
                  className="chevron-icon arrow-down"
                  onClick={handleScrollDown}
                />
              </div>
            </div>
            <div className="check-out-btn d-flex algin-items-center justify-content-center">
              <button type="btn" className="btn btn-primary  submit-btn">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
