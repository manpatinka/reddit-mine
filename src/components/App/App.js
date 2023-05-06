import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Feed from '../Feed/Feed';
import Categories from '../Categories/Categories';
import Filters from '../Filters/Filters';

function App() {
  return (
    <div className="App">
     <Header />
     <Filters />
     <Feed />
     <Categories />
    </div>
  );
}

export default App;
