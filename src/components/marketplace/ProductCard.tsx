
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Star, ShoppingCart, MapPin, Shield, Check } from 'lucide-react';

interface ProductProps {
  product: {
    id: number;
    title: string;
    price: number;
    priceUnit: string;
    location: string;
    image: string;
    rating: number;
    reviews: number;
    seller: string;
    isVerified?: boolean;
    discount?: number;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <Badge variant="secondary" className="bg-white/90 text-primary font-medium">
            ₹{product.price} {product.priceUnit}
          </Badge>
          {product.discount && (
            <Badge variant="destructive" className="bg-red-500 text-white">
              {product.discount}% OFF
            </Badge>
          )}
        </div>
        {product.isVerified && (
          <div className="absolute top-2 left-2">
            <Badge variant="outline" className="bg-white/90 border-green-500 text-green-600 flex items-center gap-1">
              <Shield className="h-3 w-3" /> Verified
            </Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-base line-clamp-2 mb-1 group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        <p className="text-sm text-gray-500 mb-2 flex items-center">
          {product.isVerified && <Check className="h-3 w-3 text-green-500 mr-1" />}
          {product.seller}
        </p>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center mr-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className={`h-4 w-4 ${star <= Math.round(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-sm font-medium ml-1">{product.rating}</span>
          </div>
          <div className="text-sm text-gray-500">
            {product.reviews} reviews
          </div>
        </div>
        
        <div className="text-xs text-gray-500 flex items-center">
          <MapPin className="h-3 w-3 mr-1 inline" />
          {product.location}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button className="flex-1 group" size="sm">
          <ShoppingCart className="h-4 w-4 mr-1 group-hover:scale-110 transition-transform" />
          Buy Now
        </Button>
        <Button variant="outline" size="sm" className="hover:bg-primary/5">
          <MessageSquare className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
