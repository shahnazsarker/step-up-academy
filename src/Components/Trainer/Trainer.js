import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Trainer = (props) => {
    const { name, picture, topic } = props.trainer;
    return (
        <div>

            <Col>
                <Card className="border-0" style={{ height: 350, width: 250 }} >
                    <Card.Img className="rounded-circle shadow-lg" variant="top" src={picture} height='200' />
                    <Card.Body>
                        <Card.Title className="text-danger"> {name}</Card.Title>
                        <Card.Text> <span className="text-danger">Dance Form:</span> {topic} BDT </Card.Text>
                    </Card.Body>
                    <Button type="button" class="text-white mx-5 my-3 btn btn-danger btn-outline-secondary rounded-pill btn-sm">
                        <Link className='text-decoration-none text-light ' to='/courses'>Details <i class="fas fa-info-circle"></i>
                        </Link>
                    </Button>
                </Card>

            </Col>

        </div>
    );
};

export default Trainer;