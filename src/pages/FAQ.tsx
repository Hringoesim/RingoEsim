import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

export default function FAQ() {
  const faqCategories = [
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'What is Ringo?',
          answer: 'Ringo is a connectivity service that adds a global layer to your existing phone number, allowing you to stay connected worldwide without changing SIM cards or getting new phone numbers. We work alongside your current carrier to provide seamless international connectivity.',
        },
        {
          question: 'How does it work with my existing number?',
          answer: 'Ringo creates a secure connectivity layer that routes your calls, texts, and data through our global network while keeping your existing phone number. You continue using your phone normally, but with global coverage and transparent pricing.',
        },
        {
          question: 'What devices are supported?',
          answer: 'Ringo supports most modern smartphones including iPhone XR and newer (iOS 13+) and Android devices running Android 9.0 or later. Check our device compatibility page for specific model support.',
        },
        {
          question: 'When will Ringo launch?',
          answer: 'We\'re currently in pilot development. Waitlist members will receive launch notifications and priority access. We expect to begin pilot testing in 2025, with broader availability following successful pilot completion.',
        },
      ],
    },
    {
      category: 'Pricing & Plans',
      questions: [
        {
          question: 'How much will Ringo cost?',
          answer: 'Our pricing tiers range from €0/month (Freemium) to €69.90/month (Business Pro), with a popular Week Explorer option at €24.90/7 days. Final pilot pricing will be confirmed before launch, and waitlist members will be notified first.',
        },
        {
          question: 'Can I try before I buy?',
          answer: 'Yes! We offer a Freemium tier that allows you to test basic functionality. Pilot program details, including trial options, will be shared with waitlist members.',
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'No hidden fees. All pricing is transparent and shown upfront. Premium country add-ons (like UAE, China) are clearly marked with additional daily rates of €8-15.',
        },
        {
          question: 'Can I change plans anytime?',
          answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle, and we\'ll prorate any differences.',
        },
      ],
    },
    {
      category: 'Technical Questions',
      questions: [
        {
          question: 'Which countries are supported?',
          answer: 'We\'re targeting 180+ countries for launch. The specific country list will be published during the pilot phase. Popular destinations like US, UK, EU, Canada, Australia, and Asia will be prioritized.',
        },
        {
          question: 'Does this work with my carrier?',
          answer: 'Ringo is designed to work alongside most major carriers worldwide. We don\'t replace your carrier - we add a global connectivity layer. Compatibility details will be provided during onboarding.',
        },
        {
          question: 'What about data speeds?',
          answer: 'Data speeds depend on local network conditions and your plan. We aim to provide competitive speeds comparable to local carriers in each country.',
        },
        {
          question: 'How is call quality?',
          answer: 'We use advanced routing technology to ensure high-quality voice calls. Call quality is typically comparable to or better than traditional roaming.',
        },
      ],
    },
    {
      category: 'Privacy & Security',
      questions: [
        {
          question: 'How is my data protected?',
          answer: 'We use enterprise-grade encryption for all communications and follow strict data protection standards. Your personal information is never sold or shared with third parties without your consent.',
        },
        {
          question: 'Are you GDPR compliant?',
          answer: 'Yes, we are fully GDPR compliant. You have the right to access, modify, or delete your personal data at any time. We only collect data necessary for service operation.',
        },
        {
          question: 'Can I delete my account?',
          answer: 'Yes, you can delete your account at any time. This will remove all your personal data from our systems within 30 days, except for data we\'re legally required to retain.',
        },
        {
          question: 'Do you track my location?',
          answer: 'We only use location data necessary for routing your calls and providing local connectivity. Location tracking can be disabled in your privacy settings.',
        },
      ],
    },
    {
      category: 'Pilot Program',
      questions: [
        {
          question: 'What does "pilot phase" mean?',
          answer: 'The pilot phase is our initial testing period with a limited number of users. This allows us to refine the service, gather feedback, and ensure quality before broader launch.',
        },
        {
          question: 'Will early users get benefits?',
          answer: 'Yes! Pilot participants may receive special pricing, extended trials, direct input into product development, priority support, and grandfather clauses on future price changes.',
        },
        {
          question: 'How can I provide feedback?',
          answer: 'Pilot users will have direct access to our development team through in-app feedback, dedicated support channels, and regular surveys. Your input directly shapes the product.',
        },
        {
          question: 'What if I have issues during pilot?',
          answer: 'Pilot participants receive priority support with dedicated channels. We expect some issues during testing - that\'s the point! We\'ll work quickly to resolve any problems.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-background to-muted/20">
        <div className="container-max">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="px-4 py-2">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold">
              Got Questions?
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about Ringo, our pilot program, and how global connectivity works.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding">
        <div className="container-max max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                {category.category}
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem 
                    key={faqIndex} 
                    value={`${categoryIndex}-${faqIndex}`}
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-muted/20">
        <div className="container-max">
          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Still Have Questions?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Can't find what you're looking for? Our team is here to help.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline">
                  <a href="/contact">Contact Support</a>
                </Button>
                <Button asChild>
                  <a href="mailto:info@ringoesim.com">Email Us</a>
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                We typically respond within 2-3 business days during pilot development.
              </p>
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
              onClick={() => {
                window.location.href = '/#waitlist-cta';
              }}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}