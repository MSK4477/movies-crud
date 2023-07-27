// eslint-disable-next-line no-unused-vars
import React from "react";
    import { Link, useLocation  } from "react-router-dom";
    
    
    const Header = () => {
      const location = useLocation();

      return (
        <nav>
          <main>
          <Link to={"/"} className={location.pathname === "/" ? "active" : ""}>Home</Link>
        <Link to={"/crud/users"}  className={location.pathname === "/crud/users" ? "active" : ""}>Users</Link>
        <Link to={"/crud/createUsers"} className={location.pathname === "/crud/createUsers" ? "active" : ""} >Create Users</Link>
          </main>
          <div className="crudHeader"> CRUD</div>
        </nav>
      ); 
    };
    
    export default Header;
    

