import "./App.css";

import Feedback from "./pages/Feedback/Feedback";
import Navbar from "./components/Navbar/Navbar";
import Support from "./pages/Support/Support";
import Checkout from "./pages/CheckOut/CheckOut";
import Profile from "./pages/Profile/Profile";
// import ProductComponent from './components/ProductComponent';
import Home from "./pages/Home/Home";
import Fqa from "./pages/FQA/Fqa";
import Navigation from "./components/Navigation/Navigation";
import FindMyPet from "./pages/FindMyPet/FindMyPet";
import NewPassword from "./pages/NewPassword/NewPassword";
import Verify from "./pages/VerficationCode/Verify";
import ForgetPassword from "./pages/ForgetPassword/FrogetPassword";
import Login from "./pages/Login/Login";
import AddPicture from "./pages/AddPicture/AddPicture";
import SignUp from "./pages/SignUp/SignUp";
// import Support
import Cart from "./pages/Cart/Cart";
import SmallCard from "./components/SmallCard/SmallCard";
import { Outlet } from "react-router-dom";

const product = {
  title: "dry food",
  stars: 4,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aliquid cumque dolor ex, quis vero, repellendus pariatur a perspiciatis repudiandae, natus sunt! Aut, rem animi.",
  price: "20$",
};



function App() {
  return (
    <div>
      <Outlet/>
      
    </div>
  );
}

export default App;
