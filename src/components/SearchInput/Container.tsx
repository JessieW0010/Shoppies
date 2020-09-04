import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import './style.css';
import Content from './Content';

interface ISearchInputState {
  activeOption: number;
  filteredOptions: any[];
  showOptions: boolean;
  userInput: string;
}

function Container() {
  const [state, setState] = useState<ISearchInputState>({
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: ''
  });

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value) {
      setState({
        ...state,
        userInput: event.target.value
      });
      // searchMovie(event.target.value);
    }
  }

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    const { activeOption, filteredOptions } = state;
    if (e.keyCode === 13) {
      setState({
        ...state,
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption]
      });
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      setState({ ...state, activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        return;
      }
      setState({ ...state,activeOption: activeOption + 1 });
    }
  };

  return (
    <Content handleOnChange={handleOnChange} handleOnKeyDown={handleOnKeyDown} state={state} searchResults={[]}/>
  );
}

export default Container;