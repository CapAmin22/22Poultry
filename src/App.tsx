
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MarketData from "./pages/MarketData";
import Financial from "./pages/Financial";
import Training from "./pages/Training";
import NewsWeather from "./pages/NewsWeather";
import Network from "./pages/Network";
import Marketplace from "./pages/Marketplace";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Update document title with new branding
    document.title = "22Poultry - India's Poultry Industry Platform";
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/market-data" element={<MarketData />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/training" element={<Training />} />
            <Route path="/news-weather" element={<NewsWeather />} />
            <Route path="/network" element={<Network />} />
            <Route path="/marketplace" element={<Marketplace />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
