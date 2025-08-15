import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VideoCreation from "./pages/VideoCreation";
import TextToVideo from "./pages/TextToVideo";
import TextToImage from "./pages/TextToImage";
import ImageToVideo from "./pages/ImageToVideo";
import VoiceBroadcast from "./pages/VoiceBroadcast";
import CreativeMaterials from "./pages/CreativeMaterials";
import SystemManagement from "./pages/SystemManagement";
import VideoSettings from "./pages/VideoSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/video-creation" element={<VideoCreation />} />
          <Route path="/creative-materials" element={<CreativeMaterials />} />
          <Route path="/text-to-image" element={<TextToImage />} />
          <Route path="/image-to-video" element={<ImageToVideo />} />
          <Route path="/text-to-video" element={<TextToVideo />} />
          <Route path="/voice-broadcast" element={<VoiceBroadcast />} />
          <Route path="/system-management" element={<SystemManagement />} />
          <Route path="/video-settings" element={<VideoSettings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
