import React from 'react';
import logo from './logo.svg';
import './App.css';

import FilterList from './components/filter-list/filter-list.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FilterList />
      </header>
    </div>
  );
}

export default App;
