import { usersUrl } from "./Config";


export const createUser= async (movieData) => {
  const response = await fetch(
    `${usersUrl}/crud`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movieData)
    }
  );
  const movie = await response.json();
  return movie;
}

export const getUsers = async () => {
  const response = await fetch(
    `${usersUrl}/crud`
  );
  const users = await response.json();
  return users;
}

export const getUser = async (userId) => {
  const response = await fetch(
    `${usersUrl}/crud/${userId}`
  );
  const user = await response.json();
  return user;
}

export const updateUser = async (userId, userData) => {
  const response = await fetch(
    `${usersUrl}/crud/${userId}`,
    {
      method: 'PUT',
      body: JSON.stringify(userData),
      headers: { 'Content-Type': 'application/json' }
    }
  );
  const movie = await response.json();
  return movie;
}

export const deleteUser = async (userId) => {
  const response = await fetch(
    `${usersUrl}/crud/${userId}`,
    {
      method: 'DELETE'
    }
  );
  const user = await response.json();
  return user;
}





