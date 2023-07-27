// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { getUser, updateUser } from "../movieCrud";
import { useSearchParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const initialState = {
    name: '',
    age: '',
    gender: '',
    image: '',
  }

  const [params] = useSearchParams();

  const [formData, setFormData] = useState(initialState);

  const navigate = useNavigate();

  const loadUser = async () => {
    const response = await getUser(params.get('id'));
    setFormData(response);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here, you can handle the form submission, for example, by sending the data to a server or performing other actions.
    await updateUser(params.get('id'), formData);
    navigate(`/crud/${params.get('id')}`);
  };

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="edit">
<div className="editUser">
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

export default Edit;