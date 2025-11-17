import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import Admissions from "./pages/Admissions";
import About from "./pages/About";
import Board from "./components/Board";
import CampusLife from "./pages/CampusLife";
import Placements from "./pages/Placements";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import GenAIPoweredDataScience from "./pages/GenAIPoweredDataScience";
import GenAIAgenticAi from "./pages/GenAIAgenticAi";
import GenAIsoftwarecloud from "./pages/GenAIsoftwarecloud";
<<<<<<< HEAD
=======
import ScrollToTopButton from "./components/ScrollToTopButton";
>>>>>>> 33f11b4 (changes)

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/board" element={<Board />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gen-ai-data-science" element={<GenAIPoweredDataScience />} />
          <Route path="/gen-ai-agentic-aiml" element={<GenAIAgenticAi />} />
          <Route path="/gen-ai-software-cloud" element={<GenAIsoftwarecloud />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
<<<<<<< HEAD
=======
        <ScrollToTopButton />
>>>>>>> 33f11b4 (changes)
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
