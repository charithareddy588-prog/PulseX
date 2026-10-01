import { Link } from "react-router-dom";
import { Package, ArrowRight, ShoppingBag } from "lucide-react";

function Orders() {
  const savedOrder = localStorage.getItem("pulseXOrder");
  const order = savedOrder ? JSON.parse(savedOrder) : null;

  if (!order) {
    return (
      <main className="min-h-[70vh] px-5 py-16">
        <div className="mx-auto max-w-4xl text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-orange-500 dark:bg-orange-500/10">
            <ShoppingBag size={36} />
          </div>

          <h1 className="mt-6 text-4xl font-black">
            No Orders Yet
          </h1>

          <p className="mx-auto mt-3 max-w-md text-zinc-500 dark:text-zinc-400">
            You haven't placed any orders yet. Start shopping and your orders
            will appear here.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3 font-bold text-white transition hover:bg-orange-600"
          >
            <ShoppingBag size={18} />
            Start Shopping
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[70vh] px-5 py-12">

      <div className="mx-auto max-w-5xl">

        {/* Header */}

        <div className="mb-10">
          <p className="font-semibold text-orange-500">
            PulseX Orders
          </p>

          <h1 className="mt-2 text-4xl font-black sm:text-5xl">
            My Orders
          </h1>

          <p className="mt-3 text-zinc-500 dark:text-zinc-400">
            View your recent order and track your delivery.
          </p>
        </div>

        {/* Order Card */}

        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

          {/* Order Header */}

          <div className="flex flex-col gap-5 border-b border-zinc-200 p-6 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 dark:bg-orange-500/10">
                <Package size={26} />
              </div>

              <div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Order Number
                </p>

                <h2 className="text-xl font-black">
                  #{order.orderNumber}
                </h2>
              </div>

            </div>

            <div className="text-left sm:text-right">

              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Order Status
              </p>

              <span className="mt-1 inline-flex rounded-full bg-green-100 px-4 py-1.5 text-sm font-bold text-green-600 dark:bg-green-500/10 dark:text-green-400">
                Order Confirmed
              </span>

            </div>

          </div>

          {/* Order Details */}

          <div className="p-6">

            <div className="grid gap-6 sm:grid-cols-3">

              <div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Order Date
                </p>

                <p className="mt-1 font-bold">
                  {order.date
                    ? new Date(order.date).toLocaleDateString()
                    : "Recently"}
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Payment Method
                </p>

                <p className="mt-1 font-bold capitalize">
                  {order.paymentMethod || "Online Payment"}
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Total Amount
                </p>

                <p className="mt-1 text-xl font-black text-orange-500">
                  ₹{order.total}
                </p>
              </div>

            </div>

            {/* Products */}

            <div className="mt-8">

              <h3 className="mb-4 text-lg font-black">
                Ordered Products
              </h3>

              <div className="space-y-4">

                {order.items?.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-950"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-xl object-cover"
                    />

                    <div className="min-w-0 flex-1">

                      <h4 className="truncate font-bold">
                        {item.name}
                      </h4>

                      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                        Quantity: {item.quantity}
                      </p>

                    </div>

                    <p className="font-black">
                      ₹{item.price * item.quantity}
                    </p>

                  </div>
                ))}

              </div>

            </div>

            {/* Address */}

            {order.address && (
              <div className="mt-8 rounded-2xl bg-zinc-50 p-5 dark:bg-zinc-950">

                <h3 className="font-black">
                  Delivery Address
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {order.address.name}
                  <br />
                  {order.address.address}
                  <br />
                  {order.address.city}, {order.address.state}
                  <br />
                  {order.address.pincode}
                  <br />
                  Phone: {order.address.phone}
                </p>

              </div>
            )}

            {/* Track Button */}

            <div className="mt-8">

              <Link
                to={`/order-tracking/${order.orderNumber}`}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-black py-4 font-bold text-white transition hover:bg-orange-500 dark:bg-white dark:text-black dark:hover:bg-orange-500 dark:hover:text-white"
              >
                Track Order
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Orders;