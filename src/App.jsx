import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ForgetPassword from "./pages/ForgetPassword/FrogetPassword";
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Verify from "./pages/VerficationCode/Verify";

// import Cart from "./pages/Cart/Cart";
const user = {
  name: 'Sara Ahmad',
  birthDay: '15/8/1999',
  pet : {
    type : 'Cat'
  }
}

function App() {

  return <>
    {/* <Navbar />
    <Home/> */}
    {/* <Profile user={user}/> */}
    {/* <Login/>
    <ForgetPassword/> */}
    <Verify/>
  </>;
}

export default App;
