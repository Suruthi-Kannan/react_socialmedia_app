import { Route,Routes} from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import Newpost from "./Newpost";
import Postpage from "./Postpage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import Editpost from "./Editpost";
import { Dataprovider } from "./context/Datacontext";


function App() {
  return (
    <div className="App">
     <Dataprovider>
      <Header title="Social Media App"/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      <Route path="post">
        <Route index element={<Newpost/>}/>
        <Route path=":id" element={<Postpage/>}/>
      </Route>
      <Route path="/edit/:id/" element={<Editpost/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="*" element={ <Missing />}/>
      </Routes>
      <Footer/>  
     </Dataprovider>
    </div>
  );
}

export default App;
