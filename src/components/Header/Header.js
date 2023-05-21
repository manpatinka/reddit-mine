import './header.css';
import Search from '../Search/Search';
import { useDispatch } from 'react-redux';
import { setSelectedSubreddit } from '../../features/FeedSlice';


const Header = () => {
  const dispatch = useDispatch();

  const handleLogoClick = () => {
    dispatch(setSelectedSubreddit('r/popular'));
  }

  return (
    <div id="header">
      <div id="header-left">
        <button id="logo-button" onClick={handleLogoClick}>
          <img src="logo.png" alt="logo" width="50" height="50" />
        </button>
        <p id="title">Not Actually Reddit</p>
      </div>
      <div id="header-right">
        <Search />
      </div>
    </div>
  );
}

export default Header;