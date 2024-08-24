import {slide1, slide2, slide3, slide4} from "./assets"

import { krishna, krishna1, krishna2, krishna3, ganesh, ganesh1, ganesh2, ganesh3, bag, bag1, bag2, bag3, bookself, bookself1, bookself2, bookself3, camera, camera1, camera2, camera3, car, car1, car2, car3, chair, chair1, chair2, chair3, controller, controller1, controller2, controller3, keyboard, keyboard1, keyboard2, keyboard3, laptop, laptop1, laptop2, monitor, monitor1, monitor2, monitor3,incense, incense1, incense2, incense3, incense4, incense5, incense6, incense7, kapure, kapure1, kapure2, kapure3, kapure4, kapure5, kapure6, kapure7, iphone, iphone1, iphone2, iphone3, s241, s242, s243, s244, flip1, flip2, flip3, flip4, oneplus1, oneplus2, oneplus3, oneplus4 } from "./assets";

import {cloth, furniture, grocery, kitchen, mobile, top, travel, Beauty, electronics } from "./assets"

export const slides = [
  {
    image: slide4
  },
  { image: slide2 },
  { image: slide3 },
  { image: slide1 }
];

export const categories = [
  {
    id: 1,
    title: "Top",
    image: top, 
  },
  {
    id: 2,
    title: "Mobiles",
    image: mobile,
  },
  {
    id: 3,
    title: "Fashion",
    image: cloth,
  },
  {
    id: 4,
    title: "Beauty",
    image: Beauty,
  },
  {
    id: 4,
    title: "Furniture",
    image: furniture,
  },
  {
    id: 4,
    title: "Kitchen",
    image: kitchen,
  },
  {
    id: 4,
    title: "Electronics",
    image: electronics,
  },
  {
    id: 4,
    title: "Electronics",
    image: grocery,
  },
  {
    id: 4,
    title: "Travel",
    image: travel,
  },
];


