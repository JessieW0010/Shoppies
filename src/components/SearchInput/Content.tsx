import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

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
      <div className="input-group mb-3">
        <input type="text" className="form-control" value={state.userInput}/>
        <div className="input-group-append">
          <FontAwesomeIcon icon={faCoffee} />
        </div>
      </div>
      {searchResults}
    </div>
  );
}

export default Content;