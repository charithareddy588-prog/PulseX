import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ShoppingCart,
  Heart,
  Moon,
  Sun,
  User,
  Package,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartCount } = useCart();
  const { wishlist } = useWishlist();
  const { darkMode, toggleTheme } = useTheme();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/90 backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/90">

      <div className="section-container">

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-lg font-black text-white shadow-lg shadow-orange-500/20">
              P
            </div>

            <span className="text-2xl font-black tracking-tight">
              Pulse<span className="text-orange-500">X</span>
            </span>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 md:flex">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${
                    isActive ? "text-orange-500" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

          </nav>

          {/* Actions */}

          <div className="flex items-center gap-2 sm:gap-3">

            {/* Theme */}

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              {darkMode ? (
                <Sun size={19} />
              ) : (
                <Moon size={19} />
              )}
            </button>

            {/* Wishlist */}

            <Link
              to="/wishlist"
              className="relative flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Wishlist"
            >
              <Heart size={19} />

              {wishlist.length > 0 && (
                <span className="badge">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart */}

            <Link
              to="/cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={19} />

              {cartCount > 0 && (
                <span className="badge">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Orders */}

            <Link
              to="/orders"
              className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Orders"
            >
              <Package size={19} />
            </Link>

            {/* Login */}

            <Link
              to="/login"
              className="hidden items-center gap-2 rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-orange-500 dark:bg-white dark:text-zinc-950 dark:hover:bg-orange-500 dark:hover:text-white sm:flex"
            >
              <User size={17} />
              Login
            </Link>

            {/* Mobile Menu */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-zinc-100 dark:hover:bg-zinc-800 md:hidden"
              aria-label="Open menu"
            >
              {menuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>

          </div>
        </div>

        {/* Mobile Navigation */}

        {menuOpen && (
          <div className="border-t border-zinc-200 py-5 dark:border-zinc-800 md:hidden">

            <nav className="space-y-2">

              {/* Main Navigation */}

              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className="mobile-link"
                >
                  {item.name}
                </NavLink>
              ))}

              {/* Orders */}

              <Link
                to="/orders"
                onClick={closeMenu}
                className="mobile-link flex items-center gap-2"
              >
                <Package size={18} />
                Orders
              </Link>

              {/* Login */}

              <Link
                to="/login"
                onClick={closeMenu}
                className="mobile-link flex items-center gap-2"
              >
                <User size={18} />
                Login
              </Link>

            </nav>

          </div>
        )}

      </div>
    </header>
  );
}

export default Navbar;