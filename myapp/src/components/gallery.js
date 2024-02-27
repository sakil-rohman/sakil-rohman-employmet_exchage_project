import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Breadcrumb, Table, Image, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faCircleQuestion, faPersonChalkboard, faBookOpenReader, faIcons, faDownload, faMagnifyingGlassChart, faHandHoldingDollar, faUsersViewfinder, faPeopleGroup, faPhoneVolume, faEnvelopeCircleCheck, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../index';
import '../App.css';

function Gallery() {
    const [headings, setHeadings] = useState([]);
    const [heading, setHeading] = useState('all');
    const [filteredImages, setFilteredImages] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const fetchHeadings = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/galleryimage/');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setHeadings(data);
        } catch (error) {
            console.error('There was a problem fetching the headings:', error);
        }
    };

    const fetchImages = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/galleryimage/');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (heading === 'all') {
                setFilteredImages(data);
            } else {
                setFilteredImages(data.filter(image => image.heading === heading));
            }
        } catch (error) {
            console.error('There was a problem fetching the images:', error);
        }
    };

    useEffect(() => {
        fetchHeadings();
    }, []);

    useEffect(() => {
        fetchImages();
    }, [heading]);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleNextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
    };

    const handlePreviousImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
    };

    return (
        <>
            <h1 className='mt-5 text-center main-heading'>Our Gallery</h1>
            <hr />
            <div className="menu-tabs container">
                <div className='tags'>
                    <TagButton name="all" tagActive={heading === 'all'} handleSetHeading={setHeading} />
                    <TagButton name="Career Counselling" tagActive={heading === 'Career Counselling'} handleSetHeading={setHeading} />
                    <TagButton name="Job Fair" tagActive={heading === 'Job Fair'} handleSetHeading={setHeading} />
                    <TagButton name="Recruitment Drive" tagActive={heading === 'Recruitment Drive'} handleSetHeading={setHeading} />
                    <TagButton name="Others" tagActive={heading === 'Others'} handleSetHeading={setHeading} />
                </div>
                <div className="containerG">
                    {filteredImages.map((image, index) => (
                        <div key={image.id} className="imageG-card">
                            <a href="#!" onClick={() => handleImageClick(index)}>
                                <img className="imageG" src={image.image} alt="Gallery Photos" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Body>
                    {filteredImages.length > 0 && (
                        <div className="d-flex justify-content-between">
                            <Button variant="outline-secondary" onClick={handlePreviousImage}><FontAwesomeIcon icon={faArrowLeft} /></Button>
                            <img src={filteredImages[selectedImageIndex].image} alt="Gallery Photo" className="img-fluid" />
                            <Button variant="outline-secondary" onClick={handleNextImage}><FontAwesomeIcon icon={faArrowRight} /></Button>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </>
    )
}

const TagButton = ({ name, handleSetHeading, tagActive }) => {
    return (
        <button className={`tag ${tagActive ? 'active' : ''}`} onClick={() => handleSetHeading(name)}>
            {name.toUpperCase()}
        </button>
    );
};

export default Gallery;
