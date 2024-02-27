import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Card , Breadcrumb, Table, Button,Modal   } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faCircleQuestion, faPersonChalkboard, faBookOpenReader, faIcons, faDownload, faMagnifyingGlassChart, faHandHoldingDollar, faUsersViewfinder, faPeopleGroup,faEdit, faTrashAlt,faUserPlus  } from '@fortawesome/free-solid-svg-icons'
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useNavigate  } from 'react-router-dom';



import Header from './Header'
import FooTer from './Footer'
import '../index'
import '../App2.css'

function ContactUs_view() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
 
    const [contactuss, setContactUs] = useState([])
    const {id}=useParams();
    const history = useNavigate();

    const getContactUs = async() => {
    const response = await axios.get('http://127.0.0.1:8000/api/contactus/')
    setContactUs(response. data)
    }
    useEffect(() =>{
      getContactUs();
    }, [])
 const getSingleContactUs = async () =>{
        const {data} = await axios.get(`http://127.0.0.1:8000/api/contactus/${id}`)
        console.log(data)
        setContactUs(data)
    }
    useEffect(() =>{
        getSingleContactUs();
    }, [])

    const deleteContactUs = async (id) =>{
      await axios.delete(`http://127.0.0.1:8000/api/contactus/${id}/`)
      history('/contactus-view');
      window.location.reload(false);
  }
    return (
       
        <>
        <a href='/contactus-add'>
        <button className='btn btn-success m-3 ml-5' >Add   <FontAwesomeIcon icon={faUserPlus} /> </button>

        </a>
       <div className='container w-100'>
       <Table striped bordered hover>
      <thead>
        <tr className='text-center'>
        <th scope='col'>Photo</th>
        <th scope='col'>Name</th>
        <th scope='col'>Designation</th>
        <th scope='col'>Email</th>
          <th scope='col'>Phone</th>
          <th scope='col'>Address</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
       contactuss.map((contactus, index) => (
        <tr>
         <td>
          <img src={contactus.image} style={{ width: '50px', height: '50px' }}className='rounded-circle' />
          </td>
         <td>
            <p className='fw-normal mb-1 h5 text-center'>{contactus.name}</p>
            
          </td>
         <td>
            <p className='fw-normal mb-1 h5 text-center'>{contactus.designation}</p>
            
          </td>
         <td>
            <p className='fw-normal mb-1 h5 text-center'>{contactus.email}</p>
            
          </td>
         <td>
            <p className='fw-normal mb-1 h5 text-center'>{contactus.phone}</p>
            
          </td>
         <td>
            <p className='fw-normal mb-1 h5 text-center'>{contactus.address}</p>
            
          </td>
          
          
          <td>         
          <div className='row text-center'>
          <div className='col-sm-6'>
          <Link className="btn btn-primary m-2" to={`/${contactus.id}/contactus-edit`}> <FontAwesomeIcon icon={faEdit} /> </Link>          
          </div>
          <div className='col-sm-6'>            
          <Link className= "btn btn-danger m-2" onClick={() => deleteContactUs(contactus.id)}><FontAwesomeIcon icon={faTrashAlt} />  </Link>          
          </div>
          </div>        
          </td>
        </tr>
         ))

        }
        
      </tbody>
    </Table>
</div>
        </>
    )
}
    

export default ContactUs_view