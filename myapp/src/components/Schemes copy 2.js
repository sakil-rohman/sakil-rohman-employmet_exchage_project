import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Breadcrumb } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faCircleQuestion, faPersonChalkboard, faBookOpenReader, faIcons, faDownload, faMagnifyingGlassChart, faHandHoldingDollar, faUsersViewfinder, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from "react-router-dom";

import '../index';
import '../App.css';
import AboutusTitles from './AboutusTitles';
import SchemesTitles from './SchemesTitles';

function Schemes() {
    const [aboutuss, setAboutUs] = useState([]);
    // const [aboutusstitle, setAboutUsTitle] = useState([]);
    // const [aboutusstitle, setAboutUsTitle] = useState([]);
    const {id}=useParams();
    const getAboutUs = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/schemes/');
        // Example filtering based on a condition, replace with your own filtering logic
        const filteredData = response.data.filter(item => item.title === 'About Schemes');
        setAboutUs(filteredData);
    };
    // const getAboutUsTitle = async () => {
    //     const response = await axios.get('http://127.0.0.1:8000/api/aboutus/');
    //     // Example filtering based on a condition, replace with your own filtering logic
    //     // setContactTable(response. data)
    //     setAboutUsTitle(response. data);
    // };

    // const getSingleAboutUsTitle = async () =>{
    //     const {data} = await axios.get(`http://127.0.0.1:8000/api/aboutus/${id}`)
    //     console.log(data)
    //     setAboutUsTitle(data)
    // };

    useEffect(() => {
        getAboutUs();
        // getAboutUsTitle();
        // getSingleAboutUsTitle();
    }, []);

    
  

    return (
        <>
            <Container fluid>
                <Row>
                    {aboutuss.map((aboutus, index) => (
                        <Col key={index} className=' mt-2 mb-5' md={9} xs={9} style={{ boxShadow: " rgba(0, 0, 0, 0.1) 0px 10px 50px" }}>
                            <h3 className='text_title_head' style={{ paddingLeft: "5%" }}>{aboutus.heading} </h3>
                            <p dangerouslySetInnerHTML={{ __html: aboutus.description }} className='pl-5'></p>
                        </Col>
                    ))}
                    {/* <Col md={3} xs={3} className="side_bar_right">
                        <p className='side_bar_text'>About Us</p>
                        <p className='side_bar_sub_text'>
                            aboutuss for Registration in Employment Exchanges of Assam
                        </p>
                        <ul>
                        {aboutusstitle.map((aboutustitle, index) => (
                            <li className='side_bar_bullet_color'>
                            <Link to={`/${aboutustitle.id}/aboutus-view`}><p className='side_bar_sub_text'>{aboutustitle.title}</p>
                            </Link> </li>
                        ))}
                        </ul>
                    </Col> */}
                    <SchemesTitles />
                </Row>
            </Container>
        </>
    );
}

export default Schemes;
