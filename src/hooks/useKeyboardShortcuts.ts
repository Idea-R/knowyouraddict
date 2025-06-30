import { useEffect } from 'react';

interface KeyboardShortcutHandlers {
  onEmergencyHelp?: () => void;
  onCall911?: () => void;
  onCallSAMHSA?: () => void;
  onQuickExit?: () => void;
}

export function useKeyboardShortcuts(handlers: KeyboardShortcutHandlers) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // F1 - Emergency help modal
      if (event.key === 'F1') {
        event.preventDefault();
        handlers.onEmergencyHelp?.();
      }
      
      // F2 - Direct dial 911
      if (event.key === 'F2') {
        event.preventDefault();
        handlers.onCall911?.();
        window.location.href = 'tel:911';
      }
      
      // F3 - SAMHSA hotline
      if (event.key === 'F3') {
        event.preventDefault();
        handlers.onCallSAMHSA?.();
        window.location.href = 'tel:18006624357';
      }
      
      // Escape - Quick exit to Google (safety feature)
      if (event.key === 'Escape') {
        event.preventDefault();
        handlers.onQuickExit?.();
        window.location.href = 'https://www.google.com';
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlers]);
}