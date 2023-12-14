import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import "./Subnav.css"
function Subnav() {
  return<>
  <section className='whole-width-section'>
     <div className='filter-container'>
        <div className='add-contact-container'>
<PersonAddIcon className='icon-add' />
            <div className='add-contact'>Add</div>
        </div>
        <div className='search-container'>
          <input className='input-box'placeholder='Search Contact' ></input>
<ManageSearchIcon className='icon-search' />
        </div>
    </div>
    </section>
  </>
}

export default Subnav