export const products = [
  {
    id: 1,
    name: "Gucci Bag",
    description: "This luxurious Gucci bag is crafted from premium leather, showcasing both elegance and durability. Designed for versatility, it can seamlessly transition from a day at the office to a night out. The bag features ample space for your essentials while maintaining a sleek, stylish appearance. Its timeless design ensures it will remain a staple in your wardrobe for years to come. Perfect for those who appreciate high-quality fashion and functional luxury.",
    price: 899.99,
    category: "Fashion",
    images: [bag, bag1, bag2, bag3],
    rating: 5,
    featured: true,
    originalPrice: 999.99 // Adjusted for a 10% discount
  },
  {
    id: 2,
    name: "Bookshelf",
    description: "Upgrade your home or office with this modern bookshelf, crafted from solid wood for both durability and style. Its minimalist design allows it to blend seamlessly with various interior aesthetics, while providing ample storage space for books, decorative items, and more. The bookshelf’s elegant finish and robust construction ensure it will be a functional and stylish addition to any room. Ideal for those looking to enhance their living space with a touch of sophistication.",
    price: 149.99,
    category: "Furniture",
    images: [bookself, bookself1, bookself2, bookself3],
    featured: false,
    rating: 3,
    originalPrice: 249.99 // Adjusted for a 40% discount
  },
  {
    id: 3,
    name: "Canon Camera",
    description: "The Canon Camera offers exceptional image quality with advanced features tailored for professional photography. Equipped with high-resolution sensors and cutting-edge technology, this camera excels in capturing vibrant, detailed photos even in challenging lighting conditions. Its ergonomic design ensures comfortable handling during extended shoots. Perfect for both enthusiasts and professionals, the Canon Camera provides reliable performance and outstanding results, making it an indispensable tool for capturing memorable moments.",
    price: 649.99,
    category: "Electronics",
    images: [camera, camera1, camera2, camera3],
    featured: false,
    rating: 4,
    originalPrice: 999.99 // Adjusted for a 35% discount
  },
  {
    id: 4,
    name: "Kid Car",
    description: "Give your child the joy of adventure with this safe and stylish kid's car. Designed for durability and fun, it features a robust build that can handle outdoor play while ensuring your child's safety. The car is equipped with easy-to-use controls and a comfortable seat, making it perfect for young drivers. Its vibrant design and playful features will capture your child's imagination, providing countless hours of entertainment and enjoyment.",
    price: 199.99,
    category: "Toys",
    images: [car, car1, car2, car3],
    featured: false,
    rating: 3,
    originalPrice: 349.99 // Adjusted for a 40% discount
  },
  {
    id: 5,
    name: "Wooden Chair",
    description: "This classic wooden chair combines traditional craftsmanship with modern design, making it a versatile piece for any dining room or study. The chair’s comfortable seat and sturdy frame are crafted from high-quality wood, ensuring long-lasting durability. Its timeless design complements various decor styles, from contemporary to rustic. Whether used at the dining table or as a desk chair, it offers both aesthetic appeal and practical functionality for everyday use.",
    price: 89.99,
    category: "Furniture",
    images: [chair, chair1, chair2, chair3],
    featured: false,
    rating: 2,
    originalPrice: 149.99 // Adjusted for a 40% discount
  },
  {
    id: 6,
    name: "PS5 Controller",
    description: "Elevate your gaming experience with the PS5 Controller, designed to deliver precision and responsiveness. This high-performance controller features advanced haptic feedback and adaptive triggers, providing a more immersive gameplay experience. Its ergonomic design ensures comfortable grip during long gaming sessions, while the customizable buttons offer enhanced control. Compatible with the latest PlayStation 5 console, this controller is a must-have accessory for gamers seeking top-notch performance and engagement.",
    price: 69.99,
    category: "Electronics",
    images: [controller, controller1, controller2, controller3],
    featured: false,
    rating: 5,
    originalPrice: 119.99 // Adjusted for a 40% discount
  },
  {
    id: 7,
    name: "Ganesh Idol",
    description: "Adorn your space with the beautifully crafted Ganesh idol, an exquisite piece perfect for spiritual decoration and worship. Made with intricate detail, this idol represents the revered deity Ganesh, known for removing obstacles and bringing good fortune. Its elegant design and high-quality materials make it a cherished addition to any home. Ideal for devotional purposes or as a thoughtful gift, this idol enhances the ambiance with its serene presence and artistic craftsmanship.",
    price: 34.99,
    category: "Decor",
    images: [ganesh, ganesh1, ganesh2, ganesh3],
    featured: false,
    rating: 5,
    originalPrice: 69.99 // Adjusted for a 50% discount
  },
  {
    id: 8,
    name: "Krishna Idol",
    description: "This Krishna idol, meticulously crafted with attention to detail, is ideal for devotional use and spiritual decoration. The idol portrays the divine figure Krishna, revered for his wisdom and compassion. Made from high-quality materials, it features intricate carvings and a vibrant finish. Perfect for adding a touch of spirituality to your space, it also makes a thoughtful gift for loved ones. This idol enhances any setting with its elegance and serene presence.",
    price: 39.99,
    category: "Decor",
    images: [krishna, krishna1, krishna2, krishna3],
    featured: true,
    rating: 5,
    originalPrice: 59.99 // Adjusted for a 33% discount
  },
  {
    id: 9,
    name: "RGB Keyboard",
    description: "Illuminate your gaming setup with this RGB keyboard, featuring customizable lighting and responsive mechanical switches. Designed for gamers, it offers dynamic backlighting options and programmable keys to enhance your gaming experience. The keyboard’s durable construction and ergonomic design ensure long-lasting comfort during extended play sessions. With its vibrant RGB effects and advanced features, this keyboard adds a stylish and functional element to your gaming environment.",
    price: 79.99,
    category: "Electronics",
    images: [keyboard, keyboard1, keyboard2, keyboard3],
    featured: false,
    rating: 4,
    originalPrice: 119.99 // Adjusted for a 33% discount
  },
  {
    id: 10,
    name: "Gaming Laptop",
    description: "Experience unparalleled gaming performance with this high-end gaming laptop. Equipped with the latest hardware, including a powerful processor and high-resolution display, it delivers smooth and immersive gameplay. The laptop’s advanced cooling system ensures optimal performance even during intense gaming sessions. Its sleek design and portability make it ideal for gamers on the go. Whether for competitive gaming or multimedia use, this laptop offers exceptional performance and versatility.",
    price: 1299.99,
    category: "Electronics",
    images: [laptop, laptop1, laptop2],
    featured: false,
    rating: 4,
    originalPrice: 1799.99 // Adjusted for a 28% discount
  },
  {
    id: 11,
    name: "Gaming Monitor",
    description: "Enhance your gaming experience with this ultra-high-definition gaming monitor. Featuring a fast refresh rate and vibrant display, it provides smooth, immersive gameplay with sharp visuals and accurate colors. The monitor’s slim design and adjustable stand offer ergonomic comfort and space-saving benefits. Ideal for gamers seeking a competitive edge, it combines advanced technology with a sleek aesthetic to elevate your gaming setup to the next level.",
    price: 349.99,
    category: "Electronics",
    images: [monitor, monitor1, monitor2, monitor3],
    featured: false,
    rating: 3,
    originalPrice: 499.99 // Adjusted for a 30% discount
  },
  {
    id: 12,
    name: "Sandalwood Incense",
    description: "Indulge in the calming aroma of Sandalwood Incense, crafted from high-quality natural ingredients to create a soothing atmosphere. This incense is perfect for meditation, yoga, or simply unwinding after a long day. The rich, earthy fragrance of sandalwood promotes relaxation and mental clarity, making it an essential addition to your spiritual practices. Each stick is hand-rolled to ensure a slow, steady burn, allowing you to enjoy the tranquil ambiance it creates in your home.",
    price: 5.99,
    category: "Spiritual items",
    images: [incense, incense1, incense2, incense3],
    featured: false,
    rating: 4,
    originalPrice: 9.99 // Adjusted for a 40% discount
  },
  {
    id: 13,
    name: "Lavender Incense",
    description: "Experience the calming scent of Lavender Incense, designed to bring peace and tranquility to any space. Crafted with natural lavender extracts, this incense is perfect for creating a serene environment ideal for relaxation or meditation. The gentle aroma of lavender soothes the mind and body, helping to reduce stress and anxiety. Hand-rolled for a consistent burn, these incense sticks are perfect for enhancing your spiritual practices or simply adding a touch of calm to your day.",
    price: 4.99,
    category: "Spiritual items",
    images: [incense4,incense5, incense6, incense7],
    featured: false,
    rating: 3,
    originalPrice: 8.99 // Adjusted for a 44% discount
  },
  {
    id: 14,
    name: "Camphor Tablets",
    description: "Purify your environment with these high-quality Camphor Tablets, known for their spiritual and medicinal properties. Made from natural camphor, these tablets can be used during religious rituals or as an air purifier to cleanse your space. The soothing aroma of camphor is believed to dispel negative energies and promote a peaceful ambiance. These tablets are easy to use and dissolve quickly, releasing a refreshing fragrance that rejuvenates both your mind and surroundings.",
    price: 7.99,
    category: "Spiritual items",
    images: [kapure,kapure1, kapure2, kapure3],
    featured: true,
    rating: 5,
    originalPrice: 12.99
  },
  {
    id: 15,
    name: "Camphor Cone",
    description: "Enhance your home’s ambiance with this Camphor Cone, a natural air freshener that offers both spiritual and practical benefits. The camphor cone is designed to slowly release a soothing fragrance, purifying the air and creating a serene environment. It is ideal for use during meditation, prayer, or simply to freshen up your living space. The cone’s sleek design also makes it a stylish addition to any room, combining functionality with aesthetic appeal.",
    price: 6.49,
    category: "Spiritual items",
    images: [kapure4, kapure5, kapure6, kapure7],
    featured: false,
    rating: 3,
    originalPrice: 10.49
  },
  {
    id: 16,
    name: "iPhone 15 Pro",
    description: "Experience the cutting-edge technology of the iPhone 15 Pro, featuring a stunning design and advanced capabilities. With its powerful A16 Bionic chip, enhanced camera system, and ProMotion display, this smartphone offers unparalleled performance and visual clarity. Ideal for both professionals and tech enthusiasts, the iPhone 15 Pro combines luxury and innovation, making it a must-have device for those who demand the best.",
    price: 1299.99,
    category: "smartphone",
    images: [iphone, iphone1, iphone2, iphone3],
    featured: false,
    rating: 4,
    originalPrice: 1399.99 // Adjusted for a 7% discount
  },
  {
    id: 17,
    name: "Samsung S24",
    description: "The Samsung S24 is a powerhouse smartphone designed for those who need top-tier performance. Equipped with a high-resolution display, cutting-edge Exynos processor, and a versatile camera setup, it’s perfect for multitasking, gaming, and capturing stunning photos. Its sleek design and long-lasting battery make it a versatile choice for on-the-go users who require reliability and style in one package.",
    price: 1099.99,
    category: "smartphone",
    images: [s241, s242, s243, s244],
    featured: true,
    rating: 5,
    originalPrice: 1199.99 // Adjusted for an 8% discount
  },
  {
    id: 18,
    name: "OnePlus 12",
    description: "Discover the power of speed with the OnePlus 12, a smartphone that offers flagship performance at an unbeatable price. Featuring a blazing-fast Snapdragon processor, 120Hz Fluid AMOLED display, and Warp Charge technology, the OnePlus 12 ensures you stay ahead in every task. Its premium design and advanced features make it a top choice for users who want performance without compromise.",
    price: 899.99,
    category: "smartphone",
    images: [oneplus1, oneplus2, oneplus3, oneplus4],
    featured: false,
    rating: 4,
    originalPrice: 999.99 // Adjusted for a 10% discount
  },
  {
    id: 19,
    name: "Samsung Galaxy Z Flip",
    description: "The Samsung Galaxy Z Flip brings the future of smartphones to your pocket with its innovative foldable design. Compact and stylish, this phone offers a full-sized smartphone experience with the convenience of a pocket-friendly form factor. It features a powerful processor, stunning foldable display, and versatile camera, making it ideal for trendsetters and tech enthusiasts alike. Elevate your smartphone experience with the unique and futuristic Galaxy Z Flip.",
    price: 999.99,
    category: "smartphone",
    images: [flip1, flip2, flip3, flip4],
    featured: false,
    rating: 3,
    originalPrice: 1199.99 // Adjusted for a 17% discount
  }

];

