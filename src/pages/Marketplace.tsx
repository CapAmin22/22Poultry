
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MarketplaceListings from '@/components/marketplace/MarketplaceListings';
import MarketplaceSearch from '@/components/marketplace/MarketplaceSearch';
import MarketplaceHero from '@/components/marketplace/MarketplaceHero';
import { useIsMobile } from '@/hooks/use-mobile';
import { Calendar, Clock, Tag, Award, TrendingUp } from 'lucide-react';

const Marketplace = () => {
  const isMobile = useIsMobile();
  const [tab, setTab] = useState('browse');
  
  return (
    <MainLayout>
      <div className="container mx-auto py-6">
        <MarketplaceHero />
        
        <div className="mt-8">
          <Tabs defaultValue="browse" value={tab} onValueChange={setTab} className="w-full">
            <TabsList className={`${isMobile ? 'w-full grid grid-cols-2' : 'flex'} mb-6`}>
              <TabsTrigger value="browse">Browse Products</TabsTrigger>
              <TabsTrigger value="auction">Live Auctions</TabsTrigger>
            </TabsList>
            
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-[300px_1fr]'} gap-6`}>
              {!isMobile && (
                <div className="bg-background border rounded-lg p-4 h-fit">
                  <MarketplaceSearch />
                </div>
              )}
              
              <div>
                {isMobile && (
                  <div className="mb-4">
                    <MarketplaceSearch />
                  </div>
                )}
                
                <TabsContent value="browse" className="mt-0">
                  <MarketplaceListings />
                </TabsContent>
                
                <TabsContent value="auction" className="mt-0">
                  <div className="text-center p-8 border rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
                    <div className="inline-flex justify-center items-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Live Auctions Coming Soon!</h3>
                    <p className="text-muted-foreground max-w-md mx-auto mb-4">
                      Our real-time auction platform for poultry products is under development.
                      Get ready for a seamless bidding experience.
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-6">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <Calendar className="h-6 w-6 text-primary mb-2" />
                        <h4 className="font-medium text-sm">Scheduled Auctions</h4>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <Tag className="h-6 w-6 text-green-500 mb-2" />
                        <h4 className="font-medium text-sm">Competitive Pricing</h4>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <TrendingUp className="h-6 w-6 text-blue-500 mb-2" />
                        <h4 className="font-medium text-sm">Real-time Bidding</h4>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <Award className="h-6 w-6 text-amber-500 mb-2" />
                        <h4 className="font-medium text-sm">Quality Assurance</h4>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Marketplace;
