// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Header from './layout/header'
import Home from "./components/home"
import Users from './components/Users'; 
import User from './components/user'; 
import CreateUsers from './components/createUsers';
import Edit from './components/Edit';
import "./styles/App.scss";
import "./styles/header.scss"
import "./styles/users.scss"
import "./styles/user.scss"
import "./styles/home.scss"
import "./styles/edit.scss"
import "./styles/createUsers.scss"

function App() {
  return (
    <>
      <Router>
        <Header />
        
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="crud" >
            <Route index element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path=':userId' element={<User />} />
            <Route path="createUsers" element={<CreateUsers />} />
           <Route path='edit'element={<Edit />}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
