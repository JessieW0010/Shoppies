import React from 'react';
import { Container } from 'react-bootstrap';

function Loader() {
  return (
    <Container className="w-100 h-100 d-flex justify-content-center">
      <img width="300px" src={require("../../../assets/images/spinner.svg")} alt="loading spinner"/>
    </Container>
  );
}

export default Loader;