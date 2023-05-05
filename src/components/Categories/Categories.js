import './categories.css';
import Category from '../Category/Category';

const Categories = () => {
  const categories = ['r/puppies', 'r/flowers', 'r/kittens', 'r/books', 'r/vacation'];

  return (
    <div className='categories'>
        {
          categories.map((category, i) => {
            return (
              <Category key={i} category={category} />
            )
          })
        }
    </div>
  );
}

export default Categories;