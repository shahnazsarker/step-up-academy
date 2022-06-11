import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gay-600 text-light py-1 mb-0 w-100'>
            <div className="d-flex ">
                <div className='text-start row ms-3 mt-2'>
                    <h4>Adresses</h4>
                    <hr className='w-75' />
                    <p><strong>Uttara:</strong> House-88, Road-Gausul Azam, Sector-13,Uttara, Dhaka, Bangladesh</p>
                    <p><strong>Chittagong:</strong> House-57, NasirUddin Road, Chittagong</p>
                </div>
                <div className=' mx-5'>
                    <h4>Contacts</h4>
                    <hr />
                    <p className="text-end">Cell: 02-988769</p>
                    <p className="text-end">Cell: 02-988767</p>
                    <Link to='/dancewithus@steupacademy.com'> Email Us</Link>

                </div>

            </div>
            <div >
                <h5 className='text-danger '>Follow us on:</h5>
                <div className='fs-3 text-secondary d-flex inline pt-2 ps-2 justify-content-center mb-3'>
                    <i class="fab fa-youtube mx-3"> </i>
                    <i class="fab fa-facebook mx-3 "> </i>
                    <i class="fab fa-instagram mx-3 "> </i>
                    <i class="fab fa-tiktok mx-3 "> </i>
                </div>
            </div>
            <div className='px-2'>
                <h4 >If you stumble, make it part of the dance.</h4>
                <p><img style={{ height: 30 }} src='https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/5d4d30d8de5d9_template_image_1565339864.webp' className="rounded-circle  " alt="" /> <span className="text-danger">Step Up</span> Dance Academy &#169;. All rights reserved.</p>
            </div>
        </div >
    );
};

export default Footer;