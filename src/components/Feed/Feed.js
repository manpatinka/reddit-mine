import './feed.css';
import Post from '../Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeed, selectFeed, selectSelectedFilter, selectSelectedSubreddit, selectSearchTerm, selectFeedLoading, selectFeedError } from '../../features/FeedSlice';
import { useEffect } from 'react';

const Feed = () => {
  const feed= useSelector(selectFeed);
  const feedLoading = useSelector(selectFeedLoading);
  const feedError = useSelector(selectFeedError);

  const selectedSubreddit = useSelector(selectSelectedSubreddit);
  const selectedFilter = useSelector(selectSelectedFilter);
  const searchTerm = useSelector(selectSearchTerm);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeed({selectedSubreddit, selectedFilter}))
  }, [selectedSubreddit, selectedFilter]);

 

  return (
    <div className='posts'>
    {feedError && <div id="feed-error">Oops, there occured an error while loading the feed.</div>}
    
    {feedLoading && <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
    { 
        feed.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase())).map(post => {
          return (
            <Post 
              key={post.id} 
              subreddit={post.subreddit_name_prefixed}
              postedBy={post.author}
              title={post.title}
              text={post.selftext}
              is_self={post.is_self}
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