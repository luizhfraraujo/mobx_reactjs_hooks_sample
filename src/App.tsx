import React from 'react';
import './App.css';
import { CityList } from './city';
import StoreProvider from './context';
import Search from './search';

const App = () => {
  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          <Search />
          <CityList />
        </header>
      </div>
    </StoreProvider>
  );
}

export default App;
