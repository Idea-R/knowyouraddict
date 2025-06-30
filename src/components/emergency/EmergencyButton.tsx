import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { EmergencyModal } from './EmergencyModal';
import { useKeyboardShortcuts } from '../../hooks/useKeyboardShortcuts';

export function EmergencyButton() {
  const [showModal, setShowModal] = useState(false);
  
  useKeyboardShortcuts({
    onEmergencyHelp: () => setShowModal(true),
    onCall911: () => console.log('Calling 911...'),
    onCallSAMHSA: () => console.log('Calling SAMHSA...'),
    onQuickExit: () => console.log('Quick exit activated')
  });
  
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="
          fixed top-4 right-4 z-40
          bg-emergency-600 hover:bg-emergency-700 
          text-white font-bold
          px-3 py-2 md:px-4 md:py-2 rounded-lg
          shadow-lg border-2 border-emergency-800
          animate-pulse-emergency
          text-sm md:text-base
          focus:outline-none focus:ring-2 focus:ring-emergency-500
          transition-all duration-200
        "
        aria-label="Emergency help - Press F1 for quick access"
        title="Emergency Help (F1)"
      >
        <div className="flex items-center gap-1 md:gap-2">
          <AlertTriangle size={16} className="md:w-5 md:h-5" />
          <span className="hidden sm:inline">EMERGENCY</span>
          <span className="sm:hidden">🚨</span>
        </div>
      </button>
      
      <EmergencyModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}