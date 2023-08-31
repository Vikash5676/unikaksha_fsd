import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex items-center gap-5">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Me</a>
          </li>
          <li>
            <a href="/contact">Hire Me</a>
          </li>
          <li>
            <a href="/project">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
