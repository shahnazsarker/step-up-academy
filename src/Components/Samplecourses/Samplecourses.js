import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Samplecourse from '../Samplecourse/Samplecourse';

const Samplecourses = () => {
    const [sampleCourses, setSample] = useState([]);
    useEffect(() => {
        fetch('./homePageCourses.json')
            .then(res => res.json())
            .then(data => setSample(data))

    }, [])
    return (

        <div style={{ width: 3000 }} className='m-5 '>
            <h3 className='text-danger'> Our Courses</h3>
            <hr />
            <Row xs={1} lg={2} className="g-3">

                {
                    sampleCourses.map(sample => <Samplecourse key={sample.id} sample={sample}></Samplecourse>)
                }
            </Row>
        </div>

    );
};

export default Samplecourses;