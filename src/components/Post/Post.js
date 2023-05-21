import './post.css';
import Comments from '../Comments/Comments';
import { setSelectedSubreddit } from '../../features/FeedSlice';
import { useDispatch } from 'react-redux';

const Post = ({ is_self, num_comments, permalink, subreddit, postedBy, title, text, media_url, is_video }) => {
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
          { !is_self &&
            <div className="post-media">
            {
              is_video ? 
                <video 
                  controls 
                  width='60%'
                  >
                    <source src={media_url}/>
                </video> : 
                <img 
                  src={media_url} 
                  width="60%" 
                />
            }
          </div>
          }
          <Comments permalink={permalink} num_comments={num_comments} />
        </div>
    );
}

export default Post;