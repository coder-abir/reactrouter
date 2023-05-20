/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-emerald-600 flex justify-center gap-5 bg-emerald-200  py-5 font-semibold">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/posts">Posts</Link>
    </div>
  );
};

export default Header;
