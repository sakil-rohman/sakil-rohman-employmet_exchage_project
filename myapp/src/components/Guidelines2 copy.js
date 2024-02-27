import React, { useState } from 'react'
import { Container, Row, Col, Card , Breadcrumb } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faCircleQuestion, faPersonChalkboard, faBookOpenReader, faIcons, faDownload, faMagnifyingGlassChart, faHandHoldingDollar, faUsersViewfinder, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
// import { CircleFill } from 'react-bootstrap-icons';
// import * as Icon from 'react-bootstrap-icons';



import '../index'
import '../App.css'
 

function Guidelines2() {

    return (
       
        <>
        
        <Container >
            <Row>
      <Breadcrumb className='mt-3' style={{fontSize:"23px"}}>
      <Breadcrumb.Item href="#" > <p style={{color:"#202b5d"}}> Home</p> </Breadcrumb.Item>
      <Breadcrumb.Item active>Guidelines</Breadcrumb.Item>
    </Breadcrumb> 

            </Row>
        </Container>
        <Container fluid>
            <Row>
                
                <Col className=' mt-2 mb-5' md={9} xs={9} style={{boxShadow: " rgba(0, 0, 0, 0.1) 0px 10px 50px"}}>

                    <h3 className='text_title_head' style={{paddingLeft:"5%"}}>Non-AADHAAR Based - Guidelines for Registration in Employment Exchanges of Assam </h3>
                    <ol className='guideline_p'>
                        <li className='main_bullet_color '> <span className='p_text'>
                        All citizens of India above the age of 14 years who are permanent residents of Assam are eligible to register their names in the Employment Exchange of the State of Assam.
                            </span> </li>
                        <li className='main_bullet_color '> <span className='p_text'>
                        The candidates are eligible for Registration in one Employment Exchange only in the state, where they are permanent residents within the jurisdiction of the District.
                            </span> </li>
                        <li className='main_bullet_color '> <span className='p_text'>
                        Applicants who are already employed and seeking better employment have to be registered only after production of a <span className='p_text_highlight'>“No Objection Certificate”</span>  issued by the employer.
                            </span> </li>
                        <li className='main_bullet_color '> <span className='p_text'>
                        The following documents are to be submitted:-
                            </span> 
                            <ol type='a'>
                                <li className='main_bullet_color '> <span className='p_text'>
                                <span className='p_text_bold'>Age Proof:-</span>  Birth Certificate/ HSLC Admit card/ School Certificate ( Any one of these three documents)
                                    </span> </li>
                                <li className='main_bullet_color '> <span className='p_text_bold'>
                                Proof of Residency:-
                                    </span> 
                                    <ul> 
                                    <li className='main_bullet_color '> <span className='p_text'>
                                    Applicants having AADHAAR Card with permanent address within the state of Assam will be allowed to Register Online without visiting the Employment Exchange as per Office Memorandum issued vide no. <span className='p_text_highlight'>SKE. 42/2021/32 Dated Dispur the 19th July 2021.</span>  (Only for verification of the state of ASSAM)
                                        </span></li>
                                    <li className='main_bullet_color '> <span className='p_text'>
                                    Passport/EPIC/Certified copy of Electoral Rolls/Land documents/Marriage Certificate/Electricity Bill/Driving License ( to be uploaded any one of these documents for permanent address of applicant )
                                        </span> </li>

                                    </ul>
                                </li>
                                <li className='main_bullet_color '> <span className='p_text'>
                                    <span className='p_text_bold'> Educational Qualification Certificate:-</span>
                                Pass Certificate (S) and Mark Sheet(S)
                                    </span> 
                                
                                </li>
                                <li className='main_bullet_color '> <span className='p_text_bold'>
                                Caste Certificate in cases of SC/ST/OBC/MOBC applicants
                                    </span> </li>
                                <li className='main_bullet_color '> <span className='p_text_bold'>
                                In case of P.W.D ( Persons With Disability) candidate –Disability certificate issued by competent authority.
                                    </span> 
                                
                                </li>
                                <li className='main_bullet_color '> <span className='p_text_bold'>
                                Additional Qualification Certificate ( if any) 
                                    </span> 
                               
                                </li>
                                <li className='main_bullet_color '> <span className='p_text_bold'>
                                Experience Certificate ( If any)
                                    </span> </li>
                                <li className='main_bullet_color '> <span className='p_text_bold'>
                                Non- Creamy Layer Certificate.
                                    </span> </li>



                            </ol>
                        </li>
                        <li className='main_bullet_color '><span className='p_text'>All text box with asterisk (*) symbol is mandatory to filled up.</span></li>
                        <li className='main_bullet_color '><span className='p_text'>Please scan all Educational Qualification (Pass Certificate & Mark sheets in chronological order from lowest level to highest level) into a single PDF and upload as one single PDF.</span></li>
                        <li className='main_bullet_color '><span className='p_text'>After successfully submission of application Employment Exchange Card (X 10) will be issued to his/her registered Email.</span></li>
                        <li className='main_bullet_color '><span className='p_text'>Every registrant shall renew his /her registration once in three (3) years in the due month as indicated on his/her Registration card.</span></li>
                        <li className='main_bullet_color '><span className='p_text'>Failure to renew the registration even after lapse of grace period (3 months), will lead to cancellation of registration and subsequent removal from Live Register maintained in the Employment Exchange.</span></li>
                        <li className='main_bullet_color '><span className='p_text'>No request for renewal of registration after the expiry of the due month and grace period shall be entertained under any circumstances.</span></li>


                    </ol>
                </Col>
                <Col md={3} xs={3} className="side_bar_right">
                <p className='side_bar_text'>Guidelines</p>
                <p className='side_bar_sub_text'>
                Guidelines for Registration in Employment Exchanges of Assam
                </p>
                <ul>
                    <li className='side_bar_bullet_color'><p className='side_bar_sub_text'>AADHAAR Based</p> </li>
                    <li className='side_bar_bullet_color'><p className='side_bar_sub_text'>Non-AADHAAR Based</p></li>
                </ul>
                </Col>
                
            </Row>

        </Container>


        
        </>
    )
}
    

export default Guidelines2