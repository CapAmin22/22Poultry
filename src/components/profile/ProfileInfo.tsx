
import React from 'react';
import { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Phone, Mail, Globe, FileText, Award, Calendar } from 'lucide-react';

// Mock user data
const mockUserDetails = {
  email: 'rajesh.kumar@example.com',
  phone: '+91 98765 43210',
  website: 'www.rajeshpoultry.com',
  businessType: 'Broiler Farming',
  farmSize: '5 acres',
  establishedYear: '2018',
  certifications: ['FSSAI Certified', 'Organic Farming', 'ISO 9001:2015'],
  description: 'At Rajesh Poultry Farm, we specialize in broiler farming with over 5 years of experience in the industry. Our farm maintains the highest standards of quality and animal welfare. We supply to major retailers and food service industries across Karnataka.'
};

const ProfileInfo = () => {
  const isMobile = useIsMobile();
  
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
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">{mockUserDetails.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{mockUserDetails.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-full">
                  <Globe className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Website</p>
                  <p className="font-medium">{mockUserDetails.website}</p>
                </div>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-3">Business Details</h3>
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
              <div className="flex items-center gap-3">
                <div className="bg-green-50 p-2 rounded-full">
                  <FileText className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Business Type</p>
                  <p className="font-medium">{mockUserDetails.businessType}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-50 p-2 rounded-full">
                  <Globe className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Farm Size</p>
                  <p className="font-medium">{mockUserDetails.farmSize}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-50 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Established</p>
                  <p className="font-medium">{mockUserDetails.establishedYear}</p>
                </div>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-3">Certifications</h3>
            <div className="flex flex-wrap gap-2">
              {mockUserDetails.certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2 bg-amber-50 px-3 py-1.5 rounded-full text-sm">
                  <Award className="h-4 w-4 text-amber-600" />
                  <span className="text-amber-800">{cert}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium mb-3">Business Description</h3>
            <p className="text-gray-700">{mockUserDetails.description}</p>
          </div>
          
          <div className="flex justify-end">
            <Button variant="outline">Update Information</Button>
          </div>
        </div>
      </CardContent>
    </>
  );
};

export default ProfileInfo;
