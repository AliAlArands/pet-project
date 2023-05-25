import "./App.css";
import CardItem from "./components/Card/Card";
import FooterComponent from "./components/Footer/FooterComponent";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./pages/SignUp/SignUp";
import ProductComponent from './components/ProductComponent';
// import Cart from "./pages/Cart/Cart";
const user = {
  name: "Sara Ahmad",
  birthDay: "15/8/1999",
  pet: {
    type: "Cat",
  },
};

function App() {
  return (
    <div>
      <Navbar/>
      <SignUp />
      <CardItem />
      <ProductComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
