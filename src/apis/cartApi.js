import petStore from "./petStore";

let cartId = localStorage.getItem("cartId");
const createCart = async () => {
  if (!cartId) {
    await petStore
      .post("/carts/")
      .then((res) => {
        console.log(res.data);
        cartId = res.data.cart.id;
        localStorage.setItem("cartId", cartId);
      })
      .catch((err) => console.log(err));
  }
  return cartId;
};

let cartItems;
const getCartItems = async () => {
  await petStore.get(`/carts/${cartId}/`).then((res) => {
    cartItems = res.data;
  });
  return cartItems;
};

export { createCart, getCartItems };
