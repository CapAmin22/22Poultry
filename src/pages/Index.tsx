
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import MarketStatistics from '@/components/home/MarketStatistics';
import ResourcesSection from '@/components/home/ResourcesSection';
import WeatherNewsSection from '@/components/home/WeatherNewsSection';
import CtaSection from '@/components/home/CtaSection';

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <MarketStatistics />
      <ResourcesSection />
      <WeatherNewsSection />
      <CtaSection />
    </MainLayout>
  );
};

export default Index;
