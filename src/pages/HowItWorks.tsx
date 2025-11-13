import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Check, Phone, MessageSquare, Headphones, Shield } from 'lucide-react';
import WaitlistModal from '@/components/modals/WaitlistModal';
import { useWaitlistModal } from '@/hooks/useWaitlistModal';

export default function HowItWorks() {
  const { isOpen, openModal, closeModal } = useWaitlistModal();
  const features = [
    {
      icon: Phone,
      title: 'Keep Your Number',
      description: 'Your existing phone number stays the same - no need for new SIM cards or phone numbers.',
    },
    {
      icon: Shield,
      title: 'Secure Connection',
      description: 'Ringo adds a secure connectivity layer that works alongside your current carrier.',
    },
    {
      icon: MessageSquare,
      title: 'Full Communication',
      description: 'Make calls, send texts, and use data just like you do at home.',
    },
    {
      icon: Headphones,
      title: 'Always Supported',
      description: 'Our support team is here to help you stay connected wherever you are.',
    },
  ];

  const setupSteps = [
    {
      step: '1',
      title: 'Download Ringo App',
      description: 'Get the Ringo app from the App Store or Google Play Store.',
    },
    {
      step: '2',
      title: 'Link Your Number',
      description: 'Connect your existing phone number through our secure verification process.',
    },
    {
      step: '3',
      title: 'Activate Service',
      description: 'Choose your plan and activate Ringo\'s global connectivity layer.',
    },
    {
      step: '4',
      title: 'Travel Worry-Free',
      description: 'Use your phone normally anywhere in the world with transparent pricing.',
    },
  ];

  const compatibility = [
    {
      category: 'iOS Devices',
      requirement: 'iOS 13 or later',
      models: 'iPhone XR and newer models',
      status: 'Full Support',
    },
    {
      category: 'Android Devices',
      requirement: 'Android 9.0 or later',
      models: 'Most modern smartphones',
      status: 'Full Support',
    },
    {
      category: 'Feature Phones',
      requirement: 'KaiOS 2.5+',
      models: 'Limited models',
      status: 'Future Release',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-muted/20">
        <div className="container-max">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="px-4 py-2">
              How Ringo Works
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold">
              The Ringo Difference
            </h1>
            <p className="text-xl text-muted-foreground">
              Understanding how Ringo connects with your existing phone number to provide seamless global connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How Ringo Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ringo adds a connectivity layer to your existing phone number, enabling global coverage without changing how you use your phone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="card-elegant text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Setup Process */}
      <section className="section-padding bg-muted/20">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Setup Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting started with Ringo is straightforward. Here's how the setup process works once you receive pilot access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {setupSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="card-elegant text-center h-full">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                        {step.step}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Connection Arrow */}
                {index < setupSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Compatibility */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Device Compatibility</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ringo works with most modern smartphones. Check if your device is compatible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {compatibility.map((item, index) => (
              <Card key={index} className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {item.category}
                    <Badge variant={item.status === 'Full Support' ? 'default' : 'secondary'}>
                      {item.status}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <strong>Requirement:</strong> {item.requirement}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Models:</strong> {item.models}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <a href="/device-compatibility">Check Your Device</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Pilot Program Notice */}
      <section className="section-padding bg-blue-50">
        <div className="container-max">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="text-2xl">ℹ️</div>
                <CardTitle className="text-blue-900">Pilot Phase Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-blue-800">
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Ringo is currently in pilot development</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Features may evolve based on beta feedback</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Early users help shape the final product</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Priority support for pilot participants</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our pilot program and be among the first to experience seamless global connectivity.
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