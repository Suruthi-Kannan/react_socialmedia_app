import { Link } from "react-router-dom"
const Post = ({posts}) => {
    
  return (
    <article>
      <Link to={`post/${posts.id}`}>
      <h2>{posts.title}</h2>
      <p>{posts.datetime}</p>
      </Link>
      <p>
        {(posts.body).length <=25 
        ? posts.body 
        :`${(posts.body).slice(0,25)}....`}
      </p>
    </article>
  )
}

export default Post