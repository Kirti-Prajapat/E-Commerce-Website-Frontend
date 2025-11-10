import { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
// import ProductList from './Components/ProductList'
import Cart from './Components/Cart'
import AdminProductPanel from './Components/AdminPanel'


function App() {
  const [cart, setCart] = useState([]);

  
 
  return (
    <>
      <Navbar cart={cart}/>
      <Routes>
        <Route path='/' element={<Home cart={cart} setCart={setCart}/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        {/* <Route path='/productlist' element={<ProductList cart={cart} setCart={setCart}/>}></Route> */}
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}></Route>
        <Route path='/admin' element={<AdminProductPanel/>}></Route>

      </Routes>
    </>
  )
}

export default App
