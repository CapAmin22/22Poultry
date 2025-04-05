
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useProfile } from '@/hooks/use-profile';

const ProfilePhoto = () => {
  const { profile } = useProfile();
  
  return (
    <div className="col-span-1 flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
      <Avatar className="h-24 w-24 mb-4">
        <AvatarImage src={profile?.avatar_url || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"} />
        <AvatarFallback>{profile?.first_name?.[0]}{profile?.last_name?.[0]}</AvatarFallback>
      </Avatar>
      <Button variant="outline" size="sm" className="mb-2">Change Photo</Button>
      <Button variant="link" size="sm" className="text-destructive">Remove</Button>
    </div>
  );
};

export default ProfilePhoto;
