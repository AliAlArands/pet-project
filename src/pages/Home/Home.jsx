import "./Home.css";
import heroImage from "./../../assets/home/hero-img.jpg";
import productImageOne from "./../../assets/home/pet-tracker-one.jpg";
import productImageTwo from "./../../assets/home/pet-tracker-two.jpg";

function Home() {
  return (
    <section>
      <div className="hero">
        <div className="intro">
          <div className="left-side">
            <h1>
              Shop For Your <span className="pets-font-color">Pet's</span>{" "}
              <br />
              Happiness At <span className="pets-font-color">Pety</span>
            </h1>
            <p>
              At lacus vitae nulla sagittis scelerisque nisl. Pellentesque
              <br />
              duis cursus vestibulum, facilisi ac, sed faucibus.
            </p>
            <button type="submit" className="btn btn-primary btn-shop">
              Shop Now
            </button>
          </div>
          <div>
            <img
              src={heroImage}
              alt="dog and cat svg, pets svg"
              className="img"
            />
          </div>
        </div>
      </div>
      <div className="main-product background-gc">
        <h1 className="text-center main-product-desc">
          Track your pet's adventures
          <br /> with our GPS tracker
        </h1>
        <div className="product-description mb-5">
          <div className="product-image">
            <img
              src={productImageOne}
              alt="pet tracker product, pet store product, tracker, pet tracker"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. ultricies.
            Id ornare turpis vulputate enim sed magna sit. A id cursus{" "}
          </p>
        </div>
        <div className="product-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. ultricies.
            Id ornare turpis vulputate enim sed magna sit. A id cursus{" "}
          </p>
          <div className="product-image">
            <img
              src={productImageTwo}
              alt="pet tracker product, pet store product, tracker, pet tracker"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
