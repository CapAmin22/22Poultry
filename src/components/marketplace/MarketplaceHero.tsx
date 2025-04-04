
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Package, ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const MarketplaceHero = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-xl overflow-hidden shadow-sm">
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center`}>
        <div className={`${isMobile ? 'w-full p-6' : 'w-3/5 p-8'}`}>
          <h1 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">
            Find the Best Poultry Products
          </h1>
          <p className="text-gray-700 mb-6 text-base md:text-lg">
            Connect with trusted buyers and sellers in India's premier poultry trading platform. 
            Buy and sell poultry products with confidence and transparency.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-primary">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Start Shopping
            </Button>
            <Button variant="outline" className="group">
              <Package className="mr-2 h-4 w-4" />
              Sell Products
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        <div className={`${isMobile ? 'w-full p-4' : 'w-2/5 p-8'} bg-blue-50`}>
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-900/5 rounded-full blur-3xl"></div>
            <img 
              src="/lovable-uploads/1bcc6f1a-0489-4e9c-b0e7-f21c5c094ef2.png" 
              alt="Marketplace" 
              className="w-full h-auto max-h-60 object-contain relative z-10" 
            />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-100 rounded-full"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-indigo-100 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceHero;
