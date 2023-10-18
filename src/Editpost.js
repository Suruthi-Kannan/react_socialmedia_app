import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Datacontext from './context/Datacontext';

const Editpost = () => {
  const {post,handleEdit,editTitle,setEditTitle,editBody,setEditBody}=useContext(Datacontext)

  
    const {id} =useParams();
    const posts=post.find(posts=>(posts.id).toString()===id);
    useEffect(()=>{
            if(posts){
                setEditTitle(posts.title);
                setEditBody(posts.body);
            }
        },[posts,setEditBody,setEditTitle]
    )
  return (
    <main>
         {editTitle &&
        <>
            <h2>Edit Post</h2>
            <form onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="editTitle">
            Title:
            </label>
            <input 
            id="editTitle"
            type="text" 
            required
            value={editTitle}
            onChange={(e)=>setEditTitle(e.target.value)}
            />
            <label htmlFor="editBody">
            Post:
            </label>
            <input 
            id="editBody"
            type="text" 
            required
            value={editBody}
            onChange={(e)=>setEditBody(e.target.value)}
            />
            <button type="submit" onClick={()=>handleEdit(posts.id)}>
            Submit
            </button>
            </form>
        </>
        }
    </main>
  )
}

export default Editpost