import { createContext } from "react";
import React from "react";
import { useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {format} from "date-fns";
import api from "../api/post";
import useWinsowsize from "../hooks/useWindowsize";


const Datacontext = createContext({})

export const Dataprovider=({children})=>{
    
        const[post,setPost]=useState([]);
        const[search,setSearch]=useState('');
        const[searchresult,setSearchresult]=useState([]);
        const[postTitle,setPostTitle]=useState('');
        const[postBody,setPostBody]=useState('');
        const[editTitle,setEditTitle]=useState('');
        const[editBody,setEditBody]=useState('');
        const navigate = useNavigate();
        const {width}=useWinsowsize();
      
      useEffect(()=>{
      const fetchpost=async()=>{
        try{
          const response=await api.get('/post');
          setPost(response.data)
        }
        catch(err){
          if(err.response){
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          }
          else{
            console.log(`Error:${err.message}`);
          }
        }
      
      }
      fetchpost();
      },[])
        useEffect(()=>{
          const filtersearch=post.filter((post)=>
          ((post.title).toLowerCase()).includes(search.toLocaleLowerCase())) 
            || 
           ((post.body).toLowerCase()).includes(search.toLocaleLowerCase());
           setSearchresult(filtersearch.reverse());
        },[post,search])
      
      
        const handleSubmit =async(e)=>{
          e.preventDefault();
          const id=post.length ?post[post.length-1].id+1:1;
          const datetime=format(new Date(),'MMM dd, yyyy pp');
          const newpost={id,title:postTitle,datetime,body:postBody};
          try{
            const response= await api.post('/post',newpost);
            const allposts=[...post,response.data];
            setPost(allposts);
            setPostTitle('');
            setPostBody('');
            navigate('/');
          }catch(err){
            console.log(`Error:${err.message}`);
          }
          
        }
        const handleDelete =async(id)=>{
          
          try{
            await api.delete(`post/${id}`);
            const Postlist = post.filter(post=>post.id !== id);
            setPost(Postlist);
            navigate('/');
          }catch(err){
            console.log(`Error:${err.mesage}`);
          }
         
          
        }
        const handleEdit=async(id) =>{
          const datetime =format(new Date(),'MMM dd,yyyy pp');
          const editPost={id,title:editTitle,datetime,body:editBody};
          try{
            const response=await api.put(`/post/${id}`,editPost);
            setPost(post.map(posts=>posts.id===id ?{...response.data}:posts));
            setEditTitle('');
            setEditBody('');
            navigate('/');
      
          }catch(err){
            console.log(`Error:${err.mesage}`);
          } 
         }
    return(
        <Datacontext.Provider value={{
            width,search,setSearch,searchresult,handleSubmit,postTitle,setPostTitle,postBody,setPostBody,handleDelete,post,handleEdit,editTitle,setEditTitle,editBody,setEditBody,
        }}>
            {children}
        </Datacontext.Provider>

    )
}

export default Datacontext