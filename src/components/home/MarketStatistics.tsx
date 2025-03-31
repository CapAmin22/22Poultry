
import React, { useState } from 'react';
import StatisticCard from '@/components/ui/StatisticCard';
import { Button } from '@/components/ui/button';
import { ChartBar, ChartLine, Calendar, ArrowUp, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  AreaChart, 
  Area, 
  LineChart, 
  Line, 
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Sample market data for demonstration
const weeklyMarketData = [
  { name: 'Mon', broiler: 135, layer: 120, feed: 90 },
  { name: 'Tue', broiler: 139, layer: 123, feed: 91 },
  { name: 'Wed', broiler: 143, layer: 129, feed: 92 },
  { name: 'Thu', broiler: 142, layer: 132, feed: 93 },
  { name: 'Fri', broiler: 145, layer: 135, feed: 92 },
  { name: 'Sat', broiler: 148, layer: 138, feed: 94 },
  { name: 'Sun', broiler: 152, layer: 142, feed: 95 },
];

const monthlyMarketData = [
  { name: 'W1', broiler: 135, layer: 120, feed: 90 },
  { name: 'W2', broiler: 142, layer: 125, feed: 92 },
  { name: 'W3', broiler: 148, layer: 132, feed: 94 },
  { name: 'W4', broiler: 155, layer: 140, feed: 95 },
];

const chartConfig = {
  broiler: {
    label: "Broiler Price",
    theme: { light: "#3b82f6", dark: "#60a5fa" }
  },
  layer: {
    label: "Layer Egg Rate",
    theme: { light: "#22c55e", dark: "#4ade80" }
  },
  feed: {
    label: "Feed Price",
    theme: { light: "#f97316", dark: "#fb923c" }
  }
};

const MarketStatistics = () => {
  const [timeRange, setTimeRange] = useState<'weekly' | 'monthly'>('weekly');
  const [activeChart, setActiveChart] = useState<'line' | 'bar' | 'area'>('line');

  const currentData = timeRange === 'weekly' ? weeklyMarketData : monthlyMarketData;
  
  const renderChart = () => {
    switch (activeChart) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={currentData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="broiler" name="Broiler Price" fill="#3b82f6" />
              <Bar dataKey="layer" name="Layer Egg Rate" fill="#22c55e" />
              <Bar dataKey="feed" name="Feed Price" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'area':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={currentData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="broiler" name="Broiler Price" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
              <Area type="monotone" dataKey="layer" name="Layer Egg Rate" stroke="#22c55e" fill="#22c55e" fillOpacity={0.2} />
              <Area type="monotone" dataKey="feed" name="Feed Price" stroke="#f97316" fill="#f97316" fillOpacity={0.2} />
            </AreaChart>
          </ResponsiveContainer>
        );
      case 'line':
      default:
        return (
          <ChartContainer className="h-[300px]" config={chartConfig}>
            <LineChart data={currentData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="name" 
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                tickLine={false}
                axisLine={false}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line 
                type="monotone" 
                dataKey="broiler" 
                strokeWidth={2.5}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="layer" 
                strokeWidth={2.5}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="feed" 
                strokeWidth={2.5}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ChartContainer>
        );
    }
  };

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
            icon={<ArrowUp className="h-4 w-4" />}
          />
          <StatisticCard
            title="Layer Egg Rate"
            value="₹6.25/egg"
            trend="up"
            trendValue="3% from yesterday"
            icon={<ArrowUp className="h-4 w-4" />}
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
            icon={<ArrowUp className="h-4 w-4" />}
          />
        </div>

        <Card className="mt-10">
          <CardHeader className="pb-0">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <CardTitle>Poultry Market Trends</CardTitle>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Time Range:</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="h-8 gap-1">
                        <Calendar className="h-4 w-4" />
                        {timeRange === 'weekly' ? 'Weekly' : 'Monthly'}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setTimeRange('weekly')}>Weekly</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTimeRange('monthly')}>Monthly</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <Tabs defaultValue="line" value={activeChart} onValueChange={(value) => setActiveChart(value as 'line' | 'bar' | 'area')}>
                  <TabsList className="h-8">
                    <TabsTrigger value="line" className="px-3 h-8">
                      <ChartLine className="h-4 w-4 mr-1" />
                      Line
                    </TabsTrigger>
                    <TabsTrigger value="bar" className="px-3 h-8">
                      <ChartBar className="h-4 w-4 mr-1" />
                      Bar
                    </TabsTrigger>
                    <TabsTrigger value="area" className="px-3 h-8">
                      <ChartLine className="h-4 w-4 mr-1" />
                      Area
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            {renderChart()}
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Button variant="outline" asChild>
            <Link to="/market-data">View Detailed Market Analysis</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketStatistics;
