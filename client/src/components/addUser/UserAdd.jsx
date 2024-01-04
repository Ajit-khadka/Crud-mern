import { Link, useNavigate } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const UserAdd = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  let formHandler = (event) => {
    setFormData((formData) => {
      return {
        ...formData,
        [event.target.name]: event.target.value,
      };
    });
  };

  let SubmitHandler = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:8000/api/create", formData)
      .then((res) => {
        toast.success(res.data.msg, { position: "bottom-center" });
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center flex-col font-Nunito h-[100vh] bg-blue-100">
      <div className="  space-y-2 shadow-xl bg-white p-8 text-center">
        <div className="w-[23px] ">
          <Link className=" text-black font-bold text-center " to={"/"}>
            <div className="underline text-blue-400">Back</div>
          </Link>
        </div>
        <div className="font-semibold ">Add New User</div>
        <form className="space-y-5" onSubmit={SubmitHandler}>
          <Input
            variant="outlined"
            label="First name"
            placeholder="First name"
            required
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={formHandler}
          />
          <Input
            variant="outlined"
            label="Last name"
            placeholder="Last name"
            required
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={formHandler}
          />
          <Input
            variant="outlined"
            label="Email"
            placeholder="Email"
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={formHandler}
          />
          <Input
            variant="outlined"
            label="Password"
            placeholder="Password"
            required
            type="password"
            name="password"
            value={formData.password}
            onChange={formHandler}
          />
          <button
            className="p-3 rounded-md bg-red-500 text-white font-bold"
            to={"/"}
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserAdd;
