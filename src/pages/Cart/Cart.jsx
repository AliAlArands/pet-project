import { useRef } from "react";
import "./cart.css";
import SmallCard from "../../components/SmallCard/SmallCard";
import {
  BsFillCheckSquareFill,
  BsChevronUp,
  BsChevronDown,
} from "react-icons/bs";
const Cart = ({ products }) => {
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
    <div className="background-gc contain-cart contain">
      <div>
        <h1 className="title large-title">Your Cart</h1>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div className="d-flex justify-content-between algin-items-center cart-items-chevrons-container mb-5">
            <div ref={cartContainer} className="cart-items">
              <div>
                {products.map((product) => {
                  // console.log(product.title);
                  return (
                    <div
                      className="d-flex justify-content-around align-items-center"
                      key={product.id}
                    >
                      <BsFillCheckSquareFill className="check-icon check-icon-active" />
                      <SmallCard product={product} />
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
          <div className="check-out-btn"><button type="btn" className="btn btn-primary w-100 submit-btn">Check Out</button></div>
        </div>

      </div>

    </div>
  );
};

export default Cart;
