import {  NavLink } from "react-router-dom";

const Navigation = ()=>{
    return (
        <div>
            <NavLink  className={({ isActive }) => (isActive ? "bg-text-red text-red bg-red-500 rounded-md px-1 text-white" : "text-black")}
            to="/">home</NavLink>
            <NavLink  className={({ isActive }) => (isActive ? "bg-text-red text-red bg-red-500 rounded-md px-1 text-white" : "text-black")} 
            to="/about">about</NavLink>
            <NavLink  className={({ isActive }) => (isActive ? "bg-text-red text-red bg-red-500 rounded-md px-1 text-white" : "text-black")} 
             to="/contact">contact</NavLink>
            <NavLink  className={({ isActive }) => (isActive ? "bg-text-red text-red bg-red-500 rounded-md px-1 text-white" : "text-black")}
            to="/products">products</NavLink>
            <NavLink  className={({ isActive }) => (isActive ? "bg-text-red text-red bg-red-500 rounded-md px-1 text-white" : "text-black")} 
            to="/users">users</NavLink>
        </div>
    )
}

export default Navigation;