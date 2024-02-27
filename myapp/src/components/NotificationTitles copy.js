import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Breadcrumb } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faCircleQuestion, faPersonChalkboard, faBookOpenReader, faIcons, faDownload, faMagnifyingGlassChart, faHandHoldingDollar, faUsersViewfinder, faPeopleGroup, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from "react-router-dom";

import '../index';
import '../App.css';

function NotificationTitles() {
    
    const [aboutusstitle, setAboutUsTitle] = useState([]);
    const [singleaboutusstitle, setSingleAboutUsTitle] = useState([]);
    const {id}=useParams();
    
    const getAboutUsTitle = async () => {
        const response = await axios.get('http://127.0.0.1:8000/notification/');
        // Example filtering based on a condition, replace with your own filtering logic
        // setContactTable(response. data)
        setAboutUsTitle(response. data);
        
    };

    const getSingleAboutUsTitle = async () =>{
        const {data} = await axios.get(`http://127.0.0.1:8000/notification/${id}`)
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
            
            <marquee className="marq" scrollamount="4" direction = "up" loop="" >
            {aboutusstitle.map((aboutustitle, index) => (
                 <Link to={`/${aboutustitle.id}/notification-view`} onClick={refresh}><p className='side_bar_sub_text'> <FontAwesomeIcon icon={faAnglesRight} /> {aboutustitle.title}</p>
                 </Link>
                        
                        ))}
                        </marquee>
                    
                
        </>
    );
}

export default NotificationTitles;
