import { useContext } from "react";
import { useParams,Link } from "react-router-dom";
import Datacontext from "./context/Datacontext";

const Postpage = () => {
  const {post,handleDelete}=useContext(Datacontext)
  const{id}=useParams();
  const posts = post.find(posts=>(posts.id).toString()=== id);
  return (
    <main className="postpage">
      <article>
      {
        posts &&
        <>
              <h2>
                {posts.title}
              </h2>
              <p>
                {posts.datetime}
              </p>
              <p>
                {posts.body}
              </p>
             <Link to={`/edit/${posts.id}`}> <button>
                EDIT
              </button></Link>
              <button
              onClick={()=>handleDelete(posts.id)}>
                Delete
              </button>
        </>
      }
      {
        !posts&&
        <>
        <h2>Post Not Found</h2>
        <p>
          <Link to="/">
          Homepage</Link>
        </p>
        </>
      }
      </article>
      
     
    </main>
  )
}

export default Postpage