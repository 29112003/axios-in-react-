import { Route, Routes } from "react-router-dom"
import Contact from "../components/Contact"
import Product from "../components/Product"
import About from "../components/About"
import Home from "../components/Home"
import User from "../components/User"

const Routers = ()=>{
  return (
    <div className="flex gap-10">
      <Routes  >
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/users" element={<User/>} />
        <Route path="/*" element={<h1>page not found</h1>} />

      </Routes>
    </div>
  )
}


export default Routers