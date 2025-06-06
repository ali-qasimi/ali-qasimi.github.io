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
                        <Nav.Link as={Link} to="/experience"> <span className='navLink'>Experience</span> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/projects"> <span className='navLink'>Projects</span> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/blog"> <span className='navLink'>Blog</span> </Nav.Link>
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