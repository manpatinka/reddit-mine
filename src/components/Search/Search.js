import './search.css';
import { setSearchTerm, selectSearchTerm  } from '../../features/FeedSlice';
import { useDispatch, useSelector } from 'react-redux';

const Search = () => {
    const searchTerm = useSelector(selectSearchTerm);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        console.log(searchTerm);
        dispatch(setSearchTerm(e.target.value));
    }
    
    return (
        <div className="search">
        <input placeholder="🔎︎ Search..." value={searchTerm} onChange={handleChange} />
        </div>

    );
}

export default Search;