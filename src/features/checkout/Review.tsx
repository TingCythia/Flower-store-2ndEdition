import React, { useState } from 'react';
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



/* const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];*/
const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
]; 


const ShippingOptions  =[{ name: 'Free shipping', price: 0 }, {name: 'Postnord', price: 29 }, { name: 'DHL', price : 59 }];

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


  let selected;
  if (!selectedOption){
   selected = 
   <Typography variant="h6" gutterBottom>
   Include shipping : {total * 1.25}  kr
   </Typography>
  } else {
    selected = 
    <Typography variant="h6" gutterBottom>
    Include shipping: {total * 1.25+selectedOption}  kr
   </Typography> 
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {Object.entries(items).map(([id,quantity]) => (
          <ListItem key={products[id].id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={products[id].name} secondary={products[id].name} />
           
            <Typography variant="body2">{products[id].price}</Typography>
          </ListItem>
        ))}
{/*         <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem> */}
      </List>
      <Typography variant="h6" gutterBottom>
       Number of Products: {numItems}
      </Typography> 
      <Typography variant="h6" gutterBottom>
       Total Price include 25% tax: {total * 1.25}  kr
      </Typography> 
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm={6}>
        <div>Shipping Option</div>
        <select onChange={selectChange} >
        <option selected disabled >
          Choose one
        </option>
        {ShippingOptions.map((shippingOption, index) =>(
           <option key={index} value={shippingOption.price}>
            {shippingOption.name}
          </option>

        ))}
                
      </select>

       <div>{selectedOption} KR</div>
         {/*  <AddressForm /> */}
          {/* <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography> */}
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
          {selected}
{/*                    <Typography variant="h6" gutterBottom>
                   Include shipping : {total * 1.25+selectedOption}  kr
                   </Typography> */}
     
{/*             {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))} */}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}