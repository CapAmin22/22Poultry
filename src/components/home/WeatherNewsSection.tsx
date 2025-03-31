
import React from 'react';
import WeatherCard from '@/components/weather/WeatherCard';
import NewsCard from '@/components/news/NewsCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WeatherNewsSection = () => {
  return (
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
  );
};

export default WeatherNewsSection;
