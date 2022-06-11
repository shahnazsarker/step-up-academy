import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <img className='rounded shadow-lg img-fluid' alt='' src="https://cdn.dribbble.com/users/1818132/screenshots/4264991/404_space.gif
" />
            <h5 className='p-2 my-5 '><Link className='text-decoration-none text-danger' to='/home'><i class="far fa-hand-point-right"></i> Return to Home Page </Link></h5>

        </div>
    );
};

export default Notfound;

