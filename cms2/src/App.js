import Header from './components/Header'
import TopNavbar from './components/TopNavbar'

import FooTer from './components/Footer'

import logo from './logo.svg';
import './App.css';
// import Button from 'react-bootstrap/Button';
// import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login'

import Dashboard from './components/Dashboard'
import Ministry_view from './components/Ministry_view'
import Ministry_add from './components/Ministry_add'
import Ministry_edit from './components/Ministry_edit'
import SliderImage_view from './components/SliderImage_view'
import SliderImage_add from './components/SliderImage_add'
import SliderImage_edit from './components/SliderImage_edit'
import Guideline_add from './components/Guideline_add'
import Guideline_view from './components/Guideline_view'
import Guideline_edit from './components/Guideline_edit'
import FooterAddress_add from './components/FooterAddress_add'
import FooterAddress_view from './components/FooterAddress_view'
import FooterAddress_edit from './components/FooterAddress_edit'
import ContactUs_add from './components/ContactUs_add'
import ContactUs_view from './components/ContactUs_view'
import ContactUs_edit from './components/ContactUs_edit'
import ContactTable_add from './components/ContactTable_add'
import ContactTable_view from './components/ContactTable_view'
import ContactTable_edit from './components/ContactTable_edit'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs_view from './components/AboutUs_view';
import AboutUs_add from './components/AboutUs_add';
import AboutUs_edit from './components/AboutUs_edit';
import Schemes_view from './components/Schemes_view';
import Schemes_add from './components/Schemes_add';
import Schemes_edit from './components/Schemes_edit';
import Resources_view from './components/Resources_view';
import Resources_add from './components/Resources_add';
import Resources_edit from './components/Resources_edit';
import Notification_view from './components/Notification_view';
import Notification_add from './components/Notification_add';
import Notification_edit from './components/Notification_edit';
import EventCards_view from './components/EventCards_view';
import EventCards_edit from './components/EventCards_edit';
import EventCards_add from './components/EventCards_add';


function App() {
  return (
    <div>
    
    <Router>
    <div id="wrapper">
      <Header />
      <div id="content-wrapper" className="d-flex flex-column">
      {/* <!-- Main Content --> */}
      <div id="content">
      <TopNavbar />
      
      <Routes>
      
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/ministry-view" element={<Ministry_view />} />
      <Route path="/ministry-add" element={<Ministry_add />} />
      <Route path="/:id/ministry-edit" element={<Ministry_edit />} />
      <Route path="/sliderimage-view" element={<SliderImage_view />} />
      <Route path="/sliderimage-add" element={<SliderImage_add />} />
      <Route path="/:id/sliderimage-edit" element={<SliderImage_edit />} />
      <Route path="/guideline-view" element={<Guideline_view />} />
      <Route path="/guideline-add" element={<Guideline_add />} />
      <Route path="/:id/guideline-edit" element={<Guideline_edit />} />
      <Route path="/footeraddress-view" element={<FooterAddress_view />} />          
      <Route path="/footeraddress-add" element={<FooterAddress_add />} />
      <Route path="/:id/footeraddress-edit" element={<FooterAddress_edit />} />
      <Route path="/contactus-view" element={<ContactUs_view />} />          
      <Route path="/contactus-add" element={<ContactUs_add />} />
      <Route path="/:id/contactus-edit" element={<ContactUs_edit />} />
      <Route path="/contacttable-view" element={<ContactTable_view />} />          
      <Route path="/contacttable-add" element={<ContactTable_add />} />
      <Route path="/:id/contacttable-edit" element={<ContactTable_edit />} />
      <Route path="/aboutus-view" element={<AboutUs_view />} />          
      <Route path="/aboutus-add" element={<AboutUs_add />} />
      <Route path="/:id/aboutus-edit" element={<AboutUs_edit />} />
      <Route path="/schemes-view" element={<Schemes_view />} />          
      <Route path="/schemes-add" element={<Schemes_add />} />
      <Route path="/:id/schemes-edit" element={<Schemes_edit />} />
      <Route path="/resources-view" element={<Resources_view />} />          
      <Route path="/resources-add" element={<Resources_add />} />
      <Route path="/:id/resources-edit" element={<Resources_edit />} />
      <Route path="/notification-view" element={<Notification_view />} />          
      <Route path="/notification-add" element={<Notification_add />} />
      <Route path="/:id/notification-edit" element={<Notification_edit />} />
      <Route path="/eventcards-view" element={<EventCards_view />} />          
      <Route path="/eventcards-add" element={<EventCards_add />} />
      <Route path="/:id/eventcards-edit" element={<EventCards_edit />} />
      </Routes>
      
     
      </div>
    <FooTer />
    </div>
    </div>
    </Router>
    </div>
  );
}


export default App;
