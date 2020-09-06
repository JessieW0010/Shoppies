import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Search from '../SearchInput';

function HomePage() {
  return (
    <Container className='app container-fluid h-100'>
      <Row>
        <p className='logo font-weight-bold text-center w-100'>The Shoppies</p>
      </Row>
      <Col>
        <Search />
      </Col>
    </Container>
  );
}

export default HomePage;
