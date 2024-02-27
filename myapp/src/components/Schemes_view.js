import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom"; // Import Link from react-router-dom
import SchemesTitles from './SchemesTitles';
function Schemes() {
    const [scheme, setScheme] = useState({
        id: null,
        heading: 'Loading...',
        description: 'Loading...'
    });
    const { id } = useParams();

    useEffect(() => {
        const getScheme = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/schemes/${id}`);
                setScheme(response.data);
            } catch (error) {
                console.error("Error fetching scheme:", error);
            }
        };

        getScheme();
    }, [id]);

    return (
        <Container fluid>
            <Row>
                <Col className='mt-2 mb-5' md={9} xs={9} style={{ boxShadow: " rgba(0, 0, 0, 0.1) 0px 10px 50px" }}>
                    <h3 className='text_title_head' style={{ paddingLeft: "5%" }}>{scheme.heading}</h3>
                    <p dangerouslySetInnerHTML={{ __html: scheme.description }} className='pl-5'></p>
                </Col>
                <SchemesTitles />
            </Row>
        </Container>
    );
}

// function SchemesTitles() {
//     const [schemes, setSchemes] = useState([]);
    
//     useEffect(() => {
//         const getSchemes = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/api/schemes/');
//                 setSchemes(response.data);
//             } catch (error) {
//                 console.error("Error fetching schemes:", error);
//             }
//         };

//         getSchemes();
//     }, []);

//     return (
//         <Col md={3} xs={3} className="side_bar_right">
//             <p className='side_bar_text'>Schemes</p>
//             <p className='side_bar_sub_text'>
//                 Schemes for Registration in Employment Exchanges of Assam
//             </p>
//             <ul>
//                 {schemes.map((scheme, index) => (
//                     <li className='side_bar_bullet_color' key={index}>
//                         <Link to={`/schemes/${scheme.id}`}><p className='side_bar_sub_text'>{scheme.title}</p></Link>
//                     </li>
//                 ))}
//             </ul>
//         </Col>
//     );
// }

export default Schemes;
