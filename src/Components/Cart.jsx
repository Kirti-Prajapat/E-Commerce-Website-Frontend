import { useState, useEffect } from "react";
import StripeCheckout from 'react-stripe-checkout'
import "../Style/Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);
      const navigate = useNavigate()

  //  Calculate total price
//   const totalprice = () => {
//     let sum = 0;
//     cart.forEach((item) => {
//       sum += item.amount * item.price;
//     });
//     setPrice(sum);
//   };

  
 useEffect(() => {
  let sum = 0;
  cart.forEach((item) => {
    sum += item.amount * item.price;
  });
  setPrice(sum);
}, [cart]);



  const incr = (item, i) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) {
        ind = index;
      }
    });

    const a = [...cart];
    if (i === -1 && a[ind].amount <= 1) {
      return; 
    }

    a[ind].amount += i;
    setCart(a);
  };

  // Remove item
  const remove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };


  // -------------------------
      const token = (token) => {

        console.log(token)

    }

  return (
    <article>
      {cart?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt={item.title} />
            <p>{item.name}</p>
          </div>

          <div>
            <button onClick={() => incr(item, +1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => incr(item, -1)}>-</button>
          </div>

          <div>
            {/* <span>Rs {item.price}</span> */}
            <span>Rs {item.price * item.amount}</span>
            <button onClick={() => remove(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs {price}</span>
      </div>


      {/* this code is for payment gateway in which we use stipe payment gateway  */}

{/* //so install dependency.   Npm i react-stripe-checkout */}

            <div className="payment-section">

                <p>Total Price of Your Cart is : <span>RS {price}</span></p>

                <StripeCheckout

                token = {token}

                stripeKey = 'pk_test_51NqsGdSEnDx41uiAy91YixIr2Oa4csspmLIFWFuYRsQmQDnUQfqUi78bCNTmIm8gmdAePgxV4LvW4a4BR3aASFfu00kVsnIvNN'

                amount={price*100}

                name='shopping cart'

                currency='INR'

                >

                    <button className='btn btn-primary'>Place Your Order</button>

                </StripeCheckout>

                <button className='btn btn-warning'  onClick={() => navigate('/')}> Back to home</button>

            </div>
    </article>
  );
};

export default Cart;
