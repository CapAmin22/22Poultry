
import React from 'react';
import ProductCard from './ProductCard';
import { useIsMobile } from '@/hooks/use-mobile';

// Mock product data
const mockProducts = [
  {
    id: 1,
    title: "Broiler Chicken - Premium Quality",
    price: 180,
    priceUnit: "per kg",
    location: "Bengaluru, Karnataka",
    image: "/lovable-uploads/1bcc6f1a-0489-4e9c-b0e7-f21c5c094ef2.png",
    rating: 4.8,
    reviews: 124,
    seller: "Karnataka Poultry Farms"
  },
  {
    id: 2,
    title: "Country Eggs - Farm Fresh",
    price: 70,
    priceUnit: "per dozen",
    location: "Hyderabad, Telangana",
    image: "/lovable-uploads/1bcc6f1a-0489-4e9c-b0e7-f21c5c094ef2.png",
    rating: 4.7,
    reviews: 89,
    seller: "Telangana Egg Suppliers"
  },
  {
    id: 3,
    title: "Premium Chicken Feed - 50kg Bag",
    price: 1200,
    priceUnit: "per bag",
    location: "Pune, Maharashtra",
    image: "/lovable-uploads/1bcc6f1a-0489-4e9c-b0e7-f21c5c094ef2.png",
    rating: 4.5,
    reviews: 56,
    seller: "Maharashtra Feed Mills"
  },
  {
    id: 4,
    title: "Automatic Poultry Feeder",
    price: 2500,
    priceUnit: "per unit",
    location: "Delhi NCR",
    image: "/lovable-uploads/1bcc6f1a-0489-4e9c-b0e7-f21c5c094ef2.png",
    rating: 4.6,
    reviews: 32,
    seller: "Delhi Farm Equipment"
  },
  {
    id: 5,
    title: "Duck Eggs - Organic",
    price: 120,
    priceUnit: "per dozen",
    location: "Kochi, Kerala",
    image: "/lovable-uploads/1bcc6f1a-0489-4e9c-b0e7-f21c5c094ef2.png",
    rating: 4.9,
    reviews: 18,
    seller: "Kerala Duck Farms"
  },
  {
    id: 6,
    title: "Poultry Vaccine Kit",
    price: 850,
    priceUnit: "per kit",
    location: "Chennai, Tamil Nadu",
    image: "/lovable-uploads/1bcc6f1a-0489-4e9c-b0e7-f21c5c094ef2.png",
    rating: 4.7,
    reviews: 41,
    seller: "TN Poultry Health Services"
  }
];

const MarketplaceListings = () => {
  const isMobile = useIsMobile();
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Available Products</h2>
        <span className="text-sm text-gray-500">{mockProducts.length} products</span>
      </div>
      
      <div className={`grid ${isMobile ? 'grid-cols-1' : 'sm:grid-cols-2 lg:grid-cols-3'} gap-4`}>
        {mockProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MarketplaceListings;
