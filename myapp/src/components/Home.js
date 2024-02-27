import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import Slider from './Slider'
import Mapelocation from './Mapelocation'
import Midcard from './Midcard'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card, Breadcrumb } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faCircleQuestion, faPersonChalkboard, faBookOpenReader, faIcons, faDownload, faMagnifyingGlassChart, faHandHoldingDollar, faUsersViewfinder, faPeopleGroup, faSheetPlastic, faBell, faAnglesRight, faBullhorn,faUserCog, faUsers, faUsersCog, faPeopleArrows } from '@fortawesome/free-solid-svg-icons'
import Notification from './Notification';
import { useParams, Link } from 'react-router-dom'

function Home() {
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
     
     <Container fluid>
        <Row>
        <Col  className=' mt-2 mb-5' md={9} xs={9} >
          <Slider />
          </Col>
          <Col  className=' mt-2 mb-5' md={3} xs={3} >
            <div className='side_login'>
              <div className='login_tag'>
                <h4>Login</h4>
              </div>
              
              <Link to={`/login_part`}><button className="button-65 mt-5 text-start" role="button"> <span class="mx-2 font_size20"><FontAwesomeIcon icon={faUserCog} /></span>   Jobseeker Login</button></Link>
              
               <a href='https://job.assam.gov.in/recruiter/login/'><button className="button-65 mt-3 text-start" role="button"> <span class="mx-2 font_size20"><FontAwesomeIcon icon={faUsers} /></span>   Employer Login</button> </a>
               <a href='https://job.assam.gov.in/department/'> <button className="button-65 mt-3 text-start" role="button"> <span class="mx-2 font_size20"><FontAwesomeIcon icon={faUsersCog} /></span>   Department Login</button> </a>
               <a href='https://job.assam.gov.in/district_employment_exchange/'> <button className="button-65 mt-3 text-start" role="button"> <span class="mx-2 font_size20"><FontAwesomeIcon icon={faPeopleArrows} /></span>   Dist. Emp. Exchange Login</button> </a>




            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
        <Col  className=' mt-2 mb-5' md={8} xs={8} >
          <Row className='pragraph_text'>
            <div>
              <p className='sub_head'>Welcome To</p>
              <h3 className='underline_main'>Directorate of Employment & Training</h3>
              <p className='mt-5 w_90'>
                  Directorate of Employment & Training, DET is working under the Department of Labour and Employment, Government of Gujarat. It was formed in Gujarat State in 1971 by amalgamation of the Employment Wing, functioning under the Labour Directorate, and the Vocational Training Scheme under the Directorate of Technical Education. <br /><br />

                  At present 263 Govt.ITIs, 475 Grant-in-aid & Self-Financed ITCs, 335 KVKs(Kaushalya Vardhan Kendra), 617 VTPs (Vocational Training Provider) and 48 Employment Exchanges are functioning under this Directorate. <br />

                  Two statutes have been enacted by the Govt. of India to help in achieving the objectives of higher employment in organised sector through training.
              </p>
              <div className='text-end w_90'>
                <p className='  mr-5'>
                <Link to={`/mini_about_us`}>Read more</Link>
                  </p>
              </div>
            </div>
          </Row>
          <Row className='w-100'>
          <Card className='m-1 col-md-4 col-sm-12 m-3' style={{ width:'30%', background:'#26AE65'}}>
      <Card.Body className='m-1'>   
      <div className="text-center">
      <FontAwesomeIcon icon={faUsersViewfinder} style={{color: "#fff",}} fontSize="40px"/>
      <h4 style={{ color: 'white' , fontSize:'25px'}} >2075947</h4>
        </div> 
        <Card.Title className='text-center my-2 text-light' >Total Registered</Card.Title>
       
        <Card.Text className='text-light'>
        Male: 1185459 | Female: 890115 | Others: 372  |

Aadhaar: 2058438 | Non-Aadhaar: 17509
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link> */}
        
      </Card.Body>
    </Card>
          <Card className='m-1 col-md-4  col-sm-12 m-3' style={{width:'30%',  background:'#F55D5D'}}>
      <Card.Body className='m-1'>   
      <div className="text-center">
      <FontAwesomeIcon icon={faUsersViewfinder} style={{color: "#fff",}} fontSize="40px"/>
      <h4 style={{ color: 'white' , fontSize:'25px'}} >0</h4>
        </div> 
        <Card.Title className='text-center my-2 text-light' >Total Renewed</Card.Title>
       
        <Card.Text className='text-light'>
        Male: 0 | Female: 0 | Others: 0  |

Aadhaar: 0 | Non-Aadhaar: 0
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link> */}
        
      </Card.Body>
    </Card>
          <Card className='m-1 col-md-4  col-sm-12 m-3' style={{width:'30%', background:'#060644'}}>
      <Card.Body className='m-1'>   
      <div className="text-center">
      <FontAwesomeIcon icon={faUsersViewfinder} style={{color: "#fff",}} fontSize="40px"/>
      <h4 style={{ color: 'white' , fontSize:'25px'}} >465449</h4>
        </div> 
        <Card.Title className='text-center my-2 text-light' >Total Re-Registered</Card.Title>
       
        <Card.Text className='text-light'>
        Male: 295631 | Female: 169721 | Others: 97
        | Aadhaar: 462741 | Non-Aadhaar: 2708
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link> */}
        
      </Card.Body>
    </Card>
             
           
      </Row>





          </Col>
          <Col md={4} className='side_border' >
                        <Row >
          <div style={{ background:'#060644', color:'#a5c0cd', borderRadius:'5px'}}>
                        <Row >
                          <div className='col-sm-1' ><h4 className='p-2' >
                          
                            {/* <FontAwesomeIcon icon={faBell} /> */}
                            </h4></div>
                          <div className='col-sm-11' ><h4  className='p-2'>  Hon'ble Ministers</h4></div>
                        </Row>
                          
                      </div>
                        </Row>
                <Row className='mt-3'>
                {
       ministers.map((minister, index) => (
        <Col >
                    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={minister.image}  />
      <Card.Body>
        <Card.Title className=" text-center main_them_text_color fw-bolder">{minister.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted text-center">{minister.name}</Card.Subtitle>
       
       
      </Card.Body>
    </Card>
                    </Col>
        
       ))

     }

                    
                </Row>
                    <Row className='mt-2'>
                      <div style={{ background:'#060644', color:'#a5c0cd', borderRadius:'5px'}}>
                        <Row>
                          <div className='col-sm-1' ><h4 className='p-2' >
                          
                            <FontAwesomeIcon icon={faBell} />
                            </h4></div>
                          <div className='col-sm-11' ><h4  className='p-2'>  Latest Notifications:</h4></div>
                        </Row>
                          
                      </div>
                      <div className='m-3'>
                      <Notification />
                      </div>
                    </Row>




                </Col>
        </Row>
      </Container>
      <hr />
      <Midcard />
      <hr />
      <Mapelocation />
      
    
    </>
  );
}

export default Home;
