import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Globe, Shield, Zap, Star, Lock } from 'lucide-react';
import WaitlistModal from '@/components/modals/WaitlistModal';

export default function ModernLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container-max text-center z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              Your Number.{' '}
              <span className="text-sunset">Everywhere.</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Voice-enabled travel eSIM for digital nomads. Make calls, receive SMS, 
              stay connected in 180+ countries.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                className="btn-coral text-lg px-10 py-6 btn-glow"
                onClick={() => setIsModalOpen(true)}
              >
                Join Waitlist
              </Button>
              <Button 
                className="btn-outline-white text-lg px-10 py-6"
                onClick={scrollToPricing}
              >
                View Plans
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-12 space-y-4">
              <div className="flex flex-wrap justify-center items-center gap-8 text-yellow-200">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Launch: Q2 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Early access: €10 off first month</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-yellow-300/80">
                <span className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  EU Compliant
                </span>
                <span className="flex items-center gap-1">
                  <Lock className="w-4 h-4" />
                  GDPR Secure
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  180+ Countries
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Phone Mockup */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="float-animation">
            <div className="w-64 h-128 bg-gradient-to-b from-orange-900/80 to-purple-900/80 rounded-3xl p-2 shadow-2xl border border-yellow-500/30">
              <div className="w-full h-full bg-gradient-to-b from-orange-800/60 to-purple-800/60 rounded-2xl p-4 flex flex-col backdrop-blur-sm">
                <div className="text-white text-center mb-4">
                  <div className="text-sunset font-bold text-lg">Ringo</div>
                </div>
                <div className="space-y-3 text-white text-sm">
                  <div className="glass-card p-3 rounded-lg border border-yellow-400/20">
                    <div className="flex justify-between">
                      <span>Data Used</span>
                      <span className="text-yellow-400 font-semibold">2.1GB / 50GB</span>
                    </div>
                  </div>
                  <div className="glass-card p-3 rounded-lg border border-orange-400/20">
                    <div className="flex justify-between">
                      <span>Voice Minutes</span>
                      <span className="text-orange-400 font-semibold">45 / 300</span>
                    </div>
                  </div>
                  <div className="glass-card p-3 rounded-lg border border-pink-400/20">
                    <div className="flex justify-between">
                      <span>SMS Sent</span>
                      <span className="text-pink-400 font-semibold">12 / ∞</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="section-padding bg-background-lighter">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Problem */}
            <div className="glass-card p-8 rounded-2xl">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">The Problem</h3>
                <div className="space-y-4 text-white/80">
                  <p className="flex items-center justify-between">
                    <span>Roaming costs</span>
                    <span className="text-red-400 font-bold">€6/minute</span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span>Airalo voice calls</span>
                    <span className="text-red-400 font-bold">Not supported</span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span>Banking SMS abroad</span>
                    <span className="text-red-400 font-bold">Blocked</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Solution */}
            <div className="glass-card p-8 rounded-2xl">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">The Solution</h3>
                <div className="space-y-4 text-white/80">
                  <p className="flex items-center justify-between">
                    <span>Unlimited voice</span>
                    <span className="text-green-400 font-bold">€39.90/month</span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span>Native calling</span>
                    <span className="text-green-400 font-bold">No app required</span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span>Permanent EU number</span>
                    <span className="text-green-400 font-bold">For 2FA</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Everything You Need to Stay Connected
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Permanent EU Number",
                description: "Keep the same number across all countries"
              },
              {
                icon: Zap,
                title: "Native Voice Calling",
                description: "VoLTE quality calls without any app"
              },
              {
                icon: Globe,
                title: "180+ Countries",
                description: "Global coverage wherever you travel"
              },
              {
                icon: Lock,
                title: "SMS 2FA Support",
                description: "Receive banking and security codes"
              },
              {
                icon: Zap,
                title: "No App Switching",
                description: "Works with your phone's native dialer"
              },
              {
                icon: Star,
                title: "Premium Features",
                description: "Call recording and transcription included"
              }
            ].map((feature, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300 border border-yellow-400/10">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      <WaitlistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}