
import React from 'react';
import { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from '@/hooks/use-mobile';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, ChevronDown, ShoppingCart, TruckIcon, Package, CheckCircle, Clock } from 'lucide-react';

// Mock orders data
const mockOrders = [
  {
    id: "ORD-2025-4578",
    date: "Apr 3, 2025",
    items: [
      { 
        name: "Premium Broiler Chicken", 
        quantity: 25, 
        unit: "kg", 
        price: 180,
        image: "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    total: 4500,
    status: "completed",
    seller: "Karnataka Poultry Farms"
  },
  {
    id: "ORD-2025-4432",
    date: "Apr 1, 2025",
    items: [
      { 
        name: "Organic Country Eggs", 
        quantity: 10, 
        unit: "dozen", 
        price: 70,
        image: "https://images.unsplash.com/photo-1569127959161-2b1297b2d9a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      { 
        name: "Layer Feed Premium Mix", 
        quantity: 1, 
        unit: "bag", 
        price: 1200,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    total: 1900,
    status: "processing",
    seller: "Telangana Egg Suppliers"
  },
  {
    id: "ORD-2025-4212",
    date: "Mar 28, 2025",
    items: [
      { 
        name: "Automatic Poultry Feeder", 
        quantity: 1, 
        unit: "unit", 
        price: 2500,
        image: "https://images.unsplash.com/photo-1543699565-003b8adda5fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    total: 2500,
    status: "shipped",
    seller: "Delhi Farm Equipment"
  }
];

// Status badge component
const OrderStatusBadge = ({ status }: { status: string }) => {
  let statusInfo = {
    icon: <Clock className="h-3 w-3 mr-1" />,
    bg: "bg-gray-100 text-gray-800 hover:bg-gray-100",
    label: "Processing"
  };
  
  if (status === "completed") {
    statusInfo = {
      icon: <CheckCircle className="h-3 w-3 mr-1" />,
      bg: "bg-green-100 text-green-800 hover:bg-green-100",
      label: "Completed"
    };
  } else if (status === "shipped") {
    statusInfo = {
      icon: <TruckIcon className="h-3 w-3 mr-1" />,
      bg: "bg-blue-100 text-blue-800 hover:bg-blue-100",
      label: "Shipped"
    };
  } else if (status === "processing") {
    statusInfo = {
      icon: <Package className="h-3 w-3 mr-1" />,
      bg: "bg-amber-100 text-amber-800 hover:bg-amber-100",
      label: "Processing"
    };
  }
  
  return (
    <Badge className={statusInfo.bg}>
      {statusInfo.icon}
      {statusInfo.label}
    </Badge>
  );
};

const ProfileOrders = () => {
  const isMobile = useIsMobile();
  
  return (
    <>
      <CardHeader>
        <CardTitle>Orders & Transactions</CardTitle>
        <CardDescription>Your purchase history and order status</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="purchases">
          <TabsList className="mb-4">
            <TabsTrigger value="purchases">Purchases</TabsTrigger>
            <TabsTrigger value="sales">Sales</TabsTrigger>
          </TabsList>
          
          <TabsContent value="purchases">
            <div className="grid gap-4">
              {mockOrders.map((order) => (
                <div key={order.id} className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-4 flex justify-between items-center flex-wrap gap-2">
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-gray-500">{order.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <OrderStatusBadge status={order.status} />
                      <Button variant="outline" size="sm" className="h-8">
                        <ExternalLink className="h-3.5 w-3.5 mr-1" /> 
                        Details
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    {order.items.map((item, idx) => (
                      <div key={idx} className={`flex items-center gap-3 ${idx > 0 ? 'mt-3 pt-3 border-t' : ''}`}>
                        <div className="w-16 h-16 rounded overflow-hidden bg-gray-100">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-600">
                            {item.quantity} {item.unit} × ₹{item.price}
                          </p>
                        </div>
                        <div className="font-medium">
                          ₹{item.quantity * item.price}
                        </div>
                      </div>
                    ))}
                    
                    <div className="flex justify-between items-center mt-4 pt-3 border-t">
                      <div>
                        <p className="text-sm text-gray-600">Seller: <span className="font-medium">{order.seller}</span></p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Order Total:</p>
                        <p className="text-lg font-bold text-primary">₹{order.total}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="sales">
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">No Sales Yet</h3>
              <p className="text-gray-500 mb-4">You haven't made any sales yet. List your products to start selling.</p>
              <Button>Create a Listing</Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </>
  );
};

export default ProfileOrders;
