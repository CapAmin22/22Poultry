import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Calculator, ArrowRight, FileText, Building, Landmark } from 'lucide-react';
import InfoCard from '@/components/ui/InfoCard';

const Financial = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">Financial Assistance</h1>
        
        <p className="text-gray-600 mb-8">
          Explore loan options, government subsidies, and financial planning resources to support and grow your poultry business.
        </p>

        <Tabs defaultValue="loans">
          <TabsList className="mb-8">
            <TabsTrigger value="loans">Bank Loans</TabsTrigger>
            <TabsTrigger value="gov-schemes">Government Schemes</TabsTrigger>
            <TabsTrigger value="calculators">Financial Calculators</TabsTrigger>
            <TabsTrigger value="guides">Financial Guides</TabsTrigger>
          </TabsList>
          
          <TabsContent value="loans">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <InfoCard
                  title="Agricultural Loans"
                  description="Low-interest loans specific to agricultural development, including poultry farming."
                  icon={<Landmark size={24} className="text-poultry-blue" />}
                  actionLabel="Explore Options"
                  onAction={() => {}}
                />
                
                <InfoCard
                  title="MSME Loans"
                  description="Special loans for micro, small, and medium enterprises in the poultry sector."
                  icon={<Building size={24} className="text-poultry-green" />}
                  actionLabel="Explore Options"
                  onAction={() => {}}
                />
                
                <InfoCard
                  title="Equipment Financing"
                  description="Specialized loans for purchasing poultry equipment and technology."
                  icon={<FileText size={24} className="text-poultry-orange" />}
                  actionLabel="Explore Options"
                  onAction={() => {}}
                />
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Loan Eligibility & Requirements</CardTitle>
                  <CardDescription>
                    Common requirements for securing loans for poultry businesses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>General Eligibility Criteria</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Age: 21-65 years</li>
                          <li>Minimum 2 years of experience in poultry farming (for existing businesses)</li>
                          <li>Viable business plan (for new ventures)</li>
                          <li>Clear land ownership or lease documents</li>
                          <li>Good credit history (CIBIL score above 700 recommended)</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Required Documents</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>KYC documents (Aadhaar, PAN card, Voter ID)</li>
                          <li>Land documents (ownership deed or lease agreement)</li>
                          <li>Business plan with financial projections</li>
                          <li>Last 2-3 years' income tax returns (for existing businesses)</li>
                          <li>Bank statements for the last 6 months</li>
                          <li>Quotes/invoices for equipment or construction costs</li>
                          <li>Necessary licenses and permits for poultry farming</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Loan Terms & Conditions</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Loan amount: ₹50,000 to ₹2 crore (depending on the scale of operations)</li>
                          <li>Interest rates: 7-12% per annum (varies by bank and scheme)</li>
                          <li>Repayment period: 5-10 years with EMI options</li>
                          <li>Moratorium period: 6-12 months (depending on the type of poultry business)</li>
                          <li>Collateral: Generally required for loans above ₹10 lakhs</li>
                          <li>Processing fee: 0.5% to 2% of the loan amount</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Application Process</AccordionTrigger>
                      <AccordionContent>
                        <ol className="list-decimal pl-6 space-y-2">
                          <li>Select a suitable loan scheme based on your requirements</li>
                          <li>Prepare all required documents</li>
                          <li>Submit application to the bank/financial institution</li>
                          <li>Field inspection by bank officials (for loans above certain limits)</li>
                          <li>Loan approval (typically takes 2-4 weeks)</li>
                          <li>Disbursement of funds</li>
                        </ol>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Download Complete Eligibility Guide</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Participating Banks & Financial Institutions</CardTitle>
                  <CardDescription>
                    These institutions offer specialized loan products for the poultry sector
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Public Sector Banks</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span>State Bank of India</span>
                            <Button variant="link" size="sm" className="h-auto p-0">
                              Visit <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </li>
                          <li className="flex justify-between">
                            <span>Bank of Baroda</span>
                            <Button variant="link" size="sm" className="h-auto p-0">
                              Visit <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </li>
                          <li className="flex justify-between">
                            <span>Punjab National Bank</span>
                            <Button variant="link" size="sm" className="h-auto p-0">
                              Visit <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </li>
                          <li className="flex justify-between">
                            <span>Canara Bank</span>
                            <Button variant="link" size="sm" className="h-auto p-0">
                              Visit <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Specialized Institutions</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span>NABARD</span>
                            <Button variant="link" size="sm" className="h-auto p-0">
                              Visit <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </li>
                          <li className="flex justify-between">
                            <span>Small Industries Development Bank</span>
                            <Button variant="link" size="sm" className="h-auto p-0">
                              Visit <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </li>
                          <li className="flex justify-between">
                            <span>Regional Rural Banks</span>
                            <Button variant="link" size="sm" className="h-auto p-0">
                              Visit <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </li>
                          <li className="flex justify-between">
                            <span>Microfinance Institutions</span>
                            <Button variant="link" size="sm" className="h-auto p-0">
                              Visit <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="gov-schemes">
            <Card>
              <CardHeader>
                <CardTitle>Government Schemes for Poultry Farmers</CardTitle>
                <CardDescription>
                  Central and state government programs offering subsidies and support for poultry farming
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="scheme-1">
                      <AccordionTrigger>National Livestock Mission</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <p><strong>Implementing Agency:</strong> Department of Animal Husbandry, Dairying & Fisheries</p>
                          <p><strong>Eligibility:</strong> Individual farmers, SHGs, cooperatives, companies</p>
                          <p><strong>Benefits:</strong></p>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Up to 50% capital subsidy for establishing/modernizing poultry units</li>
                            <li>Support for feed infrastructure development</li>
                            <li>Assistance for breed improvement and disease control</li>
                            <li>Training and capacity building programs</li>
                          </ul>
                          <p><strong>How to Apply:</strong> Submit application to District Animal Husbandry Officer</p>
                          <Button variant="outline" size="sm">Download Guidelines</Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="scheme-2">
                      <AccordionTrigger>Poultry Venture Capital Fund</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <p><strong>Implementing Agency:</strong> NABARD</p>
                          <p><strong>Eligibility:</strong> Farmers, NGOs, companies, entrepreneurs</p>
                          <p><strong>Benefits:</strong></p>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>25-33% back-ended capital subsidy</li>
                            <li>Interest-free loan component of 50-80%</li>
                            <li>Margin money of 10-25% from beneficiary</li>
                            <li>Subsidies for breeding farms, feed plants, marketing, etc.</li>
                          </ul>
                          <p><strong>How to Apply:</strong> Submit proposal to nearest NABARD office</p>
                          <Button variant="outline" size="sm">Download Guidelines</Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="scheme-3">
                      <AccordionTrigger>Rashtriya Krishi Vikas Yojana (RKVY)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <p><strong>Implementing Agency:</strong> State Agriculture Departments</p>
                          <p><strong>Eligibility:</strong> Individual farmers, groups, institutions</p>
                          <p><strong>Benefits:</strong></p>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>Project-based assistance for poultry infrastructure</li>
                            <li>Support for value addition and processing facilities</li>
                            <li>Aid for marketing infrastructure</li>
                            <li>Technology adoption support</li>
                          </ul>
                          <p><strong>How to Apply:</strong> Submit project proposal to State Agriculture Department</p>
                          <Button variant="outline" size="sm">Download Guidelines</Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="scheme-4">
                      <AccordionTrigger>Credit Linked Capital Subsidy Scheme</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <p><strong>Implementing Agency:</strong> Ministry of MSME</p>
                          <p><strong>Eligibility:</strong> Small-scale poultry units registered as MSMEs</p>
                          <p><strong>Benefits:</strong></p>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>15% capital subsidy on institutional credit up to ₹1 crore</li>
                            <li>For technology upgradation of small and medium enterprises</li>
                            <li>Support for modernization of processing facilities</li>
                          </ul>
                          <p><strong>How to Apply:</strong> Apply through participating banks and financial institutions</p>
                          <Button variant="outline" size="sm">Download Guidelines</Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="scheme-5">
                      <AccordionTrigger>Prime Minister's Employment Generation Programme</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <p><strong>Implementing Agency:</strong> KVIC and State KVIB</p>
                          <p><strong>Eligibility:</strong> Individuals above 18 years, SHGs, Trusts</p>
                          <p><strong>Benefits:</strong></p>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>25-35% subsidy for projects up to ₹25 lakhs (manufacturing sector)</li>
                            <li>Project cost includes working capital</li>
                            <li>Beneficiary contribution of 5-10%</li>
                          </ul>
                          <p><strong>How to Apply:</strong> Apply through District Industries Centre</p>
                          <Button variant="outline" size="sm">Download Guidelines</Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Download Complete Guide to Government Schemes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="calculators">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Loan EMI Calculator</CardTitle>
                  <CardDescription>
                    Calculate your monthly loan repayment amount
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">Coming soon: An interactive calculator to help you determine your loan EMI based on loan amount, interest rate, and tenure.</p>
                    <div className="h-40 flex items-center justify-center border border-dashed rounded-md">
                      <Calculator size={48} className="text-gray-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Poultry Farm Profitability Calculator</CardTitle>
                  <CardDescription>
                    Estimate potential profits based on your inputs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">Coming soon: An interactive tool to calculate potential returns on investment for different poultry farm setups.</p>
                    <div className="h-40 flex items-center justify-center border border-dashed rounded-md">
                      <Calculator size={48} className="text-gray-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="guides">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InfoCard
                title="Financial Planning Guide"
                description="Comprehensive guide to financial planning for poultry businesses of all sizes."
                imageSrc="/placeholder.svg"
                actionLabel="Read Guide"
                onAction={() => {}}
              />
              
              <InfoCard
                title="Record Keeping Handbook"
                description="Learn how to maintain proper financial records for your poultry business."
                imageSrc="/placeholder.svg"
                actionLabel="Read Guide"
                onAction={() => {}}
              />
              
              <InfoCard
                title="Tax Planning for Farmers"
                description="Understand tax benefits and planning strategies available for poultry farmers."
                imageSrc="/placeholder.svg"
                actionLabel="Read Guide"
                onAction={() => {}}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Financial;
