import {
  createContext,
  useContext,
  useState,
} from "react";

import toast from "react-hot-toast";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCart((previous) => {
      const existing = previous.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return previous.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...previous,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    toast.success("Added to cart!");
  };

  // Remove product
  const removeFromCart = (id) => {
    setCart((previous) =>
      previous.filter(
        (item) => item.id !== id
      )
    );

    toast.success("Removed from cart");
  };

  // Update quantity
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCart((previous) =>
      previous.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Total number of products
  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  // Total price
  const cartTotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}