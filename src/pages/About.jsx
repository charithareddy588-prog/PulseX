import { motion } from "framer-motion";

function About() {
  return (
    <main>

      <section className="bg-black text-white py-24">
        <div className="max-w-5xl mx-auto px-5 text-center">

          <p className="text-orange-500 font-bold">
            ABOUT PULSEX
          </p>

          <h1 className="text-5xl md:text-7xl font-black mt-4">
            Technology made
            <span className="text-orange-500">
              {" "}simple.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 mt-7 text-lg">
            PulseX creates modern consumer electronics that
            combine useful technology, expressive design and
            accessible pricing.
          </p>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-20">

        <div className="grid md:grid-cols-3 gap-8">

          {[
            ["10M+", "Products Delivered"],
            ["4.8/5", "Average Rating"],
            ["50+", "Products"],
          ].map(([number, label]) => (

            <motion.div
              key={label}
              whileHover={{ y: -8 }}
              className="text-center p-10 rounded-3xl bg-gray-100 dark:bg-zinc-900"
            >

              <h2 className="text-5xl font-black text-orange-500">
                {number}
              </h2>

              <p className="mt-3 text-gray-500">
                {label}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

    </main>
  );
}

export default About;