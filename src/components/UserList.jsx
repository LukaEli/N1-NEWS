import React, { useEffect, useState } from "react";
import { getUsers } from "../api";

const UserList = ({ handleUserSelect }) => {
  const [users, setUsers] = useState("");

  useEffect(() => {
    getUsers().then((usersData) => {
      setUsers(usersData);
    });
  }, []);

  return (
    <>
      <p>Log in</p>
      {users ? (
        <ul>
          {users.map((user) => {
            return (
              <li key={user.username}>
                <button onClick={() => handleUserSelect(user)}>
                  {user.username}
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>PLease wait</p>
      )}
    </>
  );
};

export default UserList;
