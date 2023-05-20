/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div>
      <h2 className="bg-emerald-500 rounded text-emerald-200 px-2 mb-5">
        Total Post: {posts.length}
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
