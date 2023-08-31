import axios from "axios";
import React, { useEffect, useState } from "react";
import "../CardCarousal/CardCarousal.css";

const CardCarousal = ({ categ }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${categ}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div className="card_crousal_container">
      <div className="card_crousal">
        <div className="fixed_card">
          <div className="title">{categ}</div>
          <div className="button">See All</div>
        </div>
        <div className="card_slider">
          {products.map((ele, idx) => (
            <div className="card" key={ele.title + idx}>
              {ele.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCarousal;
