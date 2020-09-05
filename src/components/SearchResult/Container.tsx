import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import './style.css';
import Content from './Content';

function Container({ movie, isLoading }: any) {
  if (isLoading) {
    return <div>Loading...</div>
  } else if (movie) {
    return <Content movie={movie}/>
  } else {
    return <div>Type in the search bar to look for a movie!</div>
  }
}

export default Container;
