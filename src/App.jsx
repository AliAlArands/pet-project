import "./App.css";
<<<<<<< HEAD
import Fqa from"./pages/FQA/Fqa"
import { FaCoffee } from 'react-icons/fa';

function App() {

  return <>
  <Fqa/>
  </>;
=======
import Navbar from "./components/Navbar/Navbar";
import ForgetPassword from "./pages/ForgetPassword/FrogetPassword";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NewPassword from "./pages/NewPassword/NewPassword";
import Profile from "./pages/Profile/Profile";
import Verify from "./pages/VerficationCode/Verify";

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
    <>
      {/* <Navbar />
    <Home/> */}
      {/* <Profile user={user}/> */}
      {/* <Login/>
    <ForgetPassword/> */}
      {/* <Verify/> */}
      <NewPassword />
    </>
  );
>>>>>>> 791de29a6fb49a0c132d4136e84366262aeac662
}

export default App;
