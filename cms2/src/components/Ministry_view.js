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

function Ministry_view() {
 
    const [ministers, setMinisters] = useState([])
    const {id}=useParams();
    const history = useNavigate();

    const getMinisters = async() => {
    const response = await axios.get('http://127.0.0.1:8000/api/ministry/')
    setMinisters(response. data)
    }
    useEffect(() =>{
      getMinisters();
    }, [])
 const getSingleMinistry = async () =>{
        const {data} = await axios.get(`http://127.0.0.1:8000/api/ministry/${id}`)
        console.log(data)
        setMinisters(data)
    }
    useEffect(() =>{
        getSingleMinistry();
    }, [])

    const deleteMinistry = async (id) =>{
      await axios.delete(`http://127.0.0.1:8000/api/ministry/${id}/`)
      history('/ministry-view');
      window.location.reload(false);
  }
    return (
       
        <>
        <a href='/ministry-add'>
        <button className='btn btn-success m-3 ml-5' >Add   <FontAwesomeIcon icon={faUserPlus} /> </button>

        </a>
       <div className='container w-100'>
       <Table striped bordered hover>
      <thead>
        <tr className='text-center'>
          <th scope='col'>Name</th>
          <th scope='col'>Title</th>
          <th scope='col'>Photo</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
       ministers.map((minister, index) => (
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              
              
                <p className='fw-bold mb-1'>{minister.name}</p>
                
              
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{minister.title}</p>
            {/* <p className='text-muted mb-0'>IT department</p> */}
          </td>
          <td>
          <img src={minister.image} style={{ width: '50px', height: '50px' }}className='rounded-circle' />
          </td>
          {/* <td>
            <p color='success' pill>
              Active
            </p>
          </td> */}
          {/* <td>Senior</td> */}
          <td>
          {/* <Link to="/login"> */}
          {/* <FontAwesomeIcon icon="fa-solid fa-pen-to-square" /> */}
          <div className='row text-center'>
          <div className='col-sm-6'>
          {/* <a className="" href="./Login">
          <FontAwesomeIcon icon={faEdit} />
          </a> */}
          <Link className="btn btn-primary m-2" to={`/${minister.id}/ministry-edit`}> <FontAwesomeIcon icon={faEdit} /> </Link>
          
          </div>
          <div className='col-sm-6'>
            
          <Link className= "btn btn-danger m-2" onClick={() => deleteMinistry(minister.id)}><FontAwesomeIcon icon={faTrashAlt} />  </Link>
          
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
    

export default Ministry_view