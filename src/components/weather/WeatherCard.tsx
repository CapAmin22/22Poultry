
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, CloudRain, Sun, Wind } from 'lucide-react';

interface WeatherCardProps {
  location: string;
  temperature: number; // in Celsius
  condition: 'sunny' | 'cloudy' | 'rainy' | 'windy';
  humidity: number; // percentage
  windSpeed: number; // km/h
  date: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  location,
  temperature,
  condition,
  humidity,
  windSpeed,
  date,
}) => {
  const getWeatherIcon = () => {
    switch (condition) {
      case 'sunny':
        return <Sun size={48} className="text-yellow-500" />;
      case 'cloudy':
        return <Cloud size={48} className="text-gray-500" />;
      case 'rainy':
        return <CloudRain size={48} className="text-blue-500" />;
      case 'windy':
        return <Wind size={48} className="text-blue-300" />;
      default:
        return <Sun size={48} className="text-yellow-500" />;
    }
  };

  const getConditionText = () => {
    return condition.charAt(0).toUpperCase() + condition.slice(1);
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-100 to-blue-50 pb-4">
        <div className="flex justify-between">
          <div>
            <CardTitle className="text-xl font-bold">{location}</CardTitle>
            <p className="text-sm text-gray-600">{date}</p>
          </div>
          <div className="flex items-center">
            {getWeatherIcon()}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-3xl font-bold">{temperature}°C</p>
            <p className="text-gray-600">{getConditionText()}</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center text-sm">
              <span className="w-24">Humidity:</span>
              <span className="font-medium">{humidity}%</span>
            </div>
            <div className="flex items-center text-sm">
              <span className="w-24">Wind Speed:</span>
              <span className="font-medium">{windSpeed} km/h</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
