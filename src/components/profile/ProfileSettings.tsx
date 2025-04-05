
import React, { useState } from 'react';
import { CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/components/ui/use-toast';
import { User } from 'lucide-react';

// Import all the smaller components
import ProfileSettingsHeader from './settings/ProfileSettingsHeader';
import ProfilePhoto from './settings/ProfilePhoto';
import ProfileBasicInfo from './settings/ProfileBasicInfo';
import ProfileSecuritySettings from './settings/ProfileSecuritySettings';
import ProfileNotificationSettings from './settings/ProfileNotificationSettings';
import ProfilePrivacySettings from './settings/ProfilePrivacySettings';
import ProfileAccountActions from './settings/ProfileAccountActions';

const ProfileSettings = () => {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const [isUpdating, setIsUpdating] = useState(false);
  
  const formSchema = z.object({
    emailNotifications: z.boolean().default(true),
    smsNotifications: z.boolean().default(true),
    profileVisibility: z.boolean().default(true),
    marketplaceUpdates: z.boolean().default(true),
    twoFactorAuth: z.boolean().default(false)
  });
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailNotifications: true,
      smsNotifications: true,
      profileVisibility: true,
      marketplaceUpdates: true,
      twoFactorAuth: false
    },
  });

  const handleSaveSettings = async (values: z.infer<typeof formSchema>) => {
    console.log('Settings to save:', values);
    setIsUpdating(true);
    try {
      toast({
        title: "Settings saved",
        description: "Your settings have been updated successfully."
      });
    } catch (error) {
      console.error('Settings update error:', error);
      toast({
        title: "Update failed",
        description: "An error occurred while saving your settings. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsUpdating(false);
    }
  };
  
  return (
    <>
      <ProfileSettingsHeader />
      
      <CardContent>
        <div className="grid gap-6">
          <div>
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <User className="mr-2 h-5 w-5 text-primary" />
              Profile Settings
            </h3>
            
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-4`}>
              <ProfilePhoto />
              <ProfileBasicInfo />
            </div>
          </div>
          
          <Separator />
          
          <ProfileSecuritySettings form={form} />
          
          <Separator />
          
          <ProfileNotificationSettings form={form} />
          
          <Separator />
          
          <ProfilePrivacySettings form={form} />
          
          <Separator />
          
          <ProfileAccountActions />
          
          <div className="flex justify-end">
            <Button 
              onClick={form.handleSubmit(handleSaveSettings)}
              disabled={isUpdating}
            >
              {isUpdating ? 'Saving...' : 'Save Settings'}
            </Button>
          </div>
        </div>
      </CardContent>
    </>
  );
};

export default ProfileSettings;
