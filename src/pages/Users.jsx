import React from 'react'

export default function Users() {
    const users = [{ id: 1, name: "John Doe", age: 23, bio: "Software Developer" }]
    return (
        <div>
<nav>
      <ul>
        {users.map((usersItem) => {
          return (
            <li key={users.name}>
              <NavLink
                to={menuItem.path}
                className={styles.link}
                style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
              >
                {menuItem.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
        </div>
    )
}
