"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useCart } from "./CartContext";
import { useState } from "react";
import "./css/Nav.css";

const Nav = () => {
  const { data: session } = useSession();
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo">
          Raihan Interactive Shop
        </Link>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={menuOpen ? "active" : ""}>
          <li>
            <Link href="/shop" onClick={() => setMenuOpen(false)}>
              Shop
            </Link>
          </li>

          {session?.user?.role === "admin" && (
            <li>
              <Link
                href="/dashboard/admin/add-products"
                onClick={() => setMenuOpen(false)}
              >
                Add Product
              </Link>
            </li>
          )}

          <li>
            <Link href="/cart" onClick={() => setMenuOpen(false)}>
              Cart ({cart.length})
            </Link>
          </li>

          {session ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <>
              <li>
                <Link href="/login" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" onClick={() => setMenuOpen(false)}>
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
