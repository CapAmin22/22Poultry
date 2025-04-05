
import React, { useState } from 'react';
import { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { useIsMobile } from '@/hooks/use-mobile';
import { useProfile } from '@/hooks/use-profile';
import { useToast } from '@/components/ui/use-toast';
import { format } from 'date-fns';
import { ChevronDown, ChevronUp, Check, X, Loader2 } from 'lucide-react';

const ProfileInfo = () => {
  const isMobile = useIsMobile();
  const { profile, isLoading, error, updateProfile } = useProfile();
  const { toast } = useToast();
  
  const [editMode, setEditMode] = useState(false);
  const [showAllFields, setShowAllFields] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  // Form fields
  const [formData, setFormData] = useState({
    contact_phone: '',
    contact_email: '',
    business_type: '',
    business_name: '',
    location: '',
    bio: '',
  });
  
  // Update form data when profile is loaded
  React.useEffect(() => {
    if (profile) {
      setFormData({
        contact_phone: profile.contact_phone || '',
        contact_email: profile.contact_email || '',
        business_type: profile.business_type || '',
        business_name: profile.business_name || '',
        location: profile.location || '',
        bio: profile.bio || '',
      });
    }
  }, [profile]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCancel = () => {
    // Reset form data to profile values
    if (profile) {
      setFormData({
        contact_phone: profile.contact_phone || '',
        contact_email: profile.contact_email || '',
        business_type: profile.business_type || '',
        business_name: profile.business_name || '',
        location: profile.location || '',
        bio: profile.bio || '',
      });
    }
    setEditMode(false);
  };
  
  const handleSave = async () => {
    setIsSaving(true);
    try {
      const { error } = await updateProfile(formData);
      
      if (error) {
        toast({
          title: "Update failed",
          description: error.message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Profile updated",
          description: "Your profile information has been updated successfully."
        });
        setEditMode(false);
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      toast({
        title: "Update failed",
        description: "An error occurred while updating your profile. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSaving(false);
    }
  };
  
  if (isLoading) {
    return (
      <>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Your personal and business information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-10">
            <div className="text-center space-y-3">
              <Loader2 className="w-10 h-10 animate-spin mx-auto text-primary" />
              <p className="text-gray-500">Loading profile information...</p>
            </div>
          </div>
        </CardContent>
      </>
    );
  }
  
  if (error) {
    return (
      <>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Your personal and business information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-10">
            <div className="text-center space-y-3">
              <X className="w-10 h-10 mx-auto text-destructive" />
              <p className="text-gray-700 font-medium">Failed to load profile</p>
              <p className="text-gray-500">{error.message}</p>
              <Button 
                variant="outline" 
                onClick={() => window.location.reload()}
              >
                Retry
              </Button>
            </div>
          </div>
        </CardContent>
      </>
    );
  }
  
  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Your personal and business information</CardDescription>
        </div>
        {!editMode ? (
          <Button variant="outline" onClick={() => setEditMode(true)}>
            Edit Profile
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Save
                </>
              )}
            </Button>
          </div>
        )}
      </CardHeader>
      
      <CardContent>
        <div className="space-y-6">
          <div className="grid gap-6">
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
              <div>
                <Label htmlFor="contact_phone">Phone Number</Label>
                {editMode ? (
                  <Input 
                    id="contact_phone" 
                    name="contact_phone"
                    value={formData.contact_phone} 
                    onChange={handleInputChange} 
                    placeholder="Enter your phone number"
                  />
                ) : (
                  <div className="mt-2 p-2 border rounded-md bg-gray-50">
                    {profile?.contact_phone || "Not specified"}
                  </div>
                )}
              </div>
              
              <div>
                <Label htmlFor="contact_email">Email Address</Label>
                {editMode ? (
                  <Input 
                    id="contact_email" 
                    name="contact_email"
                    value={formData.contact_email} 
                    onChange={handleInputChange} 
                    placeholder="Enter your email address"
                  />
                ) : (
                  <div className="mt-2 p-2 border rounded-md bg-gray-50">
                    {profile?.contact_email || "Not specified"}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div className="grid gap-6">
            <h3 className="text-lg font-medium">Business Information</h3>
            
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
              <div>
                <Label htmlFor="business_type">Business Type</Label>
                {editMode ? (
                  <Input 
                    id="business_type" 
                    name="business_type"
                    value={formData.business_type} 
                    onChange={handleInputChange} 
                    placeholder="E.g., Farm, Processing Unit, Retailer"
                  />
                ) : (
                  <div className="mt-2 p-2 border rounded-md bg-gray-50">
                    {profile?.business_type || "Not specified"}
                  </div>
                )}
              </div>
              
              <div>
                <Label htmlFor="business_name">Business Name</Label>
                {editMode ? (
                  <Input 
                    id="business_name" 
                    name="business_name"
                    value={formData.business_name} 
                    onChange={handleInputChange} 
                    placeholder="Enter your business name"
                  />
                ) : (
                  <div className="mt-2 p-2 border rounded-md bg-gray-50">
                    {profile?.business_name || "Not specified"}
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <Label htmlFor="location">Location</Label>
              {editMode ? (
                <Input 
                  id="location" 
                  name="location"
                  value={formData.location} 
                  onChange={handleInputChange} 
                  placeholder="Enter your location"
                />
              ) : (
                <div className="mt-2 p-2 border rounded-md bg-gray-50">
                  {profile?.location || "Not specified"}
                </div>
              )}
            </div>
          </div>
          
          {showAllFields && (
            <>
              <Separator />
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Account Information</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Account Created</Label>
                    <div className="mt-2 p-2 border rounded-md bg-gray-50">
                      {profile?.created_at 
                        ? format(new Date(profile.created_at), 'dd MMM yyyy')
                        : "Unknown"}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          
          <Separator />
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">About You</h3>
            <div>
              <Label htmlFor="bio">Bio</Label>
              {editMode ? (
                <Textarea 
                  id="bio" 
                  name="bio"
                  value={formData.bio || ''} 
                  onChange={handleInputChange} 
                  placeholder="Tell others about you and your business"
                  className="h-32"
                />
              ) : (
                <div className="mt-2 p-2 border rounded-md bg-gray-50 min-h-[100px]">
                  {profile?.bio || "No bio provided"}
                </div>
              )}
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            className="w-full" 
            onClick={() => setShowAllFields(!showAllFields)}
          >
            {showAllFields ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" />
                Show More
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </>
  );
};

export default ProfileInfo;
