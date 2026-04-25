import React from "react";
import { useGetUsersQuery } from "../services/userAPI";
import UserItem from "./UserItem";

const UserList = () => {
  const { data: users, isLoading } = useGetUsersQuery();

  if (isLoading) return <p>Loading Users...</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Users</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users?.slice(0, 6).map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;