const products = [
  {

    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/airpods.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {

    name: 'iPhone 11 Pro 256GB Memory',
    image: '/images/phone.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Electronics',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {

    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Electronics',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {

    name: 'Sony Playstation 4 Pro White Version',
    image: '/images/playstation.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Electronics',
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {

    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/mouse.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Electronics',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {

    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/alexa.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Electronics',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    category: "Men's Sneaker",
    name: "ULTRABOOST 22 SHOES",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 420,
    countInStock: 20,
    rating: 4,
    numReviews: 3725,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
  },
  {

    category: "Men's Sneaker",
    name: "LUNAR NEW YEAR ULTRABOOST DNA SHOES",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 196,
    countInStock: 19,
    rating: 5,
    numReviews: 4355,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cee64414e1f4f31baf1ae270099d950_9366/Lunar_New_Year_Ultraboost_DNA_Shoes_Black_GZ6074_01_standard.jpg",

  },
  {

    category: "Men's Sneaker",
    name: "SUPERNOVA SHOES",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 245,
    countInStock: 20,
    rating: 4,
    numReviews: 3972,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg",
  },
  {

    category: "Men's Sneaker",
    name: "LITE RACER ADAPT 3.0 SHOES",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 229,
    countInStock: 10,
    rating: 5,
    numReviews: 1764,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a5f085fedf4e678095abad01056711_9366/Lite_Racer_Adapt_3.0_Shoes_Black_FX8802_01_standard.jpg",

  },
  {

    category: "Men's Sneaker",
    name: "4DFWD SHOES",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 287,
    countInStock: 11,
    rating: 4,
    numReviews: 799,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c5d1994dfd343e28567ad4400dd351d_9366/4DFWD_Shoes_Black_Q46447_01_standard.jpg",

  },
  {

    category: "Men's Sneaker",
    name: "KAPTIR 2.0 SHOES",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 138,
    countInStock: 19,
    rating: 3,
    numReviews: 4372,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0846e90b15144861b33dacf500e3cfd1_9366/Kaptir_2.0_Shoes_White_H00276_01_standard.jpg",

  },
  {

    category: "Men's Sneaker",
    name: "4DFWD PULSE SHOES",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 226,
    countInStock: 1,
    rating: 4,
    numReviews: 2870,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9a8256bb7ca34da49ff8ad5600bb2812_9366/4DFWD_Pulse_Shoes_White_Q46221_01_standard.jpg",

  },
  {

    category: "Men's Sneaker",
    name: "ZX 1K BOOST SHOES",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 319,
    countInStock: 7,
    rating: 4,
    numReviews: 1360,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e540bae86d5456aa034ada300ebf46c_9366/ZX_1K_Boost_Shoes_Grey_H00430_01_standard.jpg",

  },
  {

    category: "Men's Sneaker",
    name: "NMD_R1 V2 SHOES",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 260,
    countInStock: 4,
    rating: 5,
    numReviews: 1976,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2a18c4e3f104d52a697ad6a01477bb7_9366/NMD_R1_V2_Shoes_Black_GX6367_01_standard.jpg",

  },
  {

    category: "Men's Sneaker",
    name: "NMD_R1 PRIMEBLUE SHOES",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 437,
    countInStock: 1,
    rating: 4,
    numReviews: 565,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e03e7a2a9cb44dfac2bad6a00f95888_9366/NMD_R1_Primeblue_Shoes_White_GZ9261_01_standard.jpg",

  },
  {

    category: "Men's Pants",
    name: "TIRO TRACK PANTS",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 146,
    countInStock: 15,
    rating: 5,
    numReviews: 3702,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/856e874762eb48da8e22acda00efaeb4_9366/Tiro_Track_Pants_Black_GN5490_21_model.jpg",

  },
  {

    category: "Men's Pants",
    name: "TIRO 21 TRACK PANTS",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 109,
    countInStock: 6,
    rating: 5,
    numReviews: 1688,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg",

  },
  {

    category: "Men's Pants",
    name: "PRIMEBLUE SST TRACK PANTS",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 63,
    countInStock: 46,
    rating: 4,
    numReviews: 50,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52b5fde5829a4a04820dacf50127b969_9366/Adicolor_Classics_Primeblue_SST_Track_Pants_Blue_H06714_21_model.jpg",

  },
  {

    category: "Men's Pants",
    name: "TIRO 21 TRACK PANTS",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 148,
    countInStock: 41,
    rating: 3,
    numReviews: 4483,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3cb8057730844247a568ac9800fa36fb_9366/Tiro_21_Track_Pants_Blue_GE5425_21_model.jpg",
  },
  {

    category: "Men's Pants",
    name: "TIRO TRACK PANTS RED",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 122,
    countInStock: 43,
    rating: 4,
    numReviews: 1239,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c98bbccc77934722b139acb80111a3d7_9366/Tiro_Track_Pants_Red_GT6841_21_model.jpg",

  },
  {

    category: "Men's Pants",
    name: "TIRO PANTS BLACK GOLD",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 115,
    countInStock: 26,
    rating: 5,
    numReviews: 4557,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c447324cf06544b78105ade500fd9e2f_9366/Tiro_Pants_Black_HI1073_21_model.jpg",

  },
  {

    category: "Men's Pants",
    name: "TAPERED-CUFF 3-STRIPES PANTS",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 108,
    countInStock: 5,
    rating: 3,
    numReviews: 3383,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c7f050932336444ca286acbb0121f995_9366/Essentials_French_Terry_Tapered-Cuff_3-Stripes_Pants_Grey_GK8824_21_model.jpg",

  },
  {

    category: "Men's Pants",
    name: "FRENCH TERRY TAPERED CUFF LOGO PANTS",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 189,
    countInStock: 27,
    rating: 3,
    numReviews: 1974,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3fb5325716cc4e45a76bac4700ea31dc_9366/Essentials_French_Terry_Tapered_Cuff_Logo_Pants_Black_GK8968_21_model.jpg",

  },
  {

    category: "Men's Pants",
    name: "OPEN HEM 3-STRIPES TRACK PANTS",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 58,
    countInStock: 41,
    rating: 5,
    numReviews: 2140,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d47f8bc94b2c401b9eafad23007fd8c4_9366/Primegreen_Essentials_Warm-Up_Open_Hem_3-Stripes_Track_Pants_Black_H48430_21_model.jpg",

  },
  {

    category: "Men's Pants",
    name: "ESSENTIALS4GAMEDAY PANTS",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 185,
    countInStock: 43,
    rating: 5,
    numReviews: 2676,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/64f1ba254925439d88eaad920127d77e_9366/Essentials4Gameday_Pants_Black_HE1800_21_model.jpg",

  },
  {

    category: "Men's Boot",
    name: "TERREX FREE HIKER GORE-TEX HIKING SHOES",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 132,
    countInStock: 1,
    rating: 3,
    numReviews: 128,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/12cf12ac1c8e484ea487ad6400ee3444_9366/Terrex_Free_Hiker_Gore-Tex_Hiking_Shoes_Black_GZ0355_01_standard.jpg",

  },
  {

    category: "Men's Boot",
    name: "TERREX AX4 MID GORE-TEX HIKING SHOES",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 111,
    countInStock: 19,
    rating: 4,
    numReviews: 894,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dfa8c9a7d2864065b27fad7400b2e05e_9366/Terrex_AX4_Mid_GORE-TEX_Hiking_shoes_Black_FY9638_01_standard.jpg",

  },
  {

    category: "Men's Boot",
    name: "RESPONSE 3MC ADV BOOTS",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 104,
    countInStock: 6,
    rating: 5,
    numReviews: 354,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b513f2cec8b440978d60ab6d014ad452_9366/Response_3MC_ADV_Boots_Black_EG9391_01_standard.jpg",

  },
  {

    category: "Men's Boot",
    name: "TACTICAL LEXICON ADV BOOTS",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 151,
    countInStock: 3,
    rating: 4,
    numReviews: 584,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f5350f3d583c46038534ab6d01445e2a_9366/Tactical_Lexicon_ADV_Boots_Grey_EG9386_01_standard.jpg",

  },
  {

    category: "Men's Boot",
    name: "Superstar Boots",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 151,
    countInStock: 13,
    rating: 3,
    numReviews: 1010,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6853ac5565a9407bae19ac080120d9d7_9366/Superstar_Boots_Red_FZ2642_01_standard.jpg",
  },
  {

    category: "Men's Boot",
    name: "TACTICAL LEXICON ADV BOOTS",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 199,
    countInStock: 14,
    rating: 4,
    numReviews: 2422,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3a819de9f29c498fae13ab6d01473c4d_9366/Tactical_Lexicon_ADV_Boots_White_EG9385_01_standard.jpg",

  },
  {

    category: "Men's Boot",
    name: "TERREX TRAILMAKER MID COLD.RDY HIKING SHOES",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 110,
    countInStock: 16,
    rating: 3,
    numReviews: 1533,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2ee4c27eba64258bcbaad5100e5d998_9366/Terrex_Trailmaker_Mid_COLD.RDY_Hiking_Shoes_Brown_FZ3370_01_standard.jpg",

  },
  {

    category: "Men's Boot",
    name: "TERREX FREE HIKER GORE-TEX HIKING SHOES",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 155,
    countInStock: 4,
    rating: 5,
    numReviews: 1351,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/efbedb26b92e4affa103ad6b008a789a_9366/Terrex_Free_Hiker_Gore-Tex_Hiking_Shoes_Grey_GZ0356_01_standard.jpg",

  },
  {

    category: "Men's Boot",
    name: "TERREX AGRAVIC TECH PRO TRAIL RUNNING SHOES",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 118,
    countInStock: 8,
    rating: 3,
    numReviews: 1798,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0a340319370844e99645abc90091df96_9366/Terrex_Agravic_Tech_Pro_Trail_Running_Shoes_Black_FU7634_01_standard.jpg",

  },
  {

    category: "Men's Boot",
    name: "TERREX FREE HIKER COLD.RDY HIKING BOOTS",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 169,
    countInStock: 17,
    rating: 5,
    numReviews: 2833,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2ded0bee28b249bbb19cad5000818b77_9366/Terrex_Free_Hiker_COLD.RDY_Hiking_Boots_Black_FZ3364_01_standard.jpg",

  },
  {

    category: "Men's Sneaker",
    name: "MOVE FEELREADY SPORT TEE",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 14,
    countInStock: 19,
    rating: 3,
    numReviews: 4041,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ec81fbd781fe4aa3a8cead230019c192_9366/AEROREADY_Designed_2_Move_Feelready_Sport_Tee_Burgundy_H30268_21_model.jpg",
  },
  {

    category: "Men's Sneaker",
    name: "ADIDAS CAMO BOX GRAPHIC TEE",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 16,
    countInStock: 10,
    rating: 3,
    numReviews: 4505,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/809d5f06a7c74e93aef3ad08017c415a_9366/adidas_Camo_Box_Graphic_Tee_Grey_HB4828_21_model.jpg",

  },
  {

    category: "Men's Sneaker",
    name: "ADICOLOR CLASSICS TREFOIL TEE",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 20,
    countInStock: 12,
    rating: 4,
    numReviews: 41,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/de7b5dc9e5a341b9bf5aad570106ba06_9366/Adicolor_Classics_Trefoil_Tee_Burgundy_H06641_21_model.jpg",

  },
  {

    category: "Men's Sneaker",
    name: "LNY TREFOIL FILL TEE",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 16,
    countInStock: 17,
    rating: 4,
    numReviews: 4985,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c53945c38b614702ba6fae1d0164b2f1_9366/LNY_Trefoil_Fill_Tee_Black_HR9040_21_model.jpg",

  },
  {

    category: "Men's Sneaker",
    name: "CREATOR 365 TEE",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 34,
    countInStock: 20,
    rating: 3,
    numReviews: 4727,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0af79283953e498480c6ac22015ec878_9366/Creator_365_Tee_Black_GL0465_21_model.jpg",
  },
  {

    category: "Men's Sneaker",
    name: "OWN THE RUN LONG SLEEVE TEE",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 23,
    countInStock: 17,
    rating: 3,
    numReviews: 4003,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c6a321b7bb7243d28fe9ac71011393c7_9366/Own_the_Run_Long_Sleeve_Tee_Black_GJ9977_21_model.jpg",
  },
  {

    category: "Men's Sneaker",
    name: "NYC BADGE OF SPORT LOGO GRAPHIC TEE",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 29,
    countInStock: 6,
    rating: 3,
    numReviews: 805,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e0101e13ac1940208478add1000e953a_9366/NYC_Badge_of_Sport_Logo_Graphic_Tee_White_HE2363_21_model.jpg",
  },
  {

    category: "Men's Sneaker",
    name: "RUNNER TEE",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 20,
    countInStock: 7,
    rating: 5,
    numReviews: 3343,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c3f5445517340e8bc02ad8100ffd3f6_9366/Runner_Tee_Burgundy_H25050_21_model.jpg",

  },
  {

    category: "Men's Sneaker",
    name: "V-DAY TEE (GENDER NEUTRAL)",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 18,
    countInStock: 2,
    rating: 4,
    numReviews: 1590,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/abfc348baf3243289c4bada000d1238b_9366/V-Day_Tee_(Gender_Neutral)_Pink_HI6014_21_model.jpg",

  },
  {

    category: "Men's Sneaker",
    name: "ESSENTIALS COLORBLOCK TEE",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 35,
    countInStock: 6,
    rating: 3,
    numReviews: 2680,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9889d39ac10243a2bb0fad1a0097ef07_9366/Essentials_Colorblock_Tee_Black_H14627_21_model.jpg",

  },
  {

    category: "Bag",
    name: "3-Stripes Backpack 2.0",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 74,
    countInStock: 7,
    rating: 5,
    numReviews: 365,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ba79ccb861fd4fd49e3aac9f006a6407_9366/3-Stripes_Backpack_2.0_Grey_EX6735_01_standard.jpg",

  },
  {

    category: "Bag",
    name: "Trefoil Backpack",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 65,
    countInStock: 3,
    rating: 4,
    numReviews: 465,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a520df1b51384c00af9caca100489f04_9366/Trefoil_Backpack_Black_EX6752_01_standard.jpg",

  },
  {

    category: "Bag",
    name: "Santiago Lunch Bag",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 63,
    countInStock: 10,
    rating: 3,
    numReviews: 346,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c2aaf5e8a7924f1d9277ac9f005b5f37_9366/Santiago_Lunch_Bag_Black_EX6532_01_standard.jpg",

  },
  {

    category: "Bag",
    name: "Blue Version Backpack",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 87,
    countInStock: 15,
    rating: 5,
    numReviews: 234,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a9e0c5635057425daab5ad0b0089194b_9366/Blue_Version_Backpack_Black_H22735_01_standard.jpg",

  },
  {

    category: "Bag",
    name: "Defender Backpack",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 96,
    countInStock: 10,
    rating: 4,
    numReviews: 241,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d6ee0177281f42f0a254acb1016aa051_9366/Defender_Backpack_Red_EX7011_01_standard.jpg",

  },
  {

    category: "Bag",
    name: "Excel Backpack",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 62,
    countInStock: 18,
    rating: 5,
    numReviews: 168,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ac09bb56249b43158485aca1007cc1ef_9366/Excel_Backpack_Black_EX6933_01_standard.jpg",

  },
  {

    category: "Bag",
    name: "Alliance Sackpack",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 99,
    countInStock: 16,
    rating: 3,
    numReviews: 311,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2e8a6f09838d49c3b00fad4f0017f753_9366/Alliance_Sackpack_White_FZ6823_01_standard.jpg",

  },
  {

    category: "Bag",
    name: "R.Y.V. Toploader Backpack",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 56,
    countInStock: 19,
    rating: 3,
    numReviews: 471,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1c87c940836e4628852bad130101e5c6_9366/R.Y.V._Toploader_Backpack_Black_H32458_01_standard.jpg",

  },
  {

    category: "Bag",
    name: "Adicolor Archive Backpack",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 84,
    countInStock: 5,
    rating: 4,
    numReviews: 445,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/0bb325f9cc174ea4bed7ad9e0101b682_9366/Adicolor_Archive_Backpack_Green_HE9804_01_standard.jpg",

  },
  {

    category: "Bag",
    name: "R.Y.V. Backpack",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 67,
    countInStock: 10,
    rating: 5,
    numReviews: 83,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/dc7dca21df62473ea518ade101251809_9366/R.Y.V._Backpack_Black_HD9650_01_standard.jpg",

  },
  {

    category: "Cap",
    name: "Relaxed Strap-Back Hat",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 30,
    countInStock: 6,
    rating: 4,
    numReviews: 4,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/4feb20f4d990407cb4f1a88a0040b212_9366/Relaxed_Strap-Back_Hat_Black_BH7137_01_standard.jpg",
  },
  {

    category: "Cap",
    name: "Icon Snapback Hat",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 21,
    countInStock: 13,
    rating: 4,
    numReviews: 1,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1e27ae8bbfb647489261ac8e015d181f_9366/Icon_Snapback_Hat_Grey_EX6798_01_standard.jpg",

  },
  {

    category: "Cap",
    name: "Superlite Hat",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 11,
    countInStock: 18,
    rating: 3,
    numReviews: 39,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/0ae141db6fce44999337ac8e015954ea_9366/Superlite_Hat_Grey_EX7054_01_standard.jpg",

  },
  {

    category: "Cap",
    name: "Superlite Hat",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 10,
    countInStock: 10,
    rating: 5,
    numReviews: 47,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/272d5d9cb7b74415a6c9ac8e015a4ccc_9366/Superlite_Hat_Black_EX7048_01_standard.jpg",

  },
  {

    category: "Cap",
    name: "Tee Time 5-Panel Hat",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 24,
    countInStock: 1,
    rating: 4,
    numReviews: 14,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/df67ab60b5574c368b76adf9010f2d2d_9366/Tee_Time_5-Panel_Hat_Black_HA9254_01_standard.jpg",

  },
  {

    category: "Cap",
    name: "Baseball Cap",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 17,
    countInStock: 7,
    rating: 5,
    numReviews: 37,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/0ce5f49aa0914deabf16adc600d09e60_9366/Baseball_Cap_Black_HD7039_01_standard.jpg",

  },
  {

    category: "Cap",
    name: "Relaxed Strap-Back Hat",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 24,
    countInStock: 9,
    rating: 5,
    numReviews: 15,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/aaa5ae549c624178bc25a740012dd61f_9366/Relaxed_Strap-Back_Hat_White_BH7135_01_standard.jpg",
  },
  {

    category: "Cap",
    name: "UNISEX ORIGINALS WASHED BUCKET",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 27,
    countInStock: 14,
    rating: 4,
    numReviews: 3,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e1e758585df14bbbb7d8aaf000c95bd7_9366/UNISEX_ORIGINALS_WASHED_BUCKET_White_CM3933_01_standard.jpg",

  },
  {

    category: "Cap",
    name: "SST Plus Strap-Back Hat",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 23,
    countInStock: 14,
    rating: 4,
    numReviews: 32,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/92e77a8d84d845d19171ad50003f2ea1_9366/SST_Plus_Strap-Back_Hat_White_FZ8569_01_standard.jpg",

  },
  {

    category: "Cap",
    name: "Dispatch Trucker Hat",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 28,
    countInStock: 16,
    rating: 4,
    numReviews: 30,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c3981523051c4a978674ad3c01015664_9366/Dispatch_Trucker_Hat_Black_EY5534_01_standard.jpg",

  },
  {

    category: "Earphones",
    name: "adidas Z.N.E. 01 True Wireless Earbuds",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 142,
    countInStock: 11,
    rating: 5,
    numReviews: 22,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/00276c6c380b41bcb29fadcc00f98312_9366/adidas_Z.N.E._01_True_Wireless_Earbuds_Grey_EY5116_42_detail.jpg",

  },
  {

    category: "Earphones",
    name: "adidas Z.N.E. 01 ANC True Wireless Earbuds",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 135,
    countInStock: 16,
    rating: 5,
    numReviews: 51,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b322cdef8e654551ace9adcc00f963ed_9366/adidas_Z.N.E._01_ANC_True_Wireless_Earbuds_Grey_EY5114_41_detail.jpg",

  },
  {

    category: "Earphones",
    name: "FWD-01 Sport In-Ear Headphones",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 185,
    countInStock: 8,
    rating: 4,
    numReviews: 66,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/2cdb8652aa2340369ba2aa79010062d1_9366/FWD-01_Sport_In-Ear_Headphones_Black_CM5016_01_standard.jpg",

  },
  {

    category: "Earphones",
    name: "adidas FWD-02 Sport True Wireless Earbuds",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 162,
    countInStock: 14,
    rating: 4,
    numReviews: 6,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/523731a02e914d318cb4adcc00f985ba_9366/adidas_FWD-02_Sport_True_Wireless_Earbuds_Grey_EY5113_03_standard_hover.jpg",

  },
  {

    category: "Earphones",
    name: "adidas Z.N.E. 01 ANC True Wireless Earbuds",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 110,
    countInStock: 15,
    rating: 5,
    numReviews: 9,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9e6e7967b3b24ef298f5adcc00f983ec_9366/adidas_Z.N.E._01_ANC_True_Wireless_Earbuds_Grey_EY5115_41_detail.jpg",

  },
  {

    category: "Earphones",
    name: "RPT-01 Sport On-Ear Headphones",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 170,
    countInStock: 15,
    rating: 5,
    numReviews: 55,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c697ceddb0c2469aaa2eaa7101121d10_9366/RPT-01_Sport_On-Ear_Headphones_Black_CM5015_01_standard.jpg",

  },
  {

    category: "Bottle",
    name: "Steel Metal Bottle 1L",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 33,
    countInStock: 7,
    rating: 4,
    numReviews: 62,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a9c04ca9fa51408faf2fac8e0117abb9_9366/Steel_Metal_Bottle_1L_Black_EX7288_01_standard.jpg",

  },
  {

    category: "Bottle",
    name: "Steel Metal Bottle 1L",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 40,
    countInStock: 14,
    rating: 5,
    numReviews: 58,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c45df020e3ae4e9199a4ac7d0001cfb7_9366/Steel_Metal_Bottle_1L_White_EX7301_01_standard.jpg",

  },
  {

    category: "Bottle",
    name: "Steel Metal Bottle 1 L",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 46,
    countInStock: 2,
    rating: 5,
    numReviews: 73,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c670a94f6388451a868fad440014460d_9366/Steel_Metal_Bottle_1_L_Purple_EY5529_01_standard.jpg",

  },
  {

    category: "Bottle",
    name: "Steel Metal Bottle 1L",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 20,
    countInStock: 14,
    rating: 5,
    numReviews: 63,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/29ef510920b54492a721aa1c01782cb2_9366/Steel_Metal_Bottle_1L_White_CL6092_01_standard.jpg",

  },
  {

    category: "Bottle",
    name: "Steel Metal Bottle 600 ML",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 43,
    countInStock: 19,
    rating: 4,
    numReviews: 64,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1105dc0c9232477eb80dac7d000edc0c_9366/Steel_Metal_Bottle_600_ML_White_EX7306_01_standard.jpg",

  },
  {

    category: "Bottle",
    name: "Steel Straw Metal Bottle 600 ML",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 43,
    countInStock: 10,
    rating: 3,
    numReviews: 15,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f7fb63986ed34112bc57ac7d002c9f43_9366/Steel_Straw_Metal_Bottle_600_ML_White_EX7316_01_standard.jpg",

  },
  {

    category: "Bottle",
    name: "Steel Metal Bottle 600 ML",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 26,
    countInStock: 20,
    rating: 5,
    numReviews: 83,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e2d870a680644e4d98e9ac7d0008ecc7_9366/Steel_Metal_Bottle_600_ML_Yellow_EX7307_01_standard.jpg",
  },
  {

    category: "Bottle",
    name: "Squad Glass Bottle 720 ML",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 39,
    countInStock: 20,
    rating: 3,
    numReviews: 1,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/77ad16764abf4e828560ad44001cd640_9366/Squad_Glass_Bottle_720_ML_Black_FZ7115_01_standard.jpg",
  },
  {

    category: "Bottle",
    name: "Steel Bottle 600 ML",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 23,
    countInStock: 11,
    rating: 5,
    numReviews: 35,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/48057b65216644f683a9aa1c0172ae6e_9366/Steel_Bottle_600_ML_Black_CL6093_01_standard.jpg",
  },
  {

    category: "Bottle",
    name: "Steel Metal Bottle 2L",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    price: 37,
    countInStock: 14,
    rating: 4,
    numReviews: 68,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f8d89293c9cb4bf08d52adb100f95a3a_9366/Steel_Metal_Bottle_2L_Black_EX7302_01_standard.jpg",

  }

]


module.exports = products;
