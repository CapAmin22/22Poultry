
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MarketplaceListings from '@/components/marketplace/MarketplaceListings';
import MarketplaceSearch from '@/components/marketplace/MarketplaceSearch';
import MarketplaceHero from '@/components/marketplace/MarketplaceHero';
import { useIsMobile } from '@/hooks/use-mobile';

const Marketplace = () => {
  const isMobile = useIsMobile();
  
  return (
    <MainLayout>
      <div className="container mx-auto py-6">
        <MarketplaceHero />
        
        <div className="mt-8">
          <Tabs defaultValue="browse" className="w-full">
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
                  <div className="text-center p-12 border rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Live Auctions Coming Soon!</h3>
                    <p className="text-muted-foreground">
                      Our real-time auction platform for poultry products is under development.
                    </p>
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
