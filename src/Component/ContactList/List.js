import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "./List.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {
  fetchcontact,
  removecontact,
 
} from "../Redux/contactSlice";



function List() {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const {contactList} = useSelector(
    (state) => state.contactKey
  );


  useEffect(() => {
    dispatch(fetchcontact());
  }, [dispatch]);


  const deletecontact= (id) => {
    dispatch(removecontact(id));
  }
 
  return<>
  <section className='list-container'>
     <h2 className='list-head'><span>L</span>ist <span>O</span>f <span>C</span>alls</h2> 
    <div className='one-contact-row'>

    {contactList &&
                contactList.map((user, i) => {
                      return (
                        <> 
                        <div className="table-container">
    <div className='col-1'>
        <div ><LocalPhoneIcon className='logo-phone'/></div>
        <div className='logo-name'>{user.name}</div>
      </div>
      <div className='col-2'>
        <button id='view' onClick={()=>navigate(`/contact/view/${user._id}`)} className='button'><VisibilityOutlinedIcon/></button>
        <button id='edit' onClick={()=>navigate(`/contact/update/${user._id}`)} className='button'><EditOutlinedIcon/></button>
        <button id='delete' onClick={() => deletecontact(user._id)} className='button'><DeleteOutlineOutlinedIcon/></button>
      </div>
    </div>
  
    </>
    );
  }
  )
}  </div>
  </section>
  </>
}

export default List