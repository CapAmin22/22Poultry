
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const ProfileAccountActions = () => {
  const { signOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
      await signOut();
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account."
      });
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      toast({
        title: "Logout failed",
        description: "An error occurred while logging out. Please try again.",
        variant: "destructive"
      });
    }
  };
  
  return (
    <div>
      <h3 className="text-lg font-medium mb-4 flex items-center text-destructive">
        <LogOut className="mr-2 h-5 w-5" />
        Account Actions
      </h3>
      
      <div className="grid gap-4">
        <Button 
          variant="outline" 
          className="text-destructive hover:bg-destructive/10"
          onClick={handleLogout}
        >
          Log Out
        </Button>
        <Button variant="outline" className="text-destructive hover:bg-destructive/10">
          Deactivate Account
        </Button>
      </div>
    </div>
  );
};

export default ProfileAccountActions;
