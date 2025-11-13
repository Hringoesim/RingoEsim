import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PricingTeaser() {
  const plans = [
    {
      name: 'Freemium',
      price: '€0',
      period: '/month',
      description: 'Perfect for trying Ringo',
      features: [
        '0GB Data',
        'Inbound calls only',
        'Receive SMS',
        'Email support',
      ],
      popular: false,
    },
    {
      name: 'Week Explorer',
      price: '€24.90',
      period: '/7 days',
      description: 'Ideal for short trips',
      features: [
        '10GB Data',
        '120 min calls',
        'Send/Receive SMS',
        'Voicemail-to-Text',
        'Email support',
      ],
      popular: true,
    },
    {
      name: 'Nomad',
      price: '€39.90',
      period: '/month',
      description: 'For digital nomads',
      features: [
        '50GB Data',
        '300 min calls',
        'Send/Receive SMS',
        'Voicemail-to-Text',
        'Call Recording',
        '24/7 Chat support',
      ],
      popular: false,
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Transparent, Fair Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple pricing tiers designed for different travel needs. Pilot pricing - early members may receive special benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`card-elegant relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
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
                
                <Button 
                  className={`w-full mt-6 ${plan.popular ? 'btn-primary' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => {
                    const waitlistSection = document.getElementById('waitlist-cta');
                    if (waitlistSection) {
                      waitlistSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Join Waitlist
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl">💡</div>
            <div className="text-left">
              <p className="font-semibold text-blue-900">Pilot Program Pricing</p>
              <p className="text-sm text-blue-700">
                Early pilot members may receive discounted rates, extended trials, and grandfather clauses on future price changes.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/pricing">
            <Button variant="outline" size="lg">
              View Full Pricing Details
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}