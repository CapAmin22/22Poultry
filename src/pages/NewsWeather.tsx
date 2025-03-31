
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import NewsCard from '@/components/news/NewsCard';
import WeatherCard from '@/components/weather/WeatherCard';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const NewsWeather = () => {
  // Sample weather data for different regions
  const weatherData = [
    {
      location: "New Delhi",
      temperature: 32,
      condition: "sunny" as const,
      humidity: 45,
      windSpeed: 8,
      date: "Today, 12 June"
    },
    {
      location: "Mumbai",
      temperature: 29,
      condition: "cloudy" as const,
      humidity: 78,
      windSpeed: 12,
      date: "Today, 12 June"
    },
    {
      location: "Chennai",
      temperature: 33,
      condition: "rainy" as const,
      humidity: 82,
      windSpeed: 15,
      date: "Today, 12 June"
    },
    {
      location: "Kolkata",
      temperature: 30,
      condition: "cloudy" as const,
      humidity: 70,
      windSpeed: 10,
      date: "Today, 12 June"
    }
  ];

  // Sample news data
  const newsData = [
    {
      title: "Government Announces New Subsidy Scheme for Poultry Farmers",
      summary: "The Ministry of Agriculture has unveiled a new subsidy program aimed at supporting small and medium-scale poultry farmers across India. The scheme will provide financial assistance for modernizing farm equipment and improving bio-security measures.",
      date: "June 10, 2023",
      source: "Agriculture Today",
      imageSrc: "/placeholder.svg",
      url: "#"
    },
    {
      title: "India's Egg Production Reaches Record High in Q1 2023",
      summary: "India's egg production has reached a record high of 32 billion eggs in the first quarter of 2023, showing a 7% increase compared to the same period last year, according to the latest data from the Poultry Federation of India.",
      date: "June 8, 2023",
      source: "Poultry Times",
      imageSrc: "/placeholder.svg",
      url: "#"
    },
    {
      title: "New Research Shows Benefits of Probiotics in Poultry Feed",
      summary: "A recent study conducted by the Indian Veterinary Research Institute has demonstrated significant benefits of incorporating probiotics in poultry feed, including improved gut health, better feed conversion rates, and enhanced immunity against common diseases.",
      date: "June 5, 2023",
      source: "Poultry Science Journal",
      imageSrc: "/placeholder.svg",
      url: "#"
    },
    {
      title: "International Poultry Expo to be Held in Bangalore Next Month",
      summary: "The 15th International Poultry Expo will be held in Bangalore from July 15-17, 2023. The event will feature exhibitions from over 200 companies, seminars by industry experts, and networking opportunities for poultry stakeholders.",
      date: "June 3, 2023",
      source: "Events India",
      imageSrc: "/placeholder.svg",
      url: "#"
    },
    {
      title: "New Poultry Vaccine Launched to Combat Avian Influenza",
      summary: "A leading veterinary pharmaceutical company has launched a new vaccine that offers enhanced protection against emerging strains of avian influenza, potentially providing better disease control for poultry farms across the country.",
      date: "May 30, 2023",
      source: "Veterinary News",
      imageSrc: "/placeholder.svg",
      url: "#"
    },
    {
      title: "Rising Feed Costs Putting Pressure on Poultry Farmers",
      summary: "The continuous rise in the cost of key feed ingredients like maize and soybean meal is creating significant pressure on poultry farmers, leading to increased production costs and narrowing profit margins.",
      date: "May 28, 2023",
      source: "Economic Observer",
      imageSrc: "/placeholder.svg",
      url: "#"
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">Industry News & Weather Forecasts</h1>
        
        <p className="text-gray-600 mb-8">
          Stay updated with the latest news, regulatory changes, market shifts, and weather forecasts affecting the poultry industry.
        </p>

        <Tabs defaultValue="news">
          <TabsList className="mb-8">
            <TabsTrigger value="news">Industry News</TabsTrigger>
            <TabsTrigger value="weather">Weather Forecast</TabsTrigger>
            <TabsTrigger value="regulations">Regulatory Updates</TabsTrigger>
          </TabsList>
          
          <TabsContent value="news">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsData.map((news, index) => (
                  <NewsCard 
                    key={index}
                    title={news.title}
                    summary={news.summary}
                    date={news.date}
                    source={news.source}
                    imageSrc={news.imageSrc}
                    url={news.url}
                  />
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button variant="outline">Load More News</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="weather">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Current Weather in Key Poultry Regions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {weatherData.map((weather, index) => (
                    <WeatherCard
                      key={index}
                      location={weather.location}
                      temperature={weather.temperature}
                      condition={weather.condition}
                      humidity={weather.humidity}
                      windSpeed={weather.windSpeed}
                      date={weather.date}
                    />
                  ))}
                </div>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>5-Day Weather Forecast</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px]">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 font-medium">Region</th>
                          <th className="text-center py-3 font-medium">
                            <div className="flex flex-col items-center">
                              <span>Jun 13</span>
                              <span className="text-xs text-gray-500">Tomorrow</span>
                            </div>
                          </th>
                          <th className="text-center py-3 font-medium">
                            <div className="flex flex-col items-center">
                              <span>Jun 14</span>
                              <span className="text-xs text-gray-500">Wed</span>
                            </div>
                          </th>
                          <th className="text-center py-3 font-medium">
                            <div className="flex flex-col items-center">
                              <span>Jun 15</span>
                              <span className="text-xs text-gray-500">Thu</span>
                            </div>
                          </th>
                          <th className="text-center py-3 font-medium">
                            <div className="flex flex-col items-center">
                              <span>Jun 16</span>
                              <span className="text-xs text-gray-500">Fri</span>
                            </div>
                          </th>
                          <th className="text-center py-3 font-medium">
                            <div className="flex flex-col items-center">
                              <span>Jun 17</span>
                              <span className="text-xs text-gray-500">Sat</span>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 font-medium">North India</td>
                          <td className="text-center py-3">34°C / Sunny</td>
                          <td className="text-center py-3">35°C / Sunny</td>
                          <td className="text-center py-3">33°C / Partly Cloudy</td>
                          <td className="text-center py-3">32°C / Cloudy</td>
                          <td className="text-center py-3">30°C / Rain</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 font-medium">South India</td>
                          <td className="text-center py-3">30°C / Rain</td>
                          <td className="text-center py-3">31°C / Rain</td>
                          <td className="text-center py-3">30°C / Cloudy</td>
                          <td className="text-center py-3">29°C / Cloudy</td>
                          <td className="text-center py-3">30°C / Partly Cloudy</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 font-medium">East India</td>
                          <td className="text-center py-3">31°C / Cloudy</td>
                          <td className="text-center py-3">32°C / Partly Cloudy</td>
                          <td className="text-center py-3">33°C / Partly Cloudy</td>
                          <td className="text-center py-3">31°C / Rain</td>
                          <td className="text-center py-3">30°C / Rain</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-medium">West India</td>
                          <td className="text-center py-3">28°C / Rain</td>
                          <td className="text-center py-3">29°C / Rain</td>
                          <td className="text-center py-3">30°C / Cloudy</td>
                          <td className="text-center py-3">31°C / Partly Cloudy</td>
                          <td className="text-center py-3">32°C / Sunny</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Weather Advisory for Poultry Farmers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h3 className="font-semibold text-blue-800 mb-2">Heavy Rainfall Warning - South & West India</h3>
                      <p className="text-sm text-blue-700">
                        Heavy rainfall expected in coastal regions of South and West India over the next 3-4 days. 
                        Poultry farmers are advised to ensure proper drainage systems and reinforced housing to prevent 
                        flooding and water damage.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <h3 className="font-semibold text-orange-800 mb-2">Heat Wave Alert - North India</h3>
                      <p className="text-sm text-orange-700">
                        Heat wave conditions expected in parts of North India with temperatures potentially exceeding 40°C. 
                        Ensure adequate ventilation, cooling systems, and water supply for birds. Consider adjusting feeding times 
                        to cooler parts of the day.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h3 className="font-semibold text-green-800 mb-2">Normal Weather - East India</h3>
                      <p className="text-sm text-green-700">
                        Weather conditions in East India are expected to remain favorable for poultry with moderate 
                        temperatures and normal humidity levels. Regular management practices can be continued.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="regulations">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Regulatory Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Card>
                      <div className="p-4">
                        <div className="flex items-center mb-2">
                          <Calendar size={16} className="mr-2 text-poultry-blue" />
                          <span className="text-sm text-gray-500">May 25, 2023</span>
                        </div>
                        <h3 className="font-semibold mb-2">New Guidelines for Antibiotic Use in Poultry</h3>
                        <p className="text-sm text-gray-600 mb-3">
                          The Food Safety and Standards Authority of India (FSSAI) has issued new guidelines restricting 
                          the use of certain antibiotics in poultry production to combat antimicrobial resistance. 
                          The guidelines will take effect from July 1, 2023.
                        </p>
                        <Button variant="outline" size="sm">Read Full Guidelines</Button>
                      </div>
                    </Card>
                    
                    <Card>
                      <div className="p-4">
                        <div className="flex items-center mb-2">
                          <Calendar size={16} className="mr-2 text-poultry-blue" />
                          <span className="text-sm text-gray-500">May 18, 2023</span>
                        </div>
                        <h3 className="font-semibold mb-2">Revised Export Standards for Poultry Products</h3>
                        <p className="text-sm text-gray-600 mb-3">
                          The Agricultural and Processed Food Products Export Development Authority (APEDA) has 
                          updated export standards for poultry products to align with international requirements, 
                          potentially opening new markets for Indian poultry exporters.
                        </p>
                        <Button variant="outline" size="sm">Read Full Guidelines</Button>
                      </div>
                    </Card>
                    
                    <Card>
                      <div className="p-4">
                        <div className="flex items-center mb-2">
                          <Calendar size={16} className="mr-2 text-poultry-blue" />
                          <span className="text-sm text-gray-500">April 30, 2023</span>
                        </div>
                        <h3 className="font-semibold mb-2">GST Council Clarifies Tax Rates on Poultry Feed Supplements</h3>
                        <p className="text-sm text-gray-600 mb-3">
                          The GST Council has issued a clarification on tax rates applicable to various poultry feed 
                          supplements and additives, providing clarity to manufacturers and farmers on the applicable rates.
                        </p>
                        <Button variant="outline" size="sm">Read Full Guidelines</Button>
                      </div>
                    </Card>
                    
                    <Card>
                      <div className="p-4">
                        <div className="flex items-center mb-2">
                          <Calendar size={16} className="mr-2 text-poultry-blue" />
                          <span className="text-sm text-gray-500">April 15, 2023</span>
                        </div>
                        <h3 className="font-semibold mb-2">Environmental Standards for Large Poultry Operations Updated</h3>
                        <p className="text-sm text-gray-600 mb-3">
                          The Ministry of Environment has updated environmental compliance standards for large-scale 
                          poultry operations, focusing on waste management, water usage, and air quality parameters.
                        </p>
                        <Button variant="outline" size="sm">Read Full Guidelines</Button>
                      </div>
                    </Card>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Regulatory Changes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg border">
                      <h3 className="font-semibold mb-2">Proposed Amendments to Poultry Farm Licensing Requirements</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        The Department of Animal Husbandry is considering amendments to licensing requirements for 
                        poultry farms, with a focus on improving biosecurity measures and disease reporting protocols.
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="font-medium">Expected Implementation:</span>
                        <span className="ml-2">September 2023</span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg border">
                      <h3 className="font-semibold mb-2">Draft Guidelines for Poultry Transport and Welfare</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        New guidelines for poultry transportation and bird welfare during transport are under 
                        development, aiming to reduce stress and mortality during transportation.
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="font-medium">Public Consultation Period:</span>
                        <span className="ml-2">June 15 - July 15, 2023</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default NewsWeather;
