import petStore from "./petStore";

let cartId;
const createCart = async () => {
  await petStore
    .post("/carts/")
    .then((res) => {
      console.log("Request is okay:",res.data);
      cartId = res.data.cart.id;
      localStorage.setItem("cartId", cartId);
    })
    .catch((err) => console.log(err));
  return cartId;
};

let cartItems = [];
const getCartItems = async (cartId) => {
  await petStore.get(`/carts/${cartId}/`).then((res) => {
    cartItems = res.data;
  });
  return cartItems;
};

export { createCart, getCartItems };
