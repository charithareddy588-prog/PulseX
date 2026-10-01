import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const categories = [
    "All",
    "Earbuds",
    "Smartwatches",
    "Headphones",
    "Speakers",
  ];

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, category, sort]);

  return (
    <main className="max-w-7xl mx-auto px-5 py-12">

      <div className="mb-10">
        <p className="text-orange-500 font-semibold">
          OUR COLLECTION
        </p>

        <h1 className="text-4xl md:text-5xl font-black mt-2">
          Explore Products
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mb-10">

        {/* Search */}

        <div className="relative flex-1">

          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-12 pr-5 py-4 rounded-xl border dark:border-zinc-700 bg-white dark:bg-zinc-900 outline-none focus:ring-2 focus:ring-orange-500"
          />

        </div>

        {/* Category */}

        <div className="flex items-center gap-2 overflow-x-auto">

          <SlidersHorizontal size={20} />

          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-5 py-3 rounded-full whitespace-nowrap transition ${
                category === item
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-gray-100 dark:bg-zinc-800"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

        {/* Sort */}

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-5 py-3 rounded-xl border dark:border-zinc-700 bg-white dark:bg-zinc-900"
        >
          <option value="default">
            Sort By
          </option>

          <option value="low">
            Price: Low to High
          </option>

          <option value="high">
            Price: High to Low
          </option>

          <option value="rating">
            Rating
          </option>
        </select>

      </div>

      {filteredProducts.length === 0 ? (

        <div className="text-center py-20">
          <h2 className="text-2xl font-bold">
            No products found
          </h2>

          <p className="text-gray-500 mt-2">
            Try another search or category.
          </p>
        </div>

      ) : (

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      )}

    </main>
  );
}

export default Products;