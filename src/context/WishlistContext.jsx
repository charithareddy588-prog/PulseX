import {
  createContext,
  useContext,
  useState,
} from "react";

import toast from "react-hot-toast";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (product) => {
    const exists = wishlist.some(
      (item) => item.id === product.id
    );

    if (exists) {

      setWishlist((previous) =>
        previous.filter(
          (item) => item.id !== product.id
        )
      );

      toast("Removed from wishlist");

    } else {

      setWishlist((previous) => [
        ...previous,
        product,
      ]);

      toast.success(
        "Added to wishlist!"
      );
    }
  };

  const isWishlisted = (id) => {
    return wishlist.some(
      (item) => item.id === id
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isWishlisted,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}