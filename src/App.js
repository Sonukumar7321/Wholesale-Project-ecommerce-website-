import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import About from './component/About/About';
import Product  from './component/Products/Product';
import Orders from './component/Orders/Orders'
import Orders1 from './component/Orders/Orders1'
import ordsucess from './component/Orders/ordsucess'
import ordsucess1 from './component/Orders/ordsucess'
import Footer from './component/Footer/Footer'
import {Login } from './component/LoginSignup/Login';
import { Signup } from './component/LoginSignup/Signup';
import Prod, {Prod1, Prod2, Prod3, Prod4, Prod5, Prod6, Prod7, Prod8, Prod9} from './component/Products/prod';



function App() {

  return (
    <>
    <Router>
      <Navbar  />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/Product' element={<Product/>} />
          <Route path='/Product/ProductView' element={<Prod/>} />
          <Route path='/Product/ProductView1' element={<Prod1/>} /> 
          <Route path='/Product/ProductView2' element={<Prod2/>} />
          <Route path='/Product/ProductView3' element={<Prod3/>} />
          <Route path='/Product/ProductView4' element={<Prod4/>} />
          <Route path='/Product/ProductView5' element={<Prod5/>} />
          <Route path='/Product/ProductView6' element={<Prod6/>} />
          <Route path='/Product/ProductView7' element={<Prod7/>} />
          <Route path='/Product/ProductView8' element={<Prod8/>} />
          <Route path='/Product/ProductView9' element={<Prod9/>} />
          {/*<Route path='/Product/ProductView10' element={<Prod10/>} />
          <Route path='/Product/ProductView11' element={<Prod11/>} />
          <Route path='/Product/ProductView12' element={<Prod12/>} />
          <Route path='/Product/ProductView13' element={<Prod13/>} />
          <Route path='/Product/ProductView14' element={<Prod14/>} />
          <Route path='/Product/ProductView15' element={<Prod15/>} />*/}
        <Route path='/Orders' element={<Orders/>} />
          <Route path='/Orders/OrderSucess' element={ordsucess}/>
        <Route path='/Orders1' element={<Orders1/>} />
          <Route path='/Orders1/OrderSucess' element={ordsucess1} /> 
        <Route path='/About' element={<About/>} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
      <Footer/>
    </Router>
    </>

  );
}

export default App;

