import "./App.css";
import Card from "./components/Card/Card";
import CardItem from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Checkout from "./pages/CheckOut/CheckOut";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/SignUp/SignUp";
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
      {/* <Card product={product}/>
      <Fqa/> */}
      <Navigation/> 
      <Home/>
    </div>
  );
}

export default App;
