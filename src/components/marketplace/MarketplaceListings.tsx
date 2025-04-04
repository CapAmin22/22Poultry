
import React from 'react';
import ProductCard from './ProductCard';
import { useIsMobile } from '@/hooks/use-mobile';

// Mock product data with more realistic image paths
const mockProducts = [
  {
    id: 1,
    title: "Farm Fresh Broiler Chicken - Premium Quality",
    price: 180,
    priceUnit: "per kg",
    location: "Bengaluru, Karnataka",
    image: "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 124,
    seller: "Karnataka Poultry Farms"
  },
  {
    id: 2,
    title: "Organic Country Eggs - Farm Fresh",
    price: 70,
    priceUnit: "per dozen",
    location: "Hyderabad, Telangana",
    image: "https://images.unsplash.com/photo-1569127959161-2b1297b2d9a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 89,
    seller: "Telangana Egg Suppliers"
  },
  {
    id: 3,
    title: "Premium Protein-Rich Chicken Feed - 50kg Bag",
    price: 1200,
    priceUnit: "per bag",
    location: "Pune, Maharashtra",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviews: 56,
    seller: "Maharashtra Feed Mills"
  },
  {
    id: 4,
    title: "Automatic Poultry Feeder - Latest Technology",
    price: 2500,
    priceUnit: "per unit",
    location: "Delhi NCR",
    image: "https://images.unsplash.com/photo-1543699565-003b8adda5fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 32,
    seller: "Delhi Farm Equipment"
  },
  {
    id: 5,
    title: "Organic Duck Eggs - Naturally Raised",
    price: 120,
    priceUnit: "per dozen",
    location: "Kochi, Kerala",
    image: "https://images.unsplash.com/photo-1610733779181-902949b0cf62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 18,
    seller: "Kerala Duck Farms"
  },
  {
    id: 6,
    title: "Complete Poultry Vaccine Kit - All Essentials",
    price: 850,
    priceUnit: "per kit",
    location: "Chennai, Tamil Nadu",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 41,
    seller: "TN Poultry Health Services"
  }
];

const MarketplaceListings = () => {
  const isMobile = useIsMobile();
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Available Products</h2>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{mockProducts.length} products</span>
      </div>
      
      <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'sm:grid-cols-2 lg:grid-cols-3 gap-6'}`}>
        {mockProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MarketplaceListings;
