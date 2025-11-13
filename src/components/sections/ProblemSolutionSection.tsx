import { Card, CardContent } from '@/components/ui/card';
import { Phone, Globe, Settings } from 'lucide-react';

export function ProblemSolutionSection() {
  const solutions = [
    {
      icon: Phone,
      title: 'Use Your Number',
      description: 'Keep your existing phone number, add global connectivity',
      color: 'text-blue-500',
    },
    {
      icon: Globe,
      title: 'Stay Connected',
      description: 'Seamless connectivity wherever you travel',
      color: 'text-green-500',
    },
    {
      icon: Settings,
      title: 'Simple Setup',
      description: 'Easy onboarding, no complicated configuration',
      color: 'text-purple-500',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ringo solves the complexity of staying connected while traveling by working with your existing phone number.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card key={index} className="card-elegant text-center p-6 hover:scale-105 transition-transform duration-300">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-full bg-muted">
                      <Icon className={`h-8 w-8 ${solution.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}