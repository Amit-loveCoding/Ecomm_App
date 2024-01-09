import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="description">
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className="decriptionbox-description">
        <p>
          "Discover a seamless online shopping experience at this website, where
          a vast selection of high-quality products meets user-friendly
          navigation, ensuring you find exactly what you need with convenience
          and confidence."
        </p>
        <p>
          "Explore the ultimate destination for all your shopping desires at
          this Website, where cutting-edge technology meets curated collections,
          providing a secure and enjoyable e-commerce journey with swift
          transactions, personalized recommendations, and unparalleled customer
          satisfaction."
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
