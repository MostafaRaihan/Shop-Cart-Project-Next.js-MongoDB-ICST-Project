"use client";
import { useCart } from "@/app/component/CartContext";
import CartItem from "@/app/component/CartItem";
import Link from "next/link";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <br />
      <br />
      <br />
      <h1 className="cart-title">Your Shopping Items</h1>
      {cart.length === 0 ? (
        <p className="empty-cart">No Shopping Item Found 😢</p>
      ) : (
        <>
          <div className="cart-table-wrapper">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </tbody>
            </table>
          </div>

          <div className="cart-footer">
            <div className="total-section">
              <h2>Total:</h2>
              <span><b>৳ </b>{totalPrice.toFixed(2)}</span>
            </div>
            <div className="cart-buttons">
              <button className="btn-clear" onClick={clearCart}>Clear Your Cart Item</button>
              <Link href="/checkout">
                <button className="btn-checkout"> Go To Checkout Page</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
