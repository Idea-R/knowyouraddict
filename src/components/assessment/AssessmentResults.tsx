import React from 'react';
import { AlertTriangle, Phone, FileText, Users, Heart } from 'lucide-react';
import { AssessmentResult } from '../../types';
import { Button } from '../ui/Button';
import { interventionStrategies } from '../../data/resources';

interface AssessmentResultsProps {
  result: AssessmentResult;
  onStartOver: () => void;
}

export function AssessmentResults({ result, onStartOver }: AssessmentResultsProps) {
  const getRiskColor = (level: string) => {
    switch (level) {
      case 'critical': return 'text-red-600 bg-red-50 border-red-200';
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'moderate': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };
  
  const getRiskMessage = (level: string) => {
    switch (level) {
      case 'critical':
        return 'Immediate professional intervention required. This situation needs urgent attention.';
      case 'high':
        return 'Strong indicators of addiction present. Professional help strongly recommended.';
      case 'moderate':
        return 'Some concerning signs present. Consider professional consultation.';
      case 'low':
        return 'Few concerning signs at this time. Continue monitoring.';
      default:
        return 'Assessment complete.';
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Emergency Alert */}
      {result.emergencyFlag && (
        <div className="bg-red-100 border-l-4 border-red-500 p-6">
          <div className="flex items-center">
            <AlertTriangle className="text-red-500 mr-3" size={24} />
            <div>
              <h3 className="text-red-800 font-bold text-lg">EMERGENCY SYMPTOMS DETECTED</h3>
              <p className="text-red-700 mt-1">
                Critical symptoms require immediate medical attention. Call 911 or go to the nearest emergency room.
              </p>
              <div className="mt-4 space-x-4">
                <a href="tel:911">
                  <Button variant="emergency" size="lg">
                    📞 CALL 911 NOW
                  </Button>
                </a>
                <a href="tel:18006624357">
                  <Button variant="warning" size="lg">
                    📞 SAMHSA Hotline
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Risk Level */}
      <div className={`p-6 rounded-lg border-2 ${getRiskColor(result.riskLevel)}`}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">
            Assessment Complete
          </h2>
          <div className="text-4xl font-bold mb-2">
            {result.riskLevel.toUpperCase()} RISK
          </div>
          <p className="text-lg">
            {getRiskMessage(result.riskLevel)}
          </p>
          <div className="mt-4 text-sm opacity-75">
            Total Assessment Score: {result.totalScore}
          </div>
        </div>
      </div>
      
      {/* Immediate Recommendations */}
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <FileText className="mr-2 text-blue-600" size={24} />
          Immediate Recommendations
        </h3>
        <ul className="space-y-3">
          {result.recommendations.map((recommendation, index) => (
            <li key={index} className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                {index + 1}
              </span>
              <span className="text-gray-700">{recommendation}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Emergency Resources */}
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Phone className="mr-2 text-red-600" size={24} />
          Emergency Resources
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <a href="tel:911" className="block">
            <div className="p-4 border border-red-200 rounded-lg hover:bg-red-50 transition-colors">
              <div className="font-bold text-red-600">911 - Emergency Services</div>
              <div className="text-sm text-gray-600">Medical emergencies, overdoses</div>
            </div>
          </a>
          <a href="tel:18006624357" className="block">
            <div className="p-4 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
              <div className="font-bold text-blue-600">SAMHSA National Helpline</div>
              <div className="text-sm text-gray-600">1-800-662-HELP (4357)</div>
            </div>
          </a>
          <a href="tel:988" className="block">
            <div className="p-4 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
              <div className="font-bold text-purple-600">Suicide Crisis Lifeline</div>
              <div className="text-sm text-gray-600">Call or Text 988</div>
            </div>
          </a>
          <a href="sms:741741?body=HOME" className="block">
            <div className="p-4 border border-green-200 rounded-lg hover:bg-green-50 transition-colors">
              <div className="font-bold text-green-600">Crisis Text Line</div>
              <div className="text-sm text-gray-600">Text HOME to 741741</div>
            </div>
          </a>
        </div>
      </div>
      
      {/* Intervention Strategies */}
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Heart className="mr-2 text-pink-600" size={24} />
          Safe Intervention Strategies
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-green-600 mb-3">DO's</h4>
            <ul className="space-y-2">
              {interventionStrategies.dos.map((item, index) => (
                <li key={index} className="text-sm">
                  <div className="font-medium text-gray-900">{item.title}</div>
                  <div className="text-gray-600">{item.description}</div>
                  <div className="text-green-600 italic">"{item.example}"</div>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-red-600 mb-3">DON'Ts</h4>
            <ul className="space-y-2">
              {interventionStrategies.donts.map((item, index) => (
                <li key={index} className="text-sm">
                  <div className="font-medium text-gray-900">{item.title}</div>
                  <div className="text-gray-600">{item.description}</div>
                  <div className="text-red-600 italic">{item.example}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Additional Resources */}
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Users className="mr-2 text-indigo-600" size={24} />
          Treatment & Support Resources
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Treatment Locators</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://findtreatment.samhsa.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  SAMHSA Treatment Locator
                </a>
              </li>
              <li>
                <a href="https://aa.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Alcoholics Anonymous
                </a>
              </li>
              <li>
                <a href="https://na.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Narcotics Anonymous
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Family Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://al-anon.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Al-Anon (Families of Alcoholics)
                </a>
              </li>
              <li>
                <a href="https://nar-anon.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Nar-Anon (Families of Addicts)
                </a>
              </li>
              <li>
                <a href="https://smartrecovery.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  SMART Recovery Family & Friends
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex justify-center space-x-4">
        <Button
          variant="secondary"
          onClick={onStartOver}
          size="lg"
        >
          Take Another Assessment
        </Button>
        <Button
          variant="primary"
          onClick={() => window.print()}
          size="lg"
        >
          Print Results
        </Button>
      </div>
    </div>
  );
}