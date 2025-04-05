
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Info, Check } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters."
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters."
  }),
  email: z.string().email({
    message: "Please enter a valid email address."
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number."
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters."
  }),
  confirmPassword: z.string(),
  userType: z.enum(["farmer", "supplier", "buyer", "processor"], {
    required_error: "Please select a user type."
  })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

const Register = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      userType: "farmer"
    }
  });
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // In a real implementation, this would handle the registration process
  }
  
  return (
    <MainLayout>
      <div className="container mx-auto py-10 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Join 22Poultry</h1>
            <p className="text-gray-600">Create your account to access India's premier poultry trading platform</p>
          </div>
          
          <Card className="shadow-lg border-gray-200">
            <CardHeader>
              <CardTitle>Register Your Account</CardTitle>
              <CardDescription>
                Fill in your details to create an account. All fields are required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your first name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your last name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 98765 43210" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Create a strong password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Confirm your password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="px-4 py-3 bg-gray-50 rounded-lg border">
                    <FormField
                      control={form.control}
                      name="userType"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Select Your Role</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                            >
                              <FormItem className="flex flex-col items-center space-y-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                                <FormControl>
                                  <RadioGroupItem value="farmer" className="sr-only" />
                                </FormControl>
                                <div className={`w-full h-full flex flex-col items-center justify-center ${field.value === 'farmer' ? 'text-primary' : 'text-gray-700'}`}>
                                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${field.value === 'farmer' ? 'bg-primary/10' : 'bg-gray-100'} mb-2`}>
                                    {field.value === 'farmer' && <Check className="h-5 w-5" />}
                                  </div>
                                  <FormLabel className="cursor-pointer font-medium">Farmer</FormLabel>
                                </div>
                              </FormItem>
                              
                              <FormItem className="flex flex-col items-center space-y-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                                <FormControl>
                                  <RadioGroupItem value="supplier" className="sr-only" />
                                </FormControl>
                                <div className={`w-full h-full flex flex-col items-center justify-center ${field.value === 'supplier' ? 'text-primary' : 'text-gray-700'}`}>
                                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${field.value === 'supplier' ? 'bg-primary/10' : 'bg-gray-100'} mb-2`}>
                                    {field.value === 'supplier' && <Check className="h-5 w-5" />}
                                  </div>
                                  <FormLabel className="cursor-pointer font-medium">Supplier</FormLabel>
                                </div>
                              </FormItem>
                              
                              <FormItem className="flex flex-col items-center space-y-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                                <FormControl>
                                  <RadioGroupItem value="buyer" className="sr-only" />
                                </FormControl>
                                <div className={`w-full h-full flex flex-col items-center justify-center ${field.value === 'buyer' ? 'text-primary' : 'text-gray-700'}`}>
                                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${field.value === 'buyer' ? 'bg-primary/10' : 'bg-gray-100'} mb-2`}>
                                    {field.value === 'buyer' && <Check className="h-5 w-5" />}
                                  </div>
                                  <FormLabel className="cursor-pointer font-medium">Buyer</FormLabel>
                                </div>
                              </FormItem>
                              
                              <FormItem className="flex flex-col items-center space-y-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                                <FormControl>
                                  <RadioGroupItem value="processor" className="sr-only" />
                                </FormControl>
                                <div className={`w-full h-full flex flex-col items-center justify-center ${field.value === 'processor' ? 'text-primary' : 'text-gray-700'}`}>
                                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${field.value === 'processor' ? 'bg-primary/10' : 'bg-gray-100'} mb-2`}>
                                    {field.value === 'processor' && <Check className="h-5 w-5" />}
                                  </div>
                                  <FormLabel className="cursor-pointer font-medium">Processor</FormLabel>
                                </div>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="flex items-start gap-2 p-4 bg-blue-50 rounded-lg text-sm text-blue-800">
                    <Info className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <p>Your registration information will be verified by our team to ensure the security and authenticity of the 22Poultry platform. This helps protect all users in our ecosystem.</p>
                  </div>
                  
                  <Button type="submit" className="w-full">Create Account</Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Separator />
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link to="/login" className="font-medium text-primary hover:underline">
                    Log in
                  </Link>
                </p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
