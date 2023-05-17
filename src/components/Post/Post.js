import './post.css';
import Comments from '../Comments/Comments';
import { setSelectedSubreddit } from '../../features/FeedSlice';
import { useDispatch } from 'react-redux';

const Post = ({ subreddit, postedBy, title, text, image }) => {
  const dispatch = useDispatch();
  
  const handleSubredditClick = () => {
    dispatch(setSelectedSubreddit(subreddit));
  }

    return (
        <div className='post'>
          <div className="post-header">
            <button className="post-subreddit" onClick={handleSubredditClick}>{subreddit}</button>
            <div className="post-author">posted by {postedBy}</div>
          </div>
          <div className="post-title">{title}</div>
          <div className="post-text">{text}</div>
          <div className="post-image">
            <img src={image} width="70%" />
          </div>
          <Comments />
        </div>
    );
}

export default Post;