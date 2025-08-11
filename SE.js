const productsData = {
  electronics: [
    { name: "Samsung Galaxy S25 Ultra (12+1024GB)", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/71P85R392uL._SL1500_.jpg", price: "₹1,65,999", rating: 4.6, discount: 7 },
    { name: "Samsung Galaxy S25 (12+512GB)", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/61p3FwE31-L._SL1500_.jpg", price: "₹1,00,999", rating: 4.7, discount: 7 },
    { name: "Samsung Galaxy S24 Ultra (12+512GB)", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/717Q2swzhBL._SL1500_.jpg", price: "₹1,44,999", rating: 4.6, discount: 10 },
    { name: "Samsung Galaxy S24+  (8+256GB)", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/61jSc40Zs8L._SL1500_.jpg", price: "₹79,999", rating: 4.7, discount: 33 },
    { name: "Samsung Galaxy Z Flip7 (12+512)", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/61ZtVMmiwML._SL1500_.jpg", price: "₹1,21,999", rating: 4.4, discount: 15 },
    { name: "Samsung Galaxy Z Flip6 (12+256)", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/51bM+15gv2L._SL1500_.jpg", price: "₹1,09,999", rating: 4.5, discount: 35 },
    { name: "Samsung Galaxy Z Fold6 (12+512)", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/61x2YvxqdGL._SL1500_.jpg", price: "₹1,95,999", rating: 4.4, discount: 5 },
    { name: "Samsung Galaxy Z Fold6 (12+256)", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/61S5FwZY1nL._SL1500_.jpg", price: "₹1,64,999", rating: 4.5, discount: 19 },
    { name: "Samsung 193 cm (77 inches) 4K Ultra HD Smart OLED TV QA77S95DAULXL (Graphite Black)", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/81saydXbVzL._SL1500_.jpg", price: "₹5,89,900", rating: 4.6, discount: 15 },
    { name: "Samsung 163 cm (65 inches) 4K Ultra HD Smart OLED TV QA65S95FAULXL", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/81vzlqfaQ0L._SL1500_.jpg", price: "₹2,89,900", rating: 4.2, discount: 20 },
    { name: "Samsung Galaxy Watch Ultra (47mm, LTE, Silver)", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/81acmzia3+L._SL1500_.jpg", price: "₹69,999", rating: 4.4, discount: 39 },
    { name: "Samsung Galaxy Watch 7 (44mm, Green, BT+LTE) with 3nm Processor", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/71QUv8DcRBL._SL1500_.jpg", price: "₹25999", rating: 4.5, discount: 12 },
    { name: "Samsung Galaxy Tab S10 (12+256GB)", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/61pQw5D+IHL._SL1500_.jpg", price: " ₹1,37,999", rating: 4.3, discount: 11 },
    { name: "Samsung Galaxy Tab S9 (12+256GB)", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/61H8OothfXL._SL1500_.jpg", price: " ₹1,08,699", rating: 4.5, discount: 11 },
    { name: "Samsung Galaxy Book5 360 | Intel Evo Core Ultra 7 256V", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/71k55JrqgbL._SL1500_.jpg", price: "₹1,66,790", rating: 4.6, discount: 26 },
    { name: "Samsung Galaxy Book3 Pro 360 Intel 13th Gen i5", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/71eEJsedjoL._SL1500_.jpg", price: "₹1,94,990", rating: 4.2, discount: 30 },
    { name: "Samsung T9 Portable External SSD 4TB, USB 3.2, Speed up to 2,000 MB/s Read/Write Speed", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/618tjFtlqEL._SL1500_.jpg", price: "₹92,109", rating: 4.1, discount: 60 },
    { name: "Samsung T7 Shield Portable SSD 2TB, USB 3.2 Gen2 External SSD, Up to 1,050MB/s", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/714cd9DfoeL._SL1500_.jpg", price: " ₹34,999", rating: 4.0, discount: 49 },
    { name: "Samsung Galaxy in Ear Wireless Earbuds 3 Pro (Silver) with Galaxy Ai | Adaptive ANC", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/51tQCG-giFL._SY300_SX300_QL70_FMwebp_.jpg", price: "₹24,999", rating: 4.0, discount: 52 },
    { name: "Samsung Galaxy Buds2 Pro, with Innovative AI Features, Bluetooth Truly Wireless in Ear Earbuds with Noise Cancellation (White) (Sound by AKG)", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/61YP3nZAptL._SL1500_.jpg", price: "₹6999", rating: 4.0, discount: 10 },
    { name: "Samsung Galaxy Ring, with Smart AI, Size First W/Sizing Kit, No App Subscription, Fitness Monitor, Sleep Tracker, Up to 7-Day Battery, Size 8, Titanium Black", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/71RG1BdLC3L._SL1500_.jpg", price: " ₹39,999", rating: 4.6, discount: 3 },
    { name: "Samsung Galaxy Ring, with Smart AI, Size First W/Sizing Kit, No App Subscription, Fitness Monitor, Sleep Tracker, Up to 7-Day Battery, Size 7, Titanium Gold", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/71LYADs9lIL._SL1500_.jpg", price: "₹39,999", rating: 4.2, discount: 35 },
    { name: "Samsung 12 Kg, 5 Star", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/41MiS6jrBZL._SY445_SX342_QL70_FMwebp_.jpg", price: "₹47,990", rating: 4.3, discount: 25 },
    { name: "Samsung 12 kg, 5star", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/41a2C95roaL._SY445_SX342_QL70_FMwebp_.jpg", price: "₹60,990 ", rating: 4.6, discount: 25 },
    { name: "Samsung 653 L, 3 Star, Bespoke AI, Glass Door ", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/6159g4eh90L._AC_UY436_FMwebp_QL65_.jpg", price: "₹1,60,000 ", rating: 4.3, discount: 38 },
    { name: "Samsung 633 L, 3 Star, Frost Free, Double Door", brand: "Samsung", category: "electronics", image: "https://m.media-amazon.com/images/I/71BrKph-QxL._AC_UY436_FMwebp_QL65_.jpg", price: " ₹1,52,000  ", rating: 4.6, discount: 28 }
  ],

  clothes: [
    { name: "Adidas Track Pants - Black", brand: "Adidas", category: "clothes", image: "https://m.media-amazon.com/images/I/61cNUYYZymL._SY879_.jpg", price: "₹1999", rating: 4.3, discount: 10 },
    { name: "Adidas Track Pants - Black ", brand: "Adidas", category: "clothes", image: "https://m.media-amazon.com/images/I/61x2ZBO969L._SY879_.jpg", price: "₹3,999", rating: 4.2, discount: 33 },
    { name: "Adidas Tee - Originals", brand: "Adidas", category: "clothes", image: "https://m.media-amazon.com/images/I/81RWZjGCixL._SY879_.jpg", price: "₹1,299", rating: 4.1, discount: 42 },
    { name: "Nike Running Shoes", brand: "Nike", category: "clothes", image: "https://m.media-amazon.com/images/I/61mF+tN-XtL._SY695_.jpg", price: "₹8,495", rating: 4.5, discount: 41 },
    { name: "Nike Men's Offcourt Slide Sliders BLACK/BLACK-UNIVERSITY RED Vietnam", brand: "Nike", category: "clothes", image: "https://m.media-amazon.com/images/I/41+JUwAQmwL._SX695_.jpg", price: "₹1199", rating: 4.2, discount: 8 },
    { name: "Vincent Chase By Lenskart | Havana | Full Rim Round | Polarized and 100% UV Protected | For Men & Women |", brand: "Vincent", category: "clothes", image: "https://m.media-amazon.com/images/I/41hB7sS0J4L._SX679_.jpg", price: "₹799", rating: 4.0, discount: 5 },
    { name: "Nike Cap", brand: "Nike", category: "clothes", image: "https://m.media-amazon.com/images/I/71UIbhaiEGL._SX679_.jpg", price: "₹895", rating: 4.0, discount: 30 },
    { name: "Crocs Unisex Adult Baya Clog", brand: "Crocs", category: "clothes", image: "https://m.media-amazon.com/images/I/71GIW1iMlhL._SX695_.jpg", price: "₹3,995", rating: 4.2  , discount: 44 },
    { name: "Nike Socks (3 pair) - Tri color limited edition (Nike) ", brand: "Nike", category: "clothes", image: "https://m.media-amazon.com/images/I/61V5Cq3Ni0L._SY879_.jpg", price: "₹595", rating: 3.9, discount: 16 },
    { name: "Jockey 8820 Men's Super Combed Cotton Round Neck Sleeveless Vest with Extended Length for Easy Tuck  ", brand: "Jockey", category: "clothes", image: "https://m.media-amazon.com/images/I/81zDUhy6qGL._SX679_.jpg", price: "₹499", rating: 4.0, discount: 6 },
    { name: "Louis Philippe Men's Cotton Regular Fit", brand: "Louis Philippe", category: "clothes", image: "https://m.media-amazon.com/images/I/51c7XwIkrDL._SY879_.jpg", price: "₹1799", rating: 4.0, discount: 7 },
    { name: "Louis Philippe Men's Slim Fit", brand: "Louis Philippe", category: "clothes", image: "https://m.media-amazon.com/images/I/51xr6aMN7EL._SY879_.jpg", price: "₹2,599", rating: 4.1, discount: 44 },
    { name: "Levis Slim Jeans - Dark", brand: "Levis", category: "clothes", image: "https://m.media-amazon.com/images/I/51qRHeIV6TL._SX679_.jpg", price: "₹2999", rating: 4.4, discount: 12 },
    { name: "Levis Denim Jacket", brand: "Levis", category: "clothes", image: "https://m.media-amazon.com/images/I/61D5uUOCrVL._SX679_.jpg", price: "₹4,599", rating: 4.5, discount: 53 },
    { name: "Axlon Tie for Men ", brand: "Axlon", category: "clothes", image: "https://m.media-amazon.com/images/I/71Tr8133l6L._SX679_.jpg", price: "₹5,999", rating: 3.8, discount: 89 },
    { name: "Adidas Hoodie Men Sweatshirt", brand: "Adidas", category: "clothes", image: "https://m.media-amazon.com/images/I/81h16ztrc8L._SX679_.jpg", price: "₹2599", rating: 4.4, discount: 15 }
  ],

  kitchen: [
    { name: "Stainless Steel Cooker 3L", brand: "Prestige", category: "kitchen", image: "https://m.media-amazon.com/images/I/51yhcoNGL7L._SL1200_.jpg", price: "₹2,920", rating: 4.3, discount: 17 },
    { name: "Aluminium Pressure Cooker 5L", brand: "Hawkins", category: "kitchen", image: "https://m.media-amazon.com/images/I/61uWBr9WNOL._SL1500_.jpg", price: "₹2,325", rating: 4.5, discount: 3 },
    { name: "Non-stick Pan Set (2pcs)", brand: "Wonderchef", category: "kitchen", image: "https://m.media-amazon.com/images/I/51jWzMqI9xL._SL1100_.jpg", price: "₹1,700", rating: 4.2, discount: 1 },
    { name: "Stainless Spoon Set (12pcs)", brand: "Parage", category: "kitchen", image: "https://m.media-amazon.com/images/I/51aHL1xvlGL._SY300_SX300_QL70_FMwebp_.jpg", price: "₹410", rating: 4.0, discount: 30 },
    { name: "Scotch-Brite 2-in-1 Bucket Spin Mop", brand: "Scotch-Brite", category: "kitchen", image: "https://m.media-amazon.com/images/I/61ITlnte9uL._SX679_.jpg", price: "₹1,800", rating: 3.9, discount: 40 },
    { name: "Milton Aura 1000 Thermosteel Water Bottle", brand: "Milton", category: "kitchen", image: "https://m.media-amazon.com/images/I/31FCWasDA0L._SY300_SX300_QL70_FMwebp_.jpg", price: " ₹1,165", rating: 4.1, discount: 18 },
    { name: "Scotch-Brite No-Dust Broom", brand: "Scotch-Brite", category: "kitchen", image: "https://m.media-amazon.com/images/I/51LG07DF+YL._SY300_SX300_QL70_FMwebp_.jpg", price: "₹375", rating: 4.2, discount: 27 },
    { name: "HFI UrbanArts Virgin Fiber Cushion", brand: "HFI UrbanArts", category: "kitchen", image: "https://m.media-amazon.com/images/I/5157avcJQvL._SY300_SX300_QL70_FMwebp_.jpg", price: "₹1,325", rating: 4.0, discount: 55 },
    { name: "PUREZENTO Unique White Ceramic", brand: "PUREZENTO", category: "kitchen", image: "https://m.media-amazon.com/images/I/41fpqu2KdCL._SY300_SX300_QL70_FMwebp_.jpg", price: "₹1,499", rating: 4.0, discount: 57 },
    { name: "TENOUTEN Potato Masher", brand: "TENOUTEN", category: "kitchen", image: "https://m.media-amazon.com/images/I/417Br-bVy-L._SY300_SX300_QL70_FMwebp_.jpg", price: "₹499", rating: 3.8, discount: 34 },
    { name: "upsimples Carbon Steel 6 Inch Blade", brand: "upsimples", category: "kitchen", image: "https://m.media-amazon.com/images/I/31t9M7BZadL._SY300_SX300_QL70_FMwebp_.jpg", price: "₹699", rating: 4.0, discount: 36 },
    { name: "Amazon Brand - Solimo Premium High-Carbonr", brand: "Solimo", category: "kitchen", image: "https://m.media-amazon.com/images/I/81BffvcbZkL._SL1500_.jpg", price: "₹1,000", rating: 3.8, discount: 31 },
    { name: "Gala Sponge Wipe for Kitchen 5 Pcs", brand: "Gala", category: "kitchen", image: "https://m.media-amazon.com/images/I/41lednFSBkL._SY300_SX300_QL70_FMwebp_.jpg", price: "₹280", rating: 4.0, discount: 33 },
    { name: "SITOVI Transparent Glass Jar Container Air Tight Black Lid", brand: "SITOVI", category: "kitchen", image: "https://m.media-amazon.com/images/I/61Js2siW5fL._SX300_SY300_QL70_FMwebp_.jpg", price: "₹899", rating: 3.8, discount: 71 },
    { name: "Nilkamal CHR2226 Plastic High Gloss Finish Chair (Brown and Biscuit)", brand: "Nilkamal", category: "kitchen", image: "https://m.media-amazon.com/images/I/41vRZ7eJttL._SX300_SY300_QL70_FMwebp_.jpg", price: "₹5,000", rating: 4.0, discount: 38 },
    { name: "Webelkart Premium Home Keys Wooden Key Holder ", brand: "Webelkart", category: "kitchen", image: "https://m.media-amazon.com/images/I/41aMl0XR4VL._SY300_SX300_QL70_FMwebp_.jpg", price: "₹999", rating: 3.8, discount: 81 },
    { name: "Dekorly Artificial Potted Plants, 8 Pack Artificial Plastic Eucalyptus", brand: "Dekorly", category: "kitchen", image: "https://m.media-amazon.com/images/I/518XsQOTduL._SX300_SY300_QL70_FMwebp_.jpg", price: "₹999", rating: 4.0, discount: 71 },
    { name: "HomeWiz plastic Oil Dispenser 1 Litre", brand: "HomeWiz", category: "kitchen", image: "https://m.media-amazon.com/images/I/31ycw8qKA9L._SY300_SX300_QL70_FMwebp_.jpg", price: "₹1,000", rating: 3.8, discount: 31 },
    { name: "BENAVJI Gardening Black Garbage Bags", brand: "BENAVJI", category: "kitchen", image: "https://m.media-amazon.com/images/I/61Q1oxpf+aL._SX679_.jpg", price: "₹399", rating: 4.0, discount: 63 },
    { name: "TEKCOOL Wall Clock 12 Silent Quartz Decorative Latest Wall Clock", brand: "TEKCOOL", category: "kitchen", image: "https://m.media-amazon.com/images/I/41WZ32VoPhL._SY300_SX300_QL70_FMwebp_.jpg", price: "₹999", rating: 3.8, discount: 48 }
  ],

  books: [
    { name: "Do It Today", brand: "Darius Foroux", category: "books", image: "https://m.media-amazon.com/images/I/41ACElFKjiL._SY445_SX342_ControlCacheEqualizer_.jpg", price: "₹299", rating: 4.2, discount: 36 },
    { name: "Think Straight", brand: "Darius Foroux", category: "books", image: "https://m.media-amazon.com/images/I/415KWIijbDL._SY445_SX342_ControlCacheEqualizer_.jpg", price: "₹250", rating: 4.1, discount: 25 },
    { name: "What It Takes to Be Free", brand: "Darius Foroux", category: "books", image: "https://m.media-amazon.com/images/I/4168NhQ-9lS._SY445_SX342_ControlCacheEqualizer_.jpg", price: "₹199", rating: 4.0, discount:26 },
    { name: "The Stoic Path", brand: "Darius Foroux", category: "books", image: "https://m.media-amazon.com/images/I/41peZzNsB4L._SY445_SX342_ControlCacheEqualizer_.jpg", price: "₹599", rating: 4.0, discount: 37 },
    { name: "The Art of Saying No", brand: "Damon Zahariades", category: "books", image: "https://m.media-amazon.com/images/I/41ZB4S1qbEL.jpg", price: "₹399", rating: 4.2, discount: 25 },
    { name: "Get Your Sh*t Together Journal", brand: " Sarah Knight", category: "books", image: "https://m.media-amazon.com/images/I/61nY2jANBZL._SL1500_.jpg", price: " ₹1,171", rating: 4.1, discount: 19 },
    { name: "The Road to Better Habits", brand: "Darius Foroux", category: "books", image: "https://m.media-amazon.com/images/I/61vMdjFpbWL._SL1500_.jpg", price: "₹199", rating: 4.2, discount: 26 },
    { name: "Undistracted", brand: "Bob Goff", category: "books", image: "https://m.media-amazon.com/images/I/71FpZqNeNRL._SL1500_.jpg", price: " ₹1,700", rating: 4.0, discount: 19 },
    { name: "The Procrastination Cure", brand: "Damon Zahariades", category: "books", image: "https://m.media-amazon.com/images/I/71Qz40qswnL._SL1500_.jpg", price: "₹2,441", rating: 4.0, discount: 4 },
    { name: "After Dark", brand: "Haruki Murakami", category: "books", image: "https://m.media-amazon.com/images/I/81Bf7HOE6gL._SL1500_.jpg", price: "₹550", rating: 4.1, discount: 33 },
    { name: "South of the Border, West of the Sun", brand: "Haruki Murakami", category: "books", image: "https://m.media-amazon.com/images/I/81+vc8Y7L9L._SL1500_.jpg", price: "₹599", rating: 4.2, discount: 23 },
    { name: "Norwegian Wood", brand: "Haruki Murakami", category: "books", image: "https://m.media-amazon.com/images/I/81zqVhvbHbL._SL1500_.jpg", price: "₹599", rating: 4.5, discount: 39 },
    { name: "Kafka on the Shore", brand: "Haruki Murakami", category: "books", image: "https://m.media-amazon.com/images/I/81tdbrewW0L._SL1500_.jpg", price: "₹599", rating: 4.6, discount: 36 },
    { name: "1Q84", brand: "Haruki Murakami", category: "books", image: "https://m.media-amazon.com/images/I/41W5RQ7ZqJL._SY445_SX342_ControlCacheEqualizer_.jpg", price: "₹699", rating: 4.4, discount: 16 },
    { name: "The Wind-Up Bird Chronicle", brand: "Haruki Murakami", category: "books", image: "https://m.media-amazon.com/images/I/31oP3LWj7aL._SY445_SX342_ControlCacheEqualizer_.jpg", price: "₹699", rating: 4.3, discount: 36 },
    { name: "Sputnik Sweetheart", brand: "Haruki Murakami", category: "books", image: "https://m.media-amazon.com/images/I/41zUa8zIrDL._SY445_SX342_ControlCacheEqualizer_.jpg", price: "₹599", rating: 4.0, discount: 33 },
    { name: "Hard-Boiled Wonderland and the End of the World", brand: "Haruki Murakami", category: "books", image: "https://m.media-amazon.com/images/I/81ZZJqols6L._SL1500_.jpg", price: "₹599", rating: 4.0, discount: 32 },
    { name: "Dance Dance Dance", brand: "Haruki Murakami", category: "books", image: "https://m.media-amazon.com/images/I/71JuK5J+WzL._SL1500_.jpg", price: "₹599", rating: 4.1, discount: 21 },
    { name: "THE POWER OF YOUR SUBCONSCIOUS MIND", brand: " Joseph Murphy", category: "books", image: "https://m.media-amazon.com/images/I/41LusXcRdDL._SY445_SX342_ControlCacheEqualizer_.jpg", price: "₹195", rating: 4.0, discount: 24 },
    { name: "Ikigai For Teens: Finding Your Reason For Being", brand: "Héctor García & Francesc Miralles", category: "books", image: "https://m.media-amazon.com/images/I/61LsrpHKpBL._SL1200_.jpg", price: "₹450", rating: 4.0, discount: 38 },
    { name: "Ikigai: The Japanese Secret to a Long and Happy Life", brand: "Héctor García & Francesc Miralles", category: "books", image: "https://m.media-amazon.com/images/I/81l3rZK4lnL._SL1500_.jpg", price: "₹599", rating: 4.1, discount: 38 },
    { name: "Dopamine Detox", brand: "Thibaut Meurisse", category: "books", image: "https://m.media-amazon.com/images/I/41ZeaEn3V4L._SY445_SX342_ControlCacheEqualizer_.jpg", price: "₹245", rating: 4.0, discount: 22 },
    { name: "Everything Is F*cked", brand: "Mark Manson", category: "books", image: "https://m.media-amazon.com/images/I/715BcQYh5nL._SL1500_.jpg", price: "₹499", rating: 4.0, discount: 33 },
    { name: "Transform Your Self-Talk", brand: " Nick Trenton", category: "books", image: "https://m.media-amazon.com/images/I/61ppN35uAPL._SL1500_.jpg", price: "₹399", rating: 4.0, discount: 30 }
  ],

  beauty: [
    { name: "Garnier Vitamin C + Booster Face Serum", brand: "Garnier", category: "beauty", image: "https://m.media-amazon.com/images/I/51-0Yb6kfJL._SX679_.jpg", price: "₹610", rating: 4.4, discount: 44 },
    { name: "Minimalist Anti-Aging Night Serum", brand: "Minimalist", category: "beauty", image: "https://m.media-amazon.com/images/I/31NOX85z7ZL._SY300_SX300_QL70_FMwebp_.jpg", price: "₹599", rating: 4.3, discount: 1 },
    { name: "Nyle Naturals Damage Repair Shampoo 400 ml", brand: "Nyle", category: "beauty", image: "https://m.media-amazon.com/images/I/619xkJYnUOL._SL1500_.jpg", price: "₹295", rating: 4.1, discount:34 },
    { name: "Intense Hydrating Conditioner (400ml)", brand: "Intense", category: "beauty", image: "https://m.media-amazon.com/images/I/51Pp6TDcpXL._SL1000_.jpg", price: "₹1,350", rating: 4.0, discount: 2 },
    { name: "LAKMÉ Powerplay Priming Matte Lipstick", brand: "LAKMÉ", category: "beauty", image: "https://m.media-amazon.com/images/I/31kmgwoH5hL._SY300_SX300_QL70_FMwebp_.jpg", price: "₹399", rating: 4.2, discount: 10 },
    { name: "Lakme Sun Expert Tinted Sunscreen 50 SPF PA+++", brand: "Lakme", category: "beauty", image: "https://m.media-amazon.com/images/I/31+FnDshB0L._SY300_SX300_QL70_FMwebp_.jpg", price: "₹575", rating: 4.3, discount: 25 },
    { name: "NIVEA MEN Deep Impact Face Wash 100g", brand: "NIVEA", category: "beauty", image: "https://m.media-amazon.com/images/I/41A3MpnD22L._SY300_SX300_QL70_FMwebp_.jpg", price: "₹265", rating: 4.0, discount: 32 },
    { name: "RENEE Hyper Gel Nail Paint- French Plum 10ml", brand: "RENEE", category: "beauty", image: "https://m.media-amazon.com/images/I/6189uk+BOYL._SL1500_.jpg", price: "₹249", rating: 3.9, discount: 6 },
    { name: "Lakme Face It Blush Natural Rose B1 4gm", brand: "LAKMÉ", category: "beauty", image: "https://m.media-amazon.com/images/I/51ehtLQQMLL._SL1000_.jpg", price: "₹250", rating: 4.2, discount: 17 },
    { name: "Mysore Sandal Soap,450g --(150x3) ---(Pack Of 3) -- Scent : ---	Sandalwood", brand: "Mysore Sandal", category: "beauty", image: "https://m.media-amazon.com/images/I/71DublkdqFL._SL1500_.jpg", price: "₹243", rating: 4.3, discount: 11 },
    { name: "Park Avenue Premium Men’s Soaps for Bath", brand: "Park Avenue", category: "beauty", image: "https://m.media-amazon.com/images/I/710Ci0F2WQL._SL1500_.jpg", price: "₹320", rating: 4.0, discount: 55 },
    { name: "Palmolive Aroma Absolute Relax Body Wash", brand: "Palmolive", category: "beauty", image: "https://m.media-amazon.com/images/I/61INblne+BL._SL1080_.jpg", price: "₹539", rating: 3.9, discount: 47 }
  ],

  groceries: [
    { name: "Aashirvaad Atta 5kg", brand: "Aashirvaad", category: "groceries", image: "https://m.media-amazon.com/images/I/9104JpXbv6L._SL1500_.jpg", price: "₹355.00", rating: 4.5, discount: 17 },
    { name: "Aashirvaad Salt 1kg", brand: "Aashirvaad", category: "groceries", image: "https://m.media-amazon.com/images/I/81Jv9RTTQUL._SX679_.jpg", price: "₹30", rating: 4.6, discount: 17 },
    { name: "Fortune Refined Oil 1L", brand: "Fortune", category: "groceries", image: "https://m.media-amazon.com/images/I/81r+VjkWG1S._SL1500_.jpg", price: "₹190.00", rating: 4.2, discount: 13},
    { name: "FORTUNE Thick Poha", brand: "Fortune", category: "groceries", image: "https://m.media-amazon.com/images/I/61cJvjSdgXL._SL1100_.jpg", price: "₹60.00", rating: 4.4, discount: 12 },
    { name: "Parle-G Biscuits 800g", brand: "Parle", category: "groceries", image: "https://m.media-amazon.com/images/I/71bufOt9zAL._SL1200_.jpg", price: "₹100.00", rating: 4.1, discount: 15 },
    { name: "Sunfeast Mom's Magic", brand: "Sunfeast", category: "groceries", image: "https://m.media-amazon.com/images/I/810ZSi0ry+L._SL1500_.jpg", price: "₹150.00", rating: 4.0, discount: 35 },
    { name: "Tata Sampann Toor Dal 1kg", brand: "TATA", category: "groceries", image: "https://m.media-amazon.com/images/I/51WVHJCjMWL._SY300_SX300_QL70_FMwebp_.jpg", price: "₹210.00", rating: 4.2, discount: 25 },
    { name: "Tata Chana Dal 1kg", brand: "TATA", category: "groceries", image: "https://m.media-amazon.com/images/I/61aB4oiy9NL._SL1001_.jpg", price: "₹222.00", rating: 4.1, discount: 18 },
    { name: "Tata Himalayan Rock Pink Salt", brand: "Tata", category: "groceries", image: "https://m.media-amazon.com/images/I/41ZRzlw-7sL._SY300_SX300_QL70_FMwebp_.jpg", price: "99", rating: 4.6, discount: 1 },
    { name: "Amul Organic Sugar Bag 1kg", brand: "Amul", category: "groceries", image: "https://m.media-amazon.com/images/I/51gfRnFwfoL._SL1000_.jpg", price: "₹80.00", rating: 4.3, discount: 6 },
    { name: "Basmati Rice 5kg", brand: "Daawat", category: "groceries", image: "https://m.media-amazon.com/images/I/61XFtNhIx+L._SL1000_.jpg", price: "₹995.00", rating: 4.4, discount: 21 },
    { name: "Amazon Brand - Vedaka", brand: "Vedaka", category: "groceries", image: "https://m.media-amazon.com/images/I/719rDx4nBqL._SL1500_.jpg", price: "₹1,750.00", rating: 4.3, discount: 44 },
    { name: "Maggi Noodles Pack", brand: "Maggi", category: "groceries", image: "https://m.media-amazon.com/images/I/71O5aRecxbL._SL1100_.jpg", price: "₹28.57", rating: 4.1, discount: 15 },
    { name: "Oats - Quaker 1kg", brand: "Quaker", category: "groceries", image: "https://m.media-amazon.com/images/I/81hLZMC+mVL._SL1500_.jpg", price: "₹428.00", rating: 4.2, discount: 25 },
    { name: "Milky Mist Set Curd", brand: "Milky Mist", category: "groceries", image: "https://m.media-amazon.com/images/I/41tp6K1K39L._SY300_SX300_QL70_FMwebp_.jpg", price: "₹130.5", rating: 4.1, discount: 10 },
    { name: "Heritage Toned Fresh Milk", brand: "Quaker", category: "groceries", image: "https://m.media-amazon.com/images/I/815V9EawbJL._SL1500_.jpg", price: "₹27.00", rating: 4.2, discount: 1 },
    { name: "Aashirvaad Black Pepper 100g", brand: "Aashirvaad", category: "groceries", image: "https://m.media-amazon.com/images/I/81VRXOiTBDL._SL1500_.jpg", price: "₹₹155.", rating: 4.1, discount: 5 },
    { name: "MTR Special Garam Masala", brand: "MTR", category: "groceries", image: "https://m.media-amazon.com/images/I/61Qqx8OOf-L._SL1000_.jpg", price: "₹57.00", rating: 4.2, discount: 7 },
    { name: "Eastern Chilli/Chilly Powder", brand: "Eastern", category: "groceries", image: "https://m.media-amazon.com/images/I/81dccgKZeyL._SL1500_.jpg", price: "₹100.00", rating: 4.1, discount: 5 },
    { name: "Taj Mahal South Tea 500 g Pack", brand: "Taj Mahal", category: "groceries", image: "https://m.media-amazon.com/images/I/61XeiiZRQDL._SL1000_.jpg", price: "₹27.00", rating: 4.2, discount: 1 }
  ]
};

function parsePriceToNumber(priceStr) {
  if (!priceStr && priceStr !== 0) return 0;
  const num = parseFloat(String(priceStr).replace(/[^0-9.]/g, ""));
  return isNaN(num) ? 0 : num;
}

function calcDiscountedPrice(priceStr, discountPercent) {
  const price = parsePriceToNumber(priceStr);
  return +(price * (1 - (discountPercent || 0) / 100));
}

function renderRating(r) {
  const full = Math.floor(r);
  const half = r - full >= 0.5;
  let stars = "";
  for (let i = 0; i < full; i++) stars += "★";
  if (half) stars += "☆";
  return stars + ` (${r.toFixed(1)})`;
}

function createProductCard(product) {

  const basePriceNum = parsePriceToNumber(product.price);
  const discountedPrice = calcDiscountedPrice(product.price, product.discount);
  const autoOriginal = +(basePriceNum * 1.2).toFixed(2);

  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${escapeHtml(product.name)}" />
    <h3>${escapeHtml(product.name)}</h3>
    <p><strong>Brand:</strong> ${escapeHtml(product.brand || "")}</p>
    <p class="rating">${renderRating(product.rating || 0)}</p>
    <p class="price">
      <span class="orig" style="text-decoration:line-through;color:gray;margin-right:8px;">₹${autoOriginal.toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2})}</span>
      <span class="disc" style="font-weight:600;">₹${discountedPrice.toLocaleString('en-IN', {minimumFractionDigits:2, maximumFractionDigits:2})}</span>
      <span class="off" style="margin-left:8px;color:#777;">(${product.discount}% off)</span>
    </p>
    <div class="product-actions">
      <button class="buy-btn">Buy Now</button>
      <button class="add-cart-btn">Add to Cart</button>
    </div>
  `;

  const addBtn = card.querySelector(".add-cart-btn");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      addToCart({
        title: product.name,
        img: product.image,
        price: discountedPrice
      });
    });
  }

  const buyBtn = card.querySelector(".buy-btn");
  if (buyBtn) {
    buyBtn.addEventListener("click", () => {
      let orders = JSON.parse(localStorage.getItem("orders") || "[]");
      orders.push({
        title: product.name,
        img: product.image,
        price: discountedPrice,
        date: new Date().toISOString()
      });
      localStorage.setItem("orders", JSON.stringify(orders));
      alert(`Order placed for "${product.name}" (demo).`);
    });
  }

  return card;
}

function clearIntroSections() {
  const hero = document.querySelector(".hero");
  const categories = document.querySelector(".categories");
  if (hero) hero.style.display = "none";
  if (categories) categories.style.display = "none";
}

function showProducts(categoryKey) {
  clearIntroSections();
  const productsSection = document.getElementById("products-section");
  if (!productsSection) return;
  productsSection.innerHTML = "";

  const items = productsData[categoryKey] || [];

  if (items.length === 0) {
    productsSection.innerHTML = `<p style="text-align:center; width:100%;">No products found in this category.</p>`;
    return;
  }

  items.forEach(p => {
    const card = createProductCard(p);
    productsSection.appendChild(card);
  });

  productsSection.scrollIntoView({ behavior: "smooth" });
}

function doSearch(query) {
  query = (query || "").trim().toLowerCase();
  const productsSection = document.getElementById("products-section");
  if (!productsSection) return;
  productsSection.innerHTML = "";

  if (!query) {
    const hero = document.querySelector(".hero");
    const categories = document.querySelector(".categories");
    if (hero) hero.style.display = "block";
    if (categories) categories.style.display = "grid";
    productsSection.scrollIntoView({ behavior: "smooth" });
    return;
  }

  const results = [];
  for (const cat in productsData) {
    productsData[cat].forEach(p => {
      const hay = ((p.name || "") + " " + (p.brand || "") + " " + (p.category || "")).toLowerCase();
      if (hay.includes(query)) results.push(p);
    });
  }

  if (results.length === 0) {
    productsSection.innerHTML = `<p style="text-align:center; width:100%;">No results for "<strong>${escapeHtml(query)}</strong>".</p>`;
    clearIntroSections();
    return;
  }

  clearIntroSections();
  results.forEach(p => productsSection.appendChild(createProductCard(p)));
  productsSection.scrollIntoView({ behavior: "smooth" });
}
(function setupSearch() {
  const searchBar = document.getElementById("search-bar");
  const searchButton = document.getElementById("search-button");
  if (searchButton) {
    searchButton.addEventListener("click", () => {
      if (searchBar) doSearch(searchBar.value);
    });
  }
  if (searchBar) {
    searchBar.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        doSearch(searchBar.value);
      }
    });
  }
})();

function escapeHtml(text) {
  if (text === undefined || text === null) return "";
  return String(text).replace(/[&<>"']/g, function (m) {
    return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m];
  });
}

const loginBtn = document.querySelector(".login-btn");
const signupBtn = document.querySelector(".signup-btn");
if (loginBtn) loginBtn.onclick = () => window.location.href = "SEL.html";
if (signupBtn) signupBtn.onclick = () => window.location.href = "SES.html";

document.addEventListener("DOMContentLoaded", () => {

  if ((window.location.pathname && window.location.pathname.includes("SE.html")) || window.location.pathname.endsWith("/")) {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    const authButtons = document.querySelector(".auth-buttons");
    const profileContainer = document.querySelector(".profile-menu-container");
    const profileName = document.querySelector(".profile-name");
    const dropdown = document.querySelector(".dropdown-menu");
    const iconWrapper = document.querySelector(".profile-icon-wrapper");
    const logoutBtn = document.getElementById("logout-btn");

    if (user) {
      if (authButtons) authButtons.style.display = "none";
      if (profileContainer && profileName) {
        profileName.textContent = (user.name || "").split(" ")[0] || user.email || "User";
        profileContainer.style.display = "flex";
      }

      if (iconWrapper && dropdown) {
        iconWrapper.addEventListener("click", (e) => {
          e.stopPropagation();
          dropdown.classList.toggle("show");
        });
        document.addEventListener("click", (e) => {
          if (!iconWrapper.contains(e.target)) {
            dropdown.classList.remove("show");
          }
        });
      }

      if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
          localStorage.removeItem("loggedInUser");
          location.reload();
        });
      }
    }
  }

  if (window.location.pathname && window.location.pathname.includes("SES.html")) {
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const password = form.querySelector("input[type='password']").value;
        if (!name || !email || !password) return alert("Please fill all fields.");
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        if (users.some(u => u.email === email)) return alert("Email already exists!");
        users.push({ name, email, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Account created! Please login.");
        window.location.href = "SEL.html";
      });
    }
  }

  if (window.location.pathname && window.location.pathname.includes("SEL.html")) {
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = form.querySelector("input[type='email']").value.trim();
        const password = form.querySelector("input[type='password']").value;
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          localStorage.setItem("loggedInUser", JSON.stringify(user));
          window.location.href = "SE.html";
        } else {
          alert("Invalid credentials!");
        }
      });
    }
  }
});

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartPanel() {
  const cartItemsContainer = document.getElementById('cart-items');
  if (!cartItemsContainer) return;
  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += (item.price || 0) * (item.qty || 1);
    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML = `
      <img src="${item.img}" alt="${escapeHtml(item.title)}">
      <div class="cart-item-details">
        <p>${escapeHtml(item.title)}</p>
        <p>₹${((item.price || 0) * (item.qty || 1)).toFixed(2)} <small>(${item.qty || 1} qty)</small></p>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        <button onclick="changeQty(${index}, 1)">＋</button>
        <button onclick="changeQty(${index}, -1)">－</button>
        <button onclick="removeFromCart(${index})">❌</button>
      </div>
    `;
    cartItemsContainer.appendChild(div);
  });

  const totalEl = document.getElementById('cart-total');
  if (totalEl) totalEl.textContent = total.toFixed(2);
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(product) {
  const existingIndex = cart.findIndex(c => c.title === product.title);
  if (existingIndex > -1) {
    cart[existingIndex].qty = (cart[existingIndex].qty || 1) + 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartPanel();
  openCartPanel();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartPanel();
}

function changeQty(index, delta) {
  if (!cart[index]) return;
  cart[index].qty = Math.max(1, (cart[index].qty || 1) + delta);
  updateCartPanel();
}

function openCartPanel() {
  const cartPanel = document.getElementById('cart-panel');
  const cartOverlay = document.getElementById('cart-overlay');
  if (cartPanel) cartPanel.classList.add('open');
  if (cartOverlay) cartOverlay.classList.add('show');
}

function closeCartPanel() {
  const cartPanel = document.getElementById('cart-panel');
  const cartOverlay = document.getElementById('cart-overlay');
  if (cartPanel) cartPanel.classList.remove('open');
  if (cartOverlay) cartOverlay.classList.remove('show');
}

document.addEventListener("DOMContentLoaded", () => {
  const cartIcon = document.getElementById('cart-icon');
  if (cartIcon) cartIcon.addEventListener('click', openCartPanel);

  const closeCartBtn = document.getElementById('close-cart');
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartPanel);

  const cartOverlay = document.getElementById('cart-overlay');
  if (cartOverlay) cartOverlay.addEventListener('click', closeCartPanel);

  updateCartPanel();
});

document.addEventListener("DOMContentLoaded", () => {
  const productsSection = document.getElementById("products-section");
  if (productsSection && productsSection.innerHTML.trim() === "") {
  }
});

const logo = document.querySelector(".logo");
if (logo) {
  logo.addEventListener("click", () => {
    const hero = document.querySelector(".hero");
    const categories = document.querySelector(".categories");
    if (hero) hero.style.display = "block";
    if (categories) categories.style.display = "flex";
    const productsSection = document.getElementById("products-section");
    if (productsSection) productsSection.innerHTML = "";
  });
}


