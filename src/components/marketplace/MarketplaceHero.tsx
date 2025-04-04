
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Package, ArrowRight, TrendingUp, Shield, Check } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const MarketplaceHero = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-xl overflow-hidden shadow-md">
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center`}>
        <div className={`${isMobile ? 'w-full p-6' : 'w-full p-8'}`}>
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium mb-4 animate-fade-in">
            India's Premier Poultry Trading Platform
          </div>
          
          <h1 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">
            Find the Best Poultry Products
          </h1>
          <p className="text-gray-700 mb-6 text-base md:text-lg">
            Connect with trusted buyers and sellers in India's premier poultry trading platform. 
            Buy and sell poultry products with confidence and transparency.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-start space-x-2">
              <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-sm md:text-base">Live Market Prices</h3>
                <p className="text-xs md:text-sm text-gray-600">Updated daily from across India</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="p-2 bg-green-100 rounded-full text-green-600">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-sm md:text-base">Verified Sellers</h3>
                <p className="text-xs md:text-sm text-gray-600">Quality assured products</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <Button className="bg-primary hover:bg-primary/90 transition-all">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Start Shopping
            </Button>
            <Button variant="outline" className="group border-primary/30 hover:border-primary">
              <Package className="mr-2 h-4 w-4" />
              Sell Products
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {["Quality Assured", "Transparent Pricing", "Verified Partners"].map((item, index) => (
              <div key={index} className="flex items-center text-xs text-gray-600 bg-gray-100 rounded-full px-3 py-1">
                <Check className="mr-1 h-3 w-3 text-green-500" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceHero;
