import React, { Fragment } from "react";
import { NavLink } from 'react-router-dom';



const Navigation = ()=>{

    return (
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <NavLink to="/" className={({ isActive }) => `btn btn-lg px-4 me-md-2 ${isActive ? 'btn-dark' : 'btn-outline-dark'}`}>
            Home
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => `btn btn-lg px-4 me-md-2 ${isActive ? 'btn-dark' : 'btn-outline-dark'}`}>
            Projects
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `btn btn-lg px-4 ${isActive ? 'btn-dark' : 'btn-outline-dark'}`}>
            About Me
        </NavLink>
        <NavLink to="/socials" className={({ isActive }) => `btn btn-lg px-4 ${isActive ? 'btn-dark' : 'btn-outline-dark'}`}>
            Say Hello!
        </NavLink>
    </div>
    )
}

export default Navigation


