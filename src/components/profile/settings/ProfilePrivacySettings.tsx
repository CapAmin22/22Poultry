
import React from 'react';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription } from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { Share2 } from 'lucide-react';

const ProfilePrivacySettings = ({ form }) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4 flex items-center">
        <Share2 className="mr-2 h-5 w-5 text-primary" />
        Privacy Settings
      </h3>
      
      <Form {...form}>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="profileVisibility"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Public Profile</FormLabel>
                  <FormDescription>
                    Allow other users to view your profile information
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </Form>
    </div>
  );
};

export default ProfilePrivacySettings;
