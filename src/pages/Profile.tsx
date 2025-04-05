
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ProfileInfo from '@/components/profile/ProfileInfo';
import ProfileListings from '@/components/profile/ProfileListings';
import ProfileOrders from '@/components/profile/ProfileOrders';
import ProfileSettings from '@/components/profile/ProfileSettings';
import ProfileHeader from '@/components/profile/ProfileHeader';

const Profile = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState('info');
  
  return (
    <MainLayout>
      <div className="container mx-auto py-6">
        <ProfileHeader />
        
        <div className="mt-8">
          <Tabs defaultValue="info" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className={`${isMobile ? 'w-full grid grid-cols-2 gap-2 overflow-x-auto' : 'flex'} mb-6`}>
              <TabsTrigger value="info">Profile Info</TabsTrigger>
              <TabsTrigger value="listings">My Listings</TabsTrigger>
              <TabsTrigger value="orders">Orders & Transactions</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            <Card className="border-none shadow-sm">
              <TabsContent value="info" className="mt-0">
                <ProfileInfo />
              </TabsContent>
              
              <TabsContent value="listings" className="mt-0">
                <ProfileListings />
              </TabsContent>
              
              <TabsContent value="orders" className="mt-0">
                <ProfileOrders />
              </TabsContent>
              
              <TabsContent value="settings" className="mt-0">
                <ProfileSettings />
              </TabsContent>
            </Card>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
