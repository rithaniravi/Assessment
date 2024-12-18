import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
const isValidPassword = (password) => password.length >= 6;

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const handleEmailChange = (e) => setEmail(e.target.value);
  // const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); 


    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!isValidPassword(password)) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    try {
      const response = await axios.get('http://localhost:5000/users');
      const users = response.data;

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        alert('Login successful!');
        navigate('/dashboard');
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Failed to login. Please try again later.');
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
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '2rem',
          boxShadow: 2
        }}
      >
        <Typography variant="h5" sx={{ margin: 2 }}>Login</Typography>

        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        <TextField
          placeholder="Enter the Email"
          required
          id="email"
          type="email"
          value={email}
          variant="standard"
          onChange={(e)=>setEmail(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
          error={!!error && !isValidEmail(email)}
          helperText={error && !isValidEmail(email) ? "Please enter a valid email address" : ""}
        />

        <TextField
          required
          placeholder="Enter the Password"
          id="password"
          type="password"
          value={password}
          variant="standard"
          onChange={(e)=>setPassword(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
          error={!!error && !isValidPassword(password)}
          helperText={error && !isValidPassword(password) ? "Password must be at least 6 characters long" : ""}
        />

        <Button
          variant="contained"
          type="submit"
          fullWidth
          disableElevation
          disableRipple
          sx={{
            backgroundColor: '#1976d2',
            color: 'white',
            '&:hover': {
              backgroundColor: '#115293',
            },
            '&:active': {
              backgroundColor: '#0d3c78',
            },
            transition: 'background-color 0.3s ease',
          }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
}

export default Login;
