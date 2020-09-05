import React from 'react';
import './style.css';

interface ISearchResultPropTypes {
  movie: any
}

function Content({
  movie
}: ISearchResultPropTypes) {
  const { Title, Year, Language, Released, Runtime, Genre, Plot, Poster } = movie;
  return (
    <div className="result-container">
      <div className="info-container">
        <div>Title:{Title}</div>
        <div>Year:{Year}</div>
        <div>Language:{Language}</div>
        <div>Released:{Released}</div>
        <div>Runtime:{Runtime}</div>
        <div>Genre:{Genre}</div>
        <div>Plot:{Plot}</div>
        <img alt={`Movie Poster for ${Title}`} src={Poster}/>
      </div>
    </div>
  );
}

export default Content;