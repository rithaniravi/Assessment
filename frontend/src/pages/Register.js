import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[confirmpassword,setConfirmpassword]=useState('')
  const [error, setError] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      await axios.post("http://localhost:5000/users", {name,email,password,confirmpassword})
        .then((res) => {
          console.log(res);
          navigate('/');
          setName('')
          setEmail('')
          setPassword('')
          setConfirmpassword('')
          });
        }
      };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px',
          borderRadius: '8px',
          padding: '2rem',
          boxShadow: 2,
        }}
      >
        <Typography variant="h5" sx={{ margin: 2 }}>Register</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField
          id="name"
          placeholder="Enter your Name"
          required
          value={name}
          type="text"
          name="name"
          fullWidth
          variant="standard"
          onChange={(e)=>setName(e.target.value)}
        /><br></br>
        <TextField
          placeholder="Enter your email"
          required
          id="email"
          type="email"
          value={email}
          name="email"
          fullWidth
          variant="standard"
          onChange={(e)=>setEmail(e.target.value)}
        /><br></br>
        <TextField
          placeholder="Enter your password"
          required
          id="password"
          type="password"
          value={password}
          name="password"
          variant="standard"
          fullWidth
          onChange={(e)=>setPassword(e.target.value)}
        /><br></br>
        <TextField
          required
          id="confirmpassword"
          placeholder="Confirm Password"
          value={confirmpassword}
          type="password"
          name="confirmpassword"
          fullWidth
          variant="standard"
          onChange={(e)=>setConfirmpassword(e.target.value)}
        /><br></br>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disableElevation
          disableRipple
          sx={{ marginTop: 2 }}
        >
          Register
        </Button>
      </Box>
    </Container>
  );
}

export default Register;
