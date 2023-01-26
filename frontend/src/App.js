import React, { useState } from 'react'; // changed
import {
  Col, Button, Container, Form, Navbar, Row
} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import Datasets from './components/Datasets';
import History from './components/History';
import Searcher from './components/Searcher';
import { Outlet, Route, Routes, NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';



function App () {
  return (
    <>
  <Layout/>
    <Routes>
    {/* changed */}
    <Route
        path='/'
        element={ <Searcher/> }
        
      />


<Route path
='datasets' element={<Datasets />} />

<Route path
='history' element={<History />} 


/>

  </Routes>
  </>
  );
}


function Layout () { // changed


  return (
    <>        <Navbar bg="primary" expand="lg" variant="dark" sticky="top">
    <Container >
    <Navbar.Brand href="/" >Beacon Network</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="datasets">Datasets</Nav.Link>
          <Nav.Link href="history">History</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Container className='pt-3' fluid>
    <Row style={{width: "330px", position: "relative", left: "40%", padding: "10px"}}>
      <Col>
        <a  href="https://www.cineca-project.eu/">
        <Card.Img variant="top" src="/CINECA_logo.png" />
      </a>
      </Col>

      <Col>
      <div className='beacontitle'><i>Beacon Network</i></div>
      </Col>
      </Row>
      </Container>

      </>
  );
}

export default App;