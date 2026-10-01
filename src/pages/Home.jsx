import { motion } from "framer-motion";
import {
  ArrowRight,
  Headphones,
  Watch,
  Speaker,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";

import { Link } from "react-router-dom";

import products from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductSlider from "../components/ProductSlider";

function Home() {
  const heroImages = [
    "/images/earbuds1.jpg",
    "/images/earbuds2.jpg",
  ];

  const categories = [
    {
      name: "Earbuds",
      icon: Headphones,
    },
    {
      name: "Smartwatches",
      icon: Watch,
    },
    {
      name: "Headphones",
      icon: Headphones,
    },
    {
      name: "Speakers",
      icon: Speaker,
    },
  ];

  return (
    <main>

      {/* ================= HERO ================= */}

      <section className="overflow-hidden bg-gradient-to-br from-orange-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-black">

        <div className="section-container grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">

          {/* Text */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">

              <span className="h-2 w-2 rounded-full bg-orange-500" />

              NEW GENERATION AUDIO

            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">

              Sound that

              <span className="text-orange-500">
                {" "}moves
              </span>

              {" "}with you.

            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              Discover powerful audio, smart wearables and
              connected technology designed to make every
              moment better.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                to="/products"
                className="flex items-center gap-2 rounded-full bg-zinc-950 px-7 py-3.5 font-bold text-white transition hover:bg-orange-500 dark:bg-white dark:text-zinc-950 dark:hover:bg-orange-500 dark:hover:text-white"
              >
                Shop Now
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/about"
                className="rounded-full border border-zinc-300 px-7 py-3.5 font-bold transition hover:border-orange-500 hover:text-orange-500 dark:border-zinc-700"
              >
                Explore
              </Link>

            </div>

            {/* Features */}

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-zinc-200 pt-7 dark:border-zinc-800">

              <div>
                <p className="text-2xl font-black">
                  40H
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  Battery Life
                </p>
              </div>

              <div>
                <p className="text-2xl font-black">
                  4.8★
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  Customer Rating
                </p>
              </div>

              <div>
                <p className="text-2xl font-black">
                  1M+
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  Happy Users
                </p>
              </div>

            </div>

          </motion.div>

          {/* Hero Product */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >

            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-3xl" />

            <div className="relative mx-auto max-w-xl overflow-hidden rounded-[2rem] shadow-2xl">

              <ProductSlider
                images={heroImages}
              />

            </div>

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -bottom-5 -left-3 rounded-2xl bg-white p-5 shadow-xl dark:bg-zinc-800 sm:-left-8"
            >

              <p className="text-xs text-zinc-500">
                Battery
              </p>

              <p className="mt-1 text-2xl font-black">
                40 Hrs
              </p>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* ================= TRUST ================= */}

      <section className="border-y border-zinc-100 bg-white dark:border-zinc-800 dark:bg-zinc-950">

        <div className="section-container grid grid-cols-1 gap-6 py-8 sm:grid-cols-3">

          <div className="flex items-center justify-center gap-4">
            <Truck className="text-orange-500" />
            <div>
              <p className="font-bold">
                Free Shipping
              </p>
              <p className="text-xs text-zinc-500">
                On orders above ₹999
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <ShieldCheck className="text-orange-500" />
            <div>
              <p className="font-bold">
                1 Year Warranty
              </p>
              <p className="text-xs text-zinc-500">
                Reliable support
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <RotateCcw className="text-orange-500" />
            <div>
              <p className="font-bold">
                Easy Returns
              </p>
              <p className="text-xs text-zinc-500">
                Hassle-free returns
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* ================= CATEGORIES ================= */}

      <section className="section-container py-20">

        <div className="text-center">

          <p className="font-bold text-orange-500">
            SHOP BY CATEGORY
          </p>

          <h2 className="mt-2 text-4xl font-black sm:text-5xl">
            Find your perfect tech
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-zinc-500">
            Explore our collection of smart gadgets made
            for entertainment, fitness and everyday life.
          </p>

        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">

          {categories.map((category) => {

            const Icon = category.icon;

            return (
              <Link
                key={category.name}
                to={`/products?category=${category.name}`}
                className="group rounded-3xl bg-zinc-100 p-7 text-center transition duration-300 hover:-translate-y-2 hover:bg-orange-500 hover:text-white hover:shadow-xl dark:bg-zinc-900"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-orange-500 shadow-sm transition group-hover:bg-white/20 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-5 font-bold">
                  {category.name}
                </h3>

                <p className="mt-2 text-xs text-zinc-500 group-hover:text-white/80">
                  Explore collection
                </p>

              </Link>
            );
          })}

        </div>

      </section>

      {/* ================= PRODUCTS ================= */}

      <section className="bg-zinc-50 py-20 dark:bg-zinc-900/40">

        <div className="section-container">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>

              <p className="font-bold text-orange-500">
                TRENDING NOW
              </p>

              <h2 className="mt-2 text-4xl font-black sm:text-5xl">
                Featured Products
              </h2>

            </div>

            <Link
              to="/products"
              className="flex items-center gap-2 font-bold text-orange-500"
            >
              View All
              <ArrowRight size={18} />
            </Link>

          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="section-container py-20">

        <div className="overflow-hidden rounded-[2rem] bg-zinc-950 px-6 py-16 text-center text-white sm:px-10">

          <p className="font-bold text-orange-500">
            READY TO UPGRADE?
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-black sm:text-5xl">
            Technology that fits your lifestyle.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-zinc-400">
            Discover our latest collection and find the
            perfect device for you.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-bold transition hover:bg-orange-600"
          >
            Explore Products
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;