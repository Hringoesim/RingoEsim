import { Check, X } from 'lucide-react';

export default function ComparisonSection() {
  const competitors = [
    { name: "Ringo", highlight: true },
    { name: "Airalo", highlight: false },
    { name: "Google Fi", highlight: false },
    { name: "Traditional Roaming", highlight: false }
  ];

  const features = [
    {
      name: "Voice calling",
      values: [true, false, true, true]
    },
    {
      name: "Permanent number", 
      values: [true, false, true, false]
    },
    {
      name: "EU number",
      values: [true, false, false, false]
    },
    {
      name: "SMS 2FA",
      values: [true, false, true, true]
    },
    {
      name: "Monthly price",
      values: ["€39.90", "€15", "$65", "€200+"]
    },
    {
      name: "Countries",
      values: ["180+", "200+", "200+", "Varies"]
    }
  ];

  return (
    <section className="section-padding bg-background-lighter">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Choose Ringo?
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <div className="min-w-full">
            {/* Header */}
            <div className="grid grid-cols-5 gap-4 mb-4">
              <div className="text-white font-semibold">Features</div>
              {competitors.map((competitor, index) => (
                <div 
                  key={index}
                  className={`text-center font-semibold p-4 rounded-lg ${
                    competitor.highlight 
                      ? 'comparison-highlight text-white' 
                      : 'text-white/80'
                  }`}
                >
                  {competitor.name}
                </div>
              ))}
            </div>
            
            {/* Feature Rows */}
            {features.map((feature, featureIndex) => (
              <div key={featureIndex} className="grid grid-cols-5 gap-4 mb-2">
                <div className="text-white/80 py-4 font-medium">
                  {feature.name}
                </div>
                {feature.values.map((value, valueIndex) => (
                  <div 
                    key={valueIndex}
                    className={`text-center py-4 rounded-lg ${
                      valueIndex === 0 ? 'comparison-highlight' : 'glass-card'
                    }`}
                  >
                    {typeof value === 'boolean' ? (
                      value ? (
                        <Check className="w-5 h-5 text-green-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-400 mx-auto" />
                      )
                    ) : (
                      <span className={`font-semibold ${
                        valueIndex === 0 ? 'text-white' : 'text-white/80'
                      }`}>
                        {value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}