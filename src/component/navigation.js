import React from 'react';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
 
class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Nav justify variant="tabs" defaultActiveKey="/">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/"> <span className='navLink'>Home</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/workExperience"> <span className='navLink'>Work Experience</span> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/projects"> <span className='navLink'>Personal Projects</span> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/contact"> <span className='navLink'>Contact</span> </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
    
}
 
export default Navigation;