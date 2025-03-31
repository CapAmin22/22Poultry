
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import StatisticCard from '@/components/ui/StatisticCard';
import InfoCard from '@/components/ui/InfoCard';
import MarketChart from '@/components/market/MarketChart';
import WeatherCard from '@/components/weather/WeatherCard';
import NewsCard from '@/components/news/NewsCard';
import { Button } from '@/components/ui/button';
import { ChartBar, Calculator, GraduationCap, Newspaper, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample data for demonstration
const marketData = [
  { name: 'Mon', value: 135 },
  { name: 'Tue', value: 139 },
  { name: 'Wed', value: 143 },
  { name: 'Thu', value: 142 },
  { name: 'Fri', value: 145 },
  { name: 'Sat', value: 148 },
  { name: 'Sun', value: 152 },
];

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
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

      {/* Market Statistics */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Today's Market Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatisticCard
              title="Broiler Average Price"
              value="₹175/kg"
              trend="up"
              trendValue="5% from yesterday"
              icon={<ChartBar className="h-4 w-4" />}
            />
            <StatisticCard
              title="Layer Egg Rate"
              value="₹6.25/egg"
              trend="up"
              trendValue="3% from yesterday"
              icon={<ChartBar className="h-4 w-4" />}
            />
            <StatisticCard
              title="Feed Price Index"
              value="₹2,850/bag"
              trend="neutral"
              trendValue="Unchanged"
              icon={<ChartBar className="h-4 w-4" />}
            />
            <StatisticCard
              title="Monthly Production"
              value="125M tons"
              trend="up"
              trendValue="7% from last month"
              icon={<ChartBar className="h-4 w-4" />}
            />
          </div>

          <div className="mt-10">
            <MarketChart 
              title="Broiler Price Trend" 
              data={marketData} 
              dataKey="value" 
              color="#3b82f6"
            />
          </div>

          <div className="mt-6 text-center">
            <Button variant="outline" asChild>
              <Link to="/market-data">View All Market Data</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Features */}
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

      {/* Weather and News */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Weather Forecast</h2>
              <WeatherCard
                location="New Delhi, India"
                temperature={32}
                condition="sunny"
                humidity={45}
                windSpeed={8}
                date="Today, 12 June"
              />
              <div className="mt-4">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/news-weather">View Full Forecast</Link>
                </Button>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Latest Industry News</h2>
              <NewsCard
                title="Government Announces New Subsidy Scheme for Poultry Farmers"
                summary="The Ministry of Agriculture has unveiled a new subsidy program aimed at supporting small and medium-scale poultry farmers across India. The scheme will provide financial assistance for modernizing farm equipment and improving bio-security measures."
                date="June 10, 2023"
                source="Agriculture Today"
                url="#"
              />
              <div className="mt-4">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/news-weather">View All News</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
    </MainLayout>
  );
};

export default Index;
