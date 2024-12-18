import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { Link } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import { Button } from '@mui/material';
import axios from 'axios';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function Data() {
    const [data,setData]=useState('')
    const navigate = useNavigate();

    useEffect(()=>{
        getData()
    },[])
    const getData=async()=>{
     await axios.get("http://localhost:3000/data")
     .then((res)=>{setData(res.data)
        console.log(res.data)
     })
     .catch((e)=>console.log(e))
    }
    const handleLogout=()=>{
      navigate('/')
      

    }
  return (
    <div style={{width:"100%"}}>
      <Typography
              variant="h6"
              sx={{ marginBottom: 3, color: "text.primary",display:"flex",justifyContent:"center",fontFamily: "cursive",fontSize:"50px"}}
            >
              Welcome!
            </Typography>
    <Stack direction="row" spacing={5} sx={{display:"flex",justifyContent:"end"}}>
      <Link to="/createemployee"><Button variant="outlined" disableElevation disableRipple startIcon={<AddTaskIcon />}>
        Add Employee
      </Button></Link>
      <Button variant="outlined" disableElevation disableRipple startIcon={<LogoutIcon/>} sx={{marginLeft:10}}
      onClick={handleLogout}>
        Logout
      </Button>

    </Stack>
    {data.length===0 ? (<h4 style={{margin:"2px"}}>There is no Employee Details Created</h4>):(
        <div>
        <Dashboard data={data}/>

     </div>
    )}
     


    </div>
  )
}

export default Data