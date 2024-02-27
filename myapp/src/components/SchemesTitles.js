import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Breadcrumb } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faCircleQuestion, faPersonChalkboard, faBookOpenReader, faIcons, faDownload, faMagnifyingGlassChart, faHandHoldingDollar, faUsersViewfinder, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from "react-router-dom";

import '../index';
import '../App.css';

function SchemesTitles() {
    const [schemes, setSchemes] = useState([]);
    
    useEffect(() => {
        const getSchemes = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/schemes/');
                setSchemes(response.data);
            } catch (error) {
                console.error("Error fetching schemes:", error);
            }
        };

        getSchemes();
    }, []);

    return (
        <Col md={3} xs={3} className="side_bar_right">
            <p className='side_bar_text'>Schemes</p>
            <p className='side_bar_sub_text'>
                Schemes for Registration in Employment Exchanges of Assam
            </p>
            <ul>
                {schemes.map((scheme, index) => (
                    <li className='side_bar_bullet_color' key={index}>
                        <Link to={`/Schemes_view/${scheme.id}`}><p className='side_bar_sub_text'>{scheme.title}</p></Link>
                    </li>
                ))}
            </ul>
        </Col>
    );
}

export default SchemesTitles;
