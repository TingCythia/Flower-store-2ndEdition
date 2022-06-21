import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Formik } from 'formik';
import { useState } from "react";
import { Radio, Divider,  Button, Box} from '@mui/material';
import * as yup from "yup";




export default function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const handleFormSubmit = async (values: any) => {
    console.log(values);
  };

  const handlePaymentMethodChange = (name:any) =>{
  setPaymentMethod(name)
  }
  
  return (
    <React.Fragment>

{/* Start-Credit-Card */}
<FormControlLabel name="credit-card" label={<Typography fontWeight="600">Pay with credit card</Typography>} control={<Radio checked={paymentMethod === "credit-card"} color="secondary" size="small" />} sx={{
        mb: "1.5rem"
      }}  onChange={handlePaymentMethodChange}  />

        <Divider sx={{
        mb: "1.25rem",
        mx: "-2rem"
      }} />

        {paymentMethod === "credit-card" && 
        <Formik initialValues={initialValues} validationSchema={checkoutSchema}  onSubmit={handleFormSubmit} >
            {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => <form onSubmit={handleSubmit}>
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
                      <TextField name="name" label="Name on Card" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.name || ""} helperText={touched.name && errors.name} />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField name="cvv" label="CVV" fullWidth onBlur={handleBlur} onChange={handleChange} value={values.name || ""} helperText="Last three digits on signature strip" />
                    </Grid>
                  </Grid>
       
                </Box>

                <Button variant="outlined" color="primary" sx={{
            mb: "30px"
          }}>
                  Submit
                </Button>

                <Divider sx={{
            mb: "1.5rem",
            mx: "-2rem"
          }} />
              </form>}
          </Formik>}
{/*       <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid> */}
{/* End-Credit-Card */}

{/* Start-Swish */}
<FormControlLabel name="Swish" label={<Typography fontWeight="600">Pay with Swish</Typography>} control={<Radio checked={paymentMethod === "Swish"} color="secondary" size="small" />} sx={{
        mb: "1.5rem"
      }}  onChange={handlePaymentMethodChange} />

        <Divider sx={{
        mb: "1.5rem",
        mx: "-2rem"
      }} />

        {paymentMethod === "Swish" && <React.Fragment>
            <Box alignItems="flex-end" mb={4}>
              <TextField name="email" label="Paypal Email" type="email" /* fullWidth sx={{
            mr: isMobile ? "1rem" : "30px"
          }} */ />
              <Button variant="outlined" color="primary" type="button">
                Submit
              </Button>
            </Box>

            <Divider sx={{
          mb: "1.5rem",
          mx: "-2rem"
        }} />
          </React.Fragment>}
{/* End-Swish*/}

    </React.Fragment>
  );
}

const initialValues = {
  card_no: "",
  name: "",
  exp_date: "",
  cvv: "",
  shipping_zip: "",
  shipping_country: "",
  shipping_address1: "",
  shipping_address2: "",
  billing_name: "",
  billing_email: "",
  billing_contact: "",
  billing_company: "",
  billing_zip: "",
  billing_country: "",
  billing_address1: "",
  billing_address2: ""
};
const checkoutSchema = yup.object().shape({
  card_no: yup.string().required("required"),
  name: yup.string().required("required"),
  exp_date: yup.string().required("required"),
  cvc: yup.string().required("required") // shipping_zip: yup.string().required("required"),
  // shipping_country: yup.object().required("required"),
  // shipping_address1: yup.string().required("required"),
  // billing_name: yup.string().required("required"),
  // billing_email: yup.string().required("required"),
  // billing_contact: yup.string().required("required"),
  // billing_zip: yup.string().required("required"),
  // billing_country: yup.string().required("required"),
  // billing_address1: yup.string().required("required"),

});
