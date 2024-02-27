import React, { useState } from 'react'
import { Navbar, Nav, Row, Col, Container,Carousel  } from 'react-bootstrap'
import '../index'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, Link } from "react-router-dom";
import logoImage from '../img/logo_1.png';// import logoImage from '../../public/images/Azadi-Ka-Amrit-Mahotsav-Logo.png';
import logoSide from '../img/Azadi-Ka-Amrit-Mahotsav-Logo.png';// import logoImage from '../../public/images/Azadi-Ka-Amrit-Mahotsav-Logo.png';

function Header() {

    const [showDate, setShowDate] = useState(new Date().toDateString())
    const [showTime, setshowTime] = useState(new Date().toLocaleTimeString())

    // let a = () => {
    //     setShowDate('skdjfhksdf')
    // }

    // var date = new Date().toDateString();
    // var time = new Date().toLocaleTimeString();
    // document.getElementById("disdate1").textContent = date;
    return (
        /* <header>
            
            <Navbar bg="light" variant="light" className='header-wrapper'>
              <Container fluid style={{border:"5px solid red", }}>
             
                <Navbar.Brand href="#home" style={{border:"5px solid blue", }}>
                    <Row > 
                        <Col className=' ' style={{border:"5px solid red", }} lg={2}>
                            <img src="/images/logo_1.png" height="80" width="60" alt="" />{' '} 
                        </Col>
                        <Col  className=' text-primary ' lg={8}>
                            DIRECTORATE OF EMPLOYMENT AND CRAFTSMEN TRAINING
                            <h5>GOVERNMENT OF ASSAM</h5> {' '}
                        </Col>
                        <Col className='logo ' style={{border:"5px solid red" }} lg={2}>
                            <img src="/images/Azadi-Ka-Amrit-Mahotsav-Logo.png" width='100' alt="" />{' '} 
                        </Col>
                        
                    </Row>
                    
                </Navbar.Brand>
               
                    </Container>
                
            </Navbar>
            <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect className='py-0'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='mx-0'>
                    <Nav>       
                        <Nav.Link href="#home" className='menu-links'><h5>Home</h5></Nav.Link>
                        <Nav.Link href="#link" className='menu-links'><h5>Dashboard</h5></Nav.Link>
                        <Nav.Link href="#link" className='menu-links'><h5>Guidelines</h5></Nav.Link>
                        <Nav.Link href="#link" className='menu-links'><h5>Grievance</h5></Nav.Link>
                        <Nav.Link href="#link" className='menu-links'><h5>Gallery</h5></Nav.Link>
                        <Nav.Link href="#link" className='menu-links'><h5>Contact</h5></Nav.Link>
                       
                        
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        </header> */
        <>
            <Container fluid className='main_them_color'>
                <Row>
                    <Col>
                        <p className="text-start main_them_dark_color">Date: {showDate} | {showTime} <FontAwesomeIcon icon="coffee" /></p>
                    </Col>
                    <Col>
                        <p className="text-center main_them_dark_color">Phone :789456213</p>
                    </Col>
                    <Col>
                    <Link to="/login">
                        <p className="text-end main_them_dark_color">
                           Login
                        </p>

                    </Link>
                    </Col>
                </Row>

            </Container>
            <Container fluid>
                <Row>
                    <Col>
                       
                        <Row>
                            <Col xs={1}>
                                <img src={logoImage} className='logo_1' alt="Logo" />
                            </Col>
                            <Col xs={10} style={{ color: "#06163A"}}>
                                <Row>
                                    <Col xs={12} className="fs-4">DIRECTORATE OF EMPLOYMENT AND CRAFTSMEN TRAINING</Col>
                                    <Col xs={12}  className="fs-5 fw-bold" style={{color:"#FF3514"}}>GOVERNMENT OF ASSAM</Col>
                                </Row>
                            </Col>
                            <Col xs={1} className="d-none d-lg-block ">
                                <img src={logoSide} className="side_logo"/>
                            </Col>
                        </Row>

                       

                    </Col>
                </Row>
                <Row>

                    <Navbar variant="dark" expand="lg" collapseOnSelect className='py-0 nav-fill  main_them_color them_color_light' >
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className='mx-0' >
                            <Nav className='justify-content-around' style={{ width:"100%", }}>
                                <Nav.Link as={NavLink} to="/" className='menu-links '><h5>Home</h5></Nav.Link>
                                {/* <Nav.Link to="/" className='menu-links'><h5>Dashboard</h5></Nav.Link> */}
                                <Nav.Link as={NavLink} to="/guidelines" className='menu-links'><h5>Guidelines</h5></Nav.Link>
                                <Nav.Link as={NavLink} to="/schemes" className='menu-links'><h5>Schemes</h5></Nav.Link>
                                {/* <Nav.Link to="/" className='menu-links'><h5>Grievance</h5></Nav.Link> */}
                                <Nav.Link as={NavLink} to="/gallery" className='menu-links'><h5>Gallery</h5></Nav.Link>
                                <Nav.Link as={NavLink} to="/aboutus" className='menu-links'><h5>About Us</h5></Nav.Link>
                                <Nav.Link as={NavLink} to="/contactus" className='menu-links'><h5>Contact</h5></Nav.Link>



                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                </Row>
            </Container>
           
        </>
    )
}
    

export default Header