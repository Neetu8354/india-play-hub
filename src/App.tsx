import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const Blog = lazy(() => import("./pages/Blog.tsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.tsx"));
const CricketGamesPage = lazy(() => import("./pages/CricketGamesPage.tsx"));
const CasinoGamesPage = lazy(() => import("./pages/CasinoGamesPage.tsx"));
const PromotionsPage = lazy(() => import("./pages/PromotionsPage.tsx"));
const HowToPlayPage = lazy(() => import("./pages/HowToPlayPage.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="text-primary animate-pulse font-heading text-xl">Loading...</div></div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/cricket-games" element={<CricketGamesPage />} />
              <Route path="/casino-games" element={<CasinoGamesPage />} />
              <Route path="/promotions" element={<PromotionsPage />} />
              <Route path="/how-to-play" element={<HowToPlayPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
