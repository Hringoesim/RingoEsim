import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import WaitlistModal from '@/components/modals/WaitlistModal';
import { useWaitlistModal } from '@/hooks/useWaitlistModal';

export function Layout() {
  const { isOpen, openModal, closeModal } = useWaitlistModal();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onJoinWaitlist={openModal} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WaitlistModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}