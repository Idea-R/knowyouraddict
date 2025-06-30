import React from 'react';
import { AlertTriangle, Clock, User, Brain } from 'lucide-react';
import { Symptom } from '../../types';

interface SymptomCheckerProps {
  symptoms: Symptom[];
  selectedSymptoms: string[];
  onSymptomChange: (symptomId: string, checked: boolean) => void;
  title: string;
  icon: React.ReactNode;
}

export function SymptomChecker({ 
  symptoms, 
  selectedSymptoms, 
  onSymptomChange, 
  title, 
  icon 
}: SymptomCheckerProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        {icon}
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      
      <div className="grid gap-3">
        {symptoms.map((symptom) => (
          <label
            key={symptom.id}
            className={`
              flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all duration-200
              hover:border-blue-300 focus-within:border-blue-500
              ${selectedSymptoms.includes(symptom.id) 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200'
              }
              ${symptom.emergencyFlag ? 'ring-2 ring-red-200' : ''}
            `}
          >
            <input
              type="checkbox"
              className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              checked={selectedSymptoms.includes(symptom.id)}
              onChange={(e) => onSymptomChange(symptom.id, e.target.checked)}
            />
            
            <div className="ml-3 flex-1">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-900">
                  {symptom.name}
                </span>
                
                {symptom.emergencyFlag && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    <AlertTriangle size={12} className="mr-1" />
                    EMERGENCY
                  </span>
                )}
                
                <span className={`
                  inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                  ${symptom.severity === 'critical' ? 'bg-red-100 text-red-800' :
                    symptom.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                    symptom.severity === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }
                `}>
                  {symptom.severity.toUpperCase()}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mt-1">
                {symptom.description}
              </p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}