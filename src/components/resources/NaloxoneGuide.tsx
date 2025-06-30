import React from 'react';
import { Heart, AlertTriangle, Phone, Clock } from 'lucide-react';
import { Button } from '../ui/Button';

export function NaloxoneGuide() {
  const steps = [
    {
      step: 1,
      title: 'Check for Responsiveness',
      description: 'Tap shoulders firmly and shout their name loudly',
      icon: AlertTriangle,
      color: 'text-red-600'
    },
    {
      step: 2,
      title: 'Call 911 Immediately',
      description: 'Even if naloxone works, professional medical attention is needed',
      icon: Phone,
      color: 'text-blue-600'
    },
    {
      step: 3,
      title: 'Administer Naloxone',
      description: 'Follow package instructions for nasal spray or injection',
      icon: Heart,
      color: 'text-green-600'
    },
    {
      step: 4,
      title: 'Perform Rescue Breathing',
      description: 'If the person is not breathing normally, provide rescue breaths',
      icon: Heart,
      color: 'text-purple-600'
    },
    {
      step: 5,
      title: 'Stay with the Person',
      description: 'Naloxone effects wear off in 30-90 minutes. Be prepared to give another dose.',
      icon: Clock,
      color: 'text-orange-600'
    }
  ];
  
  const whereToGet = [
    'Most pharmacies (no prescription needed in most states)',
    'Local health departments',
    'Community health centers',
    'Needle exchange programs',
    'Police and fire departments (many carry naloxone)',
    'Online: DanceSafe, NEXT Harm Reduction, GetNaloxoneNow.org'
  ];
  
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Naloxone (Narcan) Guide
        </h1>
        <p className="text-gray-600 text-lg">
          How to respond to an opioid overdose and save a life
        </p>
      </div>
      
      {/* Emergency Alert */}
      <div className="bg-red-100 border-l-4 border-red-500 p-6">
        <div className="flex items-center">
          <AlertTriangle className="text-red-500 mr-3" size={24} />
          <div>
            <h3 className="text-red-800 font-bold text-lg">OVERDOSE EMERGENCY</h3>
            <p className="text-red-700 mt-1">
              If you suspect someone has overdosed, act immediately. Time is critical.
            </p>
            <div className="mt-4">
              <a href="tel:911">
                <Button variant="emergency" size="lg">
                  📞 CALL 911 NOW
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Steps */}
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Step-by-Step Overdose Response
        </h2>
        
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.step} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">{step.step}</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <step.icon className={step.color} size={20} />
                  <h3 className="font-bold text-lg text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Signs of Overdose */}
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Signs of Opioid Overdose
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-red-600 mb-3">CRITICAL SIGNS - CALL 911</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>Unconscious or unresponsive</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>Slow, shallow, or no breathing</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>Blue lips, fingernails, or skin</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>Gurgling or choking sounds</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-orange-600 mb-3">WARNING SIGNS</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Extremely small pupils</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Slow or weak pulse</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Disorientation or confusion</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Clammy or cold skin</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Where to Get Naloxone */}
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Where to Get Naloxone
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-green-600 mb-3">Available Locations</h3>
            <ul className="space-y-2 text-sm">
              {whereToGet.map((location, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                  <span>{location}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-blue-600 mb-3">Important Notes</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                <span>Usually free or low-cost</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                <span>No prescription needed in most states</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                <span>Comes with instructions</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                <span>Safe to use - won't harm if not needed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Emergency Contacts */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Emergency Contacts
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <a href="tel:911" className="block">
            <div className="p-4 bg-red-100 border border-red-200 rounded-lg text-center hover:bg-red-200 transition-colors">
              <div className="font-bold text-red-600">911</div>
              <div className="text-sm text-red-700">Emergency Services</div>
            </div>
          </a>
          
          <a href="tel:18008484311" className="block">
            <div className="p-4 bg-blue-100 border border-blue-200 rounded-lg text-center hover:bg-blue-200 transition-colors">
              <div className="font-bold text-blue-600">Never Use Alone</div>
              <div className="text-sm text-blue-700">1-800-484-3731</div>
            </div>
          </a>
          
          <a href="tel:18006624357" className="block">
            <div className="p-4 bg-green-100 border border-green-200 rounded-lg text-center hover:bg-green-200 transition-colors">
              <div className="font-bold text-green-600">SAMHSA Helpline</div>
              <div className="text-sm text-green-700">1-800-662-4357</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}