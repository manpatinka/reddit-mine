import './feed.css';
import Post from '../Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeed, selectFeed, selectSelectedFilter, selectSelectedSubreddit, selectSearchTerm } from '../../features/FeedSlice';
import { useEffect } from 'react';

const Feed = () => {
  let feed = useSelector(selectFeed);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);
  const selectedFilter = useSelector(selectSelectedFilter);
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeed({selectedSubreddit, selectedFilter}))
  }, [selectedSubreddit, selectedFilter]);



  return (
    <div className='posts'>
      {
        feed.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase())).map(post => {
          return (
            <Post 
              key={post.id} 
              subreddit={post.subreddit_name_prefixed}
              postedBy={post.author}
              title={post.title}
              text={post.selftext}
              media_url={post.is_video ? post.media.reddit_video.fallback_url : post.url}
              is_video={post.is_video}
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