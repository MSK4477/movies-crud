// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../movieCrud";
import { Link } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const response = await getUsers();
    setUsers(response);
  };
  const removeFromUi = async (userId) => {
    await deleteUser(userId);
    const newUsers = users.filter(({ id }) => userId !== id);
    setUsers(newUsers);
    }
  useEffect(() => {
    loadUsers();
  }, []);
  

  return (
    <div className="users">
      <div className="listUsers">
        {users.map((user) => (
          <div key={user.id} className="UserCard">
            <img src={user.image} alt="ji" />
            <h2>{user.name}</h2>
         <div className="iconAdjust">
        <Link to={`/crud/edit?id=${user.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <i title="Edit"
                className="fa-solid fa-pen-to-square fa-2x"
                style={{
                color: "black",
               position:"relative",
               left:"129px",
            bottom:"350px",
               cursor: 'pointer',

                }}
            ></i>
            </Link>
            <i title="Delete" className="fa-solid fa-trash-can fa-2x" style={{
            color: "black",
            position:"relative",
            left:"110px",
            bottom:"310px",
            cursor: 'pointer',
            }}
            onClick={() => removeFromUi(user.id)}
            ></i>
            </div>
            </div>
          
          ))}
      </div>
      
    </div>
  );
};

export default Users;
