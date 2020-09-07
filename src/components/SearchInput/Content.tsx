import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive';
interface SearchInputPropTypes {
  userInput: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
}

function Content({ 
  userInput,
  handleOnChange, 
  handleOnKeyDown, 
  handleSearch
}: SearchInputPropTypes) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 725px)' })
  return (
    <div className={`m-1 ${isTabletOrMobile ? "flex-fill" : "w-50"}`}>
      <div className="input-group">
      <input type="text" placeholder="Search for a movie title" className="form-control" value={userInput} onChange={handleOnChange} onKeyDown={handleOnKeyDown}/>
        <div className="input-group-append">
          <button onClick={handleSearch} className="btn bg-light" type="button"><FontAwesomeIcon icon={faSearch} /></button>
        </div>
      </div>
    </div>
  );
}

export default Content;