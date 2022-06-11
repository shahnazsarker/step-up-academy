import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = (props) => {
    const { about, name, price, picture, duration, trainer } = props.course;
    return (
        <div >
            <Col>
                <Card style={{ height: 550 }} className='shadow-lg'>

                    <Card.Img variant="top" src={picture} height='250' width='325' />
                    <Card.Body height='400'>
                        <Card.Title> <span className="text-danger">Course:</span> {name}</Card.Title>
                        <h6><span className="text-danger">Duration:</span> {duration} </h6>
                        <h6><span className="text-danger">Trainer:</span> {trainer} </h6>
                        <Card.Text>{about}</Card.Text>
                        <h5><span className="text-danger">Course Fee:</span> {price} BDT </h5>
                    </Card.Body>

                    <Button type="button" className="text-white my-2 mx-5 p-1 btn btn-danger btn-outline-secondary rounded-pill">
                        <Link className='text-decoration-none text-light' to='/courses'>Join <i class="fas fa-plus-square"></i> </Link>
                    </Button>
                </Card>

            </Col>


        </div >
    );
};

export default Course;