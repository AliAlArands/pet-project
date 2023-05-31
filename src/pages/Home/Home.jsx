import "./Home.css";
// import heroImage from "./../../assets/home/hero-img.jpg";
import productImageOne from "./../../assets/home/pet-tracker-one.jpg";
import productImageTwo from "./../../assets/home/pet-tracker-two.jpg";
import Navigation from "../../components/Navigation/Navigation";
import Carousel from "../../components/Carousel/Carousel";
import FooterComponent from "../../components/Footer/FooterComponent";
import Navbar from "../../components/Navbar/Navbar";
import heroImage from "./../../assets/home/homePagePhoto.svg";
import catWithBook from "./../../assets/home/catWithBook.svg";
const Home = ({ products }) => {
  return (
    <div className="home">
      <Navbar />

      <Navigation />
      <section className="hero">
        <div className="left-side">
          <h1>
            <div className="hero-intro">
              Shop For Your <span className="pets-font-color">Pet's</span>
            </div>
            <div className="hero-intro">
              Happiness At <span className="pets-font-color">Pety</span>
            </div>
          </h1>
          <p>
            At lacus vitae nulla sagittis scelerisque nisl. Pellentesque
            <br />
            duis cursus vestibulum, facilisi ac, sed faucibus.
          </p>
          <a href="#products" className="btn btn-primary submit-btn btn-shop">
            Shop Now
          </a>
        </div>
        <img src={heroImage} alt="dog and cat svg, pets svg" className="img" />
      </section>
      <section className="main-product background-gc">
        <h1 className="text-center title main-product-desc">
          Track your pet's adventures
          <br /> with our GPS tracker
        </h1>
        <div className="product-description">
          <div className="product-description-box">
            <p className="product-description-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              ultricies. Id ornare turpis vulputate enim sed magna sit. A id
              cursus
            </p>
            <img src={catWithBook} alt="" className="product-description-image" />
          </div>
          <div className="product-image">
            <img
              src={productImageOne}
              alt="pet tracker product, pet store product, tracker, pet tracker"
            />
          </div>
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
      </section>
      <section className="py-5" id="products">
        <div className="categories">
          <button className="btn btn-primary category-btn submit-btn">
            GPS tracker
          </button>
          <button className="btn btn-primary category-btn submit-btn">
            Dry food
          </button>
          <button className="btn btn-primary category-btn submit-btn">
            Shampoo
          </button>
          <button className="btn btn-primary category-btn submit-btn">
            Dishes
          </button>
        </div>
        <div className="products-carousel">
          <Carousel items={products} />
        </div>
        <div className="products-carousel-two">
          <Carousel items={products} />
        </div>
      </section>

      <section className="privilages">
        <div className="privilage">
          <h3 className="privilages-heading">Free shipping</h3>
          <p className="privilages-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            eos voluptate ullam totam deleniti vel.
          </p>
        </div>
        <div className="privilage">
          <h3 className="privilages-heading">Fast delivery</h3>
          <p className="privilages-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            eos voluptate ullam totam deleniti vel.
          </p>
        </div>
        <div className="privilage">
          <h3 className="privilages-heading">Best prices</h3>
          <p className="privilages-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            eos voluptate ullam totam deleniti vel.
          </p>
        </div>
        <div className="privilage">
          <h3 className="privilages-heading">customer support</h3>
          <p className="privilages-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            eos voluptate ullam totam deleniti vel.
          </p>
        </div>
      </section>

      <FooterComponent />
    </div>
  );
};
export default Home;
