import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import Content from './Content';
import { withRouter, RouteComponentProps } from 'react-router-dom';

export interface ISearchInputContainerPropTypes extends RouteComponentProps {
  getSearchResults: (value: string) => void;
}

function Container({ 
  getSearchResults,
  history
}: ISearchInputContainerPropTypes) {
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

  return (
    <Content handleSearch={handleSearch} handleOnChange={handleOnChange} handleOnKeyDown={handleOnKeyDown} userInput={userInput}/>
  );
}

export default withRouter(Container);