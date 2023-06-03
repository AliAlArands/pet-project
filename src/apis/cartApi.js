import petStore from "./petStore";

let selectedCartId = localStorage.getItem("cartId");
const createCart = async () => {
  await petStore
    .post("/carts/")
    .then((res) => {
      console.log("Request is okay:", res.data);
      cartId = res.data.cart.id;
      localStorage.setItem("cartId", cartId);
    })
    .catch((err) => console.log(err));
  return cartId;
};

let cartItems = [];
const getCartItems = async () => {
  await petStore.get(`/carts/${selectedCartId}/`).then((res) => {
    cartItems = res.data;
  });
  return cartItems;
};

export { createCart, getCartItems };
