import React from 'react';
import './App.css';
import Search from './components/SearchInput'
import SearchResult from './components/SearchResult'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <p>
          The Shoppies
        </p>
      </header>
      <div className="app-body">
        <Search/>
        <SearchResult/>
      </div>
    </div>
  );
}

export default App;

