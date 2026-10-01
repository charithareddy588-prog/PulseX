import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
} from "lucide-react";

import products from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0]
  );

  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  const {
    toggleWishlist,
    isWishlisted,
  } = useWishlist();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Product not found
        </h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-5 py-12">

      <div className="grid lg:grid-cols-2 gap-12">

        {/* Images */}

        <div>

          <div className="bg-gray-100 dark:bg-zinc-900 rounded-3xl overflow-hidden aspect-square">

            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />

          </div>

          <div className="flex gap-4 mt-5">

            {product.images.map((image) => (
              <button
                key={image}
                onClick={() => setSelectedImage(image)}
                className={`w-20 h-20 rounded-xl overflow-hidden border-2 ${
                  selectedImage === image
                    ? "border-orange-500"
                    : "border-transparent"
                }`}
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
            ))}

          </div>

        </div>

        {/* Details */}

        <div className="py-5">

          <p className="text-orange-500 font-semibold uppercase">
            {product.category}
          </p>

          <h1 className="text-4xl md:text-5xl font-black mt-3">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mt-5">

            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="font-semibold">
              {product.rating}
            </span>

            <span className="text-gray-500">
              ({product.reviews} reviews)
            </span>

          </div>

          <div className="mt-7">

            <span className="text-4xl font-black">
              ₹{product.price}
            </span>

            <span className="ml-3 line-through text-gray-400">
              ₹{product.oldPrice}
            </span>

          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-7 mt-7">
            {product.description}
          </p>

          <div className="mt-8">

            <h3 className="font-bold text-lg mb-4">
              Key Features
            </h3>

            <ul className="space-y-3">

              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <span className="w-2 h-2 bg-orange-500 rounded-full" />
                  {feature}
                </li>
              ))}

            </ul>

          </div>

          <div className="flex items-center gap-4 mt-10">

            <div className="flex items-center border rounded-full dark:border-zinc-700">

              <button
                onClick={() =>
                  setQuantity(Math.max(1, quantity - 1))
                }
                className="p-3"
              >
                <Minus size={18} />
              </button>

              <span className="px-4 font-bold">
                {quantity}
              </span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
                className="p-3"
              >
                <Plus size={18} />
              </button>

            </div>

            <button
              onClick={handleAddToCart}
              className="flex-1 bg-black text-white dark:bg-white dark:text-black py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-orange-500 hover:text-white transition"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>

            <button
              onClick={() => toggleWishlist(product)}
              className="p-4 border rounded-full hover:border-orange-500 transition"
            >
              <Heart
                className={
                  isWishlisted(product.id)
                    ? "fill-red-500 text-red-500"
                    : ""
                }
              />
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}

export default ProductDetails;