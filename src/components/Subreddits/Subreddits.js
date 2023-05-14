import './subreddits.css';
import Subreddit from '../Subreddit/Subreddit';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSubreddits, fetchSubreddits } from '../../features/SubredditsSlice';

const Subreddits = () => {
  const subreddits = useSelector(selectSubreddits);
  const dispatch = useDispatch();
  const [menuClicked, setMenuClicked] = useState(false);

  useEffect(() => {
    dispatch(fetchSubreddits())
  }, [])

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