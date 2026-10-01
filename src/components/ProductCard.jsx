import { Link } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const {
    toggleWishlist,
    isWishlisted,
  } = useWishlist();

  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">

      {/* Image */}

      <div className="relative aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-800">

        <Link to={`/products/${product.id}`}>

          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

        </Link>

        {/* Sale */}

        <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
          SALE
        </span>

        {/* Wishlist */}

        <button
          onClick={() =>
            toggleWishlist(product)
          }
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110"
          aria-label="Add to wishlist"
        >

          <Heart
            size={18}
            className={
              isWishlisted(product.id)
                ? "fill-red-500 text-red-500"
                : "text-zinc-700"
            }
          />

        </button>

      </div>

      {/* Content */}

      <div className="p-5">

        <p className="text-xs font-semibold uppercase tracking-wider text-orange-500">
          {product.category}
        </p>

        <Link
          to={`/products/${product.id}`}
        >

          <h3 className="mt-1 line-clamp-1 text-lg font-bold transition hover:text-orange-500">
            {product.name}
          </h3>

        </Link>

        {/* Rating */}

        <div className="mt-2 flex items-center gap-1">

          <Star
            size={15}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="text-sm font-semibold">
            {product.rating}
          </span>

          <span className="text-xs text-zinc-500">
            ({product.reviews})
          </span>

        </div>

        {/* Price */}

        <div className="mt-4 flex items-center justify-between gap-3">

          <div>

            <span className="text-xl font-black">
              ₹{product.price}
            </span>

            <span className="ml-2 text-sm text-zinc-400 line-through">
              ₹{product.oldPrice}
            </span>

          </div>

          <button
            onClick={() => addToCart(product)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-white transition hover:bg-orange-500 dark:bg-white dark:text-zinc-950 dark:hover:bg-orange-500 dark:hover:text-white"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>

        </div>

      </div>

    </article>
  );
}

export default ProductCard;