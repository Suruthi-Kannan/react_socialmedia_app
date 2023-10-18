
import Post from "./Post";

const Feed = ({post}) => {
  return (
    <>
    {post.map(posts=>(
        <Post key={posts.id} posts={posts}/>
    ))}
    </>
  )
}

export default Feed