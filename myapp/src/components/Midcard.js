import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Card   } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faCircleQuestion, faPersonChalkboard, faBookOpenReader, faIcons, faDownload, faMagnifyingGlassChart, faHandHoldingDollar, faUsersViewfinder, faPeopleGroup, faSheetPlastic, faBell, faAnglesRight, faBullhorn } from '@fortawesome/free-solid-svg-icons'
// import { CircleFill } from 'react-bootstrap-icons';
// import * as Icon from 'react-bootstrap-icons';



import '../index'
import '../App.css'
import NotificationTitles from './Notification'
import Notification from './Notification'
import { useParams } from 'react-router-dom'

function Midcard() {
  const [ministers, setMinisters] = useState([])
    const getMinisters = async() => {
    const response = await axios.get('http://127.0.0.1:8000/api/ministry/')
    setMinisters(response.data)
    }
    useEffect(() =>{
      getMinisters();
    }, [])
    const [eventcards, setEventCards] = useState([]);
    // const [eventcardstitle, setEventCardsTitle] = useState([]);
    // const [eventcardstitle, setEventCardsTitle] = useState([]);
    const {id}=useParams();
    const getEventCards = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/eventcards/');
        // Example filtering based on a condition, replace with your own filtering logic
        // const filteredData = response.data.filter(item => item.title === 'About eventcards');

        setEventCards(response.data);
    };
    useEffect(() =>{
      getEventCards();
    }, [])

    return (
       
        <>
        <Container fluid >
            <Row className='m-2'>
                
             <Col md={12}>
             <Row>
             {
       eventcards.map((eventcard, index) => (
                <Col className='my-3'>
                <Card style={{ width: '18rem' }}>
      <Card.Body className='m-4'> 
      <div className="text-center">
      <FontAwesomeIcon icon={faPeopleGroup} style={{color: "#F55D5D",}} fontSize="40px"/>
        </div>   
        <Card.Title className='text-center my-2 midcard_text' s>{eventcard.title}</Card.Title>
      
        
      </Card.Body>
    </Card>
             
             </Col>
       ))}
                <Col className='my-3'>
                <Card style={{ width: '18rem' }}>
      <Card.Body className='m-4'>   
      <div className="text-center">
      <FontAwesomeIcon icon={faUsersViewfinder} style={{color: "#F55D5D",}} fontSize="40px"/>
        </div> 
        <Card.Title className='text-center my-2 midcard_text' s>Schemes</Card.Title>
       
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link> */}
        
      </Card.Body>
    </Card>
             
             </Col>
                <Col className='my-3'>
                <Card style={{ width: '18rem' }}>
      <Card.Body className='m-4'>
        <div className="text-center">
      <FontAwesomeIcon icon= {faHandHoldingDollar} style={{color: "#F55D5D",}} fontSize="40px"/>
            </div>    
        <Card.Title className='text-center my-2 midcard_text' s>Services</Card.Title>
       
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link> */}
        
      </Card.Body>
    </Card>
             
             </Col>
                <Col className='my-3'>
                <Card style={{ width: '18rem' }}>
      <Card.Body className='m-4'>
        <div className="text-center">
      <FontAwesomeIcon icon={faMagnifyingGlassChart} style={{color: "#F55D5D",}} fontSize="40px"/>
            </div>    
        <Card.Title className='text-center my-2 midcard_text' >Statistics</Card.Title>
       
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link> */}
        
      </Card.Body>
    </Card>
             
             </Col>
                <Col className='my-3'>
                <Card style={{ width: '18rem' }}>
      <Card.Body className='m-4'> 
      <div className="text-center">
      <FontAwesomeIcon icon={faDownload} style={{color: "#F55D5D",}} fontSize="40px"/>
        </div>   
        <Card.Title className='text-center my-2 midcard_text' >Downloads</Card.Title>
       
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link> */}
        
      </Card.Body>
    </Card>
             
             </Col>
                <Col className='my-3'>
                <Card style={{ width: '18rem' }}>
      <Card.Body className='m-4'> 
      <div className="text-center">
      <FontAwesomeIcon icon={faIcons} style={{color: "#F55D5D",}} fontSize="40px"/>
      
        
        </div>   
        <Card.Title className='text-center my-2 midcard_text' >Gallery</Card.Title>
       
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link> */}
        
      </Card.Body>
    </Card>
             
             </Col>
                <Col className='my-3'>
                <Card style={{ width: '18rem' }}>
      <Card.Body className='m-4'> 
      <div className="text-center">
      
      <FontAwesomeIcon icon={faBookOpenReader} style={{color: "#F55D5D",}} fontSize="40px"/>
        </div> 
        
        
        <Card.Title className='text-center my-2 midcard_text' >Publications</Card.Title>
       
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link> */}
        
      </Card.Body>
    </Card>
             
             </Col>
                <Col className='my-3'>
                <Card style={{ width: '18rem' }}>
      <Card.Body className='m-4'> 
      <div className="text-center">
      <FontAwesomeIcon icon={faPersonChalkboard} style={{color: "#F55D5D",}} fontSize="40px"/>
        </div>
        
        <Card.Title className='text-center my-2 midcard_text'>Public Grievances</Card.Title>
       
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link> */}
        
      </Card.Body>
    </Card>
             
             </Col>
                <Col className='my-3'>
                <Card style={{ width: '18rem' }}>
      <Card.Body className='m-4'>  
        <div className=' text-center'>
      <FontAwesomeIcon icon={faCircleQuestion} style={{color: "#F55D5D",}} fontSize="40px" />

        </div>
        <Card.Title className='text-center my-2 midcard_text' >Help</Card.Title>
       
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link> */}
        
      </Card.Body>
    </Card>
             
             </Col>
                
             </Row>
                </Col>
                {/* <Col md={4} className='side_border' >
                
                   




                </Col> */}
             
                
            </Row>
        </Container>

          
           
        </>
    )
}
    

export default Midcard