import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourse] = useState([]);
    useEffect(() => {
        fetch('./courses.Json')
            .then(res => res.json())
            .then(data => setCourse(data))

    }, [])
    return (
        <div className='p-5'>
            <h1 className='p-3 mb-2 text-danger'> Courses available on  {courses.length} different forms of dance</h1>
            <Row md={2} lg={4} sm={1} className="g-4">

                {
                    courses.map(course => <Course key={course.id} course={course} ></Course>)
                }

            </Row>

        </div >
    );
};

export default Courses;