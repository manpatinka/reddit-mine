import './category.css';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {

    return (
            <button className='category-button'>{category}</button>
    );
}

export default Category;