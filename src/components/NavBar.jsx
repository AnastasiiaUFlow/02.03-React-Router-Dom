import React from 'react'
import { NavLink } from 'react-router-dom'
export default function NavBar() {
    return (
        <div>
            <ul>
                <li><NavLink to={"/"} style={({ isActive }) => ({
               color: isActive ? "red" : "blue",
             })}>Home</NavLink></li>
                <li><NavLink to={"/users"} style={({ isActive }) => ({
               color: isActive ? "red" : "blue",
             })}>Users</NavLink></li>
            </ul>

        </div>
    )
}
