import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Breadcrumb } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faCircleQuestion, faPersonChalkboard, faBookOpenReader, faIcons, faDownload, faMagnifyingGlassChart, faHandHoldingDollar, faUsersViewfinder, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from "react-router-dom";

import '../index';
import '../App.css';
import AboutusTitles from './AboutusTitles';

function AboutUs_view() {
    
    const [scheme, setScheme] = useState({
        id: null,
        heading: 'Loading...',
        description: 'Loading...'
    });
    const { id } = useParams();

    useEffect(() => {
        const getScheme = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/aboutus/${id}`);
                setScheme(response.data);
            } catch (error) {
                console.error("Error fetching scheme:", error);
            }
        };

        getScheme();
}, [id]);
// const [aboutuss, setAboutUs] = useState([]);
// const [aboutusstitle, setAboutUsTitle] = useState([]);
// const getAboutUs = async () => {
//     const response = await axios.get('http://127.0.0.1:8000/api/aboutus/');
//     // Example filtering based on a condition, replace with your own filtering logic
//     const filteredData = response.data.filter(item => item.title === 'About Us');
//     setAboutUs(filteredData);
// };
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

// useEffect(() => {
//     getAboutUs();
//     getAboutUsTitle();
//     getSingleAboutUsTitle();
// }, []);

    
  

    return (
        <>
            <Container fluid>
            <Row>
                <Col className='mt-2 mb-5' md={9} xs={9} style={{ boxShadow: " rgba(0, 0, 0, 0.1) 0px 10px 50px" }}>
                    <h3 className='text_title_head' style={{ paddingLeft: "5%" }}>{scheme.heading}</h3>
                    <p dangerouslySetInnerHTML={{ __html: scheme.description }} className='pl-5'></p>
                </Col>
                <AboutusTitles />
            </Row>
        </Container>
        </>
    );
}

export default AboutUs_view;
