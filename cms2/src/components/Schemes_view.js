import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Card , Breadcrumb, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faCircleQuestion, faPersonChalkboard, faBookOpenReader, faIcons, faDownload, faMagnifyingGlassChart, faHandHoldingDollar, faUsersViewfinder, faPeopleGroup,faEdit, faTrashAlt,faUserPlus  } from '@fortawesome/free-solid-svg-icons'
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useNavigate  } from 'react-router-dom';



import Header from './Header'
import FooTer from './Footer'
import '../../../cms2/src/index'
import '../App.css'

function Schemes_view() {
 
    const [aboutuss, setAboutUs] = useState([])
    const {id}=useParams();
    const history = useNavigate();

    const getAboutUs = async() => {
    const response = await axios.get('http://127.0.0.1:8000/api/schemes/')
    setAboutUs(response. data)
    }
    useEffect(() =>{
      getAboutUs();
    }, [])
 const getSingleAboutUs = async () =>{
        const {data} = await axios.get(`http://127.0.0.1:8000/api/schemes/${id}`)
        console.log(data)
        setAboutUs(data)
    }
    useEffect(() =>{
        getSingleAboutUs();
    }, [])

    const deleteAboutUs = async (id) =>{
      await axios.delete(`http://127.0.0.1:8000/api/schemes/${id}/`)
      history('/schemes-view');
      window.location.reload(false);
  }
    return (
       
        <>
        <a href='/schemes-add'>
        <button className='btn btn-success m-3 ml-5' >Add   <FontAwesomeIcon icon={faUserPlus} /> </button>

        </a>
       <div className='container w-100'>
       <Table striped bordered hover>
      <thead>
        <tr className='text-center'>
          <th scope='col'>Title</th>
          <th scope='col'>Heading</th>
          <th scope='col'>Description</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
       aboutuss.map((aboutus, index) => (
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              
              
                <p className='fw-bold mb-1'>{aboutus.title}</p>
                
              
            </div>
          </td>
          <td>
            <div className='d-flex align-items-center'>
              
              
                <p className='fw-bold mb-1'>{aboutus.heading}</p>
                
              
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1' dangerouslySetInnerHTML={ {__html: aboutus.description }}></p>
           </td>
           <td>
          <div className='row text-center'>
          <div className='col-sm-6'>
          
          <Link className="btn btn-primary m-2" to={`/${aboutus.id}/schemes-edit`}> <FontAwesomeIcon icon={faEdit} /> </Link>
          
          </div>
          <div className='col-sm-6'>
            
          <Link className= "btn btn-danger m-2" onClick={() => deleteAboutUs(aboutus.id)}><FontAwesomeIcon icon={faTrashAlt} />  </Link>
          
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
    

export default Schemes_view