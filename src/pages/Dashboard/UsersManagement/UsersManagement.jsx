import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FiShieldOff } from "react-icons/fi";
import { FaSearch, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();
  const searchRef = useRef();
  const [searchText, setSearchText] = useState("");
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users", searchText],
    queryFn: async () => {
      const result = await axiosSecure.get(`/users?searchText=${searchText}`);
      return result.data;
    },
  });

  const updateRole = (user, role) => {
    console.log("usermanga", role);
    axiosSecure.patch(`/users/${user._id}/role`, role).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.displayName} marked as ${
            role.role === "admin" ? "admin" : "user"
          }`,
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    updateRole(user, { role: "admin" });
  };
  const handleMakeUser = (user) => {
    updateRole(user, { role: "user" });
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "/") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div>
      <h2 className="text-4xl">Users : {users.length}</h2>
      <label className="input">
        <FaSearch className="opacity-50"></FaSearch>
        <input
          type="search"
          ref={searchRef}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Users"
        />
      </label>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL No.</th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin Action</th>
              <th>Others Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user?.photoURL} alt="User Photo" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.displayName}</div>
                    </div>
                  </div>
                </td>

                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td>
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handleMakeUser(user)}
                      className="btn bg-red-400"
                    >
                      <FiShieldOff />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-green-400"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>Actions</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
