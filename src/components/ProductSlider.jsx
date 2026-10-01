import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import products from "../data/products";

function ProductSlider() {
  const [current, setCurrent] = useState(0);

  const product = products[current];

  useEffect(() => {
    if (!products.length) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  };

  if (!products.length) {
    return null;
  }

  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[720px]">

      {/* Main Carousel Card */}
      <div className="absolute inset-0 overflow-hidden rounded-[32px] bg-white shadow-[0_25px_70px_rgba(0,0,0,0.12)]">

        {/* Product Image */}
        <div className="absolute inset-0 flex items-center justify-center px-12 pb-20 pt-10">
          <img
            key={product.id}
            src={product.image}
            alt={product.name}
            className="h-full w-full rounded-2xl object-cover transition-all duration-700"
          />
        </div>

        {/* Soft overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent" />

        {/* Product Name */}
        {/* Aligned with the left edge of the product image */}
        <div className="absolute bottom-14 left-12 z-10">

          <p className="text-sm font-medium text-zinc-500">
            {product.category}
          </p>

          <h3 className="mt-1 text-2xl font-black text-zinc-900">
            {product.name}
          </h3>

        </div>

        {/* Dots */}
        <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">

          {products.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrent(index)}
              aria-label={`Go to ${item.name}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-10 bg-orange-500"
                  : "w-2.5 bg-zinc-300"
              }`}
            />
          ))}

        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous product"
        className="absolute left-4 top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-zinc-900 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-orange-500 hover:text-white"
      >
        <ChevronLeft size={25} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        aria-label="Next product"
        className="absolute right-4 top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-zinc-900 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-orange-500 hover:text-white"
      >
        <ChevronRight size={25} />
      </button>

    </div>
  );
}

export default ProductSlider;