import { Button } from '@/components/ui/button';

interface WaitlistCTAProps {
  onJoinWaitlist?: () => void;
}

export function WaitlistCTA({ onJoinWaitlist }: WaitlistCTAProps) {
  return (
    <section id="waitlist-cta" className="section-padding bg-warm-gradient">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Join the Ringo Pilot Program
              </h2>
              <p className="text-xl text-muted-foreground">
                Be among the first to experience seamless global connectivity
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <Button 
                size="lg" 
                className="btn-sunset px-8 py-6 text-lg w-full"
                onClick={onJoinWaitlist}
              >
                Join Waitlist
              </Button>
            </div>

            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Limited spots available for pilot phase
              </p>
              <p className="text-xs text-muted-foreground">
                We respect your privacy. Updates only, no spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}