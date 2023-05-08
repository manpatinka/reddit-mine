import './categories.css';
import Category from '../Category/Category';
import { useState } from 'react';

const Categories = () => {
  const categories = ['r/puppies', 'r/flowers', 'r/kittens', 'r/books', 'r/vacation'];
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
      <div className='categories-pc'>
        {
          categories.map((category, i) => {
            return (
              <Category key={i} category={category} />
            )
          })
        }
      </div>

      <div className="categories-mobile">
        <button className="dropdown-button" onClick={handleClick}>{dropdownSymbol}</button>
        <div className="categories" style={dropdownMenu}>
          {
            categories.map((category, i) => {
              return (
                <Category key={i} category={category} />
              )
            })
          }
        </div>
      </div>
    </div>

  );
}

export default Categories;