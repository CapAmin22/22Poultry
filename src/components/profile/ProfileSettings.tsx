
import React from 'react';
import { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { useIsMobile } from '@/hooks/use-mobile';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bell, User, Lock, Share2, Smartphone, LogOut } from 'lucide-react';

const ProfileSettings = () => {
  const isMobile = useIsMobile();
  
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
  
  return (
    <>
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
        <CardDescription>Manage your profile and security settings</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div>
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <User className="mr-2 h-5 w-5 text-primary" />
              Profile Settings
            </h3>
            
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-4`}>
              <div className="col-span-1 flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                  <AvatarFallback>RK</AvatarFallback>
                </Avatar>
                <Button variant="outline" size="sm" className="mb-2">Change Photo</Button>
                <Button variant="link" size="sm" className="text-destructive">Remove</Button>
              </div>
              
              <div className={`${isMobile ? 'col-span-1' : 'col-span-2'} grid gap-4`}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Rajesh" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Kumar" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" defaultValue="rajesh.kumar@example.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+91 98765 43210" />
                </div>
              </div>
            </div>
          </div>
          
          <Separator />
          
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
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <Bell className="mr-2 h-5 w-5 text-primary" />
              Notification Preferences
            </h3>
            
            <Form {...form}>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="emailNotifications"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Email Notifications</FormLabel>
                        <FormDescription>
                          Receive notifications about orders, inquiries, and updates via email
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
                
                <FormField
                  control={form.control}
                  name="smsNotifications"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">SMS Notifications</FormLabel>
                        <FormDescription>
                          Receive important alerts via SMS
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
                
                <FormField
                  control={form.control}
                  name="marketplaceUpdates"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Marketplace Updates</FormLabel>
                        <FormDescription>
                          Receive notifications about new products and market trends
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
          
          <Separator />
          
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
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-4 flex items-center text-destructive">
              <LogOut className="mr-2 h-5 w-5" />
              Account Actions
            </h3>
            
            <div className="grid gap-4">
              <Button variant="outline" className="text-destructive hover:bg-destructive/10">Log Out</Button>
              <Button variant="outline" className="text-destructive hover:bg-destructive/10">Deactivate Account</Button>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button onClick={() => form.handleSubmit(values => console.log(values))()}>Save Settings</Button>
          </div>
        </div>
      </CardContent>
    </>
  );
};

export default ProfileSettings;
