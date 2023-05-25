import "./App.css";
import Card from "./components/Card/Card";
import CardItem from "./components/Card/Card";
import FooterComponent from "./components/Footer/FooterComponent";
import Navbar from "./components/Navbar/Navbar";
import Support from "./pages/Support/Support";
import Checkout from "./pages/CheckOut/CheckOut";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/SignUp/SignUp";
import ProductComponent from './components/ProductComponent';
import Home from "./pages/Home/Home";
import Fqa from "./pages/FQA/Fqa";
import Navigation from "./components/Navigation/Navigation";
// import Cart from "./pages/Cart/Cart";
const user = {
  name: "Sara Ahmad",
  birthDay: "15/8/1999",
  pet: {
    type: "Cat",
  },
};

const product = {
  title: "dry food",
  stars: 4,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquid cumque dolor ex, quis vero, repellendus pariatur a perspiciatis repudiandae, natus sunt! Aut, rem animi.",
  price : "20$"  
};

function App() {
  return (
    <div>
      <Navbar />
      {/* <Card product={product}/> */}
      <Navigation/> 
      <Fqa/>
      {/* <Home/> */}
      <Home/>
    </div>
  );
}

export default App;
