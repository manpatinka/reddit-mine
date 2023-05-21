import './comments.css';
import Comment from '../Comment/Comment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments, selectComments, selectCommentsError, selectCommentsLoading } from '../../features/CommentsSlice';


const Comments = ({num_comments, permalink}) => {
    const [toggleClick, setToggleClick] = useState(false);
    const dispatch = useDispatch();

    const commentList = useSelector(selectComments);
    const commentsError = useSelector(selectCommentsError);

    useEffect(() => {
        dispatch(fetchComments(permalink))
    }, [permalink])

    const toggleComments = (e) => {
        e.preventDefault();
        setToggleClick(toggleClick ? false : true);
    }



    return (

        <div className="comment-block">
            <button id="comments-button" onClick={toggleComments}> {toggleClick ? 'Hide comments' : `${num_comments} comments`}</button>
            { commentsError && toggleClick && <div className="comments-error">Something went wrong :(</div> }
            <div className="comment-list" style={toggleClick ? {display: 'block'} : {display: 'none'}}>
                {commentList.map((comment, i) => (
                    <Comment
                        key={i}
                        author={comment.author}
                        text={comment.body}
                    />
                ))}
            </div>
            
        </div>
    );
}

export default Comments;