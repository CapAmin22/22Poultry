
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MarketChart from '@/components/market/MarketChart';
import StatisticCard from '@/components/ui/StatisticCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { ChartBar, TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';

// Sample data for demonstration
const broilerPriceData = [
  { name: 'Jun 1', value: 135 },
  { name: 'Jun 2', value: 139 },
  { name: 'Jun 3', value: 143 },
  { name: 'Jun 4', value: 142 },
  { name: 'Jun 5', value: 145 },
  { name: 'Jun 6', value: 148 },
  { name: 'Jun 7', value: 152 },
];

const layerEggPriceData = [
  { name: 'Jun 1', value: 5.8 },
  { name: 'Jun 2', value: 5.9 },
  { name: 'Jun 3', value: 6.0 },
  { name: 'Jun 4', value: 6.1 },
  { name: 'Jun 5', value: 6.1 },
  { name: 'Jun 6', value: 6.2 },
  { name: 'Jun 7', value: 6.25 },
];

const feedPriceData = [
  { name: 'Jun 1', value: 2850 },
  { name: 'Jun 2', value: 2850 },
  { name: 'Jun 3', value: 2845 },
  { name: 'Jun 4', value: 2845 },
  { name: 'Jun 5', value: 2850 },
  { name: 'Jun 6', value: 2850 },
  { name: 'Jun 7', value: 2850 },
];

const marketPrices = [
  { region: 'North India', broilerPrice: '₹175/kg', layerEggPrice: '₹6.25/egg', change: '+3%' },
  { region: 'South India', broilerPrice: '₹182/kg', layerEggPrice: '₹6.40/egg', change: '+5%' },
  { region: 'East India', broilerPrice: '₹170/kg', layerEggPrice: '₹6.10/egg', change: '+2%' },
  { region: 'West India', broilerPrice: '₹178/kg', layerEggPrice: '₹6.30/egg', change: '+4%' },
  { region: 'Central India', broilerPrice: '₹172/kg', layerEggPrice: '₹6.15/egg', change: '+3%' },
];

const MarketData = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">Poultry Market Data</h1>
        
        <p className="text-gray-600 mb-8">
          Access real-time market rates, production trends, and supply-demand insights across India's poultry sector.
          Updated daily from major poultry markets across the country.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
            icon={<ArrowRight className="h-4 w-4" />}
          />
          <StatisticCard
            title="Monthly Production"
            value="125M tons"
            trend="up"
            trendValue="7% from last month"
            icon={<TrendingUp className="h-4 w-4" />}
          />
        </div>

        <Tabs defaultValue="price-trends">
          <TabsList className="mb-8">
            <TabsTrigger value="price-trends">Price Trends</TabsTrigger>
            <TabsTrigger value="regional-prices">Regional Prices</TabsTrigger>
            <TabsTrigger value="supply-demand">Supply & Demand</TabsTrigger>
            <TabsTrigger value="production-stats">Production Stats</TabsTrigger>
          </TabsList>
          
          <TabsContent value="price-trends">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MarketChart 
                title="Broiler Price Trend" 
                data={broilerPriceData} 
                dataKey="value" 
                color="#3b82f6"
              />
              <MarketChart 
                title="Layer Egg Price Trend" 
                data={layerEggPriceData} 
                dataKey="value" 
                color="#15803d"
              />
              <MarketChart 
                title="Feed Price Trend" 
                data={feedPriceData} 
                dataKey="value" 
                color="#f97316"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="regional-prices">
            <Card>
              <CardHeader>
                <CardTitle>Regional Market Prices - Current Day</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Region</TableHead>
                      <TableHead>Broiler Price</TableHead>
                      <TableHead>Layer Egg Price</TableHead>
                      <TableHead>Change (7d)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {marketPrices.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.region}</TableCell>
                        <TableCell>{item.broilerPrice}</TableCell>
                        <TableCell>{item.layerEggPrice}</TableCell>
                        <TableCell className="text-green-600">{item.change}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="supply-demand">
            <Card>
              <CardHeader>
                <CardTitle>Supply & Demand Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Current data shows a balanced supply-demand scenario in most regions, with a slight supply 
                    shortage in South India resulting in higher prices.
                  </p>
                  
                  <h3 className="font-semibold mt-4">Regional Supply-Demand Gap</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">North India</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <span>Supply</span>
                          <span className="font-medium">98%</span>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span>Demand</span>
                          <span className="font-medium">95%</span>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span>Status</span>
                          <span className="text-green-600 font-medium">Surplus</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">South India</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <span>Supply</span>
                          <span className="font-medium">92%</span>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span>Demand</span>
                          <span className="font-medium">98%</span>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span>Status</span>
                          <span className="text-red-600 font-medium">Shortage</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">East India</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <span>Supply</span>
                          <span className="font-medium">96%</span>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span>Demand</span>
                          <span className="font-medium">94%</span>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span>Status</span>
                          <span className="text-green-600 font-medium">Balanced</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">West India</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <span>Supply</span>
                          <span className="font-medium">95%</span>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span>Demand</span>
                          <span className="font-medium">95%</span>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span>Status</span>
                          <span className="text-blue-600 font-medium">Balanced</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="production-stats">
            <Card>
              <CardHeader>
                <CardTitle>Production Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Monthly Production Volume</h3>
                    <p>Total national production: 125 million tons (7% increase from previous month)</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Regional Production Share</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Broiler Production</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span>North India</span>
                              <span className="font-medium">28%</span>
                            </li>
                            <li className="flex justify-between">
                              <span>South India</span>
                              <span className="font-medium">32%</span>
                            </li>
                            <li className="flex justify-between">
                              <span>East India</span>
                              <span className="font-medium">15%</span>
                            </li>
                            <li className="flex justify-between">
                              <span>West India</span>
                              <span className="font-medium">20%</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Central India</span>
                              <span className="font-medium">5%</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Layer Egg Production</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span>North India</span>
                              <span className="font-medium">25%</span>
                            </li>
                            <li className="flex justify-between">
                              <span>South India</span>
                              <span className="font-medium">35%</span>
                            </li>
                            <li className="flex justify-between">
                              <span>East India</span>
                              <span className="font-medium">12%</span>
                            </li>
                            <li className="flex justify-between">
                              <span>West India</span>
                              <span className="font-medium">22%</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Central India</span>
                              <span className="font-medium">6%</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default MarketData;
