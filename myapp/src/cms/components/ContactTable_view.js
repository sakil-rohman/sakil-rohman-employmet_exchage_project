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

function ContactTable_view() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
 
    const [contacttables, setContactTable] = useState([])
    const {id}=useParams();
    const history = useNavigate();

    const getContactTable = async() => {
    const response = await axios.get('http://127.0.0.1:8000/api/contacttable/')
    setContactTable(response. data)
    }
    useEffect(() =>{
      getContactTable();
    }, [])
 const getSingleContactTable = async () =>{
        const {data} = await axios.get(`http://127.0.0.1:8000/api/contacttable/${id}`)
        console.log(data)
        setContactTable(data)
    }
    useEffect(() =>{
        getSingleContactTable();
    }, [])

    const deleteContactTable = async (id) =>{
      await axios.delete(`http://127.0.0.1:8000/api/contacttable/${id}/`)
      history('/contacttable-view');
      window.location.reload(false);
  }
    return (
       
        <>
        <a href='/contacttable-add'>
        <button className='btn btn-success m-3 ml-5' >Add   <FontAwesomeIcon icon={faUserPlus} /> </button>

        </a>
       <div className='container w-100'>
       <Table striped bordered hover>
      <thead>
        <tr className='text-center'>
        <th scope='col'>	Name of Employment Exchange</th>
        <th scope='col'>Address</th>
        <th scope='col'>Name of Officer</th>
        <th scope='col'>Contact Details of Officer</th>
        
        <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
       contacttables.map((contacttable, index) => (
        <tr>
         
         <td>
            <p className='fw-normal mb-1 h5 text-center'>{contacttable.exname}</p>
            
          </td>
         <td>
            <p className='fw-normal mb-1 h5 text-center'>{contacttable.address}</p>
            
          </td>
         <td>
            <p className='fw-normal mb-1 h5 text-center'>{contacttable.name}</p>
            
          </td>
         <td>
            <p className='fw-normal mb-1 h5 text-center'>{contacttable.contact}</p>
            
          </td>          
          
          <td>         
          <div className='row text-center'>
          <div className='col-sm-6'>
          <Link className="btn btn-primary m-2" to={`/${contacttable.id}/contacttable-edit`}> <FontAwesomeIcon icon={faEdit} /> </Link>          
          </div>
          <div className='col-sm-6'>            
          <Link className= "btn btn-danger m-2" onClick={() => deleteContactTable(contacttable.id)}><FontAwesomeIcon icon={faTrashAlt} />  </Link>          
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
    

export default ContactTable_view