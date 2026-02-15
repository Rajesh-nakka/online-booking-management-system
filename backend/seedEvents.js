require("dotenv").config();
const mongoose = require("mongoose");
const Event = require("./models/Event");

const seedEvents = [
  {
    title: "Neon Nights Music Festival 2026",
    description:
      "Experience the ultimate music festival featuring top artists from around the world. Three stages, incredible food, and an atmosphere you won't forget. Join thousands of music lovers for a weekend of pure energy and unforgettable performances.",
    shortDescription:
      "A multi-stage music festival with world-class artists and immersive experiences.",
    date: "2026-03-15",
    time: "6:00 PM",
    location: "Central Park Arena",
    city: "New York",
    price: 89,
    originalPrice: 129,
    category: "Music",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    organizer: "Live Nation Events",
    organizerAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    seatsAvailable: 342,
    totalSeats: 5000,
    rating: 4.8,
    reviewCount: 1240,
    isFeatured: true,
    tags: ["music", "festival", "outdoor"],
  },
  {
    title: "AI & Future Tech Summit",
    description:
      "Dive into the future of technology with industry leaders, breakthrough demos, and hands-on workshops. Covering AI, blockchain, quantum computing, and more.",
    shortDescription:
      "The premier tech conference exploring AI, blockchain, and emerging technologies.",
    date: "2026-04-02",
    time: "9:00 AM",
    location: "Moscone Center",
    city: "San Francisco",
    price: 199,
    category: "Tech",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    organizer: "TechForward Inc",
    organizerAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    seatsAvailable: 89,
    totalSeats: 500,
    rating: 4.9,
    reviewCount: 856,
    isFeatured: true,
    tags: ["tech", "AI", "conference"],
  },
  {
    title: "Marathon City Challenge 2026",
    description:
      "Push your limits in the most scenic urban marathon. Routes through historic landmarks, enthusiastic crowds, and a finish line celebration you'll never forget.",
    shortDescription:
      "An epic urban marathon through the city's most iconic landmarks.",
    date: "2026-03-22",
    time: "7:00 AM",
    location: "Downtown Boulevard",
    city: "Chicago",
    price: 45,
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?w=800&q=80",
    organizer: "RunCity Org",
    organizerAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    seatsAvailable: 1200,
    totalSeats: 5000,
    rating: 4.6,
    reviewCount: 2100,
    isFeatured: true,
    tags: ["sports", "marathon", "outdoor"],
  },
  {
    title: "Creative Design Workshop",
    description:
      "A hands-on workshop covering UI/UX design, branding, and creative thinking. Learn from top designers and build your portfolio in a single weekend.",
    shortDescription:
      "Intensive UI/UX and branding workshop with industry experts.",
    date: "2026-04-10",
    time: "10:00 AM",
    location: "Design Hub Studio",
    city: "Austin",
    price: 75,
    originalPrice: 120,
    category: "Workshops",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    organizer: "DesignCraft",
    organizerAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    seatsAvailable: 18,
    totalSeats: 40,
    rating: 4.7,
    reviewCount: 340,
    tags: ["design", "workshop", "creative"],
  },
  {
    title: "Startup Pitch Night",
    description:
      "Watch 20 innovative startups pitch their ideas to top VCs. Network with founders, investors, and fellow entrepreneurs over cocktails.",
    shortDescription:
      "Live startup pitches to top VCs with networking opportunities.",
    date: "2026-03-28",
    time: "7:00 PM",
    location: "Innovation Tower",
    city: "Miami",
    price: 35,
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
    organizer: "StartupHub",
    organizerAvatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
    seatsAvailable: 65,
    totalSeats: 200,
    rating: 4.5,
    reviewCount: 188,
    isFeatured: true,
    tags: ["business", "startup", "networking"],
  },
  {
    title: "Summer Beats Festival",
    description:
      "The hottest summer festival is back! Three days of non-stop music, art installations, gourmet food trucks, and unforgettable memories under the stars.",
    shortDescription:
      "Three days of music, art, and food under the summer sky.",
    date: "2026-06-20",
    time: "2:00 PM",
    location: "Sunset Beach Park",
    city: "Los Angeles",
    price: 149,
    originalPrice: 199,
    category: "Festivals",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    organizer: "Festival Co",
    organizerAvatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    seatsAvailable: 2800,
    totalSeats: 10000,
    rating: 4.9,
    reviewCount: 3400,
    isFeatured: true,
    tags: ["festival", "music", "summer"],
  },
  {
    title: "React Advanced Conference",
    description:
      "Deep dive into React 19, Server Components, and the future of frontend development. Workshops, talks, and networking with the React community.",
    shortDescription:
      "Advanced React conference with workshops and community networking.",
    date: "2026-05-05",
    time: "9:00 AM",
    location: "Tech Convention Center",
    city: "Seattle",
    price: 249,
    category: "Tech",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    organizer: "ReactConf Team",
    organizerAvatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
    seatsAvailable: 45,
    totalSeats: 300,
    rating: 4.8,
    reviewCount: 620,
    tags: ["tech", "react", "conference"],
  },
  {
    title: "Yoga & Wellness Retreat",
    description:
      "A transformative weekend of yoga, meditation, and holistic wellness. Expert instructors, organic meals, and beautiful natural surroundings.",
    shortDescription:
      "Weekend yoga and meditation retreat with expert instructors.",
    date: "2026-04-18",
    time: "8:00 AM",
    location: "Mountain View Resort",
    city: "Denver",
    price: 195,
    category: "Workshops",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    organizer: "ZenLife Studios",
    organizerAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    seatsAvailable: 8,
    totalSeats: 30,
    rating: 4.9,
    reviewCount: 275,
    tags: ["wellness", "yoga", "retreat"],
  },
];

async function run() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error("MONGO_URI is not set in backend/.env");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB, seeding events...");

    await Event.deleteMany({});
    await Event.insertMany(seedEvents);

    console.log(`Seeded ${seedEvents.length} events.`);
    process.exit(0);
  } catch (err) {
    console.error("Error seeding events:", err);
    process.exit(1);
  }
}

run();

