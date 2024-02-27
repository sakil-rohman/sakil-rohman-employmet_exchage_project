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
import '../../../cms2/src/index'
import '../App.css'

function FooterAddress_view() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
 
    const [footeraddresses, setFooteraddresses] = useState([])
    const {id}=useParams();
    const history = useNavigate();

    const getFooterAddress = async() => {
    const response = await axios.get('http://127.0.0.1:8000/api/footer-address/')
    setFooteraddresses(response. data)
    }
    useEffect(() =>{
      getFooterAddress();
    }, [])
 const getSingleFooterAddress = async () =>{
        const {data} = await axios.get(`http://127.0.0.1:8000/api/footer-address/${id}`)
        console.log(data)
        setFooteraddresses(data)
    }
    useEffect(() =>{
        getSingleFooterAddress();
    }, [])

    const deletefooteraddresss = async (id) =>{
      await axios.delete(`http://127.0.0.1:8000/api/footer-address/${id}/`)
      history('/footeraddress-view');
      window.location.reload(false);
  }
    return (
       
        <>
        <a href='/footeraddress-add'>
        <button className='btn btn-success m-3 ml-5' >Add   <FontAwesomeIcon icon={faUserPlus} /> </button>

        </a>
       <div className='container w-100'>
       <Table striped bordered hover>
      <thead>
        <tr className='text-center'>
        <th scope='col'>Email</th>
          <th scope='col'>Phone</th>
          <th scope='col'>Address</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
       footeraddresses.map((footeraddress, index) => (
        <tr>
         <td>
            <p className='fw-normal mb-1 h5 text-center'>{footeraddress.email}</p>
            
          </td>
         <td>
            <p className='fw-normal mb-1 h5 text-center'>{footeraddress.phone}</p>
            
          </td>
         <td>
            <p className='fw-normal mb-1 h5 text-center'>{footeraddress.address}</p>
            
          </td>
          
          
          <td>         
          <div className='row text-center'>
          <div className='col-sm-6'>
          <Link className="btn btn-primary m-2" to={`/${footeraddress.id}/footeraddress-edit`}> <FontAwesomeIcon icon={faEdit} /> </Link>          
          </div>
          <div className='col-sm-6'>            
          <Link className= "btn btn-danger m-2" onClick={() => deletefooteraddresss(footeraddress.id)}><FontAwesomeIcon icon={faTrashAlt} />  </Link>          
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
    

export default FooterAddress_view