import './header.css';
import Search from '../Search/Search';


const Header = () => {
    return ( 
        <div id="header">
          <div id="header-left">
            <img src="logo.png" alt="logo" width="50" height="50" />
            <p id="title">Not Actually Reddit</p>
          </div>
          <div id="header-right">
            <Search />
          </div>
        </div>
     );
}
 
export default Header;