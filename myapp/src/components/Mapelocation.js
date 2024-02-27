import React, { useState } from 'react'
import { Container, Row, Col  } from 'react-bootstrap'
import '../index'
import '../App.css'

function Mapelocation() {

    return (
       
        <>
        <Container fluid>
            <Row>
              
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.739913898756!2d91.74624001483593!3d26.172598583451936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5bd352f21c11%3A0xb01804fb9a5bb96!2sDirectorate%20of%20Employment%20%26%20Craftsmen%20Training!5e0!3m2!1sen!2sin!4v1679983025332!5m2!1sen!2sin" style={{border:"0", width:"100%", height:"300px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                
            </Row>
        </Container>

          
           
        </>
    )
}
    

export default Mapelocation