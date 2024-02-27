import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Breadcrumb } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faCircleQuestion, faPersonChalkboard, faBookOpenReader, faIcons, faDownload, faMagnifyingGlassChart, faHandHoldingDollar, faUsersViewfinder, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from "react-router-dom";

import '../index';
import '../App.css';


function Mini_about_us() {

    return (
        <>
            <Container>
            <Row>
            <Row className='pragraph_text'>
            <div>
              <p className='sub_head'>Welcome To</p>
              <h3 className='underline_main'>Directorate of Employment & Training</h3>
              <p className='mt-5 w_90'>
              INTRODUCTION
Directorate of Employment & Training, DET is working under the Department of Labour and Employment, Government of Gujarat. It was formed in Gujarat State in 1971 by amalgamation of the Employment Wing, functioning under the Labour Directorate, and the Vocational Training Scheme under the Directorate of Technical Education.

Two statutes have been enacted by the Govt. of India to help in achieving the objectives of higher employment in organised sector through training.

DET functions with the major objectives of providing Vocational Training and Employment Services to the youth in Gujarat State. To achieve these objectives the DET runs a variety of long-term and short-term training programmes in Industrial Training Institutes/ Centers in the State. It also registers the youth looking for employment and provides placement services to them through Employment Exchanges that also maintain the list of prospective Employers.

Directorate of Employment & Training, Government of Gujarat has been in the forefront of implementing various skill-building programs with the aim of helping people get jobs. At present 48 employment exchanges are functioning under this Directorate to assist people registered with employment exchanges.

Employment Exchanges in the state have been chasing the placement of the registrants with the employers in the affective manner with the innovative approaches of industrial recruitment rallies in industrial areas of the state and with the close liaison with the employers.

Gujarat No.1 in providing Employment through Employment Exchanges.
Our constant endeavor is to provide the job seekers and the prospective employers the best of services and therefore, we request you to give your valuable suggestions and Feedback. Our address is as following:-

Directorate of Employment & Training,
3rd Floor, Block No. 1, Dr. Jivraj Mehta Bhavan,
Gandhinagar – 382010, GUJARAT (India)
Phone: 91-79-23253805, Fax: 91-79-23253835
              </p>
              
            </div>
          </Row>
            
            </Row>
        </Container>
        </>
    );
}

export default Mini_about_us;
