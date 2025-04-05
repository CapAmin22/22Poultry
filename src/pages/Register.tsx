import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Info, Check, Loader2 } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { Checkbox } from '@/components/ui/checkbox';

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
  }),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions to proceed."
  })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

const Register = () => {
  const { signUp, user, isLoading: authLoading } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  
  useEffect(() => {
    if (user && !authLoading) {
      navigate("/", { replace: true });
    }
  }, [user, authLoading, navigate]);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      userType: "farmer",
      acceptTerms: false
    }
  });
  
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const metadata = {
        first_name: values.firstName,
        last_name: values.lastName,
        phone: values.phone,
        business_type: values.userType
      };
      
      const { error } = await signUp(values.email, values.password, metadata);
      
      if (error) {
        toast({
          title: "Registration failed",
          description: error.message,
          variant: "destructive"
        });
      } else {
        setRegistrationSuccess(true);
        toast({
          title: "Account created successfully",
          description: "Please check your email to verify your account.",
        });
        
        setTimeout(() => {
          navigate("/login", { 
            state: { 
              message: "Account created successfully. Please login to continue." 
            }
          });
        }, 2000);
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast({
        title: "Registration failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  
  if (authLoading) {
    return (
      <MainLayout>
        <div className="container mx-auto py-10 px-4 sm:px-6">
          <div className="flex items-center justify-center p-12">
            <div className="text-center">
              <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
              <p className="text-gray-600">Checking authentication status...</p>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
  
  if (registrationSuccess) {
    return (
      <MainLayout>
        <div className="container mx-auto py-10 px-4 sm:px-6">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-green-50 p-8 rounded-lg shadow-sm border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h2>
              <p className="text-gray-600 mb-4">
                Your account has been created. Please check your email to verify your account.
              </p>
              <p className="text-gray-600 mb-6">
                Redirecting you to the login page...
              </p>
              <Loader2 className="h-6 w-6 animate-spin text-primary mx-auto" />
            </div>
          </div>
        </div>
      </MainLayout>
    );
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
                  
                  <FormField
                    control={form.control}
                    name="acceptTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox 
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to the 22Poultry <Link to="#" className="text-primary hover:underline">Terms of Service</Link> and <Link to="#" className="text-primary hover:underline">Privacy Policy</Link>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex items-start gap-2 p-4 bg-blue-50 rounded-lg text-sm text-blue-800">
                    <Info className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <p>Your registration information will be verified by our team to ensure the security and authenticity of the 22Poultry platform. This helps protect all users in our ecosystem.</p>
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating Account...
                      </>
                    ) : (
                      'Create Account'
                    )}
                  </Button>
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
