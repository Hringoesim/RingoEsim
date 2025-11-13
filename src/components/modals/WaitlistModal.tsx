import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WaitlistForm from '@/components/forms/WaitlistForm';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto relative border shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Join the Ringo Waitlist</h3>
          <p className="text-muted-foreground">
            Be among the first to experience voice-enabled travel eSIM
          </p>
        </div>

        <WaitlistForm />
      </div>
    </div>
  );
}