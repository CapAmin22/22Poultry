
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Star, ShoppingCart, MapPin } from 'lucide-react';

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
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-white/90 text-primary font-medium">
            ₹{product.price} {product.priceUnit}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-base line-clamp-2 mb-1 group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{product.seller}</p>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center mr-3">
            <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
            <span className="text-sm font-medium">{product.rating}</span>
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
