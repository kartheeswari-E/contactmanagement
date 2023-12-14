
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { modifiedcontact } from "../Redux/contactSlice";
export function Update() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const [updateData, setUpdateData] = useState();
  
    const { users, loading } = useSelector((state) => state.app);
  
    useEffect(() => {
      if (id) {
        const singleUser = users.filter((cont) => cont.id === id);
        setUpdateData(singleUser[0]);
      }
    }, []);
  
    const newData = (e) => {
      setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    };
  
    console.log("updated data", updateData);
  
    const handleUpdate = (e) => {
      e.preventDefault();
      dispatch(modifiedcontact(updateData));
      navigate("/");
    };

  return <>
    <div className='add-container'>
  <div className='heading'><span>E</span>dit Contact</div>
   <Box onSubmit={handleUpdate} className="add-student-form" component="form"  >
            <TextField
                name="name"
                value={updateData && updateData.name}
                onChange={newData}

                label="name" variant="outlined" />

<TextField
                name="email"
                value={updateData && updateData.email}
                onChange={newData}
                label="email" variant="outlined" />


            <TextField
                name="phonenumber"
                value={updateData && updateData.phonenumber}
                onChange={newData}
            
                label="phonenumber" variant="outlined" />

            <TextField
                name="address"
                value={updateData && updateData.address}
                onChange={newData}
          
                label="address" variant="outlined" />

<div className='button-container'>   
           <Button onClick={()=>navigate('/')} className='button-submit' variant="contained">Cancel</Button>
            <Button className='button-submit' type="Submit" variant="contained">Edit Contact</Button></div>
        </Box>
        </div>
  </>
}