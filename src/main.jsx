import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FindMyPet from "./pages/FindMyPet/FindMyPet.jsx";
import Support from "./pages/Support/Support.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Login from "./pages/Login/Login.jsx";
import ForgetPassword from "./pages/ForgetPassword/FrogetPassword.jsx";
import Verify from "./pages/VerficationCode/Verify.jsx";
import NewPassword from "./pages/NewPassword/NewPassword.jsx";
import Fqa from "./pages/FQA/Fqa.jsx";
import Feedback from "./pages/Feedback/Feedback.jsx";
import About from "./pages/About/About.jsx";
import ProductComponent from "./components/ProductComponent/productComponent.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Checkout from "./pages/CheckOut/CheckOut.jsx";

const user = {
  name: "Sara Ahmad",
  birthDay: "15/8/1999",
  pet: {
    type: "Cat",
  },
  // isAuthenticated : true,
};

const AppWrapper = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Product A",
      count: 1,
      price: 19.99,
      stars: 4,
      description:
        "This is an excellent product that will meet all your needs.",
    },
    {
      id: 2,
      title: "Product B",
      count: 1,
      price: 12.49,
      stars: 3,
      description:
        "A budget-friendly option with decent quality and performance.",
    },
    {
      id: 3,
      title: "Product C",
      count: 1,
      price: 59.99,
      stars: 5,
      description:
        "A top-of-the-line product with outstanding features and durability.",
    },
    {
      id: 4,
      title: "Product D",
      count: 1,
      price: 32.99,
      stars: 4,
      description:
        "Get great value for your money with this reliable and versatile product.",
    },
    {
      id: 5,
      title: "Product E",
      count: 1,
      price: 8.99,
      stars: 2,
      description:
        "An affordable option, but not the most impressive in terms of quality.",
    },
    {
      id: 6,
      title: "Product F",
      count: 1,
      price: 45.99,
      stars: 4,
      description:
        "Experience superior performance and functionality with this product.",
    },
    {
      id: 7,
      title: "Product G",
      count: 1,
      price: 27.99,
      stars: 3,
      description: "A decent product that provides good value for the price.",
    },
    {
      id: 8,
      title: "Product H",
      count: 1,
      price: 64.99,
      stars: 5,
      description:
        "An exceptional product that will exceed your expectations in every way.",
    },
    {
      id: 9,
      title: "Product I",
      count: 1,
      price: 14.99,
      stars: 3,
      description: "A reasonably priced product suitable for everyday use.",
    },
    {
      id: 10,
      title: "Product J",
      count: 1,
      price: 39.99,
      stars: 4,
      description:
        "This product offers a great balance between price and performance.",
    },
  ]);

  const deteteCartItem = (id) => {
    const new_products_list = products.filter((product) => product.id !== id);
    setProducts(new_products_list);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home products={products} />,
        },
        {
          path: "/cart",
          element: <Cart products={products} deleteCartItem={deteteCartItem} />,
        },
        {
          path: "/find-my-pet",
          element: <FindMyPet />,
        },
        {
          path: "/support",
          element: <Support />,
        },
        {
          path: "/profile",
          element: <Profile user={user} />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/forget-password",
          element: <ForgetPassword />,
        },
        {
          path: "/sign-up",
          element: <SignUp/>
        },
        {
          path: "/verfiy-code",
          element: <Verify />,
        },
        {
          path: "/new-password",
          element: <NewPassword />,
        },
        {
          path: "/faq",
          element: <Fqa />,
        },
        {
          path: "/feedback",
          element: <Feedback />,
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/products/:id",
          element: <ProductComponent/>
        },
        {
          path: "/checkout",
          element: <Checkout/>
        }
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppWrapper />);
