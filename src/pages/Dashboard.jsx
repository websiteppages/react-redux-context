import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/userSlice";
import { fetchPosts } from "../features/posts/postSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  const {
    data: users,
    status: usersStatus,
    error: usersError,
  } = useSelector((state) => state.users);

  const {
    data: posts,
    status: postsStatus,
    error: postsError,
  } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {/* Users Section */}
      <div>
        <h2>Users</h2>

        {usersStatus === "loading" && <p>Loading users...</p>}
        {usersStatus === "failed" && <p>Error: {usersError}</p>}

        {usersStatus === "success" &&
          users.map((u) => <p key={u.id}>{u.name}</p>)}
      </div>

      {/* Posts Section */}
      <div>
        <h2>Posts</h2>

        {postsStatus === "loading" && <p>Loading posts...</p>}
        {postsStatus === "failed" && <p>Error: {postsError}</p>}

        {postsStatus === "success" &&
          posts.slice(0, 5).map((p) => (
            <p key={p.id}>{p.title}</p>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;