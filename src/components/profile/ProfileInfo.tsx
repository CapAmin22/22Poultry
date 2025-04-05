
import React from 'react';
import { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Phone, Mail, Globe, FileText, Award, Calendar, MapPin, Building } from 'lucide-react';
import { useProfile } from '@/hooks/use-profile';
import { useNavigate } from 'react-router-dom';

const ProfileInfo = () => {
  const isMobile = useIsMobile();
  const { profile, isLoading } = useProfile();
  const navigate = useNavigate();
  
  if (isLoading || !profile) {
    return (
      <>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Your personal and business details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p>Loading profile information...</p>
          </div>
        </CardContent>
      </>
    );
  }
  
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.getFullYear().toString();
  };
  
  return (
    <>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>Your personal and business details</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Contact Information</h3>
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
              {profile.contact_phone && (
                <div className="flex items-center gap-3">
                  <div className="bg-blue-50 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{profile.contact_phone}</p>
                  </div>
                </div>
              )}
              
              {profile.contact_email && (
                <div className="flex items-center gap-3">
                  <div className="bg-blue-50 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{profile.contact_email}</p>
                  </div>
                </div>
              )}
              
              {/* Placeholder for website info - could be added to profile table in future */}
              <div className="flex items-center gap-3 opacity-50">
                <div className="bg-blue-50 p-2 rounded-full">
                  <Globe className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Website</p>
                  <p className="font-medium">Not added yet</p>
                </div>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-3">Business Details</h3>
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
              {profile.business_type && (
                <div className="flex items-center gap-3">
                  <div className="bg-green-50 p-2 rounded-full">
                    <FileText className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Business Type</p>
                    <p className="font-medium capitalize">{profile.business_type}</p>
                  </div>
                </div>
              )}
              
              {profile.business_name && (
                <div className="flex items-center gap-3">
                  <div className="bg-green-50 p-2 rounded-full">
                    <Building className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Business Name</p>
                    <p className="font-medium">{profile.business_name}</p>
                  </div>
                </div>
              )}
              
              {profile.location && (
                <div className="flex items-center gap-3">
                  <div className="bg-green-50 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{profile.location}</p>
                  </div>
                </div>
              )}
              
              <div className="flex items-center gap-3">
                <div className="bg-green-50 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Established</p>
                  <p className="font-medium">{formatDate(profile.created_at)}</p>
                </div>
              </div>
            </div>
          </div>
          
          <Separator />
          
          {/* Placeholder for certifications - to be implemented with real data later */}
          <div>
            <h3 className="text-lg font-medium mb-3">Certifications</h3>
            <div className="flex items-center justify-center p-8 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <div className="text-center">
                <Award className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600 mb-2">No certifications added yet</p>
                <Button variant="outline" size="sm">Add Certification</Button>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-3">Business Description</h3>
            {profile.bio ? (
              <p className="text-gray-700">{profile.bio}</p>
            ) : (
              <div className="p-8 bg-gray-50 rounded-lg border border-dashed border-gray-300 text-center">
                <p className="text-gray-600 mb-2">No business description added yet</p>
              </div>
            )}
          </div>
          
          <div className="flex justify-end">
            <Button variant="outline" onClick={() => navigate('/profile?tab=settings')}>
              Update Information
            </Button>
          </div>
        </div>
      </CardContent>
    </>
  );
};

export default ProfileInfo;
