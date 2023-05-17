import { useDispatch } from 'react-redux';
import './subreddit.css';
import { setSelectedSubreddit } from '../../features/FeedSlice';

const Subreddit = ({ subreddit }) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setSelectedSubreddit(subreddit));
    }


    return (
            <button className='subreddit-button' onClick={handleClick}>{subreddit}</button>
    );
}

export default Subreddit;