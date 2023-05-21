import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Feed from '../Feed/Feed';
import Subreddits from '../Subreddits/Subreddits';
import Filters from '../Filters/Filters';
import ScrollToTop from 'react-scroll-to-top';

function App() {
  return (
    <div className="App">
     <ScrollToTop />
     <Header />
     <Filters />
     <Feed />
     <Subreddits />
    </div>
  );
}

export default App;
