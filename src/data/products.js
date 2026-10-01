const products = [
  {
    id: 1,

    name: "PulseX Air Buds Pro",

    category: "Earbuds",

    price: 2499,

    oldPrice: 3999,

    rating: 4.7,

    reviews: 128,

    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=80",

    images: [
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=80",

      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=80",

      "https://images.unsplash.com/photo-1638337192495-3e7e5e4a1f5d?auto=format&fit=crop&w=900&q=80",
    ],

    description:
      "Premium wireless earbuds with powerful bass, active noise cancellation and long battery life. Designed for music, calls and gaming.",

    features: [
      "Active Noise Cancellation",
      "40 Hours Playback",
      "Bluetooth 5.3",
      "Low Latency Gaming Mode",
      "IPX5 Water Resistance",
      "Fast Charging",
    ],
  },

  {
    id: 2,

    name: "PulseX Watch X1",

    category: "Smartwatches",

    price: 2999,

    oldPrice: 4999,

    rating: 4.6,

    reviews: 96,

    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",

    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",

      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80",

      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=80",
    ],

    description:
      "Stylish smart watch with a bright display, fitness tracking, notifications and long-lasting battery life.",

    features: [
      "AMOLED Display",
      "100+ Sports Modes",
      "Heart Rate Tracking",
      "Sleep Monitoring",
      "7 Days Battery",
      "Blood Oxygen Monitoring",
    ],
  },

  {
    id: 3,

    name: "PulseX Bass Headphones",

    category: "Headphones",

    price: 1999,

    oldPrice: 3499,

    rating: 4.5,

    reviews: 74,

    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",

    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",

      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=80",

      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
    ],

    description:
      "Immersive over-ear wireless headphones with powerful bass, comfortable ear cushions and extended battery life.",

    features: [
      "50mm Dynamic Drivers",
      "60 Hours Battery",
      "Bluetooth 5.3",
      "Dual Device Connectivity",
      "Foldable Design",
      "Built-in Microphone",
    ],
  },

  {
    id: 4,

    name: "PulseX Mini Speaker",

    category: "Speakers",

    price: 1499,

    oldPrice: 2499,

    rating: 4.4,

    reviews: 61,

    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80",

    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80",

      "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=900&q=80",

      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80",
    ],

    description:
      "Compact portable Bluetooth speaker delivering powerful sound with deep bass and an immersive listening experience.",

    features: [
      "12W Powerful Sound",
      "12 Hours Playback",
      "Bluetooth 5.2",
      "IPX6 Water Resistance",
      "Portable Design",
      "Built-in Microphone",
    ],
  },

  {
    id: 5,

    name: "PulseX Wireless Earbuds",

    category: "Earbuds",

    price: 1799,

    oldPrice: 2999,

    rating: 4.6,

    reviews: 143,

    image:
      "https://images.unsplash.com/photo-1598331668826-20cecc596b86?auto=format&fit=crop&w=900&q=80",

    images: [
      "https://images.unsplash.com/photo-1598331668826-20cecc596b86?auto=format&fit=crop&w=900&q=80",

      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=80",
    ],

    description:
      "Lightweight true wireless earbuds with clear audio, deep bass and a comfortable fit for everyday listening.",

    features: [
      "35 Hours Total Playback",
      "Bluetooth 5.3",
      "ENC Calling",
      "Touch Controls",
      "Low Latency Mode",
      "USB-C Charging",
    ],
  },

  {
    id: 6,

    name: "PulseX Smart Watch Pro",

    category: "Smartwatches",

    price: 3999,

    oldPrice: 5999,

    rating: 4.8,

    reviews: 187,

    image:
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=900&q=80",

    images: [
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=900&q=80",

      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=80",
    ],

    description:
      "Premium smart watch featuring a vibrant display, advanced health tracking and multiple sports modes.",

    features: [
      "AMOLED Display",
      "Bluetooth Calling",
      "100+ Sports Modes",
      "Heart Rate Monitor",
      "SpO2 Monitoring",
      "7 Days Battery",
    ],
  },

  {
    id: 7,

    name: "PulseX Gaming Headset",

    category: "Headphones",

    price: 2299,

    oldPrice: 3999,

    rating: 4.7,

    reviews: 89,

    image:
      "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=900&q=80",

    images: [
      "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=900&q=80",

      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
    ],

    description:
      "Gaming-focused wireless headset with immersive audio, comfortable ear cushions and a high-quality microphone.",

    features: [
      "7.1 Surround Sound",
      "40mm Gaming Drivers",
      "Low Latency",
      "Noise Cancelling Mic",
      "RGB Lighting",
      "50 Hours Battery",
    ],
  },

  {
    id: 8,

    name: "PulseX Party Speaker",

    category: "Speakers",

    price: 4499,

    oldPrice: 6999,

    rating: 4.8,

    reviews: 112,

    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=900&q=80",

    images: [
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=900&q=80",

      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80",
    ],

    description:
      "Powerful portable party speaker with deep bass, wireless connectivity and long battery life.",

    features: [
      "30W Powerful Sound",
      "20 Hours Playback",
      "Bluetooth 5.2",
      "Bass Boost",
      "Karaoke Mode",
      "USB Playback",
    ],
  },
];

export default products;