
import React from 'react';
import { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { PlusCircle, Edit, Trash, Eye, XCircle, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// Mock listings data
const mockListings = [
  {
    id: 1,
    title: "Premium Broiler Chicken - Farm Fresh",
    price: 180,
    priceUnit: "per kg",
    image: "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "active",
    views: 124,
    inquiries: 8,
    lastUpdated: "2 days ago"
  },
  {
    id: 2,
    title: "Organic Country Eggs - Directly from Farm",
    price: 70,
    priceUnit: "per dozen",
    image: "https://images.unsplash.com/photo-1569127959161-2b1297b2d9a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "active",
    views: 87,
    inquiries: 5,
    lastUpdated: "1 week ago"
  },
  {
    id: 3,
    title: "High Quality Poultry Feed - Bulk Discount",
    price: 1200,
    priceUnit: "per 50kg",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "inactive",
    views: 42,
    inquiries: 2,
    lastUpdated: "1 month ago"
  }
];

const ProfileListings = () => {
  const isMobile = useIsMobile();
  
  return (
    <>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>My Listings</CardTitle>
          <CardDescription>Manage your product listings</CardDescription>
        </div>
        <Button className="flex items-center gap-1">
          <PlusCircle className="h-4 w-4" />
          Add New Listing
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {mockListings.map((listing) => (
            <div key={listing.id} className="border rounded-lg overflow-hidden bg-white">
              <div className={`${isMobile ? 'flex flex-col' : 'flex'}`}>
                <div className={`${isMobile ? 'w-full h-48' : 'w-48 h-auto'} relative`}>
                  <img 
                    src={listing.image} 
                    alt={listing.title} 
                    className="w-full h-full object-cover"
                  />
                  <Badge 
                    className={`absolute top-2 left-2 ${
                      listing.status === 'active' ? 'bg-green-100 text-green-800 hover:bg-green-100' : 
                      'bg-gray-100 text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    {listing.status === 'active' ? (
                      <CheckCircle className="h-3 w-3 mr-1" />
                    ) : (
                      <XCircle className="h-3 w-3 mr-1" />
                    )}
                    {listing.status === 'active' ? 'Active' : 'Inactive'}
                  </Badge>
                </div>
                
                <div className="flex-1 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-base">{listing.title}</h3>
                    <p className="text-lg font-semibold text-primary">
                      ₹{listing.price} <span className="text-sm text-gray-500">{listing.priceUnit}</span>
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center border rounded-md p-2">
                      <p className="text-sm text-gray-500">Views</p>
                      <p className="font-medium">{listing.views}</p>
                    </div>
                    <div className="text-center border rounded-md p-2">
                      <p className="text-sm text-gray-500">Inquiries</p>
                      <p className="font-medium">{listing.inquiries}</p>
                    </div>
                    <div className="text-center border rounded-md p-2">
                      <p className="text-sm text-gray-500">Updated</p>
                      <p className="font-medium text-xs">{listing.lastUpdated}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Edit className="h-4 w-4" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1 text-destructive hover:text-destructive hover:bg-destructive/10">
                      <Trash className="h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </>
  );
};

export default ProfileListings;
