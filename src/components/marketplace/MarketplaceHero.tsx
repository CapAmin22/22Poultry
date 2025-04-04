
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Package, ArrowRight, TrendingUp, Shield } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const MarketplaceHero = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-xl overflow-hidden shadow-md">
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center`}>
        <div className={`${isMobile ? 'w-full p-6' : 'w-3/5 p-8'}`}>
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
          
          <div className="flex flex-wrap gap-3">
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
        </div>
        
        <div className={`${isMobile ? 'w-full p-4' : 'w-2/5 p-8'} relative bg-blue-50`}>
          <div className="relative z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-900/5 rounded-full blur-3xl"></div>
            <img 
              src="/lovable-uploads/1bcc6f1a-0489-4e9c-b0e7-f21c5c094ef2.png" 
              alt="Marketplace" 
              className="w-full h-auto max-h-60 object-contain relative z-10 hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-100 rounded-full animate-pulse"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-indigo-100 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
          
          {!isMobile && (
            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm">
              <p className="text-xs font-medium text-blue-900">Trusted by over</p>
              <p className="text-lg font-bold text-blue-900">5,000+ Farmers</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketplaceHero;
