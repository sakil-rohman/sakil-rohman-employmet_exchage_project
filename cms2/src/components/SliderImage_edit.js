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

function SliderImage_edit() {
  const [image, setImage]=useState("")
//   const [name, setName]=useState("")
const [heading, setHeading] = useState("")
 
  const history = useNavigate();
  const { id } = useParams();

  const loadSliderImage= async () =>{
    const {data} = await axios.get(`http://127.0.0.1:8000/api/slider/${id}/`);
    console.log(data)

    setImage (data.image)
    // setName (data.name)
    setHeading(data.heading)
 
}

useEffect(() =>{
    loadSliderImage()
}, [])
  const UpdateSliderimageInfo= async () =>{
    let formField = new FormData()

    // formField.append('name', name) // First 'name' is mention like a form name and another name is same like a database name
    formField.append('heading', heading)
    // if(image !== null){
        formField.append('image', image)
    // }
    await axios({
        method: 'PUT',
        url: `http://127.0.0.1:8000/api/slider/${id}/`,
        data: formField
    }).then((response) =>{
        console.log(response.data);
        history('/sliderimage-view')
    })
}

    return (
       
        <>
       <div>
        <h1>Update Slider Details</h1>
        <div className='container'>
            <div className='form-group'>
            <img src={image} height="400" width="100%" />
                <div className='form-control'>
                  
                    <input type="file" className="form-control form-control-1g"  name= "image"   onChange={(e) => setImage (e.target.files[0])} />
                    
                </div>
            </div>
          
            <div className='form-group'>
           
                <div className='form-control'>
                  
                    <input type="text" className="form-control form-control-1g" placeholder="Enter Header" name= "title" value={heading} onChange={(e) => setHeading (e.target.value)} />
                </div>
            </div>
           
           

            <button className='btn btn-success' onClick={UpdateSliderimageInfo}>Update</button>

        </div>

    </div>
        </>
    )
}
    

export default SliderImage_edit