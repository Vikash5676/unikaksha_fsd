import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer>
      <div class="footer_top">
        <p>Let's talk about programming, design, or one of my</p>
        <p>hobbies like football or books?</p>
        <div class="profiles">
          <div>
            <i class="fa-brands fa-linkedin"></i>
            <a
              href="https://www.linkedin.com/in/vikash-kumar7656"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </div>
          <div>
            <i class="fa-brands fa-github"></i>
            <a
              href="https://github.com/Vikash5676"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <div class="footer_bottom">
        <div class="footer_name">Vikash</div>
        <div class="copyright">
          &copy; 2023 MyPortfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
