import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSolutionSection } from '@/components/sections/ProblemSolutionSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { PricingTeaser } from '@/components/sections/PricingTeaser';
import { WaitlistCTA } from '@/components/sections/WaitlistCTA';
import WaitlistModal from '@/components/modals/WaitlistModal';
import { useWaitlistModal } from '@/hooks/useWaitlistModal';

export default function Index() {
  const { isOpen, openModal, closeModal } = useWaitlistModal();

  return (
    <div className="min-h-screen">
      <HeroSection onJoinWaitlist={openModal} />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <PricingTeaser />
      <WaitlistCTA onJoinWaitlist={openModal} />
      <WaitlistModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}