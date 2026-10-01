import { Link, useParams } from "react-router-dom";

import {
  CheckCircle2,
  Package,
  Truck,
  Home,
  MapPin,
  ArrowLeft,
} from "lucide-react";

function OrderTracking() {
  const { orderNumber } = useParams();

  // Get saved order
  const savedOrder =
    localStorage.getItem("pulseXOrder");

  let order = null;

  try {
    order = savedOrder
      ? JSON.parse(savedOrder)
      : null;
  } catch (error) {
    console.error(
      "Unable to read saved order:",
      error
    );

    order = null;
  }

  // Make sure the URL order number matches
  // the saved order
  if (
    !order ||
    order.orderNumber !== orderNumber
  ) {
    return (
      <div className="min-h-[70vh] bg-gray-50 px-4 py-16 dark:bg-gray-950">

        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 text-center shadow-sm dark:bg-gray-900">

          <Package
            size={55}
            className="mx-auto text-brand-500"
          />

          <h1 className="mt-5 text-3xl font-bold text-gray-900 dark:text-white">
            Order Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            We couldn't find this order.
          </p>

          <p className="mt-2 text-sm text-gray-400">
            Order Number: #{orderNumber}
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

  const steps = [
    {
      title: "Order Placed",
      description:
        "Your order has been received",
      icon: <CheckCircle2 size={22} />,
    },
    {
      title: "Processing",
      description:
        "Your order is being prepared",
      icon: <Package size={22} />,
    },
    {
      title: "Shipped",
      description:
        "Your order is on the way",
      icon: <Truck size={22} />,
    },
    {
      title: "Out for Delivery",
      description:
        "Your order is arriving today",
      icon: <MapPin size={22} />,
    },
    {
      title: "Delivered",
      description:
        "Order delivered successfully",
      icon: <Home size={22} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 dark:bg-gray-950">

      <div className="mx-auto max-w-[1100px]">

        {/* Back */}

        <Link
          to="/products"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand-500"
        >
          <ArrowLeft size={18} />
          Continue Shopping
        </Link>

        {/* ORDER SUCCESS HEADER */}

        <div className="mb-8 rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-900">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <div className="flex items-center gap-2">

                <CheckCircle2
                  size={25}
                  className="text-green-500"
                />

                <p className="text-sm font-semibold text-green-600">
                  Order placed successfully
                </p>

              </div>

              <p className="mt-4 text-sm font-medium text-gray-500">
                Order Number
              </p>

              <h1 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                #{order.orderNumber}
              </h1>

            </div>

            <div className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-600 dark:bg-green-500/10">
              {order.status}
            </div>

          </div>

        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* TRACKING */}

          <section className="rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-900">

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Track Your Order
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Tracking ID:{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {order.trackingNumber}
              </span>
            </p>

            <div className="relative mt-10">

              {/* Vertical line */}

              <div className="absolute left-[21px] top-5 h-[calc(100%-40px)] w-[2px] bg-gray-200 dark:bg-gray-700" />

              <div className="space-y-9">

                {steps.map(
                  (step, index) => {

                    // For now only first step is active
                    const isActive =
                      index === 0;

                    return (
                      <div
                        key={step.title}
                        className="relative flex gap-5"
                      >

                        <div
                          className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                            isActive
                              ? "bg-brand-500 text-white"
                              : "bg-gray-100 text-gray-400 dark:bg-gray-800"
                          }`}
                        >
                          {step.icon}
                        </div>

                        <div className="pt-1">

                          <h3
                            className={`font-semibold ${
                              isActive
                                ? "text-gray-900 dark:text-white"
                                : "text-gray-400"
                            }`}
                          >
                            {step.title}
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            {step.description}
                          </p>

                        </div>

                      </div>
                    );
                  }
                )}

              </div>

            </div>

          </section>

          {/* RIGHT SIDE */}

          <div className="space-y-6">

            {/* DELIVERY ADDRESS */}

            <section className="rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-900">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-500 dark:bg-brand-500/10">
                  <MapPin size={20} />
                </div>

                <h2 className="font-bold text-gray-900 dark:text-white">
                  Delivery Address
                </h2>

              </div>

              <div className="mt-5 text-sm leading-6 text-gray-500">

                <p className="font-semibold text-gray-900 dark:text-white">
                  {order.customer?.firstName}{" "}
                  {order.customer?.lastName}
                </p>

                <p>
                  {order.customer?.address}
                </p>

                <p>
                  {order.customer?.city},{" "}
                  {order.customer?.state}
                </p>

                <p>
                  {order.customer?.pincode}
                </p>

                <p className="mt-2">
                  {order.customer?.phone}
                </p>

              </div>

            </section>

            {/* ORDER PRODUCTS */}

            <section className="rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-900">

              <h2 className="font-bold text-gray-900 dark:text-white">
                Ordered Products
              </h2>

              <div className="mt-5 space-y-4">

                {order.items?.map(
                  (item) => (

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
                          Quantity:{" "}
                          {item.quantity}
                        </p>

                        <p className="mt-1 text-sm font-semibold text-brand-500">
                          ₹
                          {(
                            item.price *
                            item.quantity
                          ).toLocaleString(
                            "en-IN"
                          )}
                        </p>

                      </div>

                    </div>

                  )
                )}

              </div>

              <div className="mt-5 border-t border-gray-200 pt-5 dark:border-gray-700">

                <div className="flex justify-between">

                  <span className="font-semibold text-gray-900 dark:text-white">
                    Subtotal
                  </span>

                  <span className="font-semibold">
                    ₹
                    {Number(
                      order.subtotal || 0
                    ).toLocaleString(
                      "en-IN"
                    )}
                  </span>

                </div>

                <div className="mt-2 flex justify-between">

                  <span className="text-sm text-gray-500">
                    Delivery
                  </span>

                  <span className="text-sm">
                    {order.deliveryCharge ===
                    0
                      ? "FREE"
                      : `₹${order.deliveryCharge}`}
                  </span>

                </div>

                <div className="mt-4 flex justify-between border-t border-gray-200 pt-4 dark:border-gray-700">

                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    Total
                  </span>

                  <span className="text-xl font-bold text-brand-500">
                    ₹
                    {Number(
                      order.total || 0
                    ).toLocaleString(
                      "en-IN"
                    )}
                  </span>

                </div>

              </div>

            </section>

          </div>

        </div>

      </div>

    </div>
  );
}

export default OrderTracking;