import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password =
        "Password must contain at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    localStorage.setItem(
      "pulseUser",
      JSON.stringify({
        email: form.email,
      })
    );

    toast.success("Login successful!");

    navigate("/");
  };

  return (
    <main className="min-h-[80vh] flex items-center justify-center px-5 py-12">

      <div className="w-full max-w-md bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-xl">

        <div className="text-center mb-8">

          <h1 className="text-3xl font-black">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your PulseX account
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label>Email</label>

            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="input"
              placeholder="you@example.com"
            />

            {errors.email && (
              <p className="error">
                {errors.email}
              </p>
            )}

          </div>

          <div>

            <label>Password</label>

            <input
              type="password"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              className="input"
              placeholder="••••••••"
            />

            {errors.password && (
              <p className="error">
                {errors.password}
              </p>
            )}

          </div>

          <button
            type="submit"
            className="w-full bg-black text-white dark:bg-white dark:text-black py-4 rounded-xl font-bold hover:bg-orange-500 hover:text-white transition"
          >
            Login
          </button>

        </form>

        <p className="text-center text-gray-500 mt-7">

          Don't have an account?{" "}

          <Link
            to="/signup"
            className="text-orange-500 font-semibold"
          >
            Sign Up
          </Link>

        </p>

      </div>

    </main>
  );
}

export default Login;