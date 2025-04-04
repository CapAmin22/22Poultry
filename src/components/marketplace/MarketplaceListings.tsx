
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ChevronDown, Filter } from 'lucide-react';

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
    seller: "Karnataka Poultry Farms",
    isVerified: true
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
    seller: "Telangana Egg Suppliers",
    isVerified: true,
    discount: 15
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
    seller: "Delhi Farm Equipment",
    isVerified: true,
    discount: 10
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
    seller: "Kerala Duck Farms",
    isVerified: true
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
  const [isLoading, setIsLoading] = useState(false);
  
  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };
  
  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">Available Products</h2>
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{mockProducts.length} products</span>
        </div>
        
        {!isMobile && (
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Filter className="h-4 w-4" />
            Sort By: Popular
            <ChevronDown className="h-4 w-4 ml-1" />
          </Button>
        )}
      </div>
      
      <Separator className="mb-6" />
      
      <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'sm:grid-cols-2 lg:grid-cols-3 gap-6'}`}>
        {mockProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Button 
          variant="outline" 
          className="border-primary/30 hover:border-primary px-6"
          onClick={handleLoadMore}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Load More Products'}
          {isLoading ? null : <ChevronDown className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
};

export default MarketplaceListings;
