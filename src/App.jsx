import { Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
import Routers from "./Utils/Routes"

const App = ()=>{
  return (
    <div>
      <Navigation/>
      <Routers/>
    </div>
  )
}


export default App