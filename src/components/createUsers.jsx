// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { createUser } from "../movieCrud";
import { useNavigate } from "react-router-dom";


const Add = () => {
  const navigate = useNavigate();

  const initialState = {
    name: '',
    age: '',
    image: '',
    gender: '',
  }

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    createUser(formData);
    setFormData(initialState);
    navigate("/")
    
  };

  return (
    <div className="createUsers">
      <div className="form">
<form onSubmit={handleSubmit} >
      <div style={{padding:"10px"}}  className="name">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{padding:"10px"}}  className="age">
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      <div  style={{padding:"10px"}} className="image" >
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </div>
      <div  style={{padding:"10px"}} className="gender">
        <label htmlFor="trailer">Gender:</label>
        <input
          type="text"
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>

      </div>

    </div>
    
  );
}

export default Add;