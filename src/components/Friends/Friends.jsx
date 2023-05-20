/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";

const Friends = () => {
  const friends = useLoaderData();
  return (
    <div>
      <h2 className="text-emerald-700 font-semibold text-3xl uppercase">
        Total Friends :{" "}
        <span className="bg-emerald-500 rounded text-emerald-200 px-2">
          {friends.length}
        </span>
      </h2>
      <div className="grid grid-cols-2 gap-3 mt-5">
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend}></Friend>
        ))}
      </div>
    </div>
  );
}; 

export default Friends;
