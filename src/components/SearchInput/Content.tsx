import React from 'react';
import './style.css';
import { IMovie } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

type SearchInputPropTypes = {
  userInput: string,
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleOnKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void,
  searchResults: IMovie[],
  handleSearch: () => void
}

function Content({ 
  userInput,
  handleOnChange, 
  handleOnKeyDown, 
  searchResults,
  handleSearch
}: SearchInputPropTypes) {
  return (
    <div className="search-container">
      <div className="input-group mb-3">
        <input type="text" className="form-control" value={userInput} onChange={handleOnChange} onKeyDown={handleOnKeyDown}/>
        <div className="input-group-append">
          <button onClick={handleSearch} className="btn btn-outline-secondary" type="button"><FontAwesomeIcon icon={faSearch} /></button>
        </div>
      </div>
    </div>
  );
}

export default Content;