// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getUser } from '../movieCrud';


const User = () => {

  const { userId } = useParams();

  const [userData, setData] = useState({
    name: '',
    age: '',
    gender: '',
    image: '',
  });

  const loadUser = async () => {
    const response = await getUser(userId);
    setData(response);
  }
  

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className='user'>

<div className='listUser'>
      <img src={userData.image} alt="" />
      <h2 style={{color:"rgb(255, 119, 0)"}}> &nbsp;{userData.name}</h2>
    </div>
    </div>
   
  )
}

export default User;