import Header from './components/Header'
import Home from './components/Home'
import FooTer from './components/Footer'
import Mapelocation from './components/Mapelocation'
import Midcard from './components/Midcard'
import logo from './logo.svg';
import './App.css';
// import Button from 'react-bootstrap/Button';
// import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Guidelines from './components/Guidelines'
import Guidelines2 from './components/Guidelines2 copy'
import Contactus from './components/Contactus'
// import Footer_s from './components/Footer';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './components/gallery'
import Login from './components/Login'
import Registration from './components/Registration'

import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/Aboutus'
import AboutUs_view from './components/Aboutus_view'
import AboutusTitles from './components/AboutusTitles'
import Schemes from './components/Schemes'
import Schemes_view from './components/Schemes_view'
import SchemesTitles from './components/SchemesTitles'
import NotificationTitles from './components/Notification'
import Notification_view from './components/Notification_view'

// function App() {
//   return (
//     <div>
    

      
//       <Header />
//       <BrowserRouter>
//       <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/guidelines" element={<Guidelines />} />
//       <Route path="/guidelines2" element={<Guidelines2 />} />
//       <Route path="/contactus" element={<Contactus />} />
//       <Route path="/gallery" element={<Gallery />} />
//           {/* <main className='content'> */}
//       {/* <Slider /> */}
//        {/* <Midcard /> */}
//       {/* <Mapelocation />  */}
//       {/* </main> */}
     
//       {/* <Route path="/guidlines">
//               <Guidlines />
//       </Route>   */}
//       </Routes>
//       </BrowserRouter>
      
//     <FooTer />
//     </div>
//   );
// }
function App() {
  return (
    <div>
    
    <Router>
      
      <Header />
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/guidelines" element={<Guidelines />} />
      <Route path="/guidelines2" element={<Guidelines2 />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/:id/aboutus-view" element={<AboutUs_view />} /> 
      <Route path="/aboutus-titles" element={<AboutusTitles />} /> 
      <Route path="/schemes" element={<Schemes />} />
      {/* <Route path="/schemes/:id" element={<Schemes />} /> */}
      <Route path="/schemes_view/:id" element={<Schemes_view />} />
      {/* <Route path="/:id/schemes-view" element={<Schemes_view />} />  */}
      <Route path="/schemes-titles" element={<SchemesTitles />} /> 
      <Route path="/:id/notification-view" element={<Notification_view />} /> 
      <Route path="/notification-titles" element={<NotificationTitles />} /> 

   
          {/* <main className='content'> */}
      {/* <Slider /> */}
       {/* <Midcard /> */}
      {/* <Mapelocation />  */}
      {/* </main> */}
     
      {/* <Route path="/guidlines">
              <Guidlines />
      </Route>   */}
      </Routes>
      
      
    <FooTer />
    </Router>
    </div>
  );
}


export default App;
