import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice";
import { useDispatch , useSelector} from "react-redux";

export default function SignIn() {
  const [formData, setFormdata] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success == false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (err) {
      dispatch(signInFailure(err));
      setLoading(false);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:-80"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>

      <div className="flex gap-2 mt-5">
        <p>Dont Have an account?</p>
        <Link to="/sign-up" className="text-blue-500">
          <span className="text-blue-500">Sign up</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">{error ?  error.message || "something went wrong" : ''}</p>
    </div>
  );
}
