import './comment.css';

const Comment = ({ author, text, hoursAgo }) => {

    return ( 
        <div className='comment'>
          <div className="comment-details">{author} • {hoursAgo} hours ago</div>
          <div className="comment-text">{text}</div>
        </div>
     );
}
 
export default Comment;