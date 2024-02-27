import React, { useState, useEffect } from 'react'
import { Carousel  } from 'react-bootstrap'
import axios from 'axios'
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useNavigate  } from 'react-router-dom';
import '../index'
import '../App.css'

function Slider() {
  const [sliderimages, setSliderimages] = useState([])
  const {id}=useParams();
  const history = useNavigate();

  const getSliderimages = async() => {
  const response = await axios.get('http://127.0.0.1:8000/api/slider/')
  setSliderimages(response. data)
  }
  useEffect(() =>{
    getSliderimages();
  }, [])
const getSingleMinistry = async () =>{
      const {data} = await axios.get(`http://127.0.0.1:8000/api/slider/${id}`)
      console.log(data)
      setSliderimages(data)
  }
  useEffect(() =>{
      getSingleMinistry();
  }, [])

    return (
       
        <>
            <Carousel fade>
            {
       sliderimages.map((sliderimage, index) => (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sliderimage.image}
          alt="First slide"
        />
        
      </Carousel.Item>
      
       ))

      }
    </Carousel>
           
        </>
    )
}
    

export default Slider