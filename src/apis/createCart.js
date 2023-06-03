import petStore from "./petStore";

const createCart = () => {
  let cartId = localStorage.getItem("cartId");

  if (!cartId) {
    petStore
      .post("/carts/")
      .then((res) => {
        cartId = res.data.cart.id;
        localStorage.setItem("cartId", cartId);
      })
      .catch((err) => console.log(err));
  }
  return cartId;
};

export default createCart;
