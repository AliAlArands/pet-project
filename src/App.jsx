import "./App.css";
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
  <Profile user={user}/>
  {/* <Cart/> */}
  </>;
}

export default App;
