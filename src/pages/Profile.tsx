
import React, { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ProfileInfo from '@/components/profile/ProfileInfo';
import ProfileListings from '@/components/profile/ProfileListings';
import ProfileOrders from '@/components/profile/ProfileOrders';
import ProfileSettings from '@/components/profile/ProfileSettings';
import ProfileHeader from '@/components/profile/ProfileHeader';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const Profile = () => {
  const isMobile = useIsMobile();
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Parse tab from URL query parameter
  const getTabFromUrl = () => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    return tab === 'info' || tab === 'listings' || tab === 'orders' || tab === 'settings' 
      ? tab 
      : 'info';
  };
  
  const [activeTab, setActiveTab] = useState(getTabFromUrl());
  
  // Update URL when tab changes
  useEffect(() => {
    const currentTab = getTabFromUrl();
    if (activeTab !== currentTab) {
      navigate(`/profile?tab=${activeTab}`);
    }
  }, [activeTab, navigate]);
  
  // Update tab when URL changes
  useEffect(() => {
    setActiveTab(getTabFromUrl());
  }, [location.search]);
  
  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/login');
    }
  }, [user, isLoading, navigate]);
  
  if (isLoading) {
    return (
      <MainLayout>
        <div className="container mx-auto py-6">
          <div className="flex items-center justify-center p-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-gray-600">Loading profile...</p>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
  
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
