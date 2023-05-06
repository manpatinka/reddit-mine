import './post.css';

const Post = ({ category, postedBy, hoursAgo, text, image }) => {

    return (
        <div className='post'>
          <div className="post-header">
            <div className="post-category">{category}</div>
            <div className="post-author">posted by {postedBy}</div>
            <div className="hours-ago">{hoursAgo} hours ago</div>
          </div>
          <div className="post-text">{text}</div>
          <div className="post-image">
            <img src={image} width="50%" />
          </div>
          <div className="comments">Comments component</div>
        </div>
    );
}

export default Post;