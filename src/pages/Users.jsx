import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Users() {
    const users = [{ id: 1, name: "John Doe", age: 23, bio: "Software Developer" },{ id: 2, name: "Mary Sue", age: 42, bio: "Manager" },{ id: 3, name: "Diana Spenser", age: 21, bio: "SEO" }]
    return (
        <div>
<nav>
      <ul>
        {users.map((usersItem) => {
          return (
            <li key={usersItem.id}>
              <NavLink
                to={`/users/${usersItem.id}`}
                style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
              >
                {usersItem.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
        </div>
    )
}
