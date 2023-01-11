import React from 'react';
import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import masteringFarsi from '../images/mastering-farsi.png'
import gitHubProjects from '../images/github-projects.png'
import pihole from '../images/pihole.jpg'
import terraform_localstack from '../images/terraform-localstack.png'
import jenkins_k8s from '../images/jenkins-k8s.png'
import masafootball from '../images/masafootball.png'
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
                <Row xs={1} md={2} className='g-4 personalProjectRow'>
                    <Card bg='dark' text='light' className='personalProjectCard'>
                        <Card.Img variant='top' src={masafootball} />
                        <Card.Body>
                            <Card.Title>masafootball.org</Card.Title>
                            <Card.Text className='personalProjectText'>
                                Community sports platform that facilitates organisation of sports tournaments. Features include registrations, payments, team & player profiles, tournament stats, newsfeed and more.
                            </Card.Text>
                            <Button variant='light' target={"_blank"} className='personalProjectButton' href='https://masafootball.org/'>Visit Website</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className='text-muted'>Website</small>
                        </Card.Footer>
                    </Card>
                    <Card bg='dark' text='light' className='personalProjectCard'>
                        <Card.Img variant='top' src={jenkins_k8s} />
                        <Card.Body>
                            <Card.Title>Jenkins Deployment over K8s</Card.Title>
                            <Card.Text className='personalProjectText'>
                                Jenkins Deployment on a Kubernetes cluster.
                            </Card.Text>
                            <Button variant='light' target={"_blank"} className='personalProjectButton' href='https://github.com/ali-qasimi/jenkins-k8s'>Visit Project</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className='text-muted'>Git Repo</small>
                        </Card.Footer>
                    </Card>
                </Row>

                <Row xs={1} md={2} className='g-4 personalProjectRow'>
                    <Card bg='dark' text='light' className='personalProjectCard'>
                        <Card.Img variant='top' src={pihole} />
                        <Card.Body>
                            <Card.Title>Integrating Pi-hole on Home Network</Card.Title>
                            <Card.Text className='personalProjectText'>
                                A guided article on how to deploy the Pi-hole network platform in your home Wifi Network.
                            </Card.Text>
                            <Button variant='light' target={"_blank"} className='personalProjectButton' href='https://github.com/ali-qasimi/pihole/blob/main/README.md'>Visit Article</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className='text-muted'>Article</small>
                        </Card.Footer>
                    </Card>
                    <Card bg='dark' text='light' className='personalProjectCard'>
                        <Card.Img variant='top' src={terraform_localstack} />
                        <Card.Body>
                            <Card.Title>Terraform Projects</Card.Title>
                            <Card.Text className='personalProjectText'>
                                Some Terraform projects that I have worked on in my spare time. I used localstack as the cloud service emulator.
                            </Card.Text>
                            <Button variant='light' target={"_blank"} className='personalProjectButton' href='https://github.com/ali-qasimi/terraform-projects'>Visit Projects</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className='text-muted'>Git Repo</small>
                        </Card.Footer>
                    </Card>
                </Row>

                <Row xs={1} md={2} className='g-4 personalProjectRow'>
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