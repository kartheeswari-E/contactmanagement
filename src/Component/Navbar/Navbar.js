import React from 'react'
import "./Navbar.css"
import "../SubNavbar/Subnav.css"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { useNavigate } from 'react-router-dom';
import Subnav from '../SubNavbar/Subnav';
function Navbar() {
  const navigate = useNavigate();
  return<>
  <section className='navbar-container'>
    <div className='right'>
    <h2 className='project-name'><span>Phone</span>book</h2></div>
    <div className='left'>
    <div onClick={()=>navigate('/addcontacts')} className='add-contact-container'>
<PersonAddIcon className='icon-add' />
            <div className='add-contact'>Add</div>
        </div>
        <div className='search-container'>
          <input className='input-box'placeholder='Search Contact' ></input>
<ManageSearchIcon className='icon-search' />
       </div> </div>
  </section> 


  </>
}

export default Navbar