import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import employees from '../image/employees.png'
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

function Navbar() {
  return (
    <Container sx={{ width: "900px" }}>
      <Typography variant='h5' sx={{ display: "flex", justifyContent: "center" }}>Employee Management System</Typography>
      <Box
        sx={{
          marginTop: 5,
          width: "900px",
          height: "500px",
          position: "relative",
        }}
      >
         <Typography
              variant="h6"
              sx={{ marginBottom: 3, color: "text.primary",display:"flex",justifyContent:"center",fontFamily: "cursive",fontSize:"50px"}}
            >
              Welcome!
            </Typography>
        <Grid container spacing={0} sx={{ height: "100%" }}>
         
          <Grid item xs={5}>
            <Box
              component="img"
              src={employees} 
              alt="Welcome"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
          </Grid>

        
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
           

            <Link to='/login' style={{ textDecoration: "none", marginBottom: 10, fontSize: "25px" }}>
              <Button variant="outlined" disableElevation
          disableRipple startIcon={<LoginIcon />}>Login</Button>
            </Link>
            <Link to='/register' style={{ textDecoration: "none" }}>
              <Button variant="outlined" disableElevation
          disableRipple startIcon={<HowToRegIcon />}>Register</Button>
              
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Navbar;
