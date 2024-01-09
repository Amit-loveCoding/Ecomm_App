import { removeFromCart, addToCart, clearCart } from "../../Redux/actions";
import React from "react";
import "./CartItems.css";
import { connect } from "react-redux";

import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import edit_icon from "../Assets/edit_icon.png";
import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  const navigate = useNavigate();

  const [proceedingToCheckout, setProceedingToCheckout] = useState(false);
  const clearCart = () => {
    console.log("Clearing the cart...");
    // Your existing logic to clear the cart
    // ...
  };

  const handleProceedToCheckout = () => {
    setProceedingToCheckout((prev) => !prev);

    if (!proceedingToCheckout) {
      console.log("Clearing cart...");
      clearCart();
      console.log("Cart cleared.");
      navigate("/");
    }
  };

  return (
    <div className="cartItems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>

        <p>Edit</p>
      </div>
      <hr />

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />

                <img
                  className="cartitems_edit_icon"
                  src={edit_icon}
                  alt=""
                  onClick={() => navigate(`/cart/${e.id}`)}
                />
              </div>
              <hr key={`hr-${e.id}`} />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={handleProceedToCheckout}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promocode, Enter it here </p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
});

const mapDispatchToProps = {
  addToCart,
  removeFromCart,
  clearCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
