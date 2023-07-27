// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { getUsers } from "../movieCrud";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const response = await getUsers();
    setUsers(response);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="home">
      <div>
        {users.map((user) => (
          <div className="card" key={user.id}>
            <img src={user.image} alt={user.name} />
            <Link
              to={`/crud/${user.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
                <h3><span style={{color:"grey"}}>Name: </span> &nbsp;{user.name}</h3>
                <h3><span style={{color:"grey"}}>Age: </span> &nbsp;{user.age}</h3>
                <h3><span style={{color:"grey"}}>Gender: </span> &nbsp;{user.gender}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
