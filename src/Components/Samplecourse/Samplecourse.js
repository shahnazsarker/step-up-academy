
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Samplecourse = (props) => {
    const { name, price, picture } = props.sample;
    return (
        <div>
            <Col>
            <Card style={{ height: 300, width: 300 }} className='shadow-lg' >
            <Card.Img variant="top" src={picture} height='150' />
            <Card.Body>
            <Card.Title className='text-danger'> {name}</Card.Title>
            <Card.Text> <span className="text-danger">Course Fee: </span> {price} BDT </Card.Text>
            </Card.Body>
            <Button type ="button" class ="text-white mx-5 my-3 btn btn-danger btn-outline-secondary btn-sm">
            <Link className='text-decoration-none text-light' to='/courses'>Details <i class ="fas fa-info-circle"></i>
            </Link>
            </Button>

            </div>
        </div>

    );
};

export default Samplecourse;