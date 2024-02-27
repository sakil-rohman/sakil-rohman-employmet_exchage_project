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

function Ministry_add() {
  const [image, setImage]=useState(null)
  const [name, setName]=useState("")
  const [title, setTitle] = useState("")
 
  const history = useNavigate();

  const AddProductInfo= async () =>{
    let formField = new FormData()

    formField.append('name', name) // First 'name' is mention like a form name and another name is same like a database name
    formField.append('title', title)
    if(image !== null){
        formField.append('image', image)
    }
    await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/ministry/',
        data: formField
    }).then((response) =>{
        
        console.log(response.data);
        history('/ministry-view')
    })
}

    return (
       
        <>
       <div>
        <h1>Add Ministers Details</h1>
        <div className='container'>
            <div className='form-group'>
                <div className='form-control'>
                  
                    <input type="file" className="form-control form-control-1g"  name= "image"   onChange={(e) => setImage (e.target.files[0])} />
                    
                </div>
            </div>
            <div className='form-group'>
                <div className='form-control'>
                  
                    <input type="text" className="form-control form-control-1g" placeholder="Enter Minister Name" name= "name" value={name} onChange={(e) => setName (e.target.value)} />
                </div>
            </div>
            <div className='form-group'>
                
                <div className='form-control'>
                  
                    <input type="text" className="form-control form-control-1g" placeholder="Enter Designation" name= "title" value={title} onChange={(e) => setTitle (e.target.value)} />
                </div>
            </div>
           
           

            <button className='btn btn-success' onClick={AddProductInfo}>Add Product</button>

        </div>

    </div>
        </>
    )
}
    

export default Ministry_add