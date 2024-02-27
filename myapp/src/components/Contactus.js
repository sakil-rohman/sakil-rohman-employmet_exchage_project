import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { Container, Row, Col, Card , Breadcrumb, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faCircleQuestion, faPersonChalkboard, faBookOpenReader, faIcons, faDownload, faMagnifyingGlassChart, faHandHoldingDollar, faUsersViewfinder, faPeopleGroup , faPhoneVolume, faEnvelopeCircleCheck} from '@fortawesome/free-solid-svg-icons'
// import { CircleFill } from 'react-bootstrap-icons';
// import * as Icon from 'react-bootstrap-icons';
import firstImage from '../img/dam.png';


 
import '../index'
import '../App.css'

function Contactus() {
  const [contactuss, setContactUs] = useState([]);
  const [contactussalls, setContactUsAll] = useState([]);
    const getContactUs = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/contactus/');
        // Example filtering based on a condition, replace with your own filtering logic
        const filteredData = response.data.filter(item => item.designation === 'Director, Employment & Craftsmen Training');
        setContactUs(filteredData);
    };
    const getContactUsAll = async() => {
      const response = await axios.get('http://127.0.0.1:8000/api/contactus/')
      const filteredData = response.data.filter((item => item.designation === 'Deputy Director of Employment') || (item => item.designation === 'Deputy Director of Employment (i/c)')) ;
      setContactUsAll(filteredData) 
      };

    useEffect(() => {
        getContactUs();
        getContactUsAll();
    }, []);

    
     

    return (
       
        <>
        
        {/* <Container >
            <Row>
      <Breadcrumb className='mt-3' style={{fontSize:"23px"}}>
      <Breadcrumb.Item href="#" > <p style={{color:"#202b5d"}}> Home</p> </Breadcrumb.Item>
      <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
    </Breadcrumb> 

            </Row>
        </Container> */}
        <Container >
            <Row>
                <h3 className='text-center contact_us_title'>Contact Us</h3>
                <Col className=' mt-5 mb-5' >
                
                <Container>
                <Row xs={1} md={2} className="g-4 mt-4">
            
                {contactuss.map((contactus, index) => (
      
        <Col>
          <Card className='box_shadow'>
            <Card.Img  className='mx-auto d-inline-block shadow_sm img_size' style={{borderRadius:"50%", boxShadow:" 0 .125rem .25rem rgba(0,0,0,.075)!important"}} src={contactus.image} />
            <Card.Body>
              <Card.Title className='text-center midcard_text' >{contactus.name}</Card.Title>
              <Card.Subtitle className='text-center card_text_2'>{contactus.details}</Card.Subtitle>
              <Card.Text className='p_text m-4'>
              {contactus.address}
              <br />
                    <span className='main_color_bold'>Phone No.:</span>  {contactus.phone} <br />
                    <span className='main_color_bold'>E-mail:</span>  {contactus.email} <br />
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center border-0">
                <a href="tel:03612637959 " className='m-2'> <FontAwesomeIcon icon={faPhoneVolume}  className="card_footer_icon" /> </a>
                <a href="mailto: dectempt@yahoo.com" className='m-2'> <FontAwesomeIcon icon={faEnvelopeCircleCheck}   className="card_footer_icon"/> </a>
                

            </Card.Footer>
          </Card>
        </Col>
         ))}
      
    </Row>
                <Row xs={1} md={3} className="g-4" style={{marginTop:"100px"}}>


        {contactussalls.map((contactussall, index) => (

        <Col className='mt-5 mb-5'>
          <Card className='box_shadow'>
            <Card.Img  className='mx-auto d-inline-block shadow_sm img_size' style={{borderRadius:"50%", boxShadow:" 0 .125rem .25rem rgba(0,0,0,.075)!important"}} src={contactussall.image} />
            <Card.Body>
              <Card.Title className='text-center midcard_text' >{contactussall.name}​</Card.Title>
              <Card.Subtitle className='text-center card_text_2'>{contactussall.designation}</Card.Subtitle>
              <Card.Text className='p_text m-4'>
              {contactussall.address}  <br />
                    <span className='main_color_bold'>Phone No.:</span> {contactussall.phone} <br />
                    <span className='main_color_bold'>E-mail:</span>  {contactussall.email} <br />
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center border-0">
                <a href={contactussall.phone} className='m-2'> <FontAwesomeIcon icon={faPhoneVolume}  className="card_footer_icon" /> </a>
                <a href={contactussall.phone} className='m-2'> <FontAwesomeIcon icon={faEnvelopeCircleCheck}   className="card_footer_icon"/> </a>
                

            </Card.Footer>
          </Card>
        </Col>
        ))}
        {/* <Col>
          <Card className='box_shadow'>
            <Card.Img  className='mx-auto d-inline-block shadow_sm img_size' style={{borderRadius:"50%", boxShadow:" 0 .125rem .25rem rgba(0,0,0,.075)!important"}} src="/images/sgkr.png" />
            <Card.Body>
              <Card.Title className='text-center midcard_text' >Shri G. K. Rahang</Card.Title>
              <Card.Subtitle className='text-center card_text_2'>Deputy Director of Employment</Card.Subtitle>
              <Card.Text className='p_text m-4'>
              Deputy Director of Employment <br /> C.R. Building, P.O.-Dibrugarh, Pin No. 786001, <br /> Dist.-Dibrugarh, Assam (Dibrugarh Zone)<br />
                    <span className='main_color_bold'>Phone No.:</span>  9435364468 <br />
                    <span className='main_color_bold'>E-mail:</span>  ddesazsilchar@gmail.com
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center border-0">
                <a href="tel:9435364468 " className='m-2'> <FontAwesomeIcon icon={faPhoneVolume}  className="card_footer_icon" /> </a>
                <a href="mailto: ddesazsilchar@gmail.com" className='m-2'> <FontAwesomeIcon icon={faEnvelopeCircleCheck}   className="card_footer_icon"/> </a>
                

            </Card.Footer>
          </Card>
        </Col> */}
        {/* <Col>
          <Card className='box_shadow'>
            <Card.Img  className='mx-auto d-inline-block shadow_sm img_size' style={{borderRadius:"50%", boxShadow:" 0 .125rem .25rem rgba(0,0,0,.075)!important"}} src="/images/set.png" />
            <Card.Body>
              <Card.Title className='text-center midcard_text' >Smti. Elveena Thaosen</Card.Title>
              <Card.Subtitle className='text-center card_text_2'>Deputy Director of Employmen</Card.Subtitle>
              <Card.Text className='p_text m-4'>
              Deputy Director of Employmen <br /> P.O.-Diphu, Pin No. 782460, <br /> Dist.-Karbi Anglong,  Assam (Hills Zone)<br />
                    <span className='main_color_bold'>Phone No.:</span>  9435173995 <br />
                    <span className='main_color_bold'>E-mail:</span>  thaosenelveena5@gmail.com
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center border-0">
                <a href="tel:9435173995 " className='m-2'> <FontAwesomeIcon icon={faPhoneVolume}  className="card_footer_icon" /> </a>
                <a href="mailto: thaosenelveena5@gmail.com" className='m-2'> <FontAwesomeIcon icon={faEnvelopeCircleCheck}   className="card_footer_icon"/> </a>
                

            </Card.Footer>
          </Card>
        </Col> */}
      
    </Row>
                <Row xs={1} md={3} className="g-4" style={{marginTop:"100px"}}>
      
        <Col>
          <Card className='box_shadow'>
            <Card.Img  className='mx-auto d-inline-block shadow_sm img_size' style={{borderRadius:"50%", boxShadow:" 0 .125rem .25rem rgba(0,0,0,.075)!important"}} src={firstImage} />
            <Card.Body>
              <Card.Title className='text-center midcard_text' >Dr. Alpana Mahanta​</Card.Title>
              <Card.Subtitle className='text-center card_text_2'>Deputy Director of Employment</Card.Subtitle>
              <Card.Text className='p_text m-4'> A. K. Azad Road, P.O.-Rehabari, <br /> Guwahati,  Pin No. 781008, <br /> Kamrup(M), Assam (Lower Assam Zone) <br />
                    <span className='main_color_bold'>Phone No.:</span>  9435047041 <br />
                    <span className='main_color_bold'>E-mail:</span>  dectempt@yahoo.com
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center border-0">
                <a href="tel:9435047041 " className='m-2'> <FontAwesomeIcon icon={faPhoneVolume}  className="card_footer_icon" /> </a>
                <a href="mailto: ddetezpur@gmail.com" className='m-2'> <FontAwesomeIcon icon={faEnvelopeCircleCheck}   className="card_footer_icon"/> </a>
                

            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className='box_shadow'>
            <Card.Img  className='mx-auto d-inline-block shadow_sm img_size' style={{borderRadius:"50%", boxShadow:" 0 .125rem .25rem rgba(0,0,0,.075)!important"}} src={firstImage} />
            <Card.Body>
              <Card.Title className='text-center midcard_text' >Shri Manoj Kanu
</Card.Title>
              <Card.Subtitle className='text-center card_text_2'>Deputy Director of Employment (i/c)</Card.Subtitle>
              <Card.Text className='p_text m-4'>
              Deputy Director of Employment (i/c) <br />
P.O.-Silchar, Pin No. 788001, <br /> Dist.-Cachar, Assam (Southern Assam Zone)<br />
                    <span className='main_color_bold'>Phone No.:</span>  9435375289 <br />
                    <span className='main_color_bold'>E-mail:</span>  ddesazsilchar@gmai
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center border-0">
                <a href="tel:9435375289 " className='m-2'> <FontAwesomeIcon icon={faPhoneVolume}  className="card_footer_icon" /> </a>
                <a href="mailto: ddesazsilchar@gmai" className='m-2'> <FontAwesomeIcon icon={faEnvelopeCircleCheck}   className="card_footer_icon"/> </a>
                

            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className='box_shadow'>
            <Card.Img  className='mx-auto d-inline-block shadow_sm img_size' style={{borderRadius:"50%", boxShadow:" 0 .125rem .25rem rgba(0,0,0,.075)!important"}} src={firstImage} />
            <Card.Body>
              <Card.Title className='text-center midcard_text' >Shri S. K. Gohain</Card.Title>
              <Card.Subtitle className='text-center card_text_2'>Deputy Director of Employmen</Card.Subtitle>
              <Card.Text className='p_text m-4'>
              Deputy Director of Employmen <br /> P.O.-Jorhat, Pin No. 785014, <br /> Dist.-Jorhat, Assam (Upper Assam Zone)<br />
                    <span className='main_color_bold'>Phone No.:</span>  9435336765 <br />
                    <span className='main_color_bold'>E-mail:</span>  ddejorhat2018@gmail.com
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center border-0">
                <a href="tel:9435336765 " className='m-2'> <FontAwesomeIcon icon={faPhoneVolume}  className="card_footer_icon" /> </a>
                <a href="mailto: ddejorhat2018@gmail.com" className='m-2'> <FontAwesomeIcon icon={faEnvelopeCircleCheck}   className="card_footer_icon"/> </a>
                

            </Card.Footer>
          </Card>
        </Col>
      
    </Row>
                </Container>
                    
                </Col>
                {/* <Col md={3} xs={3} className="side_bar_right">
                <p className='side_bar_text'>Guidelines</p>
                <p className='side_bar_sub_text'>
                Guidelines for Registration in Employment Exchanges of Assam
                </p>
                <ul>
                    <li className='side_bar_bullet_color'><p className='side_bar_sub_text'>AADHAAR Based</p> </li>
                    <li className='side_bar_bullet_color'><p className='side_bar_sub_text'>Non-AADHAAR Based</p></li>
                </ul>
                </Col> */}
                
            </Row>

        </Container>
        <Container>
            <p className=' text-center mt-5 underline_head'>Officer & Contact Details of Employment Exchanges</p>
        <Table striped bordered hover className='table_1'>
      <thead>
        <tr className='main_them_color main_them_dark_color'>
          <th>#</th>
          <th style={{width:"278px"}}>Name of Employment Exchange</th>
          <th>Address</th>
          <th>Name of Officer</th>
          <th>Contact Details of Officer</th>
        </tr>
      </thead>
      <tbody>
<tr>
<td>1</td>
<td>Assam Agricultural University - UEI &amp; GB</td>
<td>P.O. &amp; Dist. Jorhat, Assam</td>
<td>Shri. Sharadindu Saikia, AEO</td>
<td>9613529781, ueigbaau13@gmail.com</td>
</tr>
<tr>
<td>2</td>
<td>Barpathar (Dhansiri) - EE</td>
<td>P.O.-Barpathar, Pin No. 785602, Dist.-Golaghat, Assam</td>
<td>Shri Rakesh Das, AEO</td>
<td>8638891184, empexhangedhansiri@gmail.com</td>
</tr>
<tr>
<td>3</td>
<td>Barpeta - DEE</td>
<td>P.O.-Barpeta, Pin No. 781301,Dist.-Barpeta, Assam</td>
<td>Smti. Lipika Datta, ADE</td>
<td>9864081871, dee.barpeta01@gmail.com</td>
</tr>
<tr>
<td>4</td>
<td>Biswanath Chariali - EE</td>
<td>P.O.-Biswanath Chariali, Pin No. 784177, Dist.-Sonitpur, Assam</td>
<td>Smti. Rakhi Dey Bhattacharjee, AEO</td>
<td>9401965291, employmentbiswanathchariali@gmail.com</td>
</tr>
<tr>
<td>5</td>
<td>Bokajan - EE</td>
<td>P.O.-Bokajan, Pin No. 782480, Dist.-Karbi Anglong, Assam</td>
<td>Shri B. C. Daimary, AEO</td>
<td>9859676378, aeobkj@gmail.com</td>
</tr>
<tr>
<td>6</td>
<td>Bongaigaon - DEE</td>
<td>P.O.-Bongaigaon, Pin No. 783380,Dist.-Bongaigaon, Assam</td>
<td>Shri Manoranjan Basumatary, EO</td>
<td>9678873631, dectbonee@gmail.com</td>
</tr>
<tr>
<td>7</td>
<td>Chapakhowa (Sadiya) - EE</td>
<td>P.O.-Chapakhowa, Pin No. 786157, Dist.-Tinsukia, Assam</td>
<td>Shri Lalit Konwar, AEO</td>
<td>9954962215, sadiyaempexch@gmail.com</td>
</tr>
<tr>
<td>8</td>
<td>Dhemaji - DEE</td>
<td>P.O.-Dhemaji, Pin No. 787057, Dist.-Dhemaji, Assam</td>
<td>Shri Raghunath Pamegam, EO (i/c)</td>
<td>9707591119, deedhemaji5@gmail.com</td>
</tr>
<tr>
<td>9</td>
<td>Dhubri - DEE</td>
<td>P.O.-Dhubri, Pin No. 783301, Dist.-Dhubri, Assam</td>
<td>Shri Dilip Das, ADE</td>
<td>9957709173, aeodhubri@gmail.com</td>
</tr>
<tr>
<td>10</td>
<td>Dibrugarh - DEE</td>
<td>P.O.-Dibrugarh, Pin No. 786001, Dist.-Dibrugarh, Assam</td>
<td>Shri J. Kutum, ADE</td>
<td>6900892465, deedbrg@gmail.com</td>
</tr>
<tr>
<td>11</td>
<td>Dibrugarh University - UEI &amp; GB</td>
<td>P.O.-Dibrugarh, Dist.-Dibrugarh, Assam, Pin No.</td>
<td>Smti Pallabi Doley, AEO</td>
<td>9101777204, Pallavidoley1@gmail.com</td>
</tr>
<tr>
<td>12</td>
<td>Digboi - EE</td>
<td>P.O.-Digboi, Pin No. 786171, Dist.-Tinsukia, Assam</td>
<td>Shri Surajit Borgohain, AEO</td>
<td>9954264486, eedigboi07@gmail.com</td>
</tr>
<tr>
<td>13</td>
<td>Diphu - DEE</td>
<td>P.O.-Diphu, Pin No. 782460, Dist.-Karbi Anglong, Assam</td>
<td>Shri Jitendra Rongpi, EO</td>
<td>9127391162, drbichitra.nath@gmail.com</td>
</tr>
<tr>
<td>14</td>
<td>Doomdooma - EE</td>
<td>P.O.-Doomdooma, Pin No. 786001, Dist.-Tinsukia, Assam</td>
<td>Smti. Ritu Sharma, AEO</td>
<td>9531066722, writzsharma@gmail.com</td>
</tr>
<tr>
<td>15</td>
<td>Duliajan - EE</td>
<td>P.O.-Duliajan, Pin No. 786602, Dist.-Dibrugarh, Assam</td>
<td>Shri Chinmoy Thakur, AEO</td>
<td>9854842901, duliajanexchange16@rediffmail.com</td>
</tr>
<tr>
<td>16</td>
<td>Garampani - EE</td>
<td>P.O.-Garampani, Umrangsho, Dist.- Dima Hasao, Pin No. 788931, Assam</td>
<td>Shri Robinson Rongpi, EO i/c</td>
<td>9435315431, Robinsonrongpi171@gmail.com</td>
</tr>
<tr>
<td>17</td>
<td>Gauhati University - UEI &amp; GB</td>
<td>Jalukbari, P.O.-Gauhati University, Pin No. 781014, Dist.-Kamrup(M), Assam</td>
<td>Shri. Chandan Kalita, AEO</td>
<td>8403816066, chandankalita72@gmail.com</td>
</tr>
<tr>
<td>18</td>
<td>Goalpara - DEE</td>
<td>P.O.-Baladmari, Pin No. 783101, Dist.-Goalpara, Assam</td>
<td>Shri N. Sheikh, EO</td>
<td>9957057637, goalpdee@gmail.com</td>
</tr>
<tr>
<td>19</td>
<td>Golaghat - DEE</td>
<td>P.O.-Golaghat, Pin No. 785521, Dist.-Golaghat, Assam</td>
<td>Smti Debalata Das, (EO)</td>
<td>9101014779, debolatadas2021@gmail.com</td>
</tr>
<tr>
<td>20</td>
<td>Gossaigaon - EE</td>
<td>P.O.-Gossaigaon, Pin No. 783360, Dist.-Kokrajhar, Assam</td>
<td>Firoj Khandakar, AEO</td>
<td>7002442436, firojemp@gmail.com</td>
</tr>
<tr>
<td>21</td>
<td>Guwahati - DEE</td>
<td>P.O.-Rehabari, Guwahati, Pin-781008, Dist.-Kamrup (M), Assam</td>
<td>Smti. Farzana Samsul, ADE (i/c)</td>
<td>9435199893, ghydee14@gmail.com</td>
</tr>
<tr>
<td>22</td>
<td>Haflong - DEE</td>
<td>P.O.-Haflong, Pin No. 788819, Dist.-Dima Hasao, Assam</td>
<td>Shri Robinson Rongpi, EO i/c</td>
<td>9435315431, Robinsonrongpi171@gmail.com</td>
</tr>
<tr>
<td>23</td>
<td>Hailakandi - DEE</td>
<td>P.O.-Hailakandi, Pin No. 788151, Dist.-Hailakkandi, Assam</td>
<td>Shri Champak Deka, EO</td>
<td>9435586035, deehailakandi@gmail.com</td>
</tr>
<tr>
<td>24</td>
<td>Hamren - EE</td>
<td>P.O.-Hamren, Pin No. 782486, Dist.-Karbi Anglong, Assam</td>
<td>Smti. Namrata Chetri, AEO (i/c)</td>
<td>9435595329, aeohamren@gmail.com</td>
</tr>
<tr>
<td>25</td>
<td>Hatsingimari - EE</td>
<td>P.O.-Phikamari, Pin No. 783337, Dist.-Dhubri, Assam</td>
<td>Shri Ashyutananda Hazarika, AEO</td>
<td>9859433839, aeohatsingimari@gmail.com</td>
</tr>
<tr>
<td>26</td>
<td>Hojai - EE</td>
<td>P.O.-Hojai, Pin No. 782435, Dist.-Hojai, Assam</td>
<td>Smti. Namrata Chetri, AEO</td>
<td>9435595329, empexhoj@gmail.com</td>
</tr>
<tr>
<td>27</td>
<td>Jagiroad - EE</td>
<td>P.O.-Jagiroad, Pin No. 782410, Dist.-Morigaon, Assam</td>
<td>Shri Dhrubajyoti Sarmah, AEO</td>
<td>9957789051, dhruba.online@gmail.com</td>
</tr>
<tr>
<td>28</td>
<td>Jonai - EE</td>
<td>P.O.-Jonai, Pin No. 787060, Dist.-Dhemaji, Assam</td>
<td>Shri Biswajit Nath, AEO</td>
<td>7002632319, employmentexchangejonai@gmail.com</td>
</tr>
<tr>
<td>29</td>
<td>Jorhat - DEE</td>
<td>P.O.-Jorhat, Pin No. 785014, Dist.-Jorhat, Assam</td>
<td>Shri Tariq Choudhury, (EO)</td>
<td>8486939761, adejorhat@gmail.com</td>
</tr>
<tr>
<td>30</td>
<td>Kaliabor - EE</td>
<td>P.O.-Kuwaritol, Pin No. 782137, Dist.-Nagaon, Assam</td>
<td>Shri Hemen Sarma, AEO</td>
<td>94015 9629, aeokaliabor@gmail.com</td>
</tr>
<tr>
<td>31</td>
<td>Karimganj - DEE</td>
<td>P.O.-Karimganj, Pin No. 788711, Dist.-Karimganj, Assam</td>
<td>Shri B. D. Nunia, (EO)</td>
<td>9435523411, exchangeemployment@yahoo.com</td>
</tr>
<tr>
<td>32</td>
<td>Kokrajhar - DEE</td>
<td>P.O.-Kokrajhar, Pin No. 783370, Dist.-Kokrajhar, Assam</td>
<td>Dr. Kunal Kanti Boro, AEO</td>
<td>8134873502, kokokb.82@gmail.com</td>
</tr>
<tr>
<td>33</td>
<td>Majuli - EE</td>
<td>P.O.-Garmur, Pin No. 785104, Dist.-Jorhat, Assam</td>
<td>Smti. Smita Bharadwaj, AEO</td>
<td>9678099102, ddomajuli@gmail.com</td>
</tr>
<tr>
<td>34</td>
<td>Mongaldoi - DEE</td>
<td>P.O.-Mangaldoi, Pin No. 784125, Dist.-Mangaldoi, Assam</td>
<td>Smti. Runu Bharali, EO</td>
<td>8134070896, dist.empex84@gmail.com</td>
</tr>
<tr>
<td>35</td>
<td>Moranhat - EE</td>
<td>P.O.-Moranhat, Pin No. 785670, Dist.-Sivasagar, Assam</td>
<td>Shri Biman Bora, AEO</td>
<td>9101421552, eemoranhat@gmail.com</td>
</tr>
<tr>
<td>36</td>
<td>Morigaon - DEE</td>
<td>P.O.-Morigaon, Pin No. 782105, Dist.-Morigaon, Assam</td>
<td>Smti. Suparna Chakraborty, EO</td>
<td>9706044585, eodeemorigaon@gmail.com</td>
</tr>
<tr>
<td>37</td>
<td>Nagaon - DEE</td>
<td>P.O.-Panigaon (Itachali), Pin No. 782003, Dist.-Nagaon, Assam</td>
<td>Shri Paresh Bordoloi, EO i/c</td>
<td>7896130810, msw.paresh@gmail.com</td>
</tr>
<tr>
<td>38</td>
<td>Nalbari - DEE</td>
<td>P.O.-Nalbari, Pin No. 781335, Dist.-Nalbari, Assam</td>
<td>Smti. Farzana Samsul, EO</td>
<td>9435199893, deenalbari2@gmail.com</td>
</tr>
<tr>
<td>39</td>
<td>Namrup - EE</td>
<td>P.O.-Namrup, Pin No. 786621, Dist.-Dibrugarh, Assam</td>
<td>Shri K. Nokte, (EO)</td>
<td>9435252561, exnamrup460@gmail.com</td>
</tr>
<tr>
<td>40</td>
<td>Nazira - EE</td>
<td>P.O.-Nazira, Pin No. 785685, Dist.-Sivasagar, Assam</td>
<td>Shri. S.K. Gohain, AEO i/c</td>
<td>9435336765, employmentexchangenazira@gmail.com</td>
</tr>
<tr>
<td>41</td>
<td>North Lakhimpur - DEE</td>
<td>P.O.-North Lakhimpur, Pin No. 787001, Dist.-North Lakhimpur, Assam</td>
<td>Shri Nabin Hira, EO i/c</td>
<td>9101207321, nlpdee@rediffmail.com</td>
</tr>
<tr>
<td>42</td>
<td>Patharkandi - EE</td>
<td>P.O.-Patharkandi, Pin No. 788724, Dist.-Karimganj, Assam</td>
<td>Shri Kshiti Nath Das, AEO</td>
<td>9864464942, employmentexchangepkd@gmail.com</td>
</tr>
<tr>
<td>43</td>
<td>Ramkrishna Nagar - EE</td>
<td>Sub Divisional Agriculture Office. P.O Ramkrishna Nagar. Dist-Karimganj, Pin No-788166</td>
<td>Shri B. D. Nunia, AEO i/c</td>
<td>9435523411, exchangeemployment@yahoo.com</td>
</tr>
<tr>
<td>44</td>
<td>Rangia - EE</td>
<td>P.O.-Rangia, Pin No. 781354, Dist.-Kamrup, Assam</td>
<td>Shri Gitartha Barua, AEO</td>
<td>9435706972, ee.rangia2018@gmail.com</td>
</tr>
<tr>
<td>45</td>
<td>Silchar - DEE</td>
<td>P.O.-Silchar, Pin No. 788001, Dist.-Cachar, Assam</td>
<td>Shri Manoj Kanu, ADE</td>
<td>9435379435, deesilchar@gmail.com</td>
</tr>
<tr>
<td>46</td>
<td>Sivasagar - DEE</td>
<td>P.O.-Sivasagar, Pin No. 785621, Dist.-Sivasagar, Assam</td>
<td>Smti Suprava Logun, ADE i/c</td>
<td>8402936313, deesib123@gmail.com</td>
</tr>
<tr>
<td>47</td>
<td>Sonari - EE</td>
<td>P.O.-Sonari, Pin No. 785690, Dist.-Sivasagar, Assam</td>
<td>Smti. Binita Rani Hojai, AEO</td>
<td>9435180620, sonariemploymentexchange1984@gmail.com</td>
</tr>
<tr>
<td>48</td>
<td>Tezpur - DEE</td>
<td>Chandmari, Near Rail Gate, P.O.-Tezpur, Pin No. 784001, Dist.-Sonitpur, Assam</td>
<td>Shri Himangshu Das, ADE</td>
<td>8638621346, adetezdee2014@gmail.com</td>
</tr>
<tr>
<td>49</td>
<td>Tinsukia - DEE</td>
<td>P.O.-Tinsukia, Pin No. 786125, Dist.-Tinsukia, Assam</td>
<td>Shri Deben Ch. Kalita, EO</td>
<td>8638020525, 8638020525, deetinsukia@gmail.com</td>
</tr>
<tr>
<td>50</td>
<td>Udalguri - DEE</td>
<td>P.O.-Udalguri, Pin No. 784509, Dist.-Udalguri, Assam</td>
<td>Dr. Kunal Kanti Boro, AEO i/c</td>
<td>8134873502, udlempexe@gmail.com</td>
</tr>
<tr>
<td>51</td>
<td>Unskilled Applicants, Guwahati - EE</td>
<td>P.O.-Rehabari, Guwahati, Pin No. 781008, Dist.-Kamrup (M), Assam</td>
<td>Shri. Prashanta Saikia, (EO)</td>
<td>9707052269, eounskilledghy@yahoo.com</td>
</tr>
</tbody>
    </Table>
        </Container>


          
       
        </>
    )
}
    

export default Contactus