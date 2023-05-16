import './feed.css';
import Post from '../Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeed, selectFeed, selectSelectedSubreddit } from '../../features/FeedSlice';
import { useEffect } from 'react';

const Feed = () => {
  const posts = useSelector(selectFeed);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeed(selectedSubreddit))
  }, [selectedSubreddit])



  return (
    <div className='posts'>
      {
        posts.map(post => {
          return (
            <Post 
              key={post.id} 
              subreddit={post.subreddit_name_prefixed}
              postedBy={post.author}
              text={post.selftext}
              image={post.thumbnail}
            />
          )
        })
      }
    </div>
  );
}

export default Feed;