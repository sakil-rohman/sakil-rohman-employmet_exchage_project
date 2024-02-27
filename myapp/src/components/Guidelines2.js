import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Breadcrumb } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faCircleQuestion, faPersonChalkboard, faBookOpenReader, faIcons, faDownload, faMagnifyingGlassChart, faHandHoldingDollar, faUsersViewfinder, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import '../index';
import '../App.css';

function Guidelines() {
    const [guidelines, setGuideline] = useState([]);
    const getGuideline = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/guideline/');
        // Example filtering based on a condition, replace with your own filtering logic
        const filteredData = response.data.filter(item => item.title === 'Non-AADHAAR Based');
        setGuideline(filteredData);
    };
    useEffect(() => {
        getGuideline();
    }, []);

    return (
        <>
            <Container fluid>
                <Row>
                    {guidelines.map((guideline, index) => (
                        <Col key={index} className=' mt-2 mb-5' md={9} xs={9} style={{ boxShadow: " rgba(0, 0, 0, 0.1) 0px 10px 50px" }}>
                            <h3 className='text_title_head' style={{ paddingLeft: "5%" }}>{guideline.heading} </h3>
                            <p dangerouslySetInnerHTML={{ __html: guideline.description }} className='pl-5'></p>
                        </Col>
                    ))}
                    <Col md={3} xs={3} className="side_bar_right">
                        <p className='side_bar_text'>Guidelines</p>
                        <p className='side_bar_sub_text'>
                            Guidelines for Registration in Employment Exchanges of Assam
                        </p>
                        <ul>
                        
                            <Link to="/guidelines">
                            <li className='side_bar_bullet_color'>
                                <p className='side_bar_sub_text'>AADHAAR Based</p>
                            </li>
                            </Link>
                            <Link to="/guidelines2">
                            <li className='side_bar_bullet_color'>
                            <p className='side_bar_sub_text'>Non-AADHAAR Based</p>
                          
                            </li>
                            </Link>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Guidelines;
