
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MapPin, Mail, Phone, ExternalLink, Search, Filter } from 'lucide-react';

const Network = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">Stakeholder Network</h1>
        
        <p className="text-gray-600 mb-8">
          Connect with farmers, traders, suppliers, processors, and industry experts to collaborate, share knowledge, and grow together.
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Join India's Premier Poultry Network</h2>
            <p className="text-gray-600 mb-6">
              Create your profile, showcase your expertise, connect with other stakeholders, and discover opportunities for growth and collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Create Profile</Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="directory">
          <TabsList className="mb-8">
            <TabsTrigger value="directory">Directory</TabsTrigger>
            <TabsTrigger value="events">Events & Meetups</TabsTrigger>
            <TabsTrigger value="discussions">Discussion Forums</TabsTrigger>
            <TabsTrigger value="jobs">Job Board</TabsTrigger>
          </TabsList>
          
          <TabsContent value="directory">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Find Stakeholders</CardTitle>
                  <CardDescription>
                    Search for industry professionals, suppliers, and service providers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="col-span-1 md:col-span-2">
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                        <Input 
                          type="search" 
                          placeholder="Search by name, company, expertise..." 
                          className="pl-9"
                        />
                      </div>
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="farmers">Farmers</SelectItem>
                          <SelectItem value="suppliers">Suppliers</SelectItem>
                          <SelectItem value="processors">Processors</SelectItem>
                          <SelectItem value="traders">Traders</SelectItem>
                          <SelectItem value="experts">Experts</SelectItem>
                          <SelectItem value="veterinarians">Veterinarians</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="north">North India</SelectItem>
                          <SelectItem value="south">South India</SelectItem>
                          <SelectItem value="east">East India</SelectItem>
                          <SelectItem value="west">West India</SelectItem>
                          <SelectItem value="central">Central India</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <Filter size={18} className="mr-2" />
                      <span className="font-medium">Active Filters:</span>
                      <Badge variant="outline" className="ml-2 px-2 py-1">
                        North India <button className="ml-1">×</button>
                      </Badge>
                    </div>
                    <Button variant="link" size="sm" className="h-auto p-0">
                      Clear All Filters
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Profile Card 1 */}
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center">
                            <Avatar className="h-12 w-12 mr-3">
                              <AvatarImage src="/placeholder.svg" alt="Profile" />
                              <AvatarFallback>RK</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">Rajesh Kumar</h3>
                              <p className="text-sm text-gray-500">Poultry Farm Owner</p>
                            </div>
                          </div>
                          <Badge>Farmer</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start">
                            <MapPin size={14} className="mr-2 mt-0.5 shrink-0 text-gray-500" />
                            <span>Gurugram, Haryana</span>
                          </div>
                          <div className="flex items-start">
                            <Mail size={14} className="mr-2 mt-0.5 shrink-0 text-gray-500" />
                            <span>rajesh@example.com</span>
                          </div>
                          <p className="line-clamp-2 text-gray-600 mt-2">
                            Owner of Kumar Poultry Farms with 15 years of experience in broiler farming with a capacity of 20,000 birds.
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">View Profile</Button>
                      </CardFooter>
                    </Card>
                    
                    {/* Profile Card 2 */}
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center">
                            <Avatar className="h-12 w-12 mr-3">
                              <AvatarImage src="/placeholder.svg" alt="Profile" />
                              <AvatarFallback>SP</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">Sanjay Patel</h3>
                              <p className="text-sm text-gray-500">Feed Supplier</p>
                            </div>
                          </div>
                          <Badge>Supplier</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start">
                            <MapPin size={14} className="mr-2 mt-0.5 shrink-0 text-gray-500" />
                            <span>Ahmedabad, Gujarat</span>
                          </div>
                          <div className="flex items-start">
                            <Mail size={14} className="mr-2 mt-0.5 shrink-0 text-gray-500" />
                            <span>sanjay@example.com</span>
                          </div>
                          <p className="line-clamp-2 text-gray-600 mt-2">
                            Proprietor of Patel Feeds, supplying high-quality poultry feed across western India with a production capacity of 50 tons per day.
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">View Profile</Button>
                      </CardFooter>
                    </Card>
                    
                    {/* Profile Card 3 */}
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center">
                            <Avatar className="h-12 w-12 mr-3">
                              <AvatarImage src="/placeholder.svg" alt="Profile" />
                              <AvatarFallback>PD</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">Dr. Priya Desai</h3>
                              <p className="text-sm text-gray-500">Poultry Veterinarian</p>
                            </div>
                          </div>
                          <Badge>Expert</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start">
                            <MapPin size={14} className="mr-2 mt-0.5 shrink-0 text-gray-500" />
                            <span>Pune, Maharashtra</span>
                          </div>
                          <div className="flex items-start">
                            <Mail size={14} className="mr-2 mt-0.5 shrink-0 text-gray-500" />
                            <span>priya@example.com</span>
                          </div>
                          <p className="line-clamp-2 text-gray-600 mt-2">
                            Specialized veterinarian with 10 years of experience in poultry health management, disease diagnosis, and prevention strategies.
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">View Profile</Button>
                      </CardFooter>
                    </Card>
                    
                    {/* Profile Card 4 */}
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center">
                            <Avatar className="h-12 w-12 mr-3">
                              <AvatarImage src="/placeholder.svg" alt="Profile" />
                              <AvatarFallback>AR</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">Arun Reddy</h3>
                              <p className="text-sm text-gray-500">Egg Processor</p>
                            </div>
                          </div>
                          <Badge>Processor</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start">
                            <MapPin size={14} className="mr-2 mt-0.5 shrink-0 text-gray-500" />
                            <span>Hyderabad, Telangana</span>
                          </div>
                          <div className="flex items-start">
                            <Mail size={14} className="mr-2 mt-0.5 shrink-0 text-gray-500" />
                            <span>arun@example.com</span>
                          </div>
                          <p className="line-clamp-2 text-gray-600 mt-2">
                            CEO of Reddy Egg Products, specializing in egg powder production and value-added egg products for the bakery and confectionery industry.
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">View Profile</Button>
                      </CardFooter>
                    </Card>
                    
                    {/* Profile Card 5 */}
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center">
                            <Avatar className="h-12 w-12 mr-3">
                              <AvatarImage src="/placeholder.svg" alt="Profile" />
                              <AvatarFallback>VG</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">Vivek Gupta</h3>
                              <p className="text-sm text-gray-500">Poultry Trader</p>
                            </div>
                          </div>
                          <Badge>Trader</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start">
                            <MapPin size={14} className="mr-2 mt-0.5 shrink-0 text-gray-500" />
                            <span>Lucknow, Uttar Pradesh</span>
                          </div>
                          <div className="flex items-start">
                            <Mail size={14} className="mr-2 mt-0.5 shrink-0 text-gray-500" />
                            <span>vivek@example.com</span>
                          </div>
                          <p className="line-clamp-2 text-gray-600 mt-2">
                            Wholesale trader connecting poultry farmers with retailers and institutional buyers across northern India for 12 years.
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">View Profile</Button>
                      </CardFooter>
                    </Card>
                    
                    {/* Profile Card 6 */}
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center">
                            <Avatar className="h-12 w-12 mr-3">
                              <AvatarImage src="/placeholder.svg" alt="Profile" />
                              <AvatarFallback>MS</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">Prof. Manoj Singh</h3>
                              <p className="text-sm text-gray-500">Poultry Researcher</p>
                            </div>
                          </div>
                          <Badge>Expert</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start">
                            <MapPin size={14} className="mr-2 mt-0.5 shrink-0 text-gray-500" />
                            <span>Ludhiana, Punjab</span>
                          </div>
                          <div className="flex items-start">
                            <Mail size={14} className="mr-2 mt-0.5 shrink-0 text-gray-500" />
                            <span>manoj@example.com</span>
                          </div>
                          <p className="line-clamp-2 text-gray-600 mt-2">
                            Professor of Poultry Science at Punjab Agricultural University with research focus on nutrition and genetic improvement of indigenous poultry breeds.
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">View Profile</Button>
                      </CardFooter>
                    </Card>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button variant="outline">Load More</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Featured Organizations</CardTitle>
                  <CardDescription>
                    Key institutions and organizations in India's poultry sector
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Poultry Federation of India</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-gray-600 mb-3">
                          National body representing poultry farmers, producers, and processors across India.
                        </p>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center">
                            <Phone size={14} className="mr-2 text-gray-500" />
                            <span>+91 11 2345 6789</span>
                          </div>
                          <div className="flex items-center">
                            <Mail size={14} className="mr-2 text-gray-500" />
                            <span>info@poultry-federation.org</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <a href="#" className="flex items-center justify-center">
                            Visit Website <ExternalLink size={14} className="ml-2" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Central Poultry Development Organization</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-gray-600 mb-3">
                          Government organization focused on poultry development, training, and research.
                        </p>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center">
                            <Phone size={14} className="mr-2 text-gray-500" />
                            <span>+91 80 2847 1562</span>
                          </div>
                          <div className="flex items-center">
                            <Mail size={14} className="mr-2 text-gray-500" />
                            <span>director@cpdo.gov.in</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <a href="#" className="flex items-center justify-center">
                            Visit Website <ExternalLink size={14} className="ml-2" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Indian Veterinary Research Institute</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-gray-600 mb-3">
                          Premier research institution for animal health and disease management in poultry.
                        </p>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center">
                            <Phone size={14} className="mr-2 text-gray-500" />
                            <span>+91 581 2302 188</span>
                          </div>
                          <div className="flex items-center">
                            <Mail size={14} className="mr-2 text-gray-500" />
                            <span>director@ivri.res.in</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <a href="#" className="flex items-center justify-center">
                            Visit Website <ExternalLink size={14} className="ml-2" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="events">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Industry Events</CardTitle>
                  <CardDescription>
                    Conferences, exhibitions, and networking opportunities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Card>
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 p-4 bg-gray-50 flex flex-col justify-center items-center text-center">
                          <span className="text-3xl font-bold text-poultry-blue">15-17</span>
                          <span className="font-medium">July 2023</span>
                        </div>
                        <div className="md:w-3/4 p-4">
                          <Badge className="mb-2">Conference & Expo</Badge>
                          <h3 className="text-lg font-semibold mb-1">International Poultry Expo India</h3>
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <MapPin size={14} className="mr-1" />
                            <span>Bangalore International Exhibition Centre, Bengaluru</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">
                            The largest poultry exhibition in South Asia featuring 200+ exhibitors, technical seminars, 
                            product launches, and networking opportunities for industry professionals.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Button>Register</Button>
                            <Button variant="outline">View Details</Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                    
                    <Card>
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 p-4 bg-gray-50 flex flex-col justify-center items-center text-center">
                          <span className="text-3xl font-bold text-poultry-blue">5-6</span>
                          <span className="font-medium">August 2023</span>
                        </div>
                        <div className="md:w-3/4 p-4">
                          <Badge className="mb-2">Conference</Badge>
                          <h3 className="text-lg font-semibold mb-1">National Poultry Health Summit</h3>
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <MapPin size={14} className="mr-1" />
                            <span>The Leela Palace, New Delhi</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">
                            Conference focusing on disease prevention, biosecurity, and health management 
                            strategies featuring presentations from leading veterinarians and researchers.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Button>Register</Button>
                            <Button variant="outline">View Details</Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                    
                    <Card>
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 p-4 bg-gray-50 flex flex-col justify-center items-center text-center">
                          <span className="text-3xl font-bold text-poultry-blue">20</span>
                          <span className="font-medium">August 2023</span>
                        </div>
                        <div className="md:w-3/4 p-4">
                          <Badge className="mb-2">Networking</Badge>
                          <h3 className="text-lg font-semibold mb-1">Poultry Farmers Meetup - Mumbai</h3>
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <MapPin size={14} className="mr-1" />
                            <span>Hotel Sea Princess, Mumbai</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">
                            Regional networking event for poultry farmers and stakeholders in Maharashtra 
                            to discuss local challenges, share best practices, and build business relationships.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Button>Register</Button>
                            <Button variant="outline">View Details</Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="discussions">
            <Card>
              <CardHeader>
                <CardTitle>Discussion Forums</CardTitle>
                <CardDescription>
                  Engage in discussions with industry peers on various topics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">All Topics</Button>
                      <Button variant="outline" size="sm">My Discussions</Button>
                      <Button variant="outline" size="sm">Popular</Button>
                    </div>
                    <Button>Start New Discussion</Button>
                  </div>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <CardTitle className="text-lg">Managing Heat Stress in Summer Months</CardTitle>
                        <Badge>Active</Badge>
                      </div>
                      <CardDescription>Started by Rajesh Kumar • 2 days ago</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-gray-600 mb-2">
                        With the rising temperatures across North India, what strategies are fellow farmers 
                        adopting to manage heat stress in their poultry flocks? I'm particularly interested 
                        in cost-effective cooling solutions for small farms.
                      </p>
                      <div className="flex items-center text-sm text-gray-500 gap-4">
                        <span>12 Responses</span>
                        <span>43 Views</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Join Discussion</Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <CardTitle className="text-lg">Fluctuating Feed Prices - Strategies to Mitigate Impact</CardTitle>
                        <Badge>Active</Badge>
                      </div>
                      <CardDescription>Started by Priya Desai • 5 days ago</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-gray-600 mb-2">
                        Feed prices have been volatile over the past few months. Let's discuss strategies 
                        to manage costs including bulk purchasing, alternative ingredients, and feed formulation adjustments.
                      </p>
                      <div className="flex items-center text-sm text-gray-500 gap-4">
                        <span>24 Responses</span>
                        <span>76 Views</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Join Discussion</Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <CardTitle className="text-lg">Export Opportunities for Indian Poultry Products</CardTitle>
                        <Badge>Active</Badge>
                      </div>
                      <CardDescription>Started by Arun Reddy • 1 week ago</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-gray-600 mb-2">
                        I'd like to explore export opportunities for processed poultry products to Middle Eastern 
                        markets. Are there any processors or exporters who can share their experiences with certification requirements and market entry strategies?
                      </p>
                      <div className="flex items-center text-sm text-gray-500 gap-4">
                        <span>18 Responses</span>
                        <span>62 Views</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Join Discussion</Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <CardTitle className="text-lg">Alternatives to Antibiotics in Poultry Production</CardTitle>
                        <Badge>Active</Badge>
                      </div>
                      <CardDescription>Started by Prof. Manoj Singh • 2 weeks ago</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-gray-600 mb-2">
                        With increasing regulations on antibiotic use in poultry, what alternatives are 
                        farmers finding effective? Let's discuss probiotics, prebiotics, herbal supplements, and management practices that can reduce reliance on antibiotics.
                      </p>
                      <div className="flex items-center text-sm text-gray-500 gap-4">
                        <span>35 Responses</span>
                        <span>128 Views</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Join Discussion</Button>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Discussions</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="jobs">
            <Card>
              <CardHeader>
                <CardTitle>Job Board</CardTitle>
                <CardDescription>
                  Career opportunities in the poultry sector
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">All Jobs</Button>
                      <Button variant="outline" size="sm">Full-time</Button>
                      <Button variant="outline" size="sm">Part-time</Button>
                      <Button variant="outline" size="sm">Contract</Button>
                    </div>
                    <Button>Post a Job</Button>
                  </div>
                  
                  <Card>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">Poultry Farm Manager</h3>
                          <p className="text-sm text-gray-600">Sunrise Poultry Farms</p>
                        </div>
                        <Badge>Full-time</Badge>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-3 flex-wrap gap-3">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          <span>Karnal, Haryana</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>Posted 3 days ago</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Looking for an experienced Farm Manager to oversee operations of a 50,000-bird layer farm. 
                        Responsibilities include flock management, staff supervision, production optimization, and record keeping.
                      </p>
                      <Button variant="outline" size="sm">View Job Details</Button>
                    </div>
                  </Card>
                  
                  <Card>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">Poultry Nutritionist</h3>
                          <p className="text-sm text-gray-600">Premier Feeds Ltd.</p>
                        </div>
                        <Badge>Full-time</Badge>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-3 flex-wrap gap-3">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          <span>Coimbatore, Tamil Nadu</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>Posted 5 days ago</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Seeking a qualified Poultry Nutritionist to develop and optimize feed formulations, 
                        analyze feed quality, and provide nutritional consultation to customers.
                      </p>
                      <Button variant="outline" size="sm">View Job Details</Button>
                    </div>
                  </Card>
                  
                  <Card>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">Poultry Veterinarian</h3>
                          <p className="text-sm text-gray-600">Healthy Birds Poultry</p>
                        </div>
                        <Badge>Full-time</Badge>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-3 flex-wrap gap-3">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          <span>Hyderabad, Telangana</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>Posted 1 week ago</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Looking for a licensed Veterinarian with specialization in poultry health to oversee 
                        health management, disease prevention, treatment protocols, and vaccination programs.
                      </p>
                      <Button variant="outline" size="sm">View Job Details</Button>
                    </div>
                  </Card>
                  
                  <Card>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">Quality Control Technician</h3>
                          <p className="text-sm text-gray-600">Golden Egg Products</p>
                        </div>
                        <Badge>Full-time</Badge>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-3 flex-wrap gap-3">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          <span>Ludhiana, Punjab</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>Posted 10 days ago</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Hiring a QC Technician for our egg processing facility to conduct quality tests, ensure 
                        compliance with food safety standards, and maintain quality control documentation.
                      </p>
                      <Button variant="outline" size="sm">View Job Details</Button>
                    </div>
                  </Card>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Job Listings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Network;
