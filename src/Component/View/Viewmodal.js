import React from 'react'
import "./Viewmodel.css"
import { useNavigate } from 'react-router-dom'
import {useEffect,useState}from 'react';
 import { useParams } from "react-router-dom"
function Viewmodal() {
  const navigate=useNavigate();
  const {id}=useParams();
  const [data, setdata] = useState({});
    useEffect(() => {
      fetch(`http://localhost:4002/api/get/${id}`)
        .then((data) => data.json())
        .then((contact) => setdata(contact));
    }, [id]);
  return<>


  <div className='view-modal-container'>
  <h2 className='heading'><span>V</span>iew  Contact</h2>
  <div className='view-card-container'>

        <div class="card">
            <div class="photo"></div>
    
            <ul>
                <li><b>{data.name}</b></li>
                <li style={{"marginTop":"10px"}}>{data.phonenumber}</li>

            </ul>
            <div className='address'><span>Address</span> : {data.address}</div>
            <div className='address'><span>Email</span> : {data.email}</div>
            <button onClick={()=>navigate('/')}  className='close'>Close</button>
          </div>

  </div>
  </div>
  </>
}

export default Viewmodal