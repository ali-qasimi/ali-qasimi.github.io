import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import { Icon } from '@iconify/react'
import Card from 'react-bootstrap/Card'

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
                I have delivered a variety of projects ranging from integration of Cloud or On-Prem infrastructure & CI/CD pipelines to automation initiatives & ongoing operations. I have a keen interest to learn and work with the latest and greatest technologies.
                <br></br>
                <br></br>
                </p>

                <h2 className="header">Tech Stack</h2>

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
                
                <Container fluid="auto">
                    <Row>
                        <Col className="table-text"> 
                        </Col>
                    </Row>

                </Container>

                <Card.Footer className="text-muted footer"> Made with ❤️ By Ali</Card.Footer>
            </div>
        )
    }
    
}
 
export default Home;