import React, { useContext } from "react"
import Feed from "./Feed";
import Datacontext from "./context/Datacontext";

const Home = () => {
  const {searchresult}=useContext(Datacontext)
  return (
    <main>
      {searchresult.length ?
      (<Feed post={searchresult} />)
      :
      (
        <p style={{marginTop:"2rem"}}>
          No posts to Display
        </p>
      )}
    </main>
  )
}

export default Home