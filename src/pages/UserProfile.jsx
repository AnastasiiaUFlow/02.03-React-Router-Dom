import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  // Данные (в реальном проекте они могут приходить из API или пропсов)
  const users = [
    { id: 1, name: "John Doe", age: 23, bio: "Software Developer" },
    { id: 2, name: "Mary Sue", age: 42, bio: "Manager" },
    { id: 3, name: "Diana Spenser", age: 21, bio: "SEO" }
  ];
  const { userId } = useParams();

  // Ищем пользователя по ID
  const user = users.find((u) => u.id === Number(userId));

  // Проверка на случай, если пользователь не найден
  if (!user) {
    return <h2>Пользователь не найден</h2>;
  }
  return (
    <div style={{ padding: '20px' }}>
      <h1>Профиль пользователя</h1>
      <p><strong>Имя:</strong> {user.name}</p>
      <p><strong>Возраст:</strong> {user.age}</p>
      <p><strong>О себе:</strong> {user.bio}</p>
    </div>
  );
}

export default UserProfile;
