
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ChartBar, 
  Calculator, 
  GraduationCap, 
  Newspaper, 
  Users, 
  Menu, 
  X 
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Market Data', icon: <ChartBar className="mr-2 h-4 w-4" />, path: '/market-data' },
    { name: 'Financial', icon: <Calculator className="mr-2 h-4 w-4" />, path: '/financial' },
    { name: 'Training', icon: <GraduationCap className="mr-2 h-4 w-4" />, path: '/training' },
    { name: 'News & Weather', icon: <Newspaper className="mr-2 h-4 w-4" />, path: '/news-weather' },
    { name: 'Network', icon: <Users className="mr-2 h-4 w-4" />, path: '/network' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/placeholder.svg" 
                alt="PoultryConnect Logo" 
                className="h-10 w-10 mr-2"
              />
              <span className="font-bold text-xl text-poultry-blue">PoultryConnect</span>
            </Link>
          </div>

          {isMobile ? (
            <>
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
              
              {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 py-2 px-4">
                  {navItems.map((item, index) => (
                    <Link 
                      key={index} 
                      to={item.path}
                      className="flex items-center py-3 text-gray-700 hover:text-poultry-blue"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="flex space-x-1">
              {navItems.map((item, index) => (
                <Link key={index} to={item.path}>
                  <Button variant="ghost" className="flex items-center">
                    {item.icon}
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
