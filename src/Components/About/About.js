import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='d-flex m-5'>
            <div>
                <img style={{ height: 300 }} src='https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/5d4d30d8de5d9_template_image_1565339864.webp' className="rounded  " alt="" />
                <h1><span className="text-danger">Step Up</span> Dance Academy</h1>
                <p className="m-5">Ms. Shahnaz Sarker, Director/Owner of Step Up Dance Academy has been teaching dance to children and grown ups for over 11 years. We have highly trained choreographers and perform all over the country. Our choreography has won “1st place in the Nation”, and “Top Choreographer in the Nation”. Our masters have guest taught in different countries.</p>
                <h4 className='text-danger'>Our Branches</h4>
                <p><strong>Uttara:</strong> House-88, Road-Gausul Azam, Sector-13,Uttara, Dhaka, Bangladesh</p>
                <p><strong>Chittagong:</strong> House-57, NasirUddin Road, Chittagong. </p>
                <p>Call us on: 999-0870-56789</p>
                <p>Email us: <Link to='/dancewithus@steupacademy.com'> dancewithus@steupacademy.com</Link> </p>

            </div>

        </div>
    );
};

export default About;