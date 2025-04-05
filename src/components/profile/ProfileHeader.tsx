
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

// Mock user data
const mockUser = {
  name: 'Rajesh Kumar',
  role: 'Poultry Farmer',
  location: 'Bengaluru, Karnataka',
  memberSince: 'March 2023',
  verified: true,
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  rating: 4.8,
  ratingCount: 27
};

const ProfileHeader = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-xl overflow-hidden shadow-sm animate-fade-in">
      <div className={`p-6 sm:p-8 ${isMobile ? 'flex flex-col items-center text-center' : 'flex items-center gap-8'}`}>
        <div className={`${isMobile ? 'mb-4' : ''}`}>
          <Avatar className="h-24 w-24 border-4 border-white shadow-sm">
            <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
            <AvatarFallback>{mockUser.name.charAt(0)}{mockUser.name.split(' ')[1]?.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
        
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold text-gray-900">{mockUser.name}</h1>
            {mockUser.verified && (
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 font-medium">
                <Shield className="mr-1 h-3 w-3" />
                Verified
              </Badge>
            )}
          </div>
          
          <p className="text-gray-600 mb-3">{mockUser.role}</p>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center text-gray-600">
              <MapPin className="mr-1 h-4 w-4 text-gray-400" />
              {mockUser.location}
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="mr-1 h-4 w-4 text-gray-400" />
              Member since {mockUser.memberSince}
            </div>
            <div className="flex items-center text-amber-600">
              <Star className="mr-1 h-4 w-4 fill-amber-400 text-amber-400" />
              <span>{mockUser.rating}</span>
              <span className="text-gray-600 ml-1">({mockUser.ratingCount} reviews)</span>
            </div>
          </div>
        </div>
        
        {!isMobile && (
          <div>
            <Button>Edit Profile</Button>
          </div>
        )}
      </div>
      
      {isMobile && (
        <div className="px-6 pb-6">
          <Button className="w-full">Edit Profile</Button>
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
