import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { Button } from '../ui/Button';

interface DisclaimerModalProps {
  isOpen: boolean;
  onAccept: () => void;
  onDecline: () => void;
}

export function DisclaimerModal({ isOpen, onAccept, onDecline }: DisclaimerModalProps) {
  const [hasRead, setHasRead] = useState(false);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-red-600 flex items-center">
              <AlertTriangle className="mr-2" size={24} />
              IMPORTANT DISCLAIMER
            </h2>
          </div>
          
          <div className="space-y-4 text-sm text-gray-700">
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="text-red-800 font-bold text-lg">EMERGENCY SITUATIONS</h3>
              <p className="text-red-700 mt-1">
                If someone is unconscious, not breathing normally, or in immediate danger, 
                <strong> CALL 911 IMMEDIATELY</strong>. Do not rely on this tool in crisis situations.
              </p>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h3 className="text-blue-800 font-bold">This Tool Is For Educational Purposes Only</h3>
              <ul className="text-blue-700 mt-2 space-y-1">
                <li>• Not intended to provide medical advice, diagnosis, or treatment</li>
                <li>• Results do not constitute a medical diagnosis</li>
                <li>• Always consult qualified healthcare professionals</li>
                <li>• We are not liable for any actions taken based on this information</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="text-green-800 font-bold">Professional Help Required</h3>
              <p className="text-green-700 mt-1">
                Contact licensed addiction specialists, doctors, or mental health professionals 
                for proper assessment and treatment planning.
              </p>
            </div>
            
            <div className="bg-gray-50 border-l-4 border-gray-500 p-4">
              <h3 className="text-gray-800 font-bold">Your Privacy</h3>
              <p className="text-gray-700 mt-1">
                This tool does not store personal information. All responses are anonymous 
                and confidential.
              </p>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h3 className="text-yellow-800 font-bold">Your Responsibility</h3>
              <p className="text-yellow-700 mt-1">
                By using this tool, you acknowledge these limitations and agree to seek 
                appropriate professional help for any serious concerns.
              </p>
            </div>
          </div>
          
          <div className="mt-6">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={hasRead}
                onChange={(e) => setHasRead(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-900">
                I have read and understand this disclaimer completely
              </span>
            </label>
          </div>
          
          <div className="flex gap-4 mt-6">
            <Button
              variant="primary"
              onClick={onAccept}
              disabled={!hasRead}
              className="flex-1"
              size="lg"
            >
              I Understand - Continue
            </Button>
            
            <Button
              variant="secondary"
              onClick={onDecline}
              className="flex-1"
              size="lg"
            >
              Exit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}