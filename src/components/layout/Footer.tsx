
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/98888127-156c-43f9-a5aa-3d6573769c1c.png" 
                alt="22Poultry Logo" 
                className="h-8 w-auto mr-2"
              />
              <h3 className="text-lg font-semibold">
                <span className="text-[#ea384c]">22</span>
                <span className="text-[#1e40af]">Poultry</span>
              </h3>
            </div>
            <p className="text-sm">
              Empowering India's poultry industry with market insights, financial resources, 
              education, and networking opportunities.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-[#1e40af]">Home</Link></li>
              <li><Link to="/market-data" className="text-sm hover:text-[#1e40af]">Market Data</Link></li>
              <li><Link to="/financial" className="text-sm hover:text-[#1e40af]">Financial Assistance</Link></li>
              <li><Link to="/training" className="text-sm hover:text-[#1e40af]">Training & Education</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/news-weather" className="text-sm hover:text-[#1e40af]">News & Weather</Link></li>
              <li><Link to="/network" className="text-sm hover:text-[#1e40af]">Stakeholder Network</Link></li>
              <li><a href="#" className="text-sm hover:text-[#1e40af]">Government Schemes</a></li>
              <li><a href="#" className="text-sm hover:text-[#1e40af]">Research Papers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm">Email: info@22poultry.in</li>
              <li className="text-sm">Phone: +91 123 456 7890</li>
              <li className="text-sm">Address: Poultry Hub, Sector 9, New Delhi</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} 22Poultry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
