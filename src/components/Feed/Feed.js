import './feed.css';
import Post from '../Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeed, selectFeed, selectSelectedFilter, selectSelectedSubreddit } from '../../features/FeedSlice';
import { useEffect } from 'react';

const Feed = () => {
  const feed = useSelector(selectFeed);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);
  const selectedFilter = useSelector(selectSelectedFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeed({selectedSubreddit, selectedFilter}))
  }, [selectedSubreddit, selectedFilter]);



  return (
    <div className='posts'>
      {
        feed.map(post => {
          return (
            <Post 
              key={post.id} 
              subreddit={post.subreddit_name_prefixed}
              postedBy={post.author}
              title={post.title}
              text={post.selftext}
              image={post.thumbnail}
              num_comments={post.num_comments}
              permalink={post.permalink}
            />
          )
        })
      }
    </div>
  );
}

export default Feed;