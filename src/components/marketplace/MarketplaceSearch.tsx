
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useIsMobile } from '@/hooks/use-mobile';

const MarketplaceSearch = () => {
  const isMobile = useIsMobile();
  const [priceRange, setPriceRange] = React.useState([0, 10000]);
  
  return (
    <div className="space-y-4">
      <div className="relative">
        <Input placeholder="Search products..." className="pl-10" />
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
      </div>
      
      <div className={`flex items-center justify-between ${isMobile ? 'flex-col gap-2' : 'flex-row'}`}>
        <h3 className="font-medium">Filters</h3>
        {!isMobile && <Button variant="ghost" size="sm" className="h-8">Clear All</Button>}
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-1 block">Product Category</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              <SelectItem value="live-birds">Live Birds</SelectItem>
              <SelectItem value="eggs">Eggs</SelectItem>
              <SelectItem value="feed">Poultry Feed</SelectItem>
              <SelectItem value="equipment">Equipment & Supplies</SelectItem>
              <SelectItem value="medicine">Medicines & Vaccines</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-1 block">Location</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All India" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All India</SelectItem>
              <SelectItem value="north">North India</SelectItem>
              <SelectItem value="south">South India</SelectItem>
              <SelectItem value="east">East India</SelectItem>
              <SelectItem value="west">West India</SelectItem>
              <SelectItem value="central">Central India</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <label className="text-sm font-medium">Price Range</label>
            <span className="text-sm text-gray-500">₹{priceRange[0]} - ₹{priceRange[1]}</span>
          </div>
          <Slider 
            defaultValue={[0, 10000]} 
            max={10000} 
            step={100}
            onValueChange={(value) => setPriceRange(value)}
          />
        </div>
        
        <div>
          <label className="text-sm font-medium mb-1 block">Sort By</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Most Popular" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {isMobile && (
          <div className="pt-2">
            <Button className="w-full">Apply Filters</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketplaceSearch;
