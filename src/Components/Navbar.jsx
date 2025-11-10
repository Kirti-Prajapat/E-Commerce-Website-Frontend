import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Navbar.css';

function Navbar({cart}) {
  // const [show, setShow] = useState(true);
 

  // const handleAddToCart = () => {
  //   setCount(count + 1); 
  //   setShow(false);
  // };

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/signin">Signin</Link>
      <Link to="/signup">Signup</Link>
      {/* <Link to="/productlist">Product List</Link> */}
      <Link to="/cart" className="cart-link">
      <button className="cart-btn">
        <i className="fa-solid fa-cart-shopping"></i>
        <span className="cart-count">{cart.length} Add to cart</span> 
      </button></Link>
      
    </div>
  );
}

export default Navbar;
