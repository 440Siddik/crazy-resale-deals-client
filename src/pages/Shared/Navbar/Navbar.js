import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.jpg'
import { AuthContext } from '../../../Context/AuthProvider';
const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
    .then(()=> {})
    .catch(err => console.log(err))
  }
  const menuItems = (
    <>
      <Link className="mr-4 font-semibold text-white" to="/home">
        <li>Home</li>
      </Link>
      <Link className="mr-4 font-semibold text-white" to="/dashboard">
        <li>Dashboard</li>
      </Link>
      <Link className="mr-4 font-semibold text-white" to="/blogs">
        <li>Blogs</li>
      </Link>
      {user?.uid ? (
        <li>
          <Link className="btn btn-outline rounded px-4 py-1"><button onClick={handleLogOut}>Sign Out</button></Link>
        </li>
      ) : (
        <li>
          {" "}
          <Link className="btn btn-outline rounded px-4 py-1" to="/login">
            Login
          </Link>
        </li>
      )}
    </>
  );
  
  return (
    <div className="navbar bg-accent">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <div className="flex items-center">
          <Link to="/" className="btn btn-ghost normal-case text-white text-xl">
            Crazy Resale Deals
          </Link>
          <img src={logo} className="w-10 h-10" alt="" />
        </div>
      </div>
      <div className="navbar-end hidden lg:flex items-center">
        <ul className="menu menu-horizontal">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;