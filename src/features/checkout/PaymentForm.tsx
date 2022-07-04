import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Formik } from 'formik';
import { useState } from "react";
import { Radio, Divider,  Button, Box, Paper} from '@mui/material';
import * as yup from "yup";





export default function PaymentForm() {
  
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  
  const handleFormSubmit = async (values: any) => {
    console.log(values);
  };

  const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setPaymentMethod(event.target.value);
    localStorage.setItem("PaymentMethod", event.target.value)
  } 
  
  
  
  return (
    <React.Fragment>

{/* Start-Credit-Card */}
<FormControlLabel 
name="credit-card" 
label={<Typography fontWeight="600">Pay with credit card</Typography>} 
control=
{<Radio 
  checked={paymentMethod === "credit-card"} 
  color="secondary" size="small" 
  value="credit-card"
  onChange ={handlePaymentMethodChange} 
  />} 
  sx={{
        mb: "1.5rem"
      }} 
 />

        <Divider sx={{
        mb: "1.25rem",
        mx: "-1rem"
      }} />

        {paymentMethod === "credit-card" && 
        <Formik 
        initialValues={initialValues} 
        validationSchema={checkoutSchema}  
        onSubmit={handleFormSubmit} 
        >
            {
            ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit }) => <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Grid container spacing={3}>
                    <Grid item sm={6} xs={12}>
                      <TextField name="card_no" label="Card Number" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.card_no || ""} helperText={touched.card_no && errors.card_no} />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField name="exp_date" label="Exp Date" placeholder="MM/YY" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.exp_date || ""} helperText={touched.exp_date && errors.exp_date} />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField name="name" label="Name on Card" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.name || ""} helperText={touched.name && errors.name} />
                    </Grid>
   
                    <Grid item sm={6} xs={12}>
                      <TextField name="cvv" label="CVV" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.name || ""} helperText="Last three digits on signature strip" />
                    </Grid>
                  </Grid>
       
                </Box>

{/*                 <Button variant="outlined" color="primary" sx={{mb: "30px" }}>
                  Submit
                </Button> */}

                <Divider sx={{
            mb: "1.5rem",
            mx: "-1rem"
          }} />
              </form>}
          </Formik>}
{/* End-Credit-Card */}

{/* Start-Swish */}
<FormControlLabel 
name="Swish" 
label={<Typography fontWeight="600">Pay with Swish</Typography>} 
control=
{<Radio 
  checked={paymentMethod === "Swish"} 
  color="secondary" size="small" 
  value="Swish"
  onChange ={handlePaymentMethodChange} 
  />} 
  sx={{
        mb: "1.5rem"
      }} 
 />
 <Grid component="img"
 style={{marginBottom:-14, marginLeft:-20}}
        sx={{
          height: 55,
          width: 300,
          maxHeight: { xs: 50, md: 100 },
          maxWidth: { xs: 250, md: 350 }, 
        }}
    src="../src/images/Swish-logo.png">
</Grid>
      

        <Divider sx={{
        mb: "1.25rem",
        mx: "-1rem"
      }} />

        {paymentMethod === "Swish" && 
        <Formik 
        initialValues={initialValues} 
        validationSchema={checkoutSchema}  
        onSubmit={handleFormSubmit} 
        >
            {
            ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit }) => <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Grid container spacing={3}>
                    <Grid item sm={6} xs={12}>
                      <TextField name="phone_no" label="Phone Number" placeholder="+46" 
                      fullWidth onBlur={handleBlur} onChange={handleChange} value={values.phone_no || ""} helperText={touched.phone_no && errors.phone_no} />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField name="amount" label="Amount" placeholder="SEK" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.amount || ""} helperText={touched.amount && errors.amount} />
                    </Grid>

                  </Grid>
       
                </Box>
{/* 
                <Button variant="outlined" color="primary" sx={{
            mb: "30px"
          }}>
                  Submit
                </Button> */}

                <Divider sx={{
            mb: "1.5rem",
            mx: "-1rem"
          }} />
              </form>}
          </Formik>}
{/* End-Swish*/}

{/* Start-Paypal*/}
<FormControlLabel 
name="Paypal" 
label={<Typography fontWeight="600">Pay with Paypal</Typography>} 
control=
{<Radio 
  checked={paymentMethod === "Paypal"} 
  color="secondary" size="small" 
  value="Paypal"
  onChange ={handlePaymentMethodChange} 
  />} 
  sx={{
        mb: "1.5rem"
      }} 
 />
 <Grid component="img"
 style={{marginBottom:-5, marginLeft:70}}
        sx={{
          height: 35,
          width: 110,
          maxHeight: { xs: 50, md: 100 },
          maxWidth: { xs: 250, md: 350 }, 
        }}
    src="../src/images/Paypal-logo.png">
</Grid>
        <Divider sx={{
        mb: "1.25rem",
        mx: "-1rem"
      }} />

        {paymentMethod === "Paypal" && 
        <Formik 
        initialValues={initialValues} 
        validationSchema={checkoutSchema}  
        onSubmit={handleFormSubmit} 
        >
            {
            ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit }) => <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Grid container spacing={3}>
                    <Grid item sm={6} xs={12}>
                      <TextField name="email" label="Email" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.email || ""} helperText={touched.email && errors.email} />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField name="password" label="Password"  fullWidth onBlur={handleBlur} onChange={handleChange} value={values.password || ""} helperText={touched.password && errors.password} />
                    </Grid>
                  </Grid>
       
                </Box>

       {/*          <Button variant="outlined" color="primary" sx={{
            mb: "30px"
          }}>
                  Submit
                </Button> */}

                <Divider sx={{
            mb: "1.5rem",
            mx: "-2rem"
          }} />
              </form>}
          </Formik>}
{/* End-Paypal*/}

    </React.Fragment>
  );
}

const initialValues = {
  card_no: "",
  phone_no:"",
  name: "",
  amount:"",
  exp_date: "",
  cvv: "",
  email:"",
  password:"",
};
const checkoutSchema = yup.object().shape({
  card_no: yup.string()
  .label('Card number')
  .max(16)
  .matches(/^[0-9]+$/, "enter valid number")
  .required("required"),
  name: yup.string()
  .label('Name on card')
  .required("required"),
  exp_date: yup.string()
  .typeError('Not a valid expiration date. Example: MM/YY')
  .max(5, 'Not a valid expiration date. Example: MM/YY')
  .matches(
    /([0-9]{2})\/([0-9]{2})/,
    'Not a valid expiration date. Example: MM/YY'
  )
  .required('Expiration date is required'),
  cvv: yup.string()
  .label('CVC')
  .min(3)
  .max(4)
  .required("required") ,
  phone_no: yup.string()
  .matches(/^([+]46)\s*(7[0236])\s*(\d{4})\s*(\d{3})$/, "enter valid phone number")
  .required('Phone number is required'),
  amount:yup.string()
  .max(5)
  .matches(/^[0-9]+$/, "enter valid price")
  .required('Amount is required'),
  email: yup.string().email()
  .required('Email is required'),
  password: yup.string()
  .required('Please Enter your password')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  ),
});
