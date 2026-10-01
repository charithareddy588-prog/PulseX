import ProductCard from "../components/ProductCard";
import { useWishlist } from "../context/WishlistContext";

function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <main className="max-w-7xl mx-auto px-5 py-12">

      <h1 className="text-4xl font-black mb-10">
        My Wishlist
      </h1>

      {wishlist.length === 0 ? (

        <div className="text-center py-20">
          <h2 className="text-2xl font-bold">
            Your wishlist is empty
          </h2>

          <p className="text-gray-500 mt-2">
            Save products you love here.
          </p>
        </div>

      ) : (

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {wishlist.map((product) => (
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

export default Wishlist;