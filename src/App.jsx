import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home"
import MiniSpeaker from "./pages/MiniSpeaker"
import Speaker from "./pages/Speaker"
import SuperSpeaker from "./pages/SuperSpeaker"
import About from "./pages/About"
import Navbar from "./components/Narbar"

const App = ()=>{
  
  return(
    <>
     <Navbar /> 
     <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<MiniSpeaker />} path="/MiniSpeaker"></Route>
          <Route element={<Speaker/>} path="/Speaker"></Route>
          <Route element={<SuperSpeaker/>} path="/SuperSpeaker"></Route>
          <Route element={<About/>} path="/About"></Route>
        </Routes>
      </BrowserRouter>
      
      
    
    </>
  )
}
export default App;