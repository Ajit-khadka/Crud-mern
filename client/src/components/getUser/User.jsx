import { Link } from "react-router-dom";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const User = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const userFetch = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/getAll");
        // console.log(res.data.userdata);
        setUser(res.data.userdata);
      } catch (err) {
        console.log("Error", err);
      }
    };

    userFetch();
  }, []);

  const deleteUser = async (id) => {
    // console.log(id);
    await axios
      .delete(`http://localhost:8000/api/deleteOne/${id}`)
      .then((res) => {
        setUser((prevUser) => prevUser.filter((user) => user._id !== id));
        toast.success(res.data.msg, { position: "bottom-center" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let allUsers = users.map((user, index) => {
    return (
      <tr key={user._id}>
        <td className="border-2 border-black p-5">{index + 1}</td>
        <td className="border-2 border-black p-5">
          {user.firstName} {user.lastName}
        </td>
        <td className="border-2 border-black p-5">{user.email}</td>
        <td className="p-5 space-x-5 flex justify-between  border-r-2 border-b-2 border-black ">
          <Link
            className="p-4  bg-orange-500 rounded-xl text-white"
            to={`/UserUpdate/${user._id}`}
          >
            {" "}
            <MdEdit />
          </Link>
          <button
            className="p-4 text-white bg-red-500 rounded-xl "
            onClick={() => deleteUser(user._id)}
          >
            <FaDeleteLeft />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="flex justify-center items-center flex-col font-Nunito h-[100%] w-[100%] bg-blue-100">
      <div className=" p-10 text-center space-y-8 shadow-xl bg-white my-10">
        <Link
          className="p-3 rounded-md bg-indigo-700 text-white font-bold"
          to={"/UserAdd"}
        >
          Add User
        </Link>
        <table className=" ">
          <thead>
            <tr>
              <th className="border-2 border-black p-5 bg-purple-500 text-white">
                S.No.
              </th>
              <th className="border-2 border-black p-5 bg-purple-500  text-white">
                User Name
              </th>
              <th className="border-2 border-black p-5 bg-purple-500  text-white">
                User Email
              </th>
              <th className="border-2 border-black p-5 bg-purple-500  text-white">
                Acions
              </th>
            </tr>
          </thead>
          <tbody>{allUsers}</tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
