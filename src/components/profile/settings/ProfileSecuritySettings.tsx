
import React from 'react';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription } from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { Lock } from 'lucide-react';

const ProfileSecuritySettings = ({ form }) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4 flex items-center">
        <Lock className="mr-2 h-5 w-5 text-primary" />
        Security Settings
      </h3>
      
      <div className="grid gap-4">
        <div>
          <Button variant="outline">Change Password</Button>
        </div>
        
        <Form {...form}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="twoFactorAuth"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Two-Factor Authentication</FormLabel>
                    <FormDescription>
                      Add an extra layer of security to your account
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
    </div>
  );
};

export default ProfileSecuritySettings;
