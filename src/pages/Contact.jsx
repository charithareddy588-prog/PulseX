import { useState } from "react";
import toast from "react-hot-toast";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.message
    ) {
      toast.error("Please fill all fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error("Please enter a valid email");
      return;
    }

    toast.success(
      "Message sent successfully!"
    );

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="max-w-6xl mx-auto px-5 py-16">

      <div className="text-center mb-12">

        <p className="text-orange-500 font-semibold">
          GET IN TOUCH
        </p>

        <h1 className="text-5xl font-black mt-2">
          Contact Us
        </h1>

      </div>

      <div className="grid md:grid-cols-2 gap-12">

        <div>

          <h2 className="text-3xl font-bold">
            We would love to hear from you.
          </h2>

          <p className="text-gray-500 mt-5 leading-7">
            Have a question about our products, orders or
            support? Send us a message and our team will
            get back to you.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            className="input"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

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

          <textarea
            rows="6"
            className="input resize-none"
            placeholder="Your Message"
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
          />

          <button
            type="submit"
            className="bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-xl font-bold hover:bg-orange-500 hover:text-white transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </main>
  );
}

export default Contact;