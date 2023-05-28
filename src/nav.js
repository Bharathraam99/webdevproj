import { Link } from "react-router-dom";
import React from 'react';
function Nav() {
 return (
   <nav className="nav nav-tabs mb-2">
     <Link className="nav-link" to="/profile">Profile</Link>
     <Link className="nav-link" to="/users">Users</Link>
     <Link className="nav-link" to="/post">Post</Link>
   </nav>
 );
}
export default Nav;

