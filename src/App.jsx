import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile";

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
    <Profile user={user}/>
  </>;
}

export default App;
