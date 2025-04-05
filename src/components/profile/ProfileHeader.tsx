
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';
import { useProfile } from '@/hooks/use-profile';
import { Loader2, MapPin, Building2, Calendar } from 'lucide-react';
import { format } from 'date-fns';

const ProfileHeader = () => {
  const isMobile = useIsMobile();
  const { profile, isLoading, error } = useProfile();

  if (isLoading) {
    return (
      <div className="w-full p-6 bg-white rounded-lg shadow-sm flex items-center justify-center">
        <div className="text-center p-6">
          <Loader2 className="h-10 w-10 animate-spin text-primary mx-auto mb-4" />
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full p-6 bg-white rounded-lg shadow-sm">
        <div className="text-center p-6">
          <p className="text-red-500 mb-2">Error loading profile</p>
          <p className="text-gray-600 text-sm">{error.message}</p>
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-4"
            onClick={() => window.location.reload()}
          >
            Retry
          </Button>
        </div>
      </div>
    );
  }

  const getInitials = () => {
    if (!profile) return '';
    const first = profile.first_name?.[0] || '';
    const last = profile.last_name?.[0] || '';
    return (first + last).toUpperCase();
  };

  const getFullName = () => {
    if (!profile) return 'User';
    if (profile.first_name && profile.last_name) {
      return `${profile.first_name} ${profile.last_name}`;
    }
    return profile.first_name || profile.last_name || 'User';
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-sm">
      <div className={`flex ${isMobile ? 'flex-col items-center text-center' : 'flex-row items-start'} gap-6`}>
        <div className="flex-shrink-0">
          <Avatar className={`${isMobile ? 'h-24 w-24' : 'h-32 w-32'} border-4 border-white shadow-md`}>
            <AvatarImage src={profile?.avatar_url || ''} />
            <AvatarFallback className="text-2xl">{getInitials()}</AvatarFallback>
          </Avatar>
        </div>
        
        <div className={`flex-1 ${isMobile ? 'w-full' : ''}`}>
          <div className={`flex ${isMobile ? 'flex-col items-center' : 'flex-row items-start justify-between'} mb-2`}>
            <h1 className="text-2xl font-bold text-gray-900">{getFullName()}</h1>
            
            <div className={`${isMobile ? 'mt-4' : ''}`}>
              <Button variant="outline" size="sm" className="mr-2">
                Share Profile
              </Button>
              <Button size="sm">Edit Profile</Button>
            </div>
          </div>
          
          <div className="space-y-2 mt-4">
            {profile?.business_type && (
              <div className="flex items-center text-gray-600">
                <Building2 className="h-4 w-4 mr-2" />
                <span>{profile.business_type}</span>
              </div>
            )}
            
            {profile?.location && (
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{profile.location}</span>
              </div>
            )}
            
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Joined {profile?.created_at ? format(new Date(profile.created_at), 'MMMM yyyy') : 'Recently'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
