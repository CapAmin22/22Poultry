
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Package } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const MarketplaceHero = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8">
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center`}>
        <div className={`${isMobile ? 'w-full mb-6' : 'w-2/3'}`}>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
            22Poultry Marketplace
          </h1>
          <p className="text-gray-700 mb-5">
            Connect with trusted buyers and sellers in India's premier poultry trading platform. 
            Buy and sell poultry products with confidence.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-primary">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Start Shopping
            </Button>
            <Button variant="outline">
              <Package className="mr-2 h-4 w-4" />
              Sell Products
            </Button>
          </div>
        </div>
        
        {!isMobile && (
          <div className="w-1/3">
            <img 
              src="/lovable-uploads/1bcc6f1a-0489-4e9c-b0e7-f21c5c094ef2.png" 
              alt="Marketplace" 
              className="w-full h-48 object-contain" 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketplaceHero;
