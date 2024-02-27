import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams  } from 'react-router-dom';
import { Container, Row, Col, Card , Breadcrumb, Table, Link } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faCircleQuestion, faPersonChalkboard, faBookOpenReader, faIcons, faDownload, faMagnifyingGlassChart, faHandHoldingDollar, faUsersViewfinder, faPeopleGroup,faEdit  } from '@fortawesome/free-solid-svg-icons'

// import { CircleFill } from 'react-bootstrap-icons';
// import * as Icon from 'react-bootstrap-icons';


import Header from './Header'
import FooTer from './Footer'
import '../../../cms2/src/index'
import '../App.css'

function ContactUs_edit() {
    const [name, setName]=useState("")
    const [designation, setDesignation]=useState("")
    const [email, setEmail]=useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [image, setImage]=useState("")
 
  const history = useNavigate();
  const { id } = useParams();

  const loadContactUs= async () =>{
    const {data} = await axios.get(`http://127.0.0.1:8000/api/contactus/${id}/`);
    console.log(data)

    setName (data.name)
    setDesignation (data.designation)
    setEmail (data.email)
    setPhone(data.phone)
    setAddress(data.address)
    setImage (data.image)
 
}

useEffect(() =>{
    loadContactUs()
}, [])
  const UpdateContactUsInfo= async () =>{
    let formField = new FormData()

    // formField.append('name', name) // First 'name' is mention like a form name and another name is same like a database name
    formField.append('name', name)
    formField.append('name', name)
    formField.append('designation', designation)
    formField.append('email', email)
    formField.append('phone', phone)
    formField.append('address', address)
    
    await axios({
        method: 'PUT',
        url: `http://127.0.0.1:8000/api/contactus/${id}/`,
        data: formField
    }).then((response) =>{
        console.log(response.data);
        history('/contactus-view')
    })
}

    return (
       
        <>
       <div>
        <h1>Update Contact  Details</h1>
        <div className='container'>
            
          
            
            <div className='form-group'>
           
            
            <img src={image} height="400" width="100%" />
                <div className='form-control'>
                  
                    <input type="file" className="form-control form-control-1g"  name= "image"   onChange={(e) => setImage (e.target.files[0])} />
                    
                </div>
            
            </div>
            <div className='form-group'>
           
                <div className='form-control'>
                  
                    <input type="text" className="form-control form-control-1g" placeholder="Enter Name" name= "name" value={name} onChange={(e) => setName (e.target.value)} />
                </div>
            </div>
            <div className='form-group'>
           
                <div className='form-control'>
                  
                    <input type="text" className="form-control form-control-1g" placeholder="Enter Designation" name= "designation" value={designation} onChange={(e) => setDesignation (e.target.value)} />
                </div>
            </div>
            <div className='form-group'>
           
                <div className='form-control'>
                  
                    <input type="text" className="form-control form-control-1g" placeholder="Enter Email" name= "email" value={email} onChange={(e) => setEmail (e.target.value)} />
                </div>
            </div>
            <div className='form-group'>
           
           <div className='form-control'>
             
               <input type="number" className="form-control form-control-1g" placeholder="Enter Phone" name= "phone" value={phone} onChange={(e) => setPhone (e.target.value)} />
           </div>
       </div>
            <div className='form-group'>
           
                <div className='form-control'>
                  
                    <input type="text" className="form-control form-control-1g" placeholder="Enter Address" name= "address" value={address} onChange={(e) => setAddress (e.target.value)} />
                </div>
            </div>
           
           
           

            <button className='btn btn-success' onClick={UpdateContactUsInfo}>Update</button>

        </div>

    </div>
        </>
    )
}
    

export default ContactUs_edit