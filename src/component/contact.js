import React from 'react';
import Card from 'react-bootstrap/Card'
import { Icon } from '@iconify/react'


class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='page'>
                <div className='h1Wrapper'>
                    <h1 className='typeWriter'>Contact</h1>
                </div>
                
                <p>
                    Reach out to me on: <br></br> <br></br> 
                    <div className="contactIcon">
                        <a href='mailto:contact.aliqasimi@gmail.com' target={"_blank"} className="contactIcon"> contact.aliqasimi@gmail.com <Icon icon="mdi:email-edit-outline" /> </a>
                    </div><br></br>
                    <div className="contactIcon">
                        <a href='tel:0470324601' target={"_blank"} className="contactIcon"> 0470324601 <Icon icon="mdi:phone" /> </a>
                    </div><br></br>
                    <div className="contactIcon">
                        <a href='https://www.linkedin.com/in/aliqasimi/' target={"_blank"} className="contactIcon"> <Icon icon="logos:linkedin" /> <Icon icon="bx:link-external" /> </a>
                    </div>
                </p>
                {/* <Card.Footer className="text-muted footer">Ali Qasimi</Card.Footer> */}
            </div>
        )
    }
    
}

 
export default Contact;