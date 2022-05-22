import React from 'react';
import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import masteringFarsi from '../images/mastering-farsi.png'
import gitHubProjects from '../images/github-projects.png'
import Button from 'react-bootstrap/Button'


class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='page'>
                <div className='h1Wrapper'>
                    <h1 className='typeWriter'>Personal Projects</h1>
                </div>
                <br></br><br></br>
                <Row xs={1} md={2} className='g-4'>
                    <Card bg='dark' text='light' className='personalProjectCard'>
                        <Card.Img variant='top' src={gitHubProjects} />
                        <Card.Body>
                            <Card.Title>GitHub Repository</Card.Title>
                            <Card.Text className='personalProjectText'>
                                Various projects available on my GitHub repository
                            </Card.Text>
                            <Button variant='light' target={"_blank"} className='personalProjectButton' href='https://github.com/ali-qasimi?tab=repositories&q=&type=source&language=&sort='>Visit Repo</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className='text-muted'>Git Repo</small>
                        </Card.Footer>
                    </Card>
                    <Card bg='dark' text='light' className='personalProjectCard'>
                        <Card.Img variant='top' src={masteringFarsi} />
                        <Card.Body>
                            <Card.Title>Mastering Farsi - From Alphabet to Daily Conversation</Card.Title>
                            <Card.Text className='personalProjectText'>
                                Online course that teaches how to speak, read and write the Farsi Language.
                                This course currently has over 11,000 enrolments and a 4.8/5.0 star rating.
                            </Card.Text>
                            <Button variant='light' target={"_blank"} className='personalProjectButton' href='https://www.udemy.com/course/masteringfarsi/'>Visit Course</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className='text-muted'>Online Course</small>
                        </Card.Footer>
                    </Card>
                </Row>
                    
                {/* <Card.Footer className="text-muted footer"> made with ❤️ by Ali</Card.Footer> */}
            </div>
        )
    }
    
}

export default Projects;