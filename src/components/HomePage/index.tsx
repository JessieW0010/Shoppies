import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Search from '../SearchInput';

function HomePage() {
  return (
    <Container className='app container-fluid h-100'>
      <div className="d-flex flex-column justify-content-center">
        <img src={require("../../assets/images/logo.png")} className="m-auto" width="200" height="200" alt="Shoppies Logo"/>
        <p className='logo font-weight-bold text-center w-100'>The Shoppies</p>
      </div>
      <Col>
        <Search />
      </Col>
    </Container>
  );
}

export default HomePage;
