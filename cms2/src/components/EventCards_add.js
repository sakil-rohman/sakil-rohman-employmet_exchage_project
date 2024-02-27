import React, {  useState} from 'react'
import axios from 'axios'
import { useNavigate  } from 'react-router-dom';
import { Container, Row, Col, Card , Breadcrumb, Table, Link } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faCircleQuestion, faPersonChalkboard, faBookOpenReader, faIcons, faDownload, faMagnifyingGlassChart, faHandHoldingDollar, faUsersViewfinder, faPeopleGroup,faEdit  } from '@fortawesome/free-solid-svg-icons'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// import { CircleFill } from 'react-bootstrap-icons';
// import * as Icon from 'react-bootstrap-icons';


import Header from './Header'
import FooTer from './Footer'
import '../../../cms2/src/index'
import '../App.css'


const modules={
    toolbar: [[{ header: [1, 2,3, 4, 5, 6, false] }],
    [{font: [] }], 
    [{size: [] }],
    ["bold" ,"italic", "underline", "strike", "blockquote"],
   
    [
        {
          color: [ "",
          "#FF5400",
          "#676464",
          "#F1F2F4",
          "#FF9B00",
          "#F00",
          "#fa6e30",
          "#000",
          "rgba(255, 153, 0, 0.1)",
          "#FF6600",
          "#0099FF",
          "#74CC6D",
          "#FF9900",
          "#373A3C",
          "#CCCCCC"],
        },
      ],
    
    [
        { list: "ordered" },
        { list:"bullet" },
        { indent: "-1" },
        { indent: "+1" },
    ],
    ["link", "image","video"],
    ["clean"],
    


],
};
function EventCards_add() {
   
    


const [title, setTitle] = useState("")
  const [heading, setHeading]=useState("")
  const [description, setDescription] = useState("")
  const [image, setImage]=useState(null)
 
  const history = useNavigate();

  const AddAboutUsInfo= async () =>{
    let formField = new FormData()

    formField.append('heading', heading) // First 'name' is mention like a form name and another name is same like a database name
    formField.append('title', title)
    formField.append('description', description)
    if(image !== null){
        formField.append('image', image)
    }
    
    await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/eventcards/',
        data: formField
    }).then((response) =>{
        
        console.log(response.data);
        history('/eventcards-view')
    })
}




    return (
       
        <>
       <div>
        <h1>Add Event Cards  Details</h1>
        <div className='container'>
        <div className='form-group'>
                <div className='form-control'>
                  
                    <input type="file" className="form-control form-control-1g"  name= "image"   onChange={(e) => setImage (e.target.files[0])} />
                    
                </div>
            </div>
            <div className='form-group'>
                <div className='form-control'>
                  
                    <input type="text" className="form-control form-control-1g" placeholder="Enter Event Cards  Title" name= "name" value={title} onChange={(e) => setTitle (e.target.value)} />
                </div>
            </div>
            <div className='form-group'>
                
                <div className='form-control'>
                  
                    <input type="text" className="form-control form-control-1g" placeholder="Enter Event Cards Heading" name= "heading" value={heading} onChange={(e) => setHeading (e.target.value)} />
                </div>
            </div>
            <div className='form-group'>
                
                <div className='form-control text_editor_box'>
                    <ReactQuill 
                    theme='snow' 
                    value={description}
                    // onChange={(e) => setDescription (e.target.value)}
                    onChange={setDescription}
                    modules={modules}/>
                  
                    {/* <input type="text" className="form-control form-control-1g" placeholder="Enter Guideline Designation" name= "title" value={description} onChange={(e) => setDescription (e.target.value)} /> */}
                </div>
            </div>
            {/* <p >{  description }</p> */}
            {/* <p dangerouslySetInnerHTML={ {__html: description }} ></p> */}
           
            <div className='form-group'>
            <button className='btn btn-success' onClick={AddAboutUsInfo}>Add Event Cards</button>
            </div>

        </div>

    </div>
        </>
    )
}
    

export default EventCards_add