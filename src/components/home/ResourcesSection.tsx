
import React from 'react';
import InfoCard from '@/components/ui/InfoCard';
import { ChartBar, Calculator, GraduationCap, Users } from 'lucide-react';

const ResourcesSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Key Resources for Poultry Stakeholders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard
            title="Market Insights"
            description="Access real-time pricing data, demand forecasts, and production statistics."
            icon={<ChartBar size={24} className="text-poultry-blue" />}
            actionLabel="View Market Data"
            onAction={() => window.location.href = '/market-data'}
          />
          
          <InfoCard
            title="Financial Assistance"
            description="Explore loan options, government subsidies, and financial management tools."
            icon={<Calculator size={24} className="text-poultry-green" />}
            actionLabel="Explore Financial Options"
            onAction={() => window.location.href = '/financial'}
          />
          
          <InfoCard
            title="Training & Education"
            description="Learn best practices, access courses, and enhance your poultry operation."
            icon={<GraduationCap size={24} className="text-poultry-orange" />}
            actionLabel="View Training Resources"
            onAction={() => window.location.href = '/training'}
          />
          
          <InfoCard
            title="Stakeholder Network"
            description="Connect with farmers, suppliers, processors, and industry experts."
            icon={<Users size={24} className="text-poultry-gray" />}
            actionLabel="Join the Network"
            onAction={() => window.location.href = '/network'}
          />
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
