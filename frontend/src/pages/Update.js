import React, { useEffect, useState } from 'react';
import { TextField, Button, Box, Typography, Container, Alert } from '@mui/material';
// import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';


function Update() {
  const{id} =useParams()
  const navigate = useNavigate();
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [mobileno,setMobileno]=useState('')
  const [desgination,setDesgination]=useState('')
  const [error, setError] = useState('');
 
  useEffect(()=>{
    axios.get("http://localhost:3000/data/"+id)
    .then(res=>{console.log(res.data)
        setName(res.data.name)
        setEmail(res.data.email)
        setMobileno(res.data.mobileno)
        setDesgination(res.data.desgination)
    })
    .catch(err=>console.log(err))
  },[id])
  const handleSubmit = async (e) => {
    e.preventDefault();
   
      setError('');
    await axios.put("http://localhost:3000/data/"+id, { name,email,mobileno,desgination })
    .then(res=>{
        console.log(res)
        navigate("/dashboard")
    })
    .catch(err=> {
        console.log(err)})
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
        <Typography variant="h5" sx={{ margin: 2 }}>Edit</Typography>
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
          placeholder="Enter your Mobileno"
          required
          id="mobileno"
          type="number"
          value={mobileno}
          name="mobileno"
          variant="standard"
          fullWidth
          onChange={(e)=>setMobileno(e.target.value)}
        /><br></br>
        <TextField
          required
          id="desgination"
          placeholder="desgination"
          value={desgination}
          type="desgination"
          name="desgination"
          fullWidth
          variant="standard"
          onChange={(e)=>setDesgination(e.target.value)}
        /><br></br>
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
              color: 'white',
            },
            '&:active': {
              backgroundColor: '#0d3c78',
              color: 'white',
            },
            transition: 'background-color 0.3s ease',
          }}
        >
          Update
        </Button>
      </Box>
    </Container>
  );
}

export default Update;
