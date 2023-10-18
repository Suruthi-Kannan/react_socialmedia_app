import React, { useContext } from "react"
import { Link } from "react-router-dom"
import Datacontext from "./context/Datacontext"
const Nav = () => {
  const {search,setSearch}=useContext(Datacontext)
  return (
    <nav className="nav">
      <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="search">Search Box</label>
        <input 
        id="search"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e)=>setSearch(e.target.value)} />
      </form>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/post">Post</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  )
}

export default Nav