/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
    const {name , phone , email , id} = friend;
  return (
    <div className="border bg-emerald-200 m-2 p-3 rounded font-semibold min-h-[200px] grid place-content-center">
      <h3 className="text-emerald-600 font-bold">{name}</h3>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
      <p>
        <Link to={`/friend/${id}`}>More...</Link>
      </p>
    </div>
  );
};

export default Friend;
