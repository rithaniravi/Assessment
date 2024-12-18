import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, Typography } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { Link } from 'react-router-dom';



function Dashboard({data}) {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
       
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      const handleDelete=(id)=>{
        axios.delete('http://localhost:3000/data/'+id)
        .then(res=>{console.log(res)
          window.location.reload()})
        .catch(err=>console.log(err))

      }
  return (
    <Container sx={{marginTop:5}}> 
   
        <Typography variant='h5' sx={{display:"flex",justifyContent:"center"}}>Details of Employees</Typography>
    <TableContainer component={Paper} sx={{marginTop:2}}> 
       
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Employee ID</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">EmailId</StyledTableCell>
            <StyledTableCell align="center">MobileNo</StyledTableCell>
            <StyledTableCell align="center">Designation</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data ? data.map((data,index) => (
            <StyledTableRow key={data.id}>
              <StyledTableCell component="th" scope="row" align="center">{index+1}</StyledTableCell>
              <StyledTableCell align="center">{data.name}</StyledTableCell>
              <StyledTableCell align="center">{data.email}</StyledTableCell>
              <StyledTableCell align="center">{data.mobileno}</StyledTableCell>
              <StyledTableCell align="center">{data.desgination}</StyledTableCell>
              <StyledTableCell align="center">
              <Link to={`/update/${data.id}`}><Button variant="outlined" disableElevation disableRipple startIcon={<EditNoteIcon />} 
              sx={{margin:2}}>Edit</Button></Link>
              <Button variant="outlined" 
              disableElevation 
              disableRipple 
              onClick={(e)=>handleDelete(data.id)}
              startIcon={<DeleteIcon />}>Delete</Button>
              
              </StyledTableCell>
            </StyledTableRow>
           )):null} 
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  )
}

export default Dashboard