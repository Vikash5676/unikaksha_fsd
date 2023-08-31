import React, { useEffect, useState } from "react";
import image from "../../assets/category/grocery.png";
import mobile from "../../assets/category/mobiles.png";
import fasion from "../../assets/category/fasion.png";
import electronic from "../../assets/category/electronics.png";
import home_furniture from "../../assets/category/home.jpg";
import appliances from "../../assets/category/appliance.png";
import travels from "../../assets/category/travels.png";
import offer from "../../assets/category/offers.png";
import toys from "../../assets/category/toys.png";
import twoWheeler from "../../assets/category/twoeheeler.png";

import "../HomePage/HomePage.css";
import Crousal from "../../components/Crousal/Crousal";
import axios from "axios";
import CardCarousal from "../../components/CardCarousal/CardCarousal";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <section class="containers">
        <div class="hero1">
          <div>
            <img src={image} alt="Groccery" />
            <span>Groccery</span>
          </div>
          <div>
            <img src={mobile} alt="Mobiles" />
            <span>Mobiles</span>
          </div>
          <div>
            <img src={fasion} alt="Fasion" />
            <span>Fasion</span>
          </div>
          <div>
            <img src={electronic} alt="Electronics" />
            <span>Electronics</span>
          </div>
          <div>
            <img src={home_furniture} alt="Home & Furniture" />
            <span>Home & Furniture</span>
          </div>
          <div>
            <img src={appliances} alt="Appliances" />
            <span>Appliances</span>
          </div>
          <div>
            <img src={travels} alt="Travel" />
            <span>Travel</span>
          </div>
          <div>
            <img src={offer} alt="Top Offers" />
            <span>Top Offers</span>
          </div>
          <div>
            <img src={toys} alt="Beauty,Toys & More" />
            <span>Beauty,Toys & More</span>
          </div>
          <div>
            <img src={twoWheeler} alt="Two Wheelers" />
            <span>Two Wheelers</span>
          </div>
        </div>
      </section>
      <Crousal />
      {categories.map((ele) => (
        <CardCarousal categ={ele} />
      ))}
    </>
  );
};

export default HomePage;
