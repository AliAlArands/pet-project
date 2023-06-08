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
import fedingCat from "./../../assets/home/fedingCat.svg";
import { useEffect, useState } from "react";
import petStore from "../../apis/petStore";
import Card from "../../components/Card/Card";
import ProductComponent from "../../components/ProductComponent/productComponent";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
const Home = ({ products, setProducts }) => {
  // counting how many peages I need to display on the screen
  let pagesCount = 0;
  let pages = [];
  let productsLength;

  const [category, setCategory] = useState("");
  const [apiProducts, setApiProducts] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(8);
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleOnClicktoLeft = () => {
    if (start === 0) return;
    // console.log("i am here")
    setStart(start - 8);
    setEnd(start);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1))
  };

  const handleOnClicktoRight = () => {
    if (end + 8 > productsLength) {
      setEnd(productsLength);
      setStart(end);
      console.log(start);
    } else {
      setEnd(end + 8);
      setStart(start + 8);
    }

    setCurrentIndex((prevIndex) => prevIndex === pages.length - 1 ? prevIndex: prevIndex + 1)
  };

  const styleSelectedCategory = () => {
    const categories = document.querySelectorAll(".category-btn");
    categories.forEach((categoryName) => {
      categoryName.addEventListener("click", () => {
        let categroyValue = categoryName.innerText;
        setCategory(categroyValue);
        categories.forEach((categoryName) => {
          categoryName.classList.remove("selected-category");
        });
        categoryName.classList.add("selected-category");

        // cards.forEach((product) => displayProducts(product, categroyValue));
      });
    });
  };

  const filterProducts = () => {
    console.log(category);
    if (category === "") return;
    const newProductList = products.filter(
      (product) => product.title.toLowerCase() === category.toLowerCase()
    );
    console.log(newProductList);
    setProducts(newProductList);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await petStore.get("/products").then((res) => {
          setApiProducts(res.data.products);
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  pagesCount = Math.ceil(products.length / 8);
  pages = Array(pagesCount).fill(1);
  productsLength = products.length;
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
      <section className="main-product">
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
            <img src={catWithBook} alt="" className="product-description-svg" />
          </div>
          <div className="product-image">
            <img
              src={productImageOne}
              alt="pet tracker product, pet store product, tracker, pet tracker"
            />
          </div>
        </div>
        <div className="product-description">
          <div className="product-image">
            <img
              src={productImageTwo}
              alt="pet tracker product, pet store product, tracker, pet tracker"
            />
          </div>
          <div className="product-description-box">
            <p className="product-description-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              ultricies. Id ornare turpis vulputate enim sed magna sit. A id
              cursus
            </p>
            <img src={fedingCat} alt="" className="product-description-svg" />
          </div>
        </div>
      </section>
      <div className="categories">
        <button
          className="category-btn"
          onClick={() => {
            styleSelectedCategory();
            filterProducts();
          }}
        >
          GPS tracker
        </button>
        <button
          className="category-btn"
          onClick={() => {
            styleSelectedCategory();
            filterProducts();
          }}
        >
          Dry food
        </button>
        <button
          className="category-btn"
          onClick={() => {
            styleSelectedCategory();
            filterProducts();
          }}
        >
          Shampoo
        </button>
        <button
          className="category-btn"
          onClick={() => {
            styleSelectedCategory();
            filterProducts();
          }}
        >
          Dishes
        </button>
      </div>
      <section className="products" id="products">
        <div className="home-page-products-display">
          {products.slice(start, end).map((product) => {
            return <Card product={product} key={product.id} />;
          })}
        </div>
        <div className="product-pages">
          <BiChevronLeft
            onClick={handleOnClicktoLeft}
            className="product-pages-icon"
          />
          {pages.map((page, index) => {
            return <span key={index} className={ index === currentIndex ? "colored-index me-2" : "me-2"}>{index + 1}</span>;
          })}
          <BiChevronRight
            onClick={handleOnClicktoRight}
            className="product-pages-icon"
          />
        </div>
        {/* <div className="products-carousel">
          <Carousel items={products} />
        </div>
        <div className="products-carousel-two">
          <Carousel items={products} />
        </div> */}
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
