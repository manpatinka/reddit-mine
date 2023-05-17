import './comment.css';

const Comment = ({ author, text }) => {

    return ( 
        <div className='comment'>
          <div className="comment-details">{author} • </div>
          <div className="comment-text">{text}</div>
        </div>
     );
}
 
export default Comment;