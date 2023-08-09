import React from "react";
import "./Navbar.css";
import { BsCart2, BsHeart, BsPerson, BsSearch } from "react-icons/bs";
import Categories from "./Categories";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="free-shipping-msg">
        FREE SHIPPING FOR ORDERS Rs.2000+. GIFTED RANGER COUPONS WITH PURCHASES
        Rs.2500+.
      </div>

      <nav className="navbar-ecom flex ">
        <div className="flex list">
          <Link to="/" className="ranger-logo">
            <img
              src="https://res.cloudinary.com/bhakti1801/image/upload/v1649919109/R_ezqx3h.png"
              alt="logo"
              className="logo-ecom"
            />
          </Link>
        </div>
        <div className="category-display-one">
          <div className="categories">
            {Categories.map((category) => (
              <Link to={`/`} key={category._id} className="category">
                {category.categoryName}
              </Link>
            ))}
          </div>
        </div>
        <div className="brand-search-container">
          <input
            type="text"
            className="brand-search-input"
            placeholder="Search for Items"
          />
          <BsSearch size={21} />
        </div>
        <ul className="navbar-second-part flex list">
          <Link to="/user-profile">
            <BsPerson size={28} color={"var(--black-color)"} />
          </Link>
          <Link to="/wishlist-page">
            <BsHeart size={25} color="var(--balck-color)" />
          </Link>
          <Link to="/cart-page">
            <BsCart2
              className="icon-badge icon-hover"
              size={27}
              color="var(--black-color)"
            />
          </Link>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
