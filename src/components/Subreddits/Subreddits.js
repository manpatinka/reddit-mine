import './subreddits.css';
import Subreddit from '../Subreddit/Subreddit';
import { useState } from 'react';

const Subreddits = () => {
  const subreddits = ['r/puppies', 'r/flowers', 'r/kittens', 'r/books', 'r/vacation'];
  const [menuClicked, setMenuClicked] = useState(false);


  const handleClick = (e) => {
    e.preventDefault();
    menuClicked ? setMenuClicked(false) : setMenuClicked(true);
  }

  let dropdownMenu = !menuClicked ? {
    display: 'none'
  } : {
    display: 'block'
  };

  let dropdownSymbol = !menuClicked ? '>' : 'x';


  return (
    <div>
      <div className='subreddits-pc'>
        {
          subreddits.map((subreddit, i) => {
            return (
              <Subreddit key={i} subreddit={subreddit} />
            )
          })
        }
      </div>

      <div className="subreddits-mobile">
        <button className="dropdown-button" onClick={handleClick}>{dropdownSymbol}</button>
        <div className="subreddits" style={dropdownMenu}>
          {
            subreddits.map((subreddit, i) => {
              return (
                <Subreddit key={i} subreddit={subreddit} />
              )
            })
          }
        </div>
      </div>
    </div>

  );
}

export default Subreddits;