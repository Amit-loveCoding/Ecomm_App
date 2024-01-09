import React from "react";
import CartItems from "../Components/CartItems/CartItems";
import Edit from "./Edit";

const Cart = () => {
  return (
    <div>
      <CartItems>
        <Edit />
      </CartItems>
    </div>
  );
};

export default Cart;
