import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Breadcrumb } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faCircleQuestion, faPersonChalkboard, faBookOpenReader, faIcons, faDownload, faMagnifyingGlassChart, faHandHoldingDollar, faUsersViewfinder, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from "react-router-dom";

import '../index';
import '../App.css';


function Login_page() {

    return (
        <>
           <Container>
            <Row>
                <div className='text-center'>
            <Row className='my-5'>
                <Card className='m-1 col-md-3  col-sm-12 ' style={{ width:'23%',  background:'#132244'}}>
      <Card.Body className='m-1'>   
      {/* <div className="text-center">
      <FontAwesomeIcon icon={faUsersViewfinder} style={{color: "#fff",}} fontSize="40px"/>
      <h4 style={{ color: 'white' , fontSize:'25px'}} >0</h4>
        </div>  */}
        <Card.Title className='text-center my-2 text-light' >EMPLOYMENT REGISTRATION</Card.Title>
       
        <Card.Text className='text-light'>
        {/* Male: 0 | Female: 0 | Others: 0  |

Aadhaar: 0 | Non-Aadhaar: 0 */}
        </Card.Text>
       
        
      </Card.Body>
      <Card.Footer className='card_footer text-light'>
        <a className='text-light' href="https://employment.assam.gov.in/">Visit</a>
        </Card.Footer>
    </Card>
    <Card className='m-1 col-md-3  col-sm-12 ' style={{ width:'23%', background:'#132244'}}>
      <Card.Body className='m-1'>   
      <div className="text-center">
      <FontAwesomeIcon icon={faUsersViewfinder} style={{color: "#fff",}} fontSize="40px"/>
      <h4 style={{ color: 'white' , fontSize:'25px'}} >0</h4>
        </div> 
        <Card.Title className='text-center my-2 text-light' >EMPLOYMENT RE-REGISTRATION</Card.Title>
       
        <Card.Text className='text-light'>
        
        </Card.Text>
        
        
      </Card.Body>
      <Card.Footer className='card_footer text-light'>
        <a className='text-light' href="https://sewasetu.assam.gov.in/site/service-apply/re-registration-of-registration-card-of-employment-seeker-in-employment-exchange">Visit</a>
        </Card.Footer>
    </Card>
    <Card className='m-1 col-md-3  col-sm-12 ' style={{width:'23%',  background:'#132244'}}>
      <Card.Body className='m-1'>   
      <div className="text-center">
      <FontAwesomeIcon icon={faUsersViewfinder} style={{color: "#fff",}} fontSize="40px"/>
      <h4 style={{ color: 'white' , fontSize:'25px'}} >0</h4>
        </div> 
        <Card.Title className='text-center my-2 text-light' >ASSAM JOB PORTAL</Card.Title>
       
        <Card.Text className='text-light'>
      
        </Card.Text>
        
      </Card.Body>
        <Card.Footer className='card_footer text-light'>
        <a className='text-light' href="https://job.assam.gov.in/   ">Visit</a>
        </Card.Footer>
    </Card>
    <Card className='m-1 col-md-3  col-sm-12 ' style={{width:'23%',  background:'#132244'}}>
      <Card.Body className='m-1'>   
      <div className="text-center">
      <FontAwesomeIcon icon={faUsersViewfinder} style={{color: "#fff",}} fontSize="40px"/>
      <h4 style={{ color: 'white' , fontSize:'25px'}} >0</h4>
        </div> 
        <Card.Title className='text-center my-2 text-light' >ASSAM JOB FAIR</Card.Title>
       
        <Card.Text className='text-light'>
        
        </Card.Text>
        
      </Card.Body>
        <Card.Footer className='card_footer text-light'>
        <a className='text-light' href="https://job.assam.gov.in/job_fair/">Visit</a>
        </Card.Footer>
    </Card>

            </Row>
                </div>
            </Row>
        </Container>
        </>
    );
}

export default Login_page;
