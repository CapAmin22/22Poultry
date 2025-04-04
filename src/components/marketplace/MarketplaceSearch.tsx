
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, CheckCircle, X, Tag, MapPin, SlidersHorizontal } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from '@/components/ui/badge';

const MarketplaceSearch = () => {
  const isMobile = useIsMobile();
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter]);
    }
  };
  
  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };
  
  const FiltersContent = () => (
    <div className="space-y-5">
      <div>
        <label className="text-sm font-medium mb-1 block text-gray-700">Product Category</label>
        <Select onValueChange={(value) => addFilter(`Category: ${value}`)}>
          <SelectTrigger className="focus:ring-primary">
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
        <label className="text-sm font-medium mb-1 block text-gray-700">Location</label>
        <Select onValueChange={(value) => addFilter(`Location: ${value}`)}>
          <SelectTrigger className="focus:ring-primary">
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
        <div className="flex justify-between mb-2">
          <label className="text-sm font-medium text-gray-700">Price Range</label>
          <span className="text-sm bg-gray-100 px-2 py-0.5 rounded text-primary font-medium">
            ₹{priceRange[0]} - ₹{priceRange[1]}
          </span>
        </div>
        <Slider 
          defaultValue={[0, 10000]} 
          max={10000} 
          step={100}
          onValueChange={(value) => setPriceRange(value)}
          className="my-4"
        />
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full mt-2"
          onClick={() => addFilter(`Price: ₹${priceRange[0]} - ₹${priceRange[1]}`)}
        >
          Apply Price Range
        </Button>
      </div>
      
      <div>
        <label className="text-sm font-medium mb-1 block text-gray-700">Sort By</label>
        <Select onValueChange={(value) => addFilter(`Sort: ${value}`)}>
          <SelectTrigger className="focus:ring-primary">
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
      
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <CheckCircle 
            className="h-4 w-4 text-primary cursor-pointer" 
            onClick={() => addFilter("Verified Sellers Only")}
          />
          <span>Verified Sellers Only</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <CheckCircle 
            className="h-4 w-4 text-primary cursor-pointer" 
            onClick={() => addFilter("Free Shipping")}
          />
          <span>Free Shipping</span>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="space-y-4">
      <div className="relative">
        <Input placeholder="Search products..." className="pl-10" />
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
      </div>
      
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {activeFilters.map((filter, index) => (
            <Badge key={index} variant="secondary" className="flex items-center gap-1">
              {filter}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => removeFilter(filter)}
              />
            </Badge>
          ))}
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-6 text-xs text-gray-500 hover:text-primary"
            onClick={() => setActiveFilters([])}
          >
            Clear All
          </Button>
        </div>
      )}
      
      {isMobile ? (
        <div className="flex gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="w-full flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter & Sort
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh]">
              <div className="pt-4">
                <h3 className="font-medium text-lg text-primary mb-4">Filters</h3>
                <FiltersContent />
                <Button className="w-full mt-6">
                  Apply Filters
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          
          <Button variant="outline" className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Sort
          </Button>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-primary">Filters</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 text-gray-500 hover:text-primary"
              onClick={() => setActiveFilters([])}
            >
              Clear All
            </Button>
          </div>
          
          <FiltersContent />
        </div>
      )}
    </div>
  );
};

export default MarketplaceSearch;
