import './comments.css';
import Comment from '../Comment/Comment';
import { useState } from 'react';

const Comments = () => {
    const [toggleClick, setToggleClick] = useState(false);

    const commentList = [
        {
            author: 'zwiebelSuppe',
            text: 'amazing',
            hoursAgo: 10
        },
        {
            author: 'pamilau-tave881',
            text: 'Absolutely disagree! How can people still think that way...',
            hoursAgo: 7
        },
        {
            author: 'Glam Glow Mud',
            text: 'you better post some memes',
            hoursAgo: 6
        }
    ]

    const toggleComments = (e) => {
        e.preventDefault();
        setToggleClick(toggleClick ? false : true);
    }


    return (
        <div className="comment-block">
            <button id="comments-button" onClick={toggleComments}> {toggleClick ? 'Hide comments' : `${commentList.length} comments`}</button>
            <div className="comment-list" style={toggleClick ? {display: 'block'} : {display: 'none'}}>
                {commentList.map((comment, i) => (
                    <Comment
                        key={i}
                        author={comment.author}
                        text={comment.text}
                        hoursAgo={comment.hoursAgo}
                    />
                ))}
            </div>
            
        </div>
    );
}

export default Comments;