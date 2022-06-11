import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Trainer from '../Trainer/Trainer';
import './trainers.css'

const Trainers = () => {
    const [trainers, setTrainer] = useState([]);
    useEffect(() => {
        fetch('./trainers.json')
            .then(res => res.json())
            .then(data => setTrainer(data))
    }, [])
    return (
        <div >
            <h3 className='px-3 text-danger'>Trainers</h3>
            <hr />
            <Container className='trainers'>


                <Row sm={1} md={2} lg={4} className="g-4">

                    {
                        trainers.map(trainer => <Trainer key={trainer.id} trainer={trainer}></Trainer>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Trainers;