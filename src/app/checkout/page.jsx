"use client";

import { useState } from "react";
import { useCart } from "@/app/component/CartContext";
import "./checkout.css";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [shipping, setShipping] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShipping((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); 
  };

  const validateForm = () => {
    let tempErrors = {};
    Object.keys(shipping).forEach((key) => {
      if (!shipping[key].trim()) {
        tempErrors[key] = "This field is required";
      }
    });
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    if (!validateForm()) {
      alert("Please fill all shipping details.");
      return;
    }

    console.log("Order Submitted", { shipping, cart });
    alert("Order Placed Successfully! Thanks For Shopping");
    clearCart(); 
    setShipping({
      name: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
    });
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="checkout-page">
      <br />
      <br />
      <br />
      <h1>Checkout</h1>
      <div className="checkout-container">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Shipping Details</h2>
          {["name", "email", "address", "city", "postalCode", "country"].map((field) => (
            <label key={field}>
              {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")}
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={shipping[field]}
                onChange={handleChange}
                className={errors[field] ? "input-error" : ""}
              />
              {errors[field] && <span className="error-msg">{errors[field]}</span>}
            </label>
          ))}
        </form>

        <div className="order-summary">
          <h2>Order Summary</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  <span>{item.title} x {item.quantity}</span>
                  <span><b className="price">৳ </b>{(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
          <h3>Total: <b className="price">৳ </b>{totalPrice.toFixed(2)}</h3>
          <button className="btn-place-order" onClick={handleSubmit}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
