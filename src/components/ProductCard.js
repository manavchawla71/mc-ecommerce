import React from "react";
import "./ProductCard.css";
import { products } from "./products";
import { BsCart2, BsFillHeartFill, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div>
      {products.map((item) => (
        <section className="ecom-product-card" key={item._id}>
          <div className="vertical-card-product">
            <div className="vertical-card-img-container">
              <Link to={`/single-product-page/${item.id}`}>
                <img
                  src={item.productImg}
                  alt="product"
                  className="responsive-img-card cursor"
                />
              </Link>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductCard;
