import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  onJoinWaitlist?: () => void;
}

export function HeroSection({ onJoinWaitlist }: HeroSectionProps) {

  return (
    <section className="section-padding bg-warm-gradient">
      <div className="container-max">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Status Badge */}
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            🔔 Pilot Program - Limited Early Access
          </Badge>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              One Number. One Plan.{' '}
              <span className="text-sunset">Everywhere.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Stay connected globally using your existing phone number
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ringo adds a global connectivity layer to your existing phone number. 
            No new SIM cards, no complicated setup - just seamless connectivity wherever you travel.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="btn-sunset px-8 py-6 text-lg"
              onClick={onJoinWaitlist}
            >
              Join Waitlist
            </Button>
            <Link to="/how-it-works">
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                Learn How It Works
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Join our growing community of early supporters
            </p>
            <div className="flex justify-center items-center space-x-8 text-xs text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Pilot Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Early Access Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Global Coverage Planned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}