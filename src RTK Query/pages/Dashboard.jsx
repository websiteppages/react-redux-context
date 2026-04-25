import React from "react";
import PostList from "./PostList";
import UserList from "./UserList";
import SelectedPost from "./SelectedPost";
import SelectedUser from "./SelectedUser";
import SelectedUserModal from "./SelectedUserModal";
import SelectedPostModal from "./SelectedPostModal";
import PostFormModal from "./PostFormModal";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { mode, selectedPost } = useSelector((state) => state.posts);

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <PostList />
      <UserList />

      {/* <SelectedPost />
      <SelectedUser />  */}


      {/* 👇 Modal here */}
      {/* <SelectedUserModal />
      <SelectedPostModal /> */}


     <PostFormModal key={mode + (selectedPost?.id || "")} />

    </div>
  );
};

export default Dashboard;