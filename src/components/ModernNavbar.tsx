import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WaitlistModal from '@/components/modals/WaitlistModal';

export default function ModernNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 glass-card border-b border-white/10">
        <div className="container-max">
          <div className="flex items-center justify-between h-16 px-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-sunset">Ringo</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-white/80 hover:text-white transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-white/80 hover:text-white transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-white/80 hover:text-white transition-colors"
              >
                How It Works
              </button>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button 
                className="btn-coral"
                onClick={() => setIsModalOpen(true)}
              >
                Join Waitlist
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden glass-card border-t border-white/10">
              <div className="px-4 py-6 space-y-4">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="block w-full text-left text-white/80 hover:text-white transition-colors py-2"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="block w-full text-left text-white/80 hover:text-white transition-colors py-2"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="block w-full text-left text-white/80 hover:text-white transition-colors py-2"
                >
                  How It Works
                </button>
                <Button 
                  className="w-full btn-coral mt-4"
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <WaitlistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}