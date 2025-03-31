
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import InfoCard from '@/components/ui/InfoCard';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Video, FileText, Users, Clock, Calendar } from 'lucide-react';

const Training = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">Training & Education</h1>
        
        <p className="text-gray-600 mb-8">
          Access expert-led courses, best practices, and resources to enhance your knowledge and skills in poultry farming, management, and business operations.
        </p>

        <Tabs defaultValue="courses">
          <TabsList className="mb-8">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="resources">Best Practices</TabsTrigger>
            <TabsTrigger value="webinars">Webinars</TabsTrigger>
            <TabsTrigger value="workshops">Workshops</TabsTrigger>
          </TabsList>
          
          <TabsContent value="courses">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="overflow-hidden flex flex-col">
                  <div className="relative">
                    <img 
                      src="/placeholder.svg" 
                      alt="Poultry Farm Management" 
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-3 right-3 bg-poultry-blue">Beginner</Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center mb-2">
                      <GraduationCap size={18} className="mr-2 text-poultry-blue" />
                      <span className="text-sm text-muted-foreground">8 Modules</span>
                      <Clock size={18} className="ml-4 mr-2 text-poultry-blue" />
                      <span className="text-sm text-muted-foreground">12 Hours</span>
                    </div>
                    <CardTitle>Poultry Farm Management Fundamentals</CardTitle>
                    <CardDescription>
                      Learn the essentials of managing a poultry farm efficiently, from housing to feed management.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        <strong>Instructor:</strong> Dr. Rajesh Kumar, Poultry Expert
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Key Topics:</strong> Farm setup, breed selection, housing systems, feeding practices, health management
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button className="w-full">Enroll Now</Button>
                  </CardFooter>
                </Card>
                
                <Card className="overflow-hidden flex flex-col">
                  <div className="relative">
                    <img 
                      src="/placeholder.svg" 
                      alt="Disease Prevention" 
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-3 right-3 bg-poultry-green">Intermediate</Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center mb-2">
                      <GraduationCap size={18} className="mr-2 text-poultry-green" />
                      <span className="text-sm text-muted-foreground">6 Modules</span>
                      <Clock size={18} className="ml-4 mr-2 text-poultry-green" />
                      <span className="text-sm text-muted-foreground">8 Hours</span>
                    </div>
                    <CardTitle>Disease Prevention & Biosecurity</CardTitle>
                    <CardDescription>
                      Comprehensive guide to preventing diseases and implementing biosecurity measures.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        <strong>Instructor:</strong> Dr. Meena Sharma, Veterinary Specialist
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Key Topics:</strong> Common diseases, vaccination protocols, biosecurity implementation, disease control
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button className="w-full">Enroll Now</Button>
                  </CardFooter>
                </Card>
                
                <Card className="overflow-hidden flex flex-col">
                  <div className="relative">
                    <img 
                      src="/placeholder.svg" 
                      alt="Poultry Business" 
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-3 right-3 bg-poultry-orange">Advanced</Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center mb-2">
                      <GraduationCap size={18} className="mr-2 text-poultry-orange" />
                      <span className="text-sm text-muted-foreground">10 Modules</span>
                      <Clock size={18} className="ml-4 mr-2 text-poultry-orange" />
                      <span className="text-sm text-muted-foreground">15 Hours</span>
                    </div>
                    <CardTitle>Poultry Business Economics & Marketing</CardTitle>
                    <CardDescription>
                      Learn strategies to maximize profitability and effectively market your poultry products.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        <strong>Instructor:</strong> Prof. Anil Gupta, Agricultural Economist
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Key Topics:</strong> Cost optimization, pricing strategies, market analysis, supply chain management, branding
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button className="w-full">Enroll Now</Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="text-center mt-8">
                <Button variant="outline">View All Courses</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="resources">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <InfoCard
                  title="Broiler Production Guide"
                  description="Comprehensive guide covering all aspects of commercial broiler production."
                  icon={<FileText size={24} className="text-poultry-blue" />}
                  actionLabel="Download Guide"
                  onAction={() => {}}
                />
                
                <InfoCard
                  title="Layer Management Manual"
                  description="Best practices for managing layer farms for optimal egg production."
                  icon={<FileText size={24} className="text-poultry-green" />}
                  actionLabel="Download Guide"
                  onAction={() => {}}
                />
                
                <InfoCard
                  title="Poultry Health Handbook"
                  description="Essential reference for identifying and treating common poultry diseases."
                  icon={<FileText size={24} className="text-poultry-orange" />}
                  actionLabel="Download Guide"
                  onAction={() => {}}
                />
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Video Resources</CardTitle>
                  <CardDescription>
                    Instructional videos demonstrating best practices in poultry farming
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Card className="overflow-hidden">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-1/3 bg-gray-100 aspect-video flex items-center justify-center">
                          <Video size={48} className="text-gray-400" />
                        </div>
                        <div className="p-4 md:w-2/3">
                          <h3 className="font-semibold mb-1">Proper Brooding Techniques</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            Learn the correct methods for brooding chicks to ensure optimal growth and development.
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock size={14} className="mr-1" />
                            <span>15:28 minutes</span>
                          </div>
                          <Button variant="outline" size="sm" className="mt-3">Watch Video</Button>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="overflow-hidden">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-1/3 bg-gray-100 aspect-video flex items-center justify-center">
                          <Video size={48} className="text-gray-400" />
                        </div>
                        <div className="p-4 md:w-2/3">
                          <h3 className="font-semibold mb-1">Effective Vaccination Procedures</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            Step-by-step demonstration of proper vaccination techniques for poultry flocks.
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock size={14} className="mr-1" />
                            <span>22:10 minutes</span>
                          </div>
                          <Button variant="outline" size="sm" className="mt-3">Watch Video</Button>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="overflow-hidden">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-1/3 bg-gray-100 aspect-video flex items-center justify-center">
                          <Video size={48} className="text-gray-400" />
                        </div>
                        <div className="p-4 md:w-2/3">
                          <h3 className="font-semibold mb-1">Feed Formulation Basics</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            Learn how to formulate cost-effective and nutritionally balanced poultry feed.
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock size={14} className="mr-1" />
                            <span>18:45 minutes</span>
                          </div>
                          <Button variant="outline" size="sm" className="mt-3">Watch Video</Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View All Videos</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="webinars">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Webinars</CardTitle>
                  <CardDescription>
                    Register for these live online sessions with industry experts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <Badge className="mb-2">Upcoming</Badge>
                            <CardTitle className="text-lg">Advanced Poultry Nutrition Strategies</CardTitle>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center text-sm text-gray-500 mb-1">
                              <Calendar size={14} className="mr-1" />
                              <span>June 20, 2023</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock size={14} className="mr-1" />
                              <span>2:00 PM IST</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-3">
                          Learn about the latest research and developments in poultry nutrition to improve feed efficiency and bird performance.
                        </p>
                        <div className="flex items-center mb-4">
                          <img src="/placeholder.svg" alt="Speaker" className="w-10 h-10 rounded-full mr-3" />
                          <div>
                            <p className="font-medium">Dr. Sunil Pathak</p>
                            <p className="text-sm text-gray-500">Poultry Nutrition Specialist, ICAR</p>
                          </div>
                        </div>
                        <Button>Register Now</Button>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <Badge className="mb-2">Upcoming</Badge>
                            <CardTitle className="text-lg">Climate Adaptation for Poultry Farms</CardTitle>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center text-sm text-gray-500 mb-1">
                              <Calendar size={14} className="mr-1" />
                              <span>June 25, 2023</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock size={14} className="mr-1" />
                              <span>3:30 PM IST</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-3">
                          Strategies to adapt poultry operations for changing climate conditions and extreme weather events.
                        </p>
                        <div className="flex items-center mb-4">
                          <img src="/placeholder.svg" alt="Speaker" className="w-10 h-10 rounded-full mr-3" />
                          <div>
                            <p className="font-medium">Dr. Priya Sharma</p>
                            <p className="text-sm text-gray-500">Environmental Scientist, Climate Research Institute</p>
                          </div>
                        </div>
                        <Button>Register Now</Button>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Past Webinar Recordings</CardTitle>
                  <CardDescription>
                    Access recordings of previous webinar sessions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <div className="p-4">
                        <h3 className="font-semibold mb-1">Modern Poultry Housing Systems</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Overview of modern housing designs for optimal bird welfare and production efficiency.
                        </p>
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar size={14} className="mr-1" />
                          <span>May 12, 2023</span>
                          <Clock size={14} className="ml-3 mr-1" />
                          <span>75 minutes</span>
                        </div>
                        <Button variant="outline" size="sm">Watch Recording</Button>
                      </div>
                    </Card>
                    
                    <Card>
                      <div className="p-4">
                        <h3 className="font-semibold mb-1">Organic Poultry Certification</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Requirements and process for obtaining organic certification for poultry farms.
                        </p>
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar size={14} className="mr-1" />
                          <span>April 28, 2023</span>
                          <Clock size={14} className="ml-3 mr-1" />
                          <span>90 minutes</span>
                        </div>
                        <Button variant="outline" size="sm">Watch Recording</Button>
                      </div>
                    </Card>
                    
                    <Card>
                      <div className="p-4">
                        <h3 className="font-semibold mb-1">Export Opportunities for Indian Poultry</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Exploring international markets and compliance requirements for poultry exporters.
                        </p>
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar size={14} className="mr-1" />
                          <span>April 15, 2023</span>
                          <Clock size={14} className="ml-3 mr-1" />
                          <span>60 minutes</span>
                        </div>
                        <Button variant="outline" size="sm">Watch Recording</Button>
                      </div>
                    </Card>
                    
                    <Card>
                      <div className="p-4">
                        <h3 className="font-semibold mb-1">Technology Integration in Poultry Farming</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          Implementation of IoT, automation, and data analytics in modern poultry operations.
                        </p>
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar size={14} className="mr-1" />
                          <span>March 30, 2023</span>
                          <Clock size={14} className="ml-3 mr-1" />
                          <span>80 minutes</span>
                        </div>
                        <Button variant="outline" size="sm">Watch Recording</Button>
                      </div>
                    </Card>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View All Recordings</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="workshops">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Workshops & Training Programs</CardTitle>
                  <CardDescription>
                    In-person training opportunities across India
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <Badge className="mb-2 bg-poultry-green">Registration Open</Badge>
                            <CardTitle className="text-lg">Hands-on Poultry Health Management</CardTitle>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center text-sm text-gray-500 mb-1">
                              <Calendar size={14} className="mr-1" />
                              <span>July 10-12, 2023</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Users size={14} className="mr-1" />
                              <span>30 Participants</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center mb-3">
                          <Badge variant="outline" className="mr-2">New Delhi</Badge>
                          <Badge variant="outline">3 Days</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          Practical workshop covering disease diagnosis, treatment, vaccination, and preventive healthcare for poultry flocks.
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">₹5,000 per participant</span>
                          <Button>Register</Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <Badge className="mb-2 bg-poultry-green">Registration Open</Badge>
                            <CardTitle className="text-lg">Commercial Broiler Production Masterclass</CardTitle>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center text-sm text-gray-500 mb-1">
                              <Calendar size={14} className="mr-1" />
                              <span>July 18-20, 2023</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Users size={14} className="mr-1" />
                              <span>25 Participants</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center mb-3">
                          <Badge variant="outline" className="mr-2">Hyderabad</Badge>
                          <Badge variant="outline">3 Days</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          Comprehensive training on commercial broiler production, including farm setup, management, nutrition, and marketing.
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">₹6,500 per participant</span>
                          <Button>Register</Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <Badge className="mb-2 bg-gray-500">Coming Soon</Badge>
                            <CardTitle className="text-lg">Poultry Feed Formulation Workshop</CardTitle>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center text-sm text-gray-500 mb-1">
                              <Calendar size={14} className="mr-1" />
                              <span>August 5-6, 2023</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Users size={14} className="mr-1" />
                              <span>20 Participants</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center mb-3">
                          <Badge variant="outline" className="mr-2">Pune</Badge>
                          <Badge variant="outline">2 Days</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          Hands-on training on formulating cost-effective and nutritionally balanced poultry feeds using locally available ingredients.
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">₹4,000 per participant</span>
                          <Button disabled>Registration Opens July 1</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Training;
