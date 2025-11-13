import { useState } from 'react';
import { Button } from '@/components/ui/button';
import WaitlistModal from '@/components/modals/WaitlistModal';

export default function FinalCTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="section-padding bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500">
      <div className="container-max text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Be Among the First 1,000 Users
          </h2>
          
          <p className="text-xl text-white/90">
            Join the waitlist and get €10 off your first month
          </p>
          
          <Button 
            className="bg-white text-orange-600 font-bold text-xl px-12 py-6 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:bg-yellow-50"
            onClick={() => setIsModalOpen(true)}
          >
            Join Waitlist Now
          </Button>
          
          <div className="text-white/80 text-sm space-y-1">
            <p>Launch: Q2 2025 • No credit card required</p>
          </div>
        </div>
      </div>
      
      <WaitlistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}