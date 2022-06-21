import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Products } from "./features/products/Products";
import { CartLink } from "./features/cart/CartLink";
import { Cart } from "./features/cart/Cart";
import {singleProduct} from './features/singleProduct/single';
import styles from "./App.module.css";
import Nav from "./features/Nav";
import Footer from "./features/Footer";
import Navbar from "./features/Navbar";
import Checkout from "./features/checkout/Checkout"

function App() {
  return (
    <Router>
  <div className={styles.app}><Navbar /></div>

  
      
      <Switch>
        <Route exact path="/">
        <Nav />
        </Route> 
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/Nav">
          <Nav />
        </Route>
        <Route path='/singleProduct/:id' component={singleProduct } />
       {/*  <singleProduct />
        </Route> */}
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/Checkout">
          <Checkout />
        </Route>


      </Switch>
      <div><Footer/> </div>
    </Router>
  
  );
}

export default App;

/* function Home() {
  return (
    <main className="page">
      <h1>Welcome to the Store</h1>
      <figure>
        <img src="/backgroundImg.jpg" alt="A large old storefront" width="800" />

      </figure>
    </main>
  );
} */
