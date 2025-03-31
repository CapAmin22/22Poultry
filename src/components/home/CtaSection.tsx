
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-16 bg-poultry-green text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Join India's Premier Poultry Network</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Connect with farmers, suppliers, processors, and industry experts to grow your business and stay ahead in the market.
        </p>
        <Button variant="secondary" size="lg" className="bg-white text-poultry-green hover:bg-gray-100" asChild>
          <Link to="/network">Join the Network</Link>
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
