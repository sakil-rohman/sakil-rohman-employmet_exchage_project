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

function SliderImage_view() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
 
    const [sliderimages, setSliderimages] = useState([])
    const {id}=useParams();
    const history = useNavigate();

    const getSliderimages = async() => {
    const response = await axios.get('http://127.0.0.1:8000/api/slider/')
    setSliderimages(response. data)
    }
    useEffect(() =>{
      getSliderimages();
    }, [])
 const getSingleMinistry = async () =>{
        const {data} = await axios.get(`http://127.0.0.1:8000/api/slider/${id}`)
        console.log(data)
        setSliderimages(data)
    }
    useEffect(() =>{
        getSingleMinistry();
    }, [])

    const deleteSliderimages = async (id) =>{
      await axios.delete(`http://127.0.0.1:8000/api/slider/${id}/`)
      history('/sliderimage-view');
      window.location.reload(false);
  }
    return (
       
        <>
        <a href='/sliderimage-add'>
        <button className='btn btn-success m-3 ml-5' >Add   <FontAwesomeIcon icon={faUserPlus} /> </button>

        </a>
       <div className='container w-100'>
       <Table striped bordered hover>
      <thead>
        <tr className='text-center'>
        <th scope='col'>Heading</th>
          <th scope='col'>Photo</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
       sliderimages.map((sliderimage, index) => (
        <tr>
         <td>
            <p className='fw-normal mb-1 h5 text-center'>{sliderimage.heading}</p>
            {/* <p className='text-muted mb-0'>IT department</p> */}
          </td>
          <td>
          <img src={sliderimage.image} style={{ width: '100px', height: '50px' }}className='' />
          {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
      <img src={sliderimage.image} height="400" width="100%" />
      </Modal> */}
          </td>
          
          <td>         
          <div className='row text-center'>
          <div className='col-sm-6'>
          <Link className="btn btn-primary m-2" to={`/${sliderimage.id}/sliderimage-edit`}> <FontAwesomeIcon icon={faEdit} /> </Link>          
          </div>
          <div className='col-sm-6'>            
          <Link className= "btn btn-danger m-2" onClick={() => deleteSliderimages(sliderimage.id)}><FontAwesomeIcon icon={faTrashAlt} />  </Link>          
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
    

export default SliderImage_view