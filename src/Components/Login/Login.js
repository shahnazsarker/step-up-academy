import React from 'react';

const Login = () => {
    return (
        <div >
            <div>
                <img style={{ height: 300 }} src='https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/5d4d30d8de5d9_template_image_1565339864.webp' className="rounded  " alt="" />
            </div>
            <div className="text-center my-3" >
                <p >E-mail: <input type="email" className="rounded-3 py-2 px-3 " placeholder="email@example.com" aria-label="Recipient's username" aria-describedby="button-addon2" /></p>
            </div>
            <div className=" mb-3 my-3 text-center" width='40'>
                <p> Pass : <input type="number" className="rounded-3 py-2 px-3" placeholder="Password" aria-label="Recipient's username" aria-describedby="button-addon2" /></p>
            </div>
            <button type="button" className="btn btn-outline-secondary bg-danger text-light">Submit</button>
            <p className='py-2'>forgot Password? <a href="https://passwordsgenerator.net/"> Click here to change password</a></p>
            <h4 className='py-3'> Don't have an account yet? <a href="https://passwordsgenerator.net/"> Sign Up </a></h4>
        </div >
    );
};

export default Login;