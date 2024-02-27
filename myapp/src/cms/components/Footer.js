import React, { useState } from 'react'
import { Carousel  } from 'react-bootstrap'
import '../../../../cms2/src/index'
import '../App.css'

function FooTer() {

    return (
       
        <>
          <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; AMTRON 2023</span>
                    </div>
                </div>
            </footer>
            <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>
           
        </>
    )
}
    

export default FooTer