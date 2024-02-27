import React, { useState } from 'react'
import { Container, Row, Col, Card , Breadcrumb } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faCircleQuestion, faPersonChalkboard, faBookOpenReader, faIcons, faDownload, faMagnifyingGlassChart, faHandHoldingDollar, faUsersViewfinder, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
// import { CircleFill } from 'react-bootstrap-icons';
// import * as Icon from 'react-bootstrap-icons';


 
import '../index'
import '../App.css'

function Login() {

    return (
       
        <>
       
        <Container>
        <h3 className='text-center contact_us_title'>Login Account</h3>
        <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          {/* <h3 className="Auth-form-title">Sign In</h3> */}
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary button_submit">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
        </Container>


          
        
        </>
    )
}
    

export default Login