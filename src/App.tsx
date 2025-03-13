
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useEffect } from "react";
import { toast } from "@/components/ui/use-toast";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Add console welcome message
    console.log(
      "%cWelcome to CyberVerse!\n%cLNCT's first cybersecurity club website\nRunning in dark mode",
      "color: #0090FF; font-size: 24px; font-weight: bold;",
      "color: #7000FF; font-size: 14px;"
    );
    
    // Show a welcome toast after a short delay
    const timer = setTimeout(() => {
      toast({
        title: "CyberVerse - Dark Mode Activated",
        description: "Explore our cybersecurity playground in immersive dark mode.",
        variant: "default",
      });
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
