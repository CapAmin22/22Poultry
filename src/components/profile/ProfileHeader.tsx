
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Shield, Clock, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/context/AuthContext';
import { useProfile } from '@/hooks/use-profile';
import { useNavigate } from 'react-router-dom';

const ProfileHeader = () => {
  const isMobile = useIsMobile();
  const { user, signOut } = useAuth();
  const { profile, isLoading } = useProfile();
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  
  const handleSignOut = async () => {
    setIsLoggingOut(true);
    await signOut();
    navigate('/login');
  };
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }
  
  if (!user || !profile) {
    return (
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-xl overflow-hidden shadow-sm p-6">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Please sign in to view your profile</p>
          <Button onClick={() => navigate('/login')}>Sign In</Button>
        </div>
      </div>
    );
  }
  
  const getInitials = () => {
    const first = profile.first_name?.charAt(0) || '';
    const last = profile.last_name?.charAt(0) || '';
    return (first + last).toUpperCase();
  };
  
  const getFullName = () => {
    return `${profile.first_name || ''} ${profile.last_name || ''}`.trim() || 'User';
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };
  
  return (
    <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-xl overflow-hidden shadow-sm animate-fade-in">
      <div className={`p-6 sm:p-8 ${isMobile ? 'flex flex-col items-center text-center' : 'flex items-center gap-8'}`}>
        <div className={`${isMobile ? 'mb-4' : ''}`}>
          <Avatar className="h-24 w-24 border-4 border-white shadow-sm">
            <AvatarImage src={profile.avatar_url || undefined} alt={getFullName()} />
            <AvatarFallback>{getInitials()}</AvatarFallback>
          </Avatar>
        </div>
        
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold text-gray-900">{getFullName()}</h1>
            {user.email_confirmed_at && (
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 font-medium">
                <Shield className="mr-1 h-3 w-3" />
                Verified
              </Badge>
            )}
          </div>
          
          <p className="text-gray-600 mb-3">{profile.business_type?.charAt(0).toUpperCase() + profile.business_type?.slice(1) || 'User'}</p>
          
          <div className="flex flex-wrap gap-4 text-sm">
            {profile.location && (
              <div className="flex items-center text-gray-600">
                <MapPin className="mr-1 h-4 w-4 text-gray-400" />
                {profile.location}
              </div>
            )}
            <div className="flex items-center text-gray-600">
              <Clock className="mr-1 h-4 w-4 text-gray-400" />
              Member since {formatDate(profile.created_at)}
            </div>
            {/* Rating placeholder - to be implemented in the future */}
          </div>
        </div>
        
        {!isMobile && (
          <div className="flex space-x-2">
            <Button variant="outline" onClick={() => navigate('/profile?tab=settings')}>Edit Profile</Button>
            <Button variant="outline" onClick={handleSignOut} disabled={isLoggingOut}>
              {isLoggingOut ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Sign Out'}
            </Button>
          </div>
        )}
      </div>
      
      {isMobile && (
        <div className="px-6 pb-6 flex space-x-2">
          <Button variant="outline" className="flex-1" onClick={() => navigate('/profile?tab=settings')}>Edit Profile</Button>
          <Button variant="outline" className="flex-1" onClick={handleSignOut} disabled={isLoggingOut}>
            {isLoggingOut ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Sign Out'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
