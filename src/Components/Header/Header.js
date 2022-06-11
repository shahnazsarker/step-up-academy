import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand style={{ fontSize: '30px', fontWeight: 'bold' }}><img style={{ height: 64 }} src='https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/5d4d30d8de5d9_template_image_1565339864.webp' className="rounded-circle  " alt="" /> <span className="text-danger">Step Up</span> Academy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "darkred"
                        }} className='px-2 text-decoration-none text-dark ' to="/home">Home</NavLink>
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "darkred"
                        }} className='px-2 text-decoration-none text-dark ' to="/about">About Us</NavLink>
                        < NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "darkred"
                        }} className='px-2 text-decoration-none text-dark ' to="/courses">Courses</NavLink>
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "darkred"
                        }} className='px-2 text-decoration-none text-dark ' to="/login">Login/Sign Up</NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;