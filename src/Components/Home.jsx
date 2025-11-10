import React, { useEffect, useState } from "react";

// import axios from "axios";
import "../Style/ProductList.css"; 
import { useDispatch, useSelector } from "react-redux";
import Action from "../Redux/Action";

// function ProductList() {
  // const [products, setProducts] = useState([]);
 

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8900/getProducts")
  //     .then((res) => {
  //       setProducts(res.data);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching products:", err);
  //     });
  // }, []);


  const Home= ({cart, setCart}) => {

  const {products} = useSelector(state=>state.item)
  const dispatch = useDispatch()


  useEffect(()=>{

    dispatch(Action())

  },[dispatch])

  

  // const addtocart=(item)=>{
  //   let ispresent = false
  //   cart.forEach((product)=>{
  //     if(item._id===product._id)
  //       ispresent=true
  //   })
  //   if(ispresent)
  //     return
  //   setCart([...cart, { ...item, amount: 1 }]);


  // }

  const addtocart = (item) => {
  const itemIndex = cart.findIndex((product) => product._id === item._id);

  if (itemIndex !== -1) {

    const updatedCart = [...cart];
    updatedCart[itemIndex].amount += 1;
    setCart(updatedCart);
  } else {

    setCart([...cart, { ...item, amount: 1 }]);
  }
};

  

  return (
    // <div className="product-container">
    //   <h2>Our Products</h2>
    //   <div className="product-grid">
    //     {products.map((item) => (
    //       <div key={item._id} className="product-card">
    //         <img src={item.img} alt={item.name} />
    //         <h3>{item.name}</h3>
    //         <p>{item.desc}</p>
    //         <strong>Price: ₹{item.price}</strong>
    //         <p>{item.rating} ({item.review} reviews)</p>
    //         <button>Add to Cart</button>
    //       </div>
    //     ))}
    //   </div>
    // </div>


      <div className="product-container">
        <h2>Our Products</h2>
       <div className="product-grid">

         {products?.map((item,ind)=>(

          <div className="product-card" key={ind}>

            <img src={item.img} alt=''/>
            <h3>{item.name}</h3>
            <p>{item.category}</p>
            <strong>Rs.{item.price}</strong>
            <p>{item.rating} ({item.review} reviews)</p>
            <p>{item.desc}</p>
            <button className='btn btn-dark' onClick={() => addtocart(item)}>
  Add to cart
</button>

          </div>



        ))

     }
      </div>
    </div>
  );
}

export default Home;

