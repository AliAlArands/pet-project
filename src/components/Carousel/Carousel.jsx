import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useRef, useState } from "react";
import Card from "./../../components/Card/Card";
import AdminCard from "./../../components/Card/AdminCard";
import "./carousel.css";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
const Carousel = ({ items, handleOnClick }) => {
  const ItemsContainer = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleMouseDown = () => {
    setIsScrolling(true);
  };

  const handleMouseUp = () => {
    setIsScrolling(false);
  };
  const handleMouseMove = (event) => {
    if (!isScrolling) return;
    event.preventDefault();

    const container = ItemsContainer.current;
    const containerWidth = container.offsetWidth;
    const scrollWidth = container.scrollWidth;
    const scrollPos = container.scrollLeft;
    const movementX =
      event.movementX || event.mozMovementX || event.webkitMovementX || 0;

    container.scrollLeft = scrollPos - movementX;

    // Limit the scroll position within the container bounds
    if (container.scrollLeft < 0) {
      container.scrollLeft = 0;
    } else if (container.scrollLeft > scrollWidth - containerWidth) {
      container.scrollLeft = scrollWidth - containerWidth;
    }
  };
  const handleOnScrollRight = () => {
    const container = ItemsContainer.current;
    const cartWidth = container.children[0].children[0].offsetWidth;
    container.scrollBy({ left: cartWidth + 30, behavior: "smooth" });
  };

  const handleOnScrollLeft = () => {
    const container = ItemsContainer.current;
    const cartWidth = container.children[0].children[0].offsetWidth;
    container.scrollBy({ left: -cartWidth + 30, behavior: "smooth" });
  };
  return (
    <>
      <div className="items">
        <div className="admin-product-control">
          <div className="admin-dropdown-filter">
            <div className="admin-setting">
              <span className="admin-setting-heading">Filter</span>
              <FaChevronDown
                onClick={handleOnClick}
                id="chevron"
                className="fs-3 icon"
              />
            </div>
            <ul className="admin-list-group" id="profile-list-group">
              <li className="admin-list-group-item">
                <button type="btn" className="btn btn-admin">
                  Dry Food
                </button>
              </li> 
              <li className="admin-list-group-item">
                <button type="btn" className="btn btn-admin">
                  GPS
                </button>
              </li>
              <li className="admin-list-group-item">
                <button type="btn" className="btn btn-admin">
                  Shampoo
                </button>
              </li>
              <li className="admin-list-group-item">
                <button type="btn" className="btn btn-admin">
                  Dishes
                </button>
              </li>
            </ul>
          </div>
          <div className="left-right-arrows">
            <AiOutlinePlus className="admin-pluse-icon" />
            <BsChevronLeft
              className="chevron-product-icon chevron-left chevron-admin"
              onClick={handleOnScrollLeft}
            />
            <BsChevronRight
              className="chevron-product-icon chevron-right chevron-admin"
              onClick={handleOnScrollRight}
            />
          </div>
        </div>
        <div
          className="items-container"
          ref={ItemsContainer}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="items-list">
            {items.map((item) => {
              return <AdminCard product={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
