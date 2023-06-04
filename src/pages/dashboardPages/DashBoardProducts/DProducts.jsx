import Carousel from "../../../components/Carousel/Carousel";
import "./dproducts.css";
import "./pluse-icon.svg";
const DProducts = ({ products , handleOnClick }) => {
  return (
    <div className="background-gc dproducts">
      <div className="products-carousel">
        <Carousel items={products}  handleOnClick={handleOnClick}/>
      </div>
    </div>
  );
};

export default DProducts;
