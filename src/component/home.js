import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import { Icon } from '@iconify/react'
import Card from 'react-bootstrap/Card'
import Figure from 'react-bootstrap/Figure'
import az_104 from '../images/az_104.png'
import aws_saa_002 from '../images/aws_saa_002.png'
import aws_soa_002 from '../images/aws_soa_002.png'
import ccnp from '../images/ccnp.png'
import cisco_specialist from '../images/cisco_specialist.png'
import ccna from '../images/ccna.png'
import monash_logo from '../images/monash-logo.png'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='page'>
                <div className='h1Wrapper'>
                    <h1 className='typeWriter'>Hi There, I'm Ali Qasimi</h1>
                </div>
                <p>
                I am a DevOps Engineer and a tech enthusiast. <br></br>
                I have delivered a variety of projects involving integration of Cloud & On-Prem infrastructure, developing CI/CD pipelines, building automation & optimisation initiatives, and running ongoing operations. I have a keen interest to learn and work with the latest and greatest technologies.
                <br></br>
                <br></br>
                </p>

                <h2 className="header">Tech Stack I Work With</h2>

                <Container fluid="auto">
                    <Row>
                        <Col className="table-text">AWS<br></br><br></br><Icon className="icons" icon="vscode-icons:file-type-aws" /></Col>
                        <Col className="table-text">Terraform<br></br><br></br><Icon className="icons" icon="logos:terraform-icon" /></Col>
                        <Col className="table-text">Jenkins<br></br><br></br><Icon className="icons" icon="logos:jenkins" /></Col>
                    </Row>
                    <Row>
                        <Col className="table-text">Docker<br></br><br></br><Icon className="icons" icon="logos:docker-icon" /></Col>
                        <Col className="table-text">Kubernetes<br></br><br></br><Icon className="icons" icon="logos:kubernetes" /></Col>
                        <Col className="table-text">Python<br></br><br></br><Icon className="icons" icon="logos:python" /></Col>
                        
                    </Row>
                    <Row>
                        <Col className="table-text">Bash<br></br><br></br><Icon className="icons" icon="logos:bash-icon" /></Col>
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
                        <Col className="table-text">Azure<br></br><br></br><Icon className="icons" icon="logos:microsoft-azure" /></Col>
                        
                    </Row>
                    <Row>
                        <Col className="table-text"> GitHub<br></br><br></br><Icon className="icons" icon="akar-icons:github-fill" /></Col>
                        <Col className="table-text"> Ansible<br></br><br></br><Icon className="icons" icon="cib:ansible" /></Col>
                        <Col className="table-text"> AppDynamics<br></br><br></br><Icon className="icons" icon="logos:appdynamics-icon" /></Col>
                    </Row>
                    <Row>
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
                
                <div className='cert-card'>
                    <Figure>
                        <Figure.Image
                            width={200}
                            height={200}
                            // alt="200x200"
                            src={az_104}
                        />
                        <br></br>
                        <a className="link-text" href='https://www.credly.com/badges/8408658f-d82d-45e1-bd89-4caaa4df2529/public_url' target={"_blank"}>Azure Administrator Associate<Icon icon="bx:link-external" /> </a>
                    
                    </Figure>
                    <Figure>
                        <Figure.Image
                            width={200}
                            height={200}
                            // alt="200x200"
                            src={aws_saa_002}
                        />
                        <br></br>
                        <a className="link-text" href='https://www.credly.com/badges/faf03129-dc1c-4eab-a589-5656d02e2769/public_url' target={"_blank"}>AWS Certified Solutions Architect – Associate <Icon icon="bx:link-external" /> </a>
                    
                    </Figure>
                    <Figure>
                        <Figure.Image
                            width={200}
                            height={200}
                            // alt="200x200"
                            src={aws_soa_002}
                        />
                        <br></br>
                        <a className="link-text" href='https://www.credly.com/badges/ba85844d-9b19-40d5-a736-efe609d20a1f/public_url' target={"_blank"}>AWS Certified SysOps Administrator – Associate <Icon icon="bx:link-external" /> </a>
                    </Figure>
                    <Figure>
                        <Figure.Image
                            width={200}
                            height={200}
                            // alt="200x200"
                            src={ccnp}
                        />
                        <br></br>
                        <a className="link-text" href='https://www.credly.com/badges/c5ab094e-421b-473d-9595-654d7a923cca/public_url' target={"_blank"}>Cisco Certified Network Professional Enterprise (CCNP Enterprise) <Icon icon="bx:link-external" /> </a>
                    </Figure>
                    <Figure>
                        <Figure.Image
                            width={200}
                            height={200}
                            // alt="200x200"
                            src={cisco_specialist}
                        />
                        <br></br>
                        <a className="link-text" href='https://www.credly.com/badges/592bc765-d46b-459e-ab84-a3214d94221a/public_url' target={"_blank"}>Cisco Certified Specialist - Enterprise Advanced Infrastructure Implementation (ENARSI) <Icon icon="bx:link-external" /> </a>
                    </Figure>
                    <Figure>
                        <Figure.Image
                                width={200}
                                height={200}
                            // alt="200x200"
                            src={cisco_specialist}
                        />
                        <br></br>
                        <a className="link-text" href='https://www.credly.com/badges/592bc765-d46b-459e-ab84-a3214d94221a/public_url' target={"_blank"}>Cisco Certified Specialist - Enterprise Core <Icon icon="bx:link-external" /> </a>
                    </Figure>
                    <Figure>
                        <Figure.Image
                                width={200}
                                height={200}
                            // alt="200x200"
                            src={ccna}
                        />
                        <br></br>

                        <a className="link-text" href='https://www.credly.com/badges/cebb91db-49ab-4689-b06f-fa24c508d9d0/public_url' target={"_blank"}>Cisco Certified Network Associate (CCNA) <Icon icon="bx:link-external" /> </a>
                    </Figure>
                    <Figure>
                        <Figure.Image
                                width={200}
                                height={200}
                            // alt="200x200"
                            src={monash_logo}
                        />
                        <br></br>
                        <a className="link-text" href='https://www.monash.edu/' target={"_blank"}>Bachelor of Enginering (Honours) - Electrical & Computer Systems <Icon icon="bx:link-external" /> </a>
                    </Figure>
                </div>

                <hr class="solid"></hr>
                <Card.Footer className="text-muted footer"> made with ❤️ by Ali</Card.Footer>
            </div>
        )
    }
    
}
 
export default Home;