import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useRef, useState } from "react";
import Card from "./../../components/Card/Card";
import AdminCard from "./../../components/Card/AdminCard"
import "./carousel.css"
const Carousel = ({items}) => {
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
    container.scrollBy({ left: cartWidth + 30, behavior: 'smooth' });
  };

  const handleOnScrollLeft = () => {
    const container = ItemsContainer.current;
    const cartWidth = container.children[0].children[0].offsetWidth;
    container.scrollBy({ left: -cartWidth + 30, behavior: 'smooth' });
  };
  return (
    <>
      <div className="items">
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
        <div className="d-flex justify-content-between align-items-center left-right-arrows">
          <BsChevronLeft
            className="chevron-product-icon chevron-left"
            onClick={handleOnScrollLeft}
          />
          <BsChevronRight
            className="chevron-product-icon chevron-right"
            onClick={handleOnScrollRight}
          />
        </div>
      </div>
    </>
  );
};

export default Carousel;
