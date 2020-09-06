import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import './style.css';
import Content from './Content';
import { IMovie } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface ISearchInputContainerPropTypes extends RouteComponentProps {
  searchMovie: (value: string) => void;
  movies: IMovie[];
  isLoading: boolean;
}

function Container({ 
  getSearchResults,
  movies,
  isLoading,
  history
}: any) {
  const [userInput, setUserInput] = useState<string>("");

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setUserInput(event.target.value);
  }

  const handleSearch = (): void => {
    if (userInput) {
      getSearchResults(userInput);
      history.push(`/search/${userInput}`)
    }
  }

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (isLoading ? <FontAwesomeIcon icon={faSpinner} /> :
    <Content handleSearch={handleSearch} handleOnChange={handleOnChange} handleOnKeyDown={handleOnKeyDown} userInput={userInput} searchResults={movies}/>
  );
}

export default withRouter(Container);