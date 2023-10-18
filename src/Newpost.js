import React, { useContext } from "react"
import Datacontext from "./context/Datacontext"

const Newpost = () => {
  const {handleSubmit,postTitle,setPostTitle,postBody,setPostBody}=useContext(Datacontext)
  return (
    <main>
      <h2>Newpost</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">
          Title:
        </label>
        <input 
        id="postTitle"
        type="text" 
        required
        value={postTitle}
        onChange={(e)=>setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">
          Post :
        </label>
        <input 
        id="postBody"
        type="text" 
        required
        value={postBody}
        onChange={(e)=>setPostBody(e.target.value)}
        />
        <button type="submit">
          Submit
        </button>
      </form>

    </main>
  )
}

export default Newpost