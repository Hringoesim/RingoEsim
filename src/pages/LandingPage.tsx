import ModernNavbar from '@/components/ModernNavbar';
import ModernFooter from '@/components/ModernFooter';
import ModernLanding from '@/pages/ModernLanding';
import PricingSection from '@/components/sections/PricingSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <ModernNavbar />
      
      {/* Hero & Features */}
      <ModernLanding />
      
      {/* Pricing Section */}
      <div id="pricing">
        <PricingSection />
      </div>
      
      {/* How It Works */}
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      
      {/* Comparison Table */}
      <div id="features">
        <ComparisonSection />
      </div>
      
      {/* Final CTA */}
      <FinalCTASection />
      
      <ModernFooter />
    </div>
  );
}