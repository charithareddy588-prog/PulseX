import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { Link } from "react-router-dom";

function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      link: "#",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "#",
    },
    {
      name: "X",
      icon: FaXTwitter,
      link: "#",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      link: "#",
    },
  ];

  return (
    <footer className="bg-zinc-950 text-white">

      {/* Main Footer */}

      <div className="section-container py-16">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* ================= BRAND ================= */}

          <div>

            <Link
              to="/"
              className="inline-flex items-center gap-2"
            >

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-lg font-black shadow-lg shadow-orange-500/20">
                P
              </div>

              <span className="text-2xl font-black tracking-tight">
                Pulse
                <span className="text-orange-500">
                  X
                </span>
              </span>

            </Link>

            <p className="mt-5 max-w-xs leading-7 text-zinc-400">
              Smart technology designed for your
              everyday life. Powerful sound, connected
              devices and modern design.
            </p>

            {/* Social Icons */}

            <div className="mt-6 flex gap-3">

              {socialLinks.map(
                ({
                  name,
                  icon: Icon,
                  link,
                }) => (
                  <a
                    key={name}
                    href={link}
                    aria-label={name}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:text-white"
                  >
                    <Icon size={17} />
                  </a>
                )
              )}

            </div>

          </div>

          {/* ================= QUICK LINKS ================= */}

          <div>

            <h3 className="text-lg font-bold">
              Quick Links
            </h3>

            <div className="mt-6 space-y-4 text-zinc-400">

              <Link
                to="/"
                className="block transition-colors duration-200 hover:text-orange-500"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="block transition-colors duration-200 hover:text-orange-500"
              >
                Products
              </Link>

              <Link
                to="/about"
                className="block transition-colors duration-200 hover:text-orange-500"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="block transition-colors duration-200 hover:text-orange-500"
              >
                Contact Us
              </Link>

              <Link
                to="/login"
                className="block transition-colors duration-200 hover:text-orange-500"
              >
                Login
              </Link>

            </div>

          </div>

          {/* ================= CATEGORIES ================= */}

          <div>

            <h3 className="text-lg font-bold">
              Categories
            </h3>

            <div className="mt-6 space-y-4 text-zinc-400">

              <Link
                to="/products?category=Earbuds"
                className="block transition-colors duration-200 hover:text-orange-500"
              >
                Earbuds
              </Link>

              <Link
                to="/products?category=Smartwatches"
                className="block transition-colors duration-200 hover:text-orange-500"
              >
                Smartwatches
              </Link>

              <Link
                to="/products?category=Headphones"
                className="block transition-colors duration-200 hover:text-orange-500"
              >
                Headphones
              </Link>

              <Link
                to="/products?category=Speakers"
                className="block transition-colors duration-200 hover:text-orange-500"
              >
                Speakers
              </Link>

            </div>

          </div>

          {/* ================= CONTACT ================= */}

          <div>

            <h3 className="text-lg font-bold">
              Contact
            </h3>

            <div className="mt-6 space-y-5 text-zinc-400">

              {/* Email */}

              <div className="flex gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10">
                  <Mail
                    size={18}
                    className="text-orange-500"
                  />
                </div>

                <div>

                  <p className="text-xs text-zinc-500">
                    Email
                  </p>

                  <a
                    href="mailto:support@pulsex.com"
                    className="mt-1 block transition hover:text-orange-500"
                  >
                    support@pulsex.com
                  </a>

                </div>

              </div>

              {/* Phone */}

              <div className="flex gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10">
                  <Phone
                    size={18}
                    className="text-orange-500"
                  />
                </div>

                <div>

                  <p className="text-xs text-zinc-500">
                    Phone
                  </p>

                  <a
                    href="tel:+919876543210"
                    className="mt-1 block transition hover:text-orange-500"
                  >
                    +91 98765 43210
                  </a>

                </div>

              </div>

              {/* Location */}

              <div className="flex gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10">
                  <MapPin
                    size={18}
                    className="text-orange-500"
                  />
                </div>

                <div>

                  <p className="text-xs text-zinc-500">
                    Location
                  </p>

                  <p className="mt-1">
                    Hyderabad, Telangana
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= BOTTOM FOOTER ================= */}

      <div className="border-t border-zinc-800">

        <div className="section-container flex flex-col justify-between gap-3 py-5 text-sm text-zinc-500 sm:flex-row sm:items-center">

          <p>
            © 2026 PulseX. All rights reserved.
          </p>

          <div className="flex gap-5">

            <button className="transition hover:text-orange-500">
              Privacy Policy
            </button>

            <button className="transition hover:text-orange-500">
              Terms & Conditions
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;