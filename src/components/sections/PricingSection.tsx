import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import WaitlistModal from '@/components/modals/WaitlistModal';

export default function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = [
    {
      name: "DAYPASS",
      price: "€3.50",
      period: "/day",
      data: "1.5GB",
      voice: "25 minutes",
      sms: "20 SMS",
      features: [
        "1.5GB high-speed data",
        "25 voice minutes",
        "20 SMS messages",
        "Basic support",
        "1-day validity"
      ],
      popular: false
    },
    {
      name: "WEEK EXPLORER",
      price: "€24.90",
      period: "/week",
      data: "10GB",
      voice: "120 minutes",
      sms: "50 SMS",
      features: [
        "10GB high-speed data",
        "120 voice minutes",
        "50 SMS messages",
        "Priority support",
        "7-day validity"
      ],
      popular: false
    },
    {
      name: "NOMAD",
      price: "€39.90",
      period: "/month",
      data: "50GB",
      voice: "300 minutes",
      sms: "Unlimited",
      features: [
        "50GB high-speed data",
        "300 voice minutes",
        "Unlimited SMS",
        "Premium support",
        "Call recording",
        "Transcription"
      ],
      popular: true
    },
    {
      name: "BUSINESS PRO",
      price: "€69.90",
      period: "/month",
      data: "100GB",
      voice: "800 minutes",
      sms: "Unlimited",
      features: [
        "100GB high-speed data",
        "800 voice minutes",
        "Unlimited SMS",
        "24/7 priority support",
        "Call recording",
        "Transcription",
        "Multi-device support"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-background-lighter">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Plans for Every Traveler
          </h2>
          <p className="text-xl text-white/80">
            14-day money-back guarantee on all plans
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`glass-card p-8 rounded-2xl relative transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'pricing-glow transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="popular-badge">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-white/80 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/60">{plan.period}</span>
                </div>
                
                <div className="space-y-2 text-sm text-white/70">
                  <div>{plan.data} data</div>
                  <div>{plan.voice} voice</div>
                  <div>{plan.sms}</div>
                </div>
              </div>
              
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3 text-sm text-white/80">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className="w-full btn-coral"
                onClick={() => setIsModalOpen(true)}
              >
                Join Waitlist
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm">
            All plans include access to 180+ countries • Launch: Q2 2025
          </p>
        </div>
      </div>
      
      <WaitlistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}