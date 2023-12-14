import React,{useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box'
import { useDispatch} from "react-redux";
import {
    addcontact,
  } from "../Redux/contactSlice";
import "./Add.css"
function Add() {

    const [users, setUsers] = useState({});

    const navigate = useNavigate();
  
    const dispatch = useDispatch();
  
    const getUserData = (e) => {
      setUsers({ ...users, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("users...", users);
      dispatch(addcontact(users));
      navigate("/");
    };


  return <>
  <div className='add-container'>
   <h2 className='heading'><span>A</span>dd  Contact</h2>
   <Box onSubmit={handleSubmit} className="add-student-form" component="form"  >
            <TextField
                name="name"
                value={users.name}
                onChange={getUserData}

                label="Name" variant="outlined" />

<TextField
                name="phonenumber"
                value={users.phonenumber}
                onChange={getUserData}

                label="phonenumber" variant="outlined" />


            <TextField
                name="address"
                value={users.address}
                onChange={getUserData}
                label="address" variant="outlined" />


            <TextField
                name="email"
                value={users.email}
                onChange={getUserData}
                label="email" variant="outlined" />
          
          <div className='button-container'>   
           <Button onClick={()=>navigate('/')} className='button-submit' variant="contained">Cancel</Button>
            <Button className='button-submit' type="Submit" variant="contained">Add Contact</Button></div>
    
        </Box>
        </div>
  </>
}

export default Add