import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Home from './component/home';
import Contact from './component/contact';
import WorkExperience from './component/workExperience';
import Projects from './component/projects';
import Navigation from './component/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

class PersonalWebsite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
       <Router>
        <div>
            <Navigation/>
              <Container>
                <Routes>
                  <Route exact path='/' element={< Home />}></Route>
                  <Route exact path='/workExperience' element={< WorkExperience />}></Route>
                  <Route exact path='/projects' element={< Projects />}></Route>
                  <Route exact path='/contact' element={< Contact />}></Route>
                  <Route exact path='*' element={< Home />}></Route>
                </Routes>
            </Container>
            
          </div>
      </Router>
    );
  }
};

export default PersonalWebsite;