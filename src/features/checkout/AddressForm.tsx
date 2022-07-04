import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useFormik, Formik, FormikHelpers } from 'formik';
import * as yup from "yup";
import { Box, Button} from '@mui/material';
import { useState } from "react";
import { Link, useHistory } from 'react-router-dom';


const initialValues= {
  firstName: '',
  lastName:'',
  address1:'',
  address2:'',
  city:'',
  state:'',
  zip:'',
  country:'',
};



interface FormValues{
  firstName: string,
  lastName:string,
  address1:string,
  address2:string,
  city:string,
  state:string,
  zip:string,
  country:string,
}



export default function AddressForm(){
 
  const checkoutSchema = yup.object().shape({
    firstName:yup.string()
        .required("Name is required")
        .min(3, "Name too short! Must be at least 3 characters.")
        .max(20, "Name too long! Must be less than 20 characters.")
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
    lastName: yup.string()
    .required("Name is required")
    .min(3, "Name too short! Must be at least 3 characters.")
    .max(20, "Name too long! Must be less than 20 characters.")
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
          'Name can only contain Latin letters.'
      ),
    address1: yup.string()
    .required("Address is required")
    .max(40, "Address too long can fill in Line 2."),
    address2: yup.string()
    .max(40, "Up to limit"),
    country: yup.string().required("Country is required")
    .max(15)
    .matches(/^[A-Za-z ]*$/, 'Please enter valid country name'),
    city: yup.string().required("City is required")
    .max(15)
    .matches(/^[A-Za-z ]*$/, 'Please enter valid city name'),
    zip:yup.string().required('Please enter valid ZIP')
    .max(5)
    .matches(/^[0-9]+$/, "Must be valid ZIP "),
});



const handleSubmit =( values: FormValues, formikHelpers: FormikHelpers<FormValues>)=>{
  alert("Your information has been summitted!");
  formikHelpers.setSubmitting(false);
  localStorage.setItem("AddressForm", JSON.stringify(values));
};




  return (
    <React.Fragment>
    
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
    { <Formik 
        initialValues={initialValues} 
        validationSchema={checkoutSchema}  
        onSubmit={(values, errors) => {
        handleSubmit(values, errors);
        
      }}
        >
      {
      ({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
      })=>
      <form onSubmit={handleSubmit} >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleChange("firstName")}
            value={values.firstName}  
            onBlur={handleBlur("firstName")}      
          />
          <Box>{touched.firstName && errors.firstName}</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={handleChange("lastName")}
            value={values.lastName}  
            onBlur={handleBlur("lastName")} 
          />
         <Box>{touched.lastName && errors.lastName}</Box>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={handleChange("address1")}
            value={values.address1} 
            onBlur={handleBlur("address1")} 
          />
          <Box>{touched.address1 && errors.address1}</Box>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={handleChange("address2")}
            value={values.address2} 
          />
          <Box>{touched.address2 && errors.address2}</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={handleChange("city")}
            value={values.city} 
            onBlur={handleBlur("city")} 
          />
          <Box>{touched.city && errors.city}</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            onChange={handleChange("state")}
            value={values.state} 
          />
          <Box>{touched.state && errors.state}</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={handleChange("zip")}
            value={values.zip} 
            onBlur={handleBlur("zip")} 
          />
          <Box>{touched.zip && errors.zip}</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={handleChange("country")}
            value={values.country} 
            onBlur={handleBlur("country")} 
          />
           <Box>{touched.country && errors.country}</Box>
        </Grid>
        
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
  
              <Button
                    variant="contained"
                    sx={{ mt: 3, ml: 1 }}
                    color="secondary"
                    type="submit"
    
                  >
                 
   Please Summit First 
 
      </Button>

      </form>
      }
      </Formik>}
    </React.Fragment>
  );
}


 


