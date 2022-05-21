import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import { Icon } from '@iconify/react'
import Card from 'react-bootstrap/Card'
import Figure from 'react-bootstrap/Figure'
import aws_saa_002 from '../images/aws_saa_002.png'
import aws_soa_002 from '../images/aws_soa_002.png'
import ccnp from '../images/ccnp.png'
import cisco_specialist from '../images/cisco_specialist.jpg'
import ccna from '../images/ccna.jpg'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='page'>
                <h1 className='header typeWriter'>Hi There, I'm Ali Qasimi</h1>
                <p>
                I am a DevOps Engineer and a tech enthusiast. <br></br>
                I have delivered a variety of projects involving integration of Cloud & On-Prem infrastructure, developing CI/CD pipelines, developing automation & optimisation initiatives, and performing ongoing operations. I have a keen interest to learn and work with the latest and greatest technologies.
                <br></br>
                <br></br>
                </p>

                <h2 className="header">Tech Stack I Work With</h2>

                <Container fluid="auto">
                    <Row>
                        <Col className="table-text"> AWS <br></br><br></br><Icon className="icons" icon="logos:aws" /></Col>
                        <Col className="table-text"> Terraform<br></br><br></br><Icon className="icons" icon="logos:terraform-icon" /></Col>
                        <Col className="table-text"> Jenkins<br></br><br></br><Icon className="icons" icon="logos:jenkins" /></Col>
                    </Row>
                    <Row>
                        <Col className="table-text"> Docker <br></br><br></br><Icon className="icons" icon="logos:docker-icon" /></Col>
                        <Col className="table-text"> Python<br></br><br></br><Icon className="icons" icon="logos:python" /></Col>
                        <Col className="table-text"> Bash<br></br><br></br><Icon className="icons" icon="logos:bash-icon" /></Col>
                    </Row>
                    <Row>
                        <Col className="table-text"> Linux <br></br><br></br> 
                            <Container> 
                                <Row>
                                    <Col><Icon className="icons-small" icon="logos:redhat-icon"/></Col>
                                    <Col><Icon className="icons-small" icon="logos:ubuntu"/></Col>
                                    <Col><Icon className="icons-small" icon="cib:opensuse"/></Col>
                                    <Col><Icon className="icons-small" icon="simple-icons:alpinelinux"/></Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col className="table-text"> GitHub<br></br><br></br><Icon className="icons" icon="akar-icons:github-fill" /></Col>
                        <Col className="table-text"> Ansible<br></br><br></br><Icon className="icons" icon="cib:ansible" /></Col>
                    </Row>
                    <Row>
                        <Col className="table-text"> JavaScript<br></br><br></br><Icon className="icons" icon="logos:javascript" /></Col>
                        <Col className="table-text"> AppDynamics<br></br><br></br><Icon className="icons" icon="logos:appdynamics" /></Col>
                        <Col className="table-text"> Splunk<br></br><br></br><Icon className="icons" icon="simple-icons:splunk" /></Col>
                    </Row>

                </Container>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h2 className="header">Certifications</h2>
                
                <Container className='blur' fluid="auto">
                    <Row>
                        <Col className="table-text"> 
                            <br></br>
                            <Figure>
                                <Figure.Image
                                    width={200}
                                    height={200}
                                    // alt="200x200"
                                    src={aws_saa_002}
                                />
                                <Figure.Caption>
                                    AWS Certified Solutions Architect – Associate
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col className="table-text"> 
                            <br></br>
                            <Figure>
                                <Figure.Image
                                    width={200}
                                    height={200}
                                    // alt="200x200"
                                    src={aws_soa_002}
                                />
                                <Figure.Caption>
                                    AWS Certified SysOps Administrator – Associate
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col className="table-text"> 
                            <br></br>
                            <Figure>
                                <Figure.Image
                                    width={200}
                                    height={200}
                                    // alt="200x200"
                                    src={ccnp}
                                />
                                <Figure.Caption>
                                    Cisco Certified Network Professional Enterprise (CCNP Enterprise)
                                </Figure.Caption>
                            </Figure>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="table-text">
                            <br></br>
                            <Figure>
                                <Figure.Image
                                    width={200}
                                    height={200}
                                    // alt="200x200"
                                    src={cisco_specialist}
                                />
                                <Figure.Caption>
                                Cisco Certified Specialist - Enterprise Advanced Infrastructure Implementation (ENARSI)
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col className="table-text">
                            <br></br>
                            <Figure>
                                <Figure.Image
                                     width={200}
                                     height={200}
                                    // alt="200x200"
                                    src={cisco_specialist}
                                />
                                <Figure.Caption>
                                Cisco Certified Specialist - Enterprise Core
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col className="table-text">
                            <br></br>
                            <Figure>
                                <Figure.Image
                                     width={200}
                                     height={200}
                                    // alt="200x200"
                                    src={ccna}
                                />
                                <Figure.Caption>
                                Cisco Certified Network Associate (CCNA)
                                </Figure.Caption>
                            </Figure>
                        </Col>
                    </Row>

                </Container>

                <Card.Footer className="text-muted footer"> made with ❤️ by Ali</Card.Footer>
            </div>
        )
    }
    
}
 
export default Home;