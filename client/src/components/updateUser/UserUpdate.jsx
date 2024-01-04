import { Link, useParams, useNavigate } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const UserUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  let formHandler = (event) => {
    setFormData((formData) => {
      return {
        ...formData,
        [event.target.name]: event.target.value,
      };
    });
  };

  useEffect(() => {
    const dataFetch = () => {
      try {
        axios
          .get(`http://localhost:8000/api/getOne/${id}`)
          .then((res) => setFormData(res.data.userExists))
          .catch((err) => console.log("error", err));
      } catch (err) {
        console.log("error", err);
      }
    };
    dataFetch();
  }, [id]);

  const updateUser = async (event) => {
    event.preventDefault();
    await axios
      .put(`http://localhost:8000/api/updateOne/${id}` ,formData)
      .then((res) => {
        toast.success(res.data.msg, { position: "bottom-center" });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center flex-col font-Nunito h-[100vh] bg-blue-100">
      <div className="  space-y-2 shadow-xl bg-white p-8 text-center">
        <div className="w-[23px] ">
          <Link className=" text-black font-bold text-center " to={"/"}>
            <div className="underline text-blue-400">Back</div>
          </Link>
        </div>
        <div className="font-semibold ">Update Old User</div>
        <form className="space-y-5" onSubmit={updateUser}>
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

          <button
            className="p-3 rounded-md bg-red-500 text-white font-bold"
            to={"/"}
          >
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserUpdate;
