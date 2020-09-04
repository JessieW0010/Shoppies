import React from 'react';
import './style.css';

function Content({ state, handleOnChange, handleOnKeyDown, searchResults }) {
  return (
    <div className="search-container">
      <input type="text" onKeyDown={handleOnKeyDown} value={state.userInput} onChange={handleOnChange} className="search-bar" />
      <input type="submit" value="" className="search-btn" /> 
      {searchResults}
    </div>
  );
}

export default Content;