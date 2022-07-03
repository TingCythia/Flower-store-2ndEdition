import React, { useState, useEffect, FC } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { Cart } from '../cart/Cart';
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getTotalPrice, removeFromCart, updateQuantity } from "../cart/cartSlice";
import { getMemoizedNumItems } from '../cart/cartSlice';
import AddressForm from './AddressForm';
import { render } from 'react-dom';




const ShippingOptions  =[{ name: 'Free shipping', price: 0, delivery :" 5-7 working days" }, {name: 'Postnord', price: 29, delivery: " 3-5 working days"}, { name: 'DHL', price : 59, delivery: " 1-2 working days"}];

export default function Review() {

  const [selectedOption, setSelectedOption] = useState<number | any>();
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value

    setSelectedOption(Number(value));
  };


  const numItems = useAppSelector(getMemoizedNumItems );
  const products = useAppSelector((state) => state.products.products);
  const items = useAppSelector((state) => state.cart.items);
  const totalPrice = useAppSelector((getTotalPrice) );
  const total = Number(totalPrice);

  const localData= localStorage.getItem("AddressForm");
  let  data ;
  localData ? data = JSON.parse(localData):[];
  console.log(data)

  let selected;
  if (!selectedOption){
   selected = 
   <Typography variant="subtitle1" gutterBottom>
   Include shipping : {total * 1.25}  kr
   </Typography>
  } else {
    selected = 
    <Typography variant="subtitle1" gutterBottom>
    Include shipping: {total * 1.25+selectedOption}  kr
   </Typography> 
  }

  
  return (
    <React.Fragment>
      <Typography variant="h6" style={{fontWeight:"bold"}} gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {Object.entries(items).map(([id,quantity]) => (
          <ListItem key={products[id].id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={products[id].name}  />
           
            <Typography variant="h6">{products[id].price} kr</Typography>
          </ListItem>
        ))}

      </List>
      <Typography variant="subtitle1" gutterBottom>
       Number of Products: {numItems}
      </Typography> 
      <Typography variant="h6" gutterBottom sx={{fontWeight:700}}>
       Total Price include 25% tax:  </Typography> 
       <span style={{color:"green"}}>{total * 1.25}  kr</span>
     
      <Grid container spacing={2}>

        <Grid item xs={12} sm={6}>
        <h3>Shipping address </h3>
        {data !== null && Object.entries(data).map(([key, value]) =>{
        console.log(key);
        return <>
        <div>{`${value}`}</div></>
        })}


        <h3>Shipping Option</h3>
        <select onChange={selectChange} >
        <option disabled >
          Choose one
        </option>
        {ShippingOptions.map((shippingOption, index) =>(
           <option key={index} value={shippingOption.price}>
            {shippingOption.name} 
            {shippingOption.delivery}
          </option>
        ))}         
      </select>
       <div>{selectedOption} KR</div>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" style={{fontWeight:700}} gutterBottom sx={{ mt: 2.5 }}>
            Payment details
          </Typography>
          
          <Grid container style={{color:"blue", fontWeight:700}}>
          {selected}
          </Grid>
          <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" style={{fontWeight:700}} gutterBottom sx={{ mt: 2 }}>
            Payment Method
          </Typography>
          
          <Grid container style={{color:"blue"}}>
          {localStorage.getItem("PaymentMethod")}
          </Grid>
        </Grid>
        </Grid>

        
      </Grid>
      
    </React.Fragment>
  );
}