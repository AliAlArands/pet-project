import { useEffect, useRef, useState } from "react";
import "./cart.css";
import SmallCard from "../../components/SmallCard/SmallCard";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import Navbar from "../../components/Navbar/Navbar";
import { getCartItems } from "../../apis/cartApi";
const Cart = () => {

  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const getItems = () => {

      const responseCartItems = getCartItems();
      if (!responseCartItems) return
      setCartItems(responseCartItems)
      console.log(cartItems);
    }
  })
  const deteteCartItem = (id) => {
    const new_cart_items = cartItems.filter((cartItem) => cartItem.id !== id);
    setCartItems(new_cart_items);
  };
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
                  {cartItems.map((cartItem) => {
                    // console.log(cartItem.title);
                    return (
                      <div
                        className="d-flex justify-content-around align-items-center"
                        key={cartItem.id}
                      >
                        {/* <AiOutlineCheck className="check-icon" /> */}
                        <SmallCard
                          cartItem={cartItem}
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
