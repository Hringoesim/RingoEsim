import { Button } from '@/components/ui/button';
import { ArrowRight, UserPlus, Smartphone, Zap } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      icon: UserPlus,
      title: "Sign Up",
      description: "Join waitlist, we'll notify you at launch"
    },
    {
      number: "2", 
      icon: Smartphone,
      title: "Install eSIM",
      description: "Scan QR code, activate in 60 seconds"
    },
    {
      number: "3",
      icon: Zap,
      title: "Stay Connected", 
      description: "Make calls, receive SMS, travel worry-free"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get Started in Minutes
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300 border border-yellow-400/10">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                
                <div className="mb-4">
                  <step.icon className="w-8 h-8 text-white mx-auto mb-3" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-white/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}