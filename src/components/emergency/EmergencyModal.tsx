import React from 'react';
import { Phone, MessageSquare, Heart, AlertTriangle } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmergencyModal({ isOpen, onClose }: EmergencyModalProps) {
  const emergencyContacts = [
    {
      name: 'CALL 911',
      subtitle: 'Medical Emergency',
      href: 'tel:911',
      icon: AlertTriangle,
      variant: 'emergency' as const,
      description: 'Immediate emergency medical response'
    },
    {
      name: 'SAMHSA Addiction Hotline',
      subtitle: '1-800-662-HELP (4357)',
      href: 'tel:18006624357',
      icon: Phone,
      variant: 'primary' as const,
      description: 'Free, confidential, 24/7 treatment referral'
    },
    {
      name: 'Suicide Crisis Lifeline',
      subtitle: 'Call or Text 988',
      href: 'tel:988',
      icon: Heart,
      variant: 'warning' as const,
      description: '24/7 suicide prevention and crisis support'
    },
    {
      name: 'Crisis Text Line',
      subtitle: 'Text HOME to 741741',
      href: 'sms:741741?body=HOME',
      icon: MessageSquare,
      variant: 'safe' as const,
      description: '24/7 crisis support via text message'
    }
  ];
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="🚨 EMERGENCY HELP"
      size="lg"
    >
      <div className="space-y-4">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <div className="flex">
            <AlertTriangle className="text-red-500 mr-3 mt-1" size={20} />
            <div>
              <h3 className="text-red-800 font-bold">CRITICAL EMERGENCY</h3>
              <p className="text-red-700 text-sm">
                If someone is unconscious, not breathing normally, or in immediate danger, 
                <strong> CALL 911 IMMEDIATELY</strong>.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid gap-3">
          {emergencyContacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              className="block no-underline"
            >
              <Button
                variant={contact.variant}
                size="lg"
                className="w-full text-left justify-start h-auto py-4 px-6"
              >
                <div className="flex items-center w-full">
                  <contact.icon className="mr-4 flex-shrink-0" size={24} />
                  <div className="flex-1">
                    <div className="font-bold text-lg">{contact.name}</div>
                    <div className="text-sm opacity-90">{contact.subtitle}</div>
                    <div className="text-xs opacity-75 mt-1">{contact.description}</div>
                  </div>
                </div>
              </Button>
            </a>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">Keyboard Shortcuts:</h4>
          <div className="text-sm text-gray-600 space-y-1">
            <div><kbd className="bg-gray-200 px-1 rounded">F1</kbd> - Emergency Help</div>
            <div><kbd className="bg-gray-200 px-1 rounded">F2</kbd> - Direct Dial 911</div>
            <div><kbd className="bg-gray-200 px-1 rounded">F3</kbd> - SAMHSA Hotline</div>
            <div><kbd className="bg-gray-200 px-1 rounded">Escape</kbd> - Quick Exit</div>
          </div>
        </div>
        
        <Button
          variant="secondary"
          onClick={onClose}
          className="w-full"
        >
          Close
        </Button>
      </div>
    </Modal>
  );
}