
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useProfile } from '@/hooks/use-profile';
import { useIsMobile } from '@/hooks/use-mobile';

const ProfileBasicInfo = () => {
  const isMobile = useIsMobile();
  const { profile } = useProfile();
  
  return (
    <div className={`${isMobile ? 'col-span-1' : 'col-span-2'} grid gap-4`}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" defaultValue={profile?.first_name || ""} />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" defaultValue={profile?.last_name || ""} />
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" defaultValue={profile?.contact_email || ""} />
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" defaultValue={profile?.contact_phone || ""} />
      </div>
    </div>
  );
};

export default ProfileBasicInfo;
