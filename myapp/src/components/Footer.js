import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Carousel  } from 'react-bootstrap'
import '../index'
import '../App.css'

function FooTer() {

    const [footeraddresses, setFooteraddresses] = useState([])
    const getFooterAddress = async() => {
        const response = await axios.get('http://127.0.0.1:8000/api/footer-address/')
        setFooteraddresses(response. data)
        }
        useEffect(() =>{
          getFooterAddress();
        }, [])

    return (
       
        <>
           <div className='footer main_them_footer_color'>
        <div className='container'>
        
            <div className='row'>
                <div class="col-md-4 col-sm-6 ">
                    <h3 className='underline'> Address & Contact</h3>
                    {
       footeraddresses.map((footeraddress, index) => (
                    <ul className='list-unstyled text-light mt-5 '>
                        <li className='main_them_dark_color'>{footeraddress.address}</li>
                        <li className='main_them_dark_color'>Phone: {footeraddress.email}</li>
                        <li className='main_them_dark_color'>Email: {footeraddress.phone}</li>
                        <li className='main_them_dark_color'></li>
                    </ul>
       ))
}
                </div>
                <div class="col-md-4 col-sm-6">
                    <h3 className='underline2'> Useful Links</h3>
                    <ul className='list-unstyled mt-5'>
                        <li><a href="/" className='menu-links'>Home</a></li>
                        <li><a href="/" className='menu-links'>Dashboard</a></li>
                        <li><a href="/" className='menu-links'>Guidelines</a></li>
                        <li><a href="/" className='menu-links'>Gallery</a></li>
                        <li><a href="/" className='menu-links'>Contact Us</a></li>
                    </ul>
                </div>
                <div class="col-md-4 col-sm-6">
                    <h3 className='underline3'> Important Links</h3>
                    <ul className='list-unstyled mt-5'>
                        <li><a href="https://cm.assam.gov.in/" className='menu-links'>Assam CM Portal</a></li>
                        <li><a href="https://assam.gov.in/" className='menu-links'>Assam State Portal</a></li>
                        <li><a href="https://skillmission.assam.gov.in/" className='menu-links'>Assam Skill Development Mission</a></li>
                        <li><a href="https://asdm.assam.gov.in/" className='menu-links'>Assam Skill Development Portal</a></li>
                        <li><a href="https://startup.assam.gov.in/" className='menu-links'>Startup Assam</a></li>
                    </ul>
                </div>
            </div>
        </div>
    
        <div className='main_them_footer2_color text-center'>
            Copyright &copy; 2023. ALL RIGHTS RESERVED BY AMTRON<br></br>
            Developed by AMTRON, Assam
        </div>
        
                      
    </div>
           
        </>
    )
}
    

export default FooTer