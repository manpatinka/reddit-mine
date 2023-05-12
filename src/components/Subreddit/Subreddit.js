import './subreddit.css';
import { Link } from 'react-router-dom';

const Subreddit = ({ subreddit }) => {

    return (
            <button className='subreddit-button'>{subreddit}</button>
    );
}

export default Subreddit;