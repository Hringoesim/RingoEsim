import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Phone, MessageSquare, Headphones, Shield } from 'lucide-react';
import WaitlistModal from '@/components/modals/WaitlistModal';
import { useWaitlistModal } from '@/hooks/useWaitlistModal';

export default function Pricing() {
  const { isOpen, openModal, closeModal } = useWaitlistModal();
  const plans = [
    {
      name: 'Freemium',
      price: '€0',
      period: '/month',
      description: 'Perfect for trying Ringo',
      features: [
        '0GB Data',
        'Inbound calls only',
        'Receive SMS ✅',
        'Email support',
      ],
      popular: false,
      bestFor: 'Testing the service',
    },
    {
      name: 'Week Explorer',
      price: '€24.90',
      period: '/7 days',
      description: 'Ideal for short trips',
      features: [
        '10GB Data total',
        '120 min outbound calls',
        'Send/Receive SMS ✅',
        'Voicemail-to-Text ✅',
        'Email support',
      ],
      popular: true,
      bestFor: '1-3 week travel',
    },
    {
      name: 'Nomad',
      price: '€39.90',
      period: '/month',
      description: 'For digital nomads',
      features: [
        '50GB Data/month',
        '300 min outbound calls',
        'Send/Receive SMS ✅',
        'Voicemail-to-Text ✅',
        'Call Recording ✅',
        '24/7 Chat support',
      ],
      popular: false,
      bestFor: 'Digital nomads',
    },
    {
      name: 'Business Pro',
      price: '€69.90',
      period: '/month',
      description: 'For business travelers',
      features: [
        '100GB Data/month',
        'Unlimited calls*',
        'Send/Receive SMS ✅',
        'Voicemail-to-Text ✅',
        'Call Recording ✅',
        'Priority Phone support',
      ],
      popular: false,
      bestFor: 'Business travelers',
      note: '*Fair Use Policy: 1,000 minutes',
    },
  ];

  const addOns = [
    {
      name: 'Premium Countries',
      description: 'UAE, China, and other premium destinations',
      price: '€8-15/day',
    },
    {
      name: 'Extra Data Packs',
      description: 'Additional data when you need it',
      price: '€5/5GB',
    },
    {
      name: 'Extended Call Minutes',
      description: 'Additional calling minutes',
      price: 'TBA',
    },
  ];

  const faqs = [
    {
      question: 'Can I change plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.',
    },
    {
      question: 'What happens after the pilot?',
      answer: 'Pilot participants will receive detailed transition information and may be eligible for special pricing.',
    },
    {
      question: 'What is your refund policy?',
      answer: 'Full refund policy details will be provided before launch. Pilot participants get flexible terms.',
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'No hidden fees. All pricing is transparent and shown upfront. Premium country add-ons are clearly marked.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-muted/20">
        <div className="container-max">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="px-4 py-2">
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold">
              Simple, Fair Pricing
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose the plan that fits your travel needs. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`card-elegant relative ${plan.popular ? 'ring-2 ring-primary scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-semibold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                  <Badge variant="outline" className="mt-2">
                    {plan.bestFor}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.note && (
                    <p className="text-xs text-muted-foreground border-t pt-3">
                      {plan.note}
                    </p>
                  )}
                  
                  <Button 
                    className={`w-full mt-6 ${plan.popular ? 'btn-primary' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={openModal}
                  >
                    Join Waitlist
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-padding bg-muted/20">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Add-Ons</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhance your plan with additional features and coverage options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <Card key={index} className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">{addon.name}</CardTitle>
                  <p className="text-2xl font-bold text-primary">{addon.price}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot Pricing Notice */}
      <section className="section-padding">
        <div className="container-max">
          <Card className="max-w-4xl mx-auto bg-blue-50 border-blue-200">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="text-2xl">💡</div>
                <CardTitle className="text-blue-900">Pilot Program Pricing</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-blue-800">
              <p>These prices reflect our planned launch tiers. Early pilot members may receive:</p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Discounted introductory rates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Extended trial periods</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Grandfather clauses on future price changes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Priority access to new features</span>
                </li>
              </ul>
              <p className="font-semibold">Join the waitlist to be notified of pilot offers.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/20">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pricing FAQ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Join?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get early access to Ringo and be among the first to experience transparent, fair pricing for global connectivity.
            </p>
            <Button 
              size="lg" 
              className="btn-sunset px-8 py-6"
              onClick={openModal}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </section>
      <WaitlistModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}