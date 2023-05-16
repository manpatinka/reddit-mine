import './post.css';
import Comments from '../Comments/Comments';

const Post = ({ subreddit, postedBy, text, image }) => {
  

    return (
        <div className='post'>
          <div className="post-header">
            <div className="post-subreddit">{subreddit}</div>
            <div className="post-author">posted by {postedBy}</div>
          </div>
          <div className="post-text">{text}</div>
          <div className="post-image">
            <img src={image} width="70%" />
          </div>
          <Comments />
        </div>
    );
}

export default Post;