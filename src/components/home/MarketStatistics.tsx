
import React from 'react';
import StatisticCard from '@/components/ui/StatisticCard';
import MarketChart from '@/components/market/MarketChart';
import { Button } from '@/components/ui/button';
import { ChartBar } from 'lucide-react';
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

const MarketStatistics = () => {
  return (
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
  );
};

export default MarketStatistics;
