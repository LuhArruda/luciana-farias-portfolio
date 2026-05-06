import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        {/* Rota estática declarada antes da dinâmica para evitar conflitos de roteamento */}
        <Route path="/services" component={Services} />
        <Route path="/service/:serviceName" component={ServiceDetail} />
        <Route path="/contact" component={Contact} />
        <Route path="/404" component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <div className="bg-[#00051d] text-white min-h-screen w-full"> 
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}