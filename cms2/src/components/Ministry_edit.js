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

function Ministry_edit() {
  const [image, setImage]=useState("")
  const [name, setName]=useState("")
  const [title, setTitle] = useState("")
 
  const history = useNavigate();
  const { id } = useParams();

  const loadMinistry= async () =>{
    const {data} = await axios.get(`http://127.0.0.1:8000/api/ministry/${id}/`);
    console.log(data.name)

    setImage (data.image)
    setName (data.name)
    setTitle(data.title)
 
}

useEffect(() =>{
    loadMinistry()
}, [])
  const UpdateMinistryInfo= async () =>{
    let formField = new FormData()

    formField.append('name', name) // First 'name' is mention like a form name and another name is same like a database name
    formField.append('title', title)
    if(image !== null){
        formField.append('image', image)
    }
    await axios({
        method: 'PUT',
        url: `http://127.0.0.1:8000/api/ministry/${id}/`,
        data: formField
    }).then((response) =>{
        console.log(response.data);
        history('/ministry-view')
    })
}

    return (
       
        <>
       <div>
        <h1>Update Ministers Details</h1>
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
           
           

            <button className='btn btn-success' onClick={UpdateMinistryInfo}>Update</button>

        </div>

    </div>
        </>
    )
}
    

export default Ministry_edit