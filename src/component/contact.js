import React from 'react';
import Card from 'react-bootstrap/Card'

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='page'>
                <h1 className='header typeWriter'>Contact</h1>
                <Card.Footer className="text-muted footer"> Made with ❤️ By Ali</Card.Footer>
            </div>
        )
    }
    
}

 
export default Contact;