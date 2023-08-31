import React from "react";
import "../../components/Header/Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li class="logo">
            <a href="/">
              <span>E-KART</span>
              <p>
                <span class="exp">Explore </span>
                <span class="plus">Plus</span>
                <i class="fa-solid fa-plus" style={{ color: "#ffd900" }}></i>
              </p>
            </a>
          </li>
          <li class="search">
            <i class="fa-solid fa-magnifying-glass icon"></i>
            <input type="text" name="search" class="search_input" />
          </li>
          <li class="">
            <i class="fa-solid fa-shop"></i>
            <span>Become a Seller</span>
          </li>
          <li class="">
            <i class="fa-solid fa-user"></i>
            <span>Login</span>
          </li>
          <li class="">
            <i class="fa-solid fa-cart-shopping"></i>
            <span>Cart</span>
          </li>
          <li class="">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
