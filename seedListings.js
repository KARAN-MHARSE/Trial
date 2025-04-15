import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Listing from './models/listing.model.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: `${__dirname}/.env` });

const sampleListings = [
  {
    name: "Modern Apartment in Downtown",
    description: "Beautiful modern apartment with stunning city views. Recently renovated with high-end finishes.",
    address: "123 Main St, New York, NY 10001",
    regularPrice: 2500,
    discountPrice: 2300,
    bathrooms: 2,
    bedrooms: 2,
    furnished: true,
    parking: true,
    type: "rent",
    offer: true,
    imageUrls: [
      "https://images.unsplash.com/photo-1522708323590-d24daf6fcf30?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3"
    ],
    userRef: "65f1a2b3c4d5e6f7g8h9i0j1"
  },
  {
    name: "Luxury Villa with Pool",
    description: "Stunning luxury villa with private pool and garden. Perfect for family living.",
    address: "456 Ocean View Dr, Miami, FL 33139",
    regularPrice: 1200000,
    discountPrice: 1150000,
    bathrooms: 4,
    bedrooms: 5,
    furnished: true,
    parking: true,
    type: "sale",
    offer: true,
    imageUrls: [
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3"
    ],
    userRef: "65f1a2b3c4d5e6f7g8h9i0j1"
  },
  {
    name: "Cozy Studio in Arts District",
    description: "Charming studio apartment in the heart of the arts district. Perfect for young professionals.",
    address: "789 Art St, Los Angeles, CA 90012",
    regularPrice: 1800,
    discountPrice: 1700,
    bathrooms: 1,
    bedrooms: 1,
    furnished: false,
    parking: false,
    type: "rent",
    offer: false,
    imageUrls: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1522708323590-d24daf6fcf30?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3"
    ],
    userRef: "65f1a2b3c4d5e6f7g8h9i0j1"
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB!');

    await Listing.deleteMany({});
    console.log('Cleared existing listings');

    await Listing.insertMany(sampleListings);
    console.log('Added sample listings');

    mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB(); 