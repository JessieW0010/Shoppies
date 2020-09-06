import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Search from './components/SearchInput'
import SearchResult from './components/SearchResult'

function App() {
  return (
    <Container className="app container-fluid h-100">
      <Row>
        <p className="logo font-weight-bold text-center w-100">
          The Shoppies
        </p>
      </Row>
      <Col>
        <Search/>
        <SearchResult/>
      </Col>
    </Container>
  );
}

export default App;

