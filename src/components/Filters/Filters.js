import { useDispatch } from 'react-redux';
import { setSelectedFilter } from '../../features/FeedSlice';
import './filters.css';


const Filters = () => {
    const dispatch = useDispatch();

    
    return (
        <div className='filters'>
            <button className='filter-button' onClick={() => {dispatch(setSelectedFilter('hot'))}}>🔥Hot</button>
            <button className='filter-button' onClick={() => {dispatch(setSelectedFilter('top'))}}>⬆️Top</button>
            <button className='filter-button' onClick={() => {dispatch(setSelectedFilter('new'))}}>🔔New</button>
        </div>

    );
}

export default Filters;