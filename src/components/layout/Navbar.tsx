
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ChartBar, 
  Calculator, 
  GraduationCap, 
  Newspaper, 
  Users, 
  Menu, 
  X,
  ShoppingCart,
  UserCircle,
  LogIn
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/components/ui/use-toast';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  React.useEffect(() => {
    if (!isMenuOpen) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-navbar="menu"]') && !target.closest('[data-navbar="toggle"]')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const handleLogout = async () => {
    try {
      await signOut();
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account."
      });
      navigate('/login');
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Logout error:', error);
      toast({
        title: "Logout failed",
        description: "An error occurred while logging out. Please try again.",
        variant: "destructive"
      });
    }
  };

  // Only show navigation options if user is logged in
  const navItems = user ? [
    { name: 'Market Data', icon: <ChartBar className="mr-2 h-4 w-4" />, path: '/market-data' },
    { name: 'Financial', icon: <Calculator className="mr-2 h-4 w-4" />, path: '/financial' },
    { name: 'Training', icon: <GraduationCap className="mr-2 h-4 w-4" />, path: '/training' },
    { name: 'News & Weather', icon: <Newspaper className="mr-2 h-4 w-4" />, path: '/news-weather' },
    { name: 'Network', icon: <Users className="mr-2 h-4 w-4" />, path: '/network' },
    { name: 'Marketplace', icon: <ShoppingCart className="mr-2 h-4 w-4" />, path: '/marketplace' },
  ] : [];

  // Profile option if user is logged in, login option if not
  const authItems = user ? [
    { name: 'Profile', icon: <UserCircle className="mr-2 h-4 w-4" />, path: '/profile' },
  ] : [
    { name: 'Login', icon: <LogIn className="mr-2 h-4 w-4" />, path: '/login' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to={user ? "/" : "/login"} className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/98888127-156c-43f9-a5aa-3d6573769c1c.png"
                alt="22Poultry Logo"
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl text-[#ea384c]">22<span className="text-[#1e40af]">Poultry</span></span>
            </Link>
          </div>

          {isMobile ? (
            <>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleMenu} 
                className="tap-highlight-none"
                data-navbar="toggle"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
              
              {isMenuOpen && (
                <div 
                  className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 py-2 px-4 animate-in fade-in slide-in-from-top duration-200"
                  data-navbar="menu"
                >
                  {[...navItems, ...authItems].map((item, index) => (
                    <Link 
                      key={index} 
                      to={item.path}
                      className={`flex items-center py-4 ${isActive(item.path) ? 'text-primary font-medium' : 'text-gray-700 hover:text-[#1e40af]'} border-b border-gray-100`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.icon}
                      <span className="ml-2">{item.name}</span>
                    </Link>
                  ))}
                  
                  {user && (
                    <div 
                      className="flex items-center py-4 text-gray-700 hover:text-[#1e40af] cursor-pointer"
                      onClick={handleLogout}
                    >
                      <LogIn className="mr-2 h-4 w-4 rotate-180" />
                      <span className="ml-2">Logout</span>
                    </div>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="flex space-x-1">
              {navItems.map((item, index) => (
                <Link key={index} to={item.path}>
                  <Button 
                    variant={isActive(item.path) ? "default" : "ghost"} 
                    className={`flex items-center ${isActive(item.path) ? 'bg-primary text-primary-foreground' : ''}`}
                  >
                    {item.icon}
                    {item.name}
                  </Button>
                </Link>
              ))}
              
              {authItems.map((item, index) => (
                <Link key={index} to={item.path}>
                  <Button 
                    variant={isActive(item.path) ? "default" : "ghost"} 
                    className={`flex items-center ${isActive(item.path) ? 'bg-primary text-primary-foreground' : ''}`}
                  >
                    {item.icon}
                    {item.name}
                  </Button>
                </Link>
              ))}
              
              {user && (
                <Button 
                  variant="ghost" 
                  className="flex items-center"
                  onClick={handleLogout}
                >
                  <LogIn className="mr-2 h-4 w-4 rotate-180" />
                  Logout
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
      <Separator />
    </nav>
  );
};

export default Navbar;
