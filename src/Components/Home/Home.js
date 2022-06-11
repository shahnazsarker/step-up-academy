
import Button from '@restart/ui/esm/Button';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Samplecourses from '../Samplecourses/Samplecourses';
import Trainers from '../Trainers/Trainers';
import './Home.css'

const Home = () => {

    return (
        <div className=' m-5'>
            {/* homepage banner section */}
            <div>
                <Card className="bg-dark text-white">
                    <Card.Img src="https://www.manhattandanceacademy.com/wp-content/uploads/2020/04/slide1-1366x600.jpg" alt="Card image" />
                    <Card.ImgOverlay>
                        <div >
                            <div>
                                <h1 className='text-start'>Welcome to Step Up Dance Academy</h1>

                            </div>
                            <div className='text-start'>
                                <Button type="button" class="text-white mt-4 mb-3 btn btn-danger btn-outline-secondary">Get Started</Button>
                            </div>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </div>
            {/* Homepage sample Courses section */}
            <div className='d-flex inline'>
                <Samplecourses></Samplecourses>
                {/* homepage about section */}
                <div className="my-5 homeAbout ">
                    <h3 className='text-danger'>About us</h3>
                    <hr />
                    <div className="mb-5 ">
                        <img style={{ height: 300 }} src='https://media.self.com/photos/58127591df2335f94f93f97a/4:3/w_2560%2Cc_limit/bald-ballerina.jpg' className="rounded shadow-lg  " alt="" />
                    </div>
                    <div>
                        <h1> <span className="text-danger">Step Up</span> Dance Academy</h1>
                        <p className="m-5">Ms. Shahnaz Sarker, Director/Owner of Step Up Dance Academy has been teaching dance to children and grown ups for over 11 years. We have highly trained choreographers and perform all over the country. Our choreography has won “1st place in the Nation”, and “Top Choreographer in the Nation”. Our masters have guest taught in different countries.</p>
                    </div>
                </div>
            </div>
            {/* homepage trainer section */}
            <div className='trainers'>
                <Trainers></Trainers>
            </div>
        </div >
    );
};

export default Home;