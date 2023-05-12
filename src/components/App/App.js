import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Feed from '../Feed/Feed';
import Subreddits from '../Subreddits/Subreddits';
import Filters from '../Filters/Filters';

function App() {
  return (
    <div className="App">
     <Header />
     <Filters />
     <Feed />
     <Subreddits />
    </div>
  );
}

export default App;
