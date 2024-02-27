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

function Guideline_view() {
 
    const [guidelines, setGuidelines] = useState([])
    const {id}=useParams();
    const history = useNavigate();

    const getGuidelines = async() => {
    const response = await axios.get('http://127.0.0.1:8000/api/guideline/')
    setGuidelines(response. data)
    }
    useEffect(() =>{
      getGuidelines();
    }, [])
 const getSingleGuideline = async () =>{
        const {data} = await axios.get(`http://127.0.0.1:8000/api/guideline/${id}`)
        console.log(data)
        setGuidelines(data)
    }
    useEffect(() =>{
        getSingleGuideline();
    }, [])

    const deleteGuideline = async (id) =>{
      await axios.delete(`http://127.0.0.1:8000/api/guideline/${id}/`)
      history('/guideline-view');
      window.location.reload(false);
  }
    return (
       
        <>
        <a href='/guideline-add'>
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
       guidelines.map((guideline, index) => (
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              
              
                <p className='fw-bold mb-1'>{guideline.title}</p>
                
              
            </div>
          </td>
          <td>
            <div className='d-flex align-items-center'>
              
              
                <p className='fw-bold mb-1'>{guideline.heading}</p>
                
              
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{guideline.description}</p>
           </td>
           <td>
          <div className='row text-center'>
          <div className='col-sm-6'>
          
          <Link className="btn btn-primary m-2" to={`/${guideline.id}/guideline-edit`}> <FontAwesomeIcon icon={faEdit} /> </Link>
          
          </div>
          <div className='col-sm-6'>
            
          <Link className= "btn btn-danger m-2" onClick={() => deleteGuideline(guideline.id)}><FontAwesomeIcon icon={faTrashAlt} />  </Link>
          
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
    

export default Guideline_view