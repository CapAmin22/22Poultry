
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-poultry-blue to-poultry-lightBlue py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Empowering India's Poultry Industry</h1>
            <p className="text-lg mb-6">
              Access real-time market insights, financial assistance, training resources, industry news, 
              and connect with stakeholders to grow your poultry business.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" asChild>
                <Link to="/market-data">View Market Data</Link>
              </Button>
              <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white" asChild>
                <Link to="/network">Join Network</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <img src="/placeholder.svg" alt="Poultry Industry" className="max-w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
