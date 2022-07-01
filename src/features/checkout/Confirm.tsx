import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';


const removeLocalstorage =()=>{
    localStorage.removeItem("AddressForm")
}
const theme = createTheme();
export const Confirmation = ()=>{

return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Your purchase
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
<React.Fragment>
<Typography variant="h5" gutterBottom>
  Thank you for your order.
</Typography>
<Typography variant="subtitle1">
  Your order number is #2001539. We have emailed your order
  confirmation, and will send you an update when your order has
  shipped.
</Typography>
<Link  href="/products" >
  <Button color="inherit" onClick={removeLocalstorage}>
  Back to Store</Button></Link>
</React.Fragment>
</Paper>
</Container>
</ThemeProvider>
)
}