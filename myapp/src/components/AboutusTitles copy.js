import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Breadcrumb } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faCircleQuestion, faPersonChalkboard, faBookOpenReader, faIcons, faDownload, faMagnifyingGlassChart, faHandHoldingDollar, faUsersViewfinder, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from "react-router-dom";

import '../index';
import '../App.css';

function AboutusTitles() {
    
    const [aboutusstitle, setAboutUsTitle] = useState([]);
    const [singleaboutusstitle, setSingleAboutUsTitle] = useState([]);
    const {id}=useParams();
    
    const getAboutUsTitle = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/aboutus/');
        // Example filtering based on a condition, replace with your own filtering logic
        // setContactTable(response. data)
        setAboutUsTitle(response. data);
        
    };

    const getSingleAboutUsTitle = async () =>{
        const {data} = await axios.get(`http://127.0.0.1:8000/api/aboutus/${id}`)
        console.log(data)
        
        setSingleAboutUsTitle(data)
        
    };

    useEffect(() => {
        
        
        getAboutUsTitle();
        getSingleAboutUsTitle();
    }, []);

    
    const refresh = () =>{
        setTimeout(() => { 
            window.location.reload(); 
          }, 1);}
    // } window.location.reload(true)

    return (
        <>
            
                 
                    <Col md={3} xs={3} className="side_bar_right">
                        <p className='side_bar_text'>About Us</p>
                        <p className='side_bar_sub_text'>
                            About us for Registration in Employment Exchanges of Assam
                        </p>
                        <ul>
                        {aboutusstitle.map((aboutustitle, index) => (
                            <li className='side_bar_bullet_color'>
                            <Link to={`/${aboutustitle.id}/aboutus-view`} onClick={refresh}><p className='side_bar_sub_text'>{aboutustitle.title}</p>
                            </Link> </li>
                        ))}
                        </ul>
                    </Col>
                
        </>
    );
}

export default AboutusTitles;
