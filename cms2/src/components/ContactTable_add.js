import React, { useState} from 'react'
import axios from 'axios'
import { useNavigate  } from 'react-router-dom';
import { Container, Row, Col, Card , Breadcrumb, Table, Link } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faCircleQuestion, faPersonChalkboard, faBookOpenReader, faIcons, faDownload, faMagnifyingGlassChart, faHandHoldingDollar, faUsersViewfinder, faPeopleGroup,faEdit  } from '@fortawesome/free-solid-svg-icons'

// import { CircleFill } from 'react-bootstrap-icons';
// import * as Icon from 'react-bootstrap-icons';


import Header from './Header'
import FooTer from './Footer'
import '../../../cms2/src/index'
import '../App.css'

function ContactTable_add() {
    
  const [exname, setExname]=useState("")
  const [address, setAddress] = useState("")
  const [name, setName]=useState("")
  const [contact, setContact]=useState("")
  
  
  const history = useNavigate();

  const AddContactTable= async () =>{
    let formField = new FormData()

    // formField.append('name', name) // First 'name' is mention like a form name and another name is same like a database name
    formField.append('exname', exname)
    formField.append('address', address)
    formField.append('name', name)
    formField.append('contact', contact)

    
    await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/contacttable/',
        data: formField
    }).then((response) =>{
        
        console.log(response.data);
        history('/contacttable-view')
    })
}

    return (
       
        <>
       <div>
        <h1>Add Contact Table Details </h1>
        <div className='container'>
       
            
            <div className='form-group'>
                
                <div className='form-control'>
                  
                    <input type="text" className="form-control form-control-1g" placeholder="Enter  Employment Exchange" name= "exname" value={exname} onChange={(e) => setExname (e.target.value)} />
                </div>
            </div>
            <div className='form-group'>
                
                <div className='form-control'>
                  
                    <input type="text" className="form-control form-control-1g" placeholder="Enter Address" name= "address" value={address} onChange={(e) => setAddress (e.target.value)} />
                </div>
            </div>
            <div className='form-group'>
                
                <div className='form-control'>
                  
                    <input type="text" className="form-control form-control-1g" placeholder="Enter Name of Officer" name= "name" value={name} onChange={(e) => setName (e.target.value)} />
                </div>
            </div>
            <div className='form-group'>
                
                <div className='form-control'>
                  
                    <input type="text" className="form-control form-control-1g" placeholder="Enter Contact Details of Officer" name= "contact" value={contact} onChange={(e) => setContact (e.target.value)} />
                </div>
            </div>
            
            
            
            
           
           

            <button className='btn btn-success' onClick={AddContactTable}>Add Contact Table</button>

        </div>

    </div>
        </>
    )
}
    

export default ContactTable_add