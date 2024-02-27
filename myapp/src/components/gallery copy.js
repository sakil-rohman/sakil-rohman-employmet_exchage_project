import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card , Breadcrumb, Table, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faCircleQuestion, faPersonChalkboard, faBookOpenReader, faIcons, faDownload, faMagnifyingGlassChart, faHandHoldingDollar, faUsersViewfinder, faPeopleGroup , faPhoneVolume, faEnvelopeCircleCheck} from '@fortawesome/free-solid-svg-icons'
// import { CircleFill } from 'react-bootstrap-icons';
// import * as Icon from 'react-bootstrap-icons';
import images from './data';
// import { SRLWrapper } from 'simple-react-lightbox';
// import { ReactLightbox } from 'react-lightbox-js'
// import 'react-lightbox-js/dist/index.css'
// import Lightroom from 'react-lightbox-gallery'
// import { LightgalleryItem } from "react-lightgallery";
// import "lightgallery.js/dist/css/lightgallery.css";
// import { LightgalleryProvider } from "react-lightgallery";


import '../index'
import '../App.css'
// const options = {
	// settings: {
	// 	overlayColor: 'rgb(25, 136, 124)',
	// 	autoplaySpeed: 1500,
	// 	transitionSpeed: 900
	// },
	// buttons: {
	// 	backgroundColor: 'red',
	// 	iconColor: 'rgba(126, 172, 139, 0.8)'
	// },
	// caption: {
	// 	captionColor: '#a6cfa5',
	// 	captionFontFamily: 'Raleway, sans-serif',
	// 	captionFontWeight: '300',
	// 	captionTextTransform: 'uppercase'
	// },
	// progressBar: {
	// 	height: '20px',
	// 	fillColor: 'blue',
	// 	backgroundColor: 'white'
	// }
// };
// const images= [
//     { id: '1', imageName: 'img1.jpeg', tag: 'free' },
// 	{ id: '2', imageName: 'img2.jpeg', tag: 'new' },
// 	{ id: '3', imageName: 'img3.jpeg', tag: 'pro' },
// 	{ id: '4', imageName: 'img4.jpeg', tag: 'pro' },
// 	{ id: '5', imageName: 'img5.jpeg', tag: 'free' },
// 	{ id: '6', imageName: 'img6.jpeg', tag: 'new' },
// 	{ id: '7', imageName: 'img6.jpeg', tag: 'pro' },
// 	{ id: '8', imageName: 'img8.jpeg', tag: 'free' },
// 	{ id: '9', imageName: 'img9.jpeg', tag: 'new' },
// 	{ id: '10', imageName: 'img10.jpeg', tag: 'new' },
// 	{ id: '11', imageName: 'img11.jpeg', tag: 'new' },
// 	{ id: '12', imageName: 'img12.jpeg', tag: 'new' },
// 	{ id: '13', imageName: 'img13.jpeg', tag: 'free' },
// 	{ id: '14', imageName: 'img14.jpeg', tag: 'pro' },
// 	{ id: '15', imageName: 'img15.jpeg', tag: 'free' },
// 	{ id: '16', imageName: 'img16.jpeg', tag: 'new' }
// ]
function Gallery() {
    const [tag, setTag] = useState('all');
    const [filteredImages, setFilteredImages]= useState([]);
    useEffect( 
        () => {
        tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
    }, 
    [tag]
    );

    return (
       
        <>       
 {/* <Image src='/images/sskg.png' /> */}
        <h1 className='mt-5 text-center main-heading'>Our Gallery</h1>
        <hr />
        <dib className="menu-tabs container">
            <div className='tags'> 
                {/* <button className='btn btn-warning'>Job Fair</button>
                <button className='btn btn-warning'>Career Counselling</button>
                <button className='btn btn-warning'>Recruitment Drive</button>
                <button className='btn btn-warning'>Others</button>
                <button className='btn btn-warning'>All</button> */}
                 <TagButton name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="Career Counselling" tagActive={tag === 'Career Counselling' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="Job Fair" tagActive={tag === 'Job Fair' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="Recruitment Drive" tagActive={tag === 'Recruitment Drive' ? true : false} handleSetTag={setTag} />
				<TagButton name="Others" tagActive={tag === 'Others' ? true : false} handleSetTag={setTag} />
            </div>
            {/* <SRLWrapper > */}
            <div className="containerG">
            {filteredImages.map(image => (
                <div  key={image.id} className="imageG-card">
                    <a href={`/images/${image.imageName}`}>
						<img className="imageG" src={`/images/${image.imageName}`} alt="" />
				    </a>
                    

                </div>))}
            </div>
            {/* </SRLWrapper> */}
           
            {/* <div className='menu-items container-fluid mt-5'>
                <div className='row'>
                    <div className='col-11 mx-auto'>
                        <div className='row my-5'>
                            <div className='item1 col-12 col-md-6 col-lg-6 col-xl-4'>
                                <div className='row Item-inside'>
                                    <div className='col-12 col-md-6 col-lg-4 img-div'>
                                        <img src="" alt="menuPic" className='img-fluid'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            
        </dib>
        {/* <div>{filteredImages.map(image => <div>{image.imageName}</div>) }</div> */}
        

 
          
           
        </>
    )
}
    
const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};
export default Gallery