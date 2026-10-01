import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  MapPin,
  Truck,
  CreditCard,
  Banknote,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] =
    useState("card");

  const [deliveryMethod, setDeliveryMethod] =
    useState("standard");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // Delivery charge
  const deliveryCharge =
    deliveryMethod === "express"
      ? 149
      : 0;

  // Final total
  const total =
    subtotal + deliveryCharge;

  // Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!form.firstName.trim()) {
      newErrors.firstName =
        "First name is required";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName =
        "Last name is required";
    }

    if (!form.email.trim()) {
      newErrors.email =
        "Email is required";
    }

    if (!form.phone.trim()) {
      newErrors.phone =
        "Phone number is required";
    }

    if (!form.address.trim()) {
      newErrors.address =
        "Address is required";
    }

    if (!form.city.trim()) {
      newErrors.city =
        "City is required";
    }

    if (!form.state.trim()) {
      newErrors.state =
        "State is required";
    }

    if (!form.pincode.trim()) {
      newErrors.pincode =
        "Pincode is required";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  // Place order
  const handlePlaceOrder = () => {
    // Check cart
    if (!cart.length) {
      toast.error("Your cart is empty");
      return;
    }

    // Validate address
    if (!validateForm()) {
      toast.error(
        "Please complete all required fields"
      );
      return;
    }

    // Create order number
    const orderNumber =
      "PX" +
      Date.now()
        .toString()
        .slice(-8);

    // Create tracking number
    const trackingNumber =
      "TRK" +
      Math.floor(
        100000000 +
          Math.random() * 900000000
      );

    // Create order
    const order = {
      orderNumber,

      date: new Date().toISOString(),

      status: "Order Placed",

      paymentMethod,

      deliveryMethod,

      customer: form,

      items: cart,

      subtotal,

      deliveryCharge,

      total,

      trackingNumber,
    };

    // Save order
    localStorage.setItem(
      "pulseXOrder",
      JSON.stringify(order)
    );

    // Clear cart
    clearCart();

    // Show success
    toast.success(
      "Order placed successfully!"
    );

    // Navigate to tracking
    navigate(
      `/order-tracking/${orderNumber}`
    );
  };

  // Empty cart
  if (!cart.length) {
    return (
      <div className="min-h-[70vh] bg-gray-50 px-4 py-16 dark:bg-gray-950">
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 text-center shadow-sm dark:bg-gray-900">

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Your cart is empty
          </h1>

          <p className="mt-3 text-gray-500">
            Add some products before
            proceeding to checkout.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-flex rounded-xl bg-brand-500 px-6 py-3 font-semibold text-white transition hover:bg-brand-600"
          >
            Continue Shopping
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 dark:bg-gray-950">

      <div className="mx-auto max-w-[1200px]">

        {/* HEADER */}

        <div className="mb-8">

          <Link
            to="/cart"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand-500"
          >
            <ArrowLeft size={18} />
            Back to Cart
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Checkout
          </h1>

          <p className="mt-2 text-gray-500">
            Complete your order securely.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">

          {/* LEFT SIDE */}

          <div className="space-y-6">

            {/* DELIVERY ADDRESS */}

            <section className="rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-900">

              <div className="mb-6 flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-500 dark:bg-brand-500/10">
                  <MapPin size={21} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Delivery Address
                  </h2>

                  <p className="text-sm text-gray-500">
                    Where should we deliver
                    your order?
                  </p>
                </div>

              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                <Input
                  label="First Name"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                />

                <Input
                  label="Last Name"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                />

                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                />

                <Input
                  label="Phone Number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  error={errors.phone}
                />

              </div>

              <div className="mt-4">

                <Input
                  label="Full Address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  error={errors.address}
                />

              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">

                <Input
                  label="City"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  error={errors.city}
                />

                <Input
                  label="State"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  error={errors.state}
                />

                <Input
                  label="Pincode"
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  error={errors.pincode}
                />

              </div>

            </section>

            {/* DELIVERY METHOD */}

            <section className="rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-900">

              <div className="mb-5 flex items-center gap-3">

                <Truck
                  className="text-brand-500"
                  size={22}
                />

                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Delivery Method
                </h2>

              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                <DeliveryOption
                  selected={
                    deliveryMethod ===
                    "standard"
                  }
                  onClick={() =>
                    setDeliveryMethod(
                      "standard"
                    )
                  }
                  title="Standard Delivery"
                  description="3–5 business days"
                  price="FREE"
                />

                <DeliveryOption
                  selected={
                    deliveryMethod ===
                    "express"
                  }
                  onClick={() =>
                    setDeliveryMethod(
                      "express"
                    )
                  }
                  title="Express Delivery"
                  description="1–2 business days"
                  price="₹149"
                />

              </div>

            </section>

            {/* PAYMENT */}

            <section className="rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-900">

              <div className="mb-5 flex items-center gap-3">

                <CreditCard
                  className="text-brand-500"
                  size={22}
                />

                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Payment Method
                </h2>

              </div>

              <div className="space-y-3">

                <PaymentOption
                  selected={
                    paymentMethod === "card"
                  }
                  onClick={() =>
                    setPaymentMethod("card")
                  }
                  icon={
                    <CreditCard size={20} />
                  }
                  title="Credit / Debit Card"
                  description="Secure card payment"
                />

                <PaymentOption
                  selected={
                    paymentMethod === "upi"
                  }
                  onClick={() =>
                    setPaymentMethod("upi")
                  }
                  icon={
                    <CreditCard size={20} />
                  }
                  title="UPI"
                  description="Pay using your UPI app"
                />

                <PaymentOption
                  selected={
                    paymentMethod === "cod"
                  }
                  onClick={() =>
                    setPaymentMethod("cod")
                  }
                  icon={
                    <Banknote size={20} />
                  }
                  title="Cash on Delivery"
                  description="Pay when your order arrives"
                />

              </div>

            </section>

          </div>

          {/* RIGHT SIDE */}

          <aside>

            <div className="sticky top-24 rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-900">

              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Order Summary
              </h2>

              {/* PRODUCTS */}

              <div className="mt-6 max-h-[350px] space-y-4 overflow-y-auto">

                {cart.map((item) => (

                  <div
                    key={item.id}
                    className="flex gap-3"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 rounded-xl bg-gray-100 object-cover"
                    />

                    <div className="min-w-0 flex-1">

                      <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                        {item.name}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Qty: {item.quantity}
                      </p>

                      <p className="mt-1 font-semibold text-brand-500">
                        ₹
                        {(
                          item.price *
                          item.quantity
                        ).toLocaleString("en-IN")}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

              <div className="my-6 border-t border-gray-200 dark:border-gray-700" />

              {/* SUBTOTAL */}

              <div className="space-y-3 text-sm">

                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Subtotal
                  </span>

                  <span className="font-medium text-gray-900 dark:text-white">
                    ₹
                    {subtotal.toLocaleString(
                      "en-IN"
                    )}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Delivery
                  </span>

                  <span className="font-medium text-gray-900 dark:text-white">
                    {deliveryCharge === 0
                      ? "FREE"
                      : `₹${deliveryCharge}`}
                  </span>

                </div>

              </div>

              <div className="my-5 border-t border-gray-200 dark:border-gray-700" />

              {/* TOTAL */}

              <div className="flex justify-between">

                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  Total
                </span>

                <span className="text-2xl font-bold text-brand-500">
                  ₹
                  {total.toLocaleString(
                    "en-IN"
                  )}
                </span>

              </div>

              {/* PLACE ORDER */}

              <button
                type="button"
                onClick={handlePlaceOrder}
                className="mt-6 w-full rounded-xl bg-brand-500 px-5 py-4 font-bold text-white transition hover:bg-brand-600 hover:shadow-lg active:scale-[0.98]"
              >
                Place Order
              </button>

              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-500">

                <ShieldCheck size={16} />

                Secure checkout &
                protected payment

              </div>

            </div>

          </aside>

        </div>

      </div>

    </div>
  );
}


/* =========================
   INPUT
========================= */

function Input({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
          error
            ? "border-red-500"
            : "border-gray-200 focus:border-brand-500"
        } bg-white text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white`}
      />

      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}

    </div>
  );
}


/* =========================
   DELIVERY OPTION
========================= */

function DeliveryOption({
  selected,
  onClick,
  title,
  description,
  price,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border p-4 text-left transition ${
        selected
          ? "border-brand-500 bg-brand-50 dark:bg-brand-500/10"
          : "border-gray-200 dark:border-gray-700"
      }`}
    >

      <div className="flex items-start justify-between">

        <div>

          <p className="font-semibold text-gray-900 dark:text-white">
            {title}
          </p>

          <p className="mt-1 text-xs text-gray-500">
            {description}
          </p>

        </div>

        <span className="font-semibold text-brand-500">
          {price}
        </span>

      </div>

    </button>
  );
}


/* =========================
   PAYMENT OPTION
========================= */

function PaymentOption({
  selected,
  onClick,
  icon,
  title,
  description,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
        selected
          ? "border-brand-500 bg-brand-50 dark:bg-brand-500/10"
          : "border-gray-200 dark:border-gray-700"
      }`}
    >

      <div className="text-brand-500">
        {icon}
      </div>

      <div>

        <p className="font-semibold text-gray-900 dark:text-white">
          {title}
        </p>

        <p className="text-xs text-gray-500">
          {description}
        </p>

      </div>

    </button>
  );
}

export default Checkout;