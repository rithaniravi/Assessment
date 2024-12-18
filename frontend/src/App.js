// import Login from './pages/Login';
import './App.css';
import { Container } from '@mui/material';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './pages/Navbar';
import Register from './pages/Register';
import Data from './components/Data';
import Createemployee from './pages/Createemployee'
import Login from './pages/Login';
import Update from './pages/Update';

function App() {
  return (
    <Container className="App" maxWidth="lg" 
    sx={{marginTop:5,display: 'flex',justifyContent:"center",alignItems:"center"}}>
     

      <BrowserRouter>
       
         <Routes>
            <Route path='/' element={<Navbar/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/dashboard' element={<Data/>}></Route>
            <Route path='/createemployee' element={<Createemployee/>}></Route>
            <Route path='/update/:id' element={<Update/>}></Route> 

         </Routes>
      </BrowserRouter> 
      
    
    
    </Container>
  );
}

export default App;
