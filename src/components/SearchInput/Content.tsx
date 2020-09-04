import React from 'react';
import './style.css';

type SearchInputPropTypes = {
  state: any,
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleOnKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void,
  searchResults: any[]
}

function Content({ 
  state, 
  handleOnChange, 
  handleOnKeyDown, 
  searchResults
}: SearchInputPropTypes) {
  return (
    <div className="search-container">
      <input type="text" onKeyDown={handleOnKeyDown} value={state.userInput} onChange={handleOnChange} className="search-bar" />
      <input type="submit" value="" className="search-btn" /> 
      {searchResults}
    </div>
  );
}

export default Content;