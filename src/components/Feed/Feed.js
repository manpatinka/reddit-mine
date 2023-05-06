import './feed.css';
import Post from '../Post/Post';

const Feed = () => {
  const posts = [
    {
        id: 1,
        category: 'r/puppies',
        postedBy: 'hhwbab1',
        hoursAgo: 2,
        text: 'Look at this charming creature!..',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/220px-Golde33443.jpg'
    },
    {
        id: 2,
        category: 'r/vacation',
        postedBy: 'countryBoy',
        hoursAgo: 4,
        text: 'How I spent my vacation in a village...',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pretty-english-villages-1563519493.jpg'
    },
    {
        id: 3,
        category: 'r/flowers',
        postedBy: 'abracadabra',
        hoursAgo: 5,
        text: 'Something about flowers...',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGOjt88Dsu8NDO_Fqm-M8VtDueKUSp9OnNA&usqp=CAU'
      
    },
    {
        id: 4,
        category: 'r/kittens',
        postedBy: 'catwoman',
        hoursAgo: 6,
        text: 'Cute kittens...',
        image: 'https://cdn.shopify.com/s/files/1/0535/2738/0144/articles/shutterstock_1465662887.jpg?v=1663103553'
    }
]
  return (
    <div className='posts'>
      {
        posts.map(post => {
          return (
            <Post 
              key={post.id} 
              category={post.category}
              postedBy={post.postedBy}
              hoursAgo={post.hoursAgo}
              text={post.text}
              image={post.image}
            />
          )
        })
      }
    </div>
  );
}

export default Feed;