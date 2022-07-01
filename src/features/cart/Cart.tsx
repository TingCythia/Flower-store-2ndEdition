import React from "react";
import classNames from "classnames";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getTotalPrice, removeFromCart, updateQuantity } from "./cartSlice";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

export function Cart() {
  
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const items = useAppSelector((state) => state.cart.items);
  const totalPrice = useAppSelector((getTotalPrice) );
  const checkoutState = useAppSelector((state )=> state.cart.checkoutState)

  function onQuantityChanged(e: React.FocusEvent<HTMLInputElement>, id:string){
         const quantity = Number(e.target.value) || 0;
         dispatch(updateQuantity({id, quantity}))
  }

  function onCheckout(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
   
}
  

  const tableClasses = classNames({
    [styles.table]: true,
    [styles.checkoutErr0r]: checkoutState === "ERROR",
    [styles.checkoutLoading]: checkoutState === "LOADING",
   });

  return (
    <main className="page">
      <h1 style={{display:'flex', flexDirection:'column', alignItems:'center'}}>Shopping Cart</h1>
      <table style={{width:"100%", overflowX:'auto'}} className={tableClasses}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
  <tbody>
  {Object.entries(items).map(([id, quantity]) => (
    <tr key={id}>
      <td><img style= {{width:120}} src={products[id].imageURL}></img></td>
      <td>{products[id].name}</td>
      <td>
        <input
          type="text"
          className={styles.input}
          defaultValue={quantity}
          onBlur={(e)=>onQuantityChanged(e, id)}
        />
      </td>
      <td>{products[id].price} kr</td>
      <td>
        <button
          aria-label={`Remove ${products[id].name}} from Shopping Cart`}
          onClick={()=> dispatch(removeFromCart(id))}
        >
          X
        </button>
      </td>
    </tr>
  ))}
</tbody>

      </table>

            <div style={{marginLeft:"10px"}}>
            <span><h3>Total before tax</h3></span>
            <span className={styles.total}>{totalPrice} kr</span>
            </div><br></br>
      {totalPrice === "0.00"? (     
        <Link  to="/">
        <button style={{marginLeft:"10px", marginBottom:"20px"}} disabled={true} className={styles.button} type="submit">
          Checkout
        </button></Link>
      ) :
      (<Link  to={`/Checkout/${totalPrice}`}>
        <button style={{marginLeft:"10px", marginBottom:"20px"}} disabled={false} className={styles.button} type="submit">
          Checkout
        </button></Link>
      ) }
    </main>
  );
}
