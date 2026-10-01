import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }

    if (form.password.length < 6) {
      newErrors.password =
        "Password must contain at least 6 characters";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword =
        "Passwords do not match";
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
        name: form.name,
        email: form.email,
      })
    );

    toast.success("Account created successfully!");

    navigate("/");
  };

  return (
    <main className="min-h-[80vh] flex items-center justify-center px-5 py-12">

      <div className="w-full max-w-md bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-xl">

        <h1 className="text-3xl font-black text-center">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Join the PulseX community
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <div>
            <input
              className="input"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
            />

            {errors.name && (
              <p className="error">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <input
              className="input"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
            />

            {errors.email && (
              <p className="error">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              className="input"
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
            />

            {errors.password && (
              <p className="error">
                {errors.password}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              className="input"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({
                  ...form,
                  confirmPassword: e.target.value,
                })
              }
            />

            {errors.confirmPassword && (
              <p className="error">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white dark:bg-white dark:text-black py-4 rounded-xl font-bold hover:bg-orange-500 hover:text-white transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-gray-500 mt-6">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-orange-500 font-semibold"
          >
            Login
          </Link>

        </p>

      </div>
    </main>
  );
}

export default Signup;