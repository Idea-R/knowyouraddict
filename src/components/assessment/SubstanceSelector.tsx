import React from 'react';
import { motion } from 'framer-motion';
import { Pill, Zap, Wine, Dices } from 'lucide-react';

interface SubstanceSelectorProps {
  selectedSubstance: string;
  onSelect: (substance: 'fentanyl' | 'methamphetamine' | 'alcohol' | 'gambling') => void;
}

export function SubstanceSelector({ selectedSubstance, onSelect }: SubstanceSelectorProps) {
  const substances = [
    {
      id: 'fentanyl',
      name: 'Fentanyl / Opioids',
      description: 'Synthetic opioids, heroin, prescription painkillers',
      icon: Pill,
      color: 'bg-red-500',
      symptoms: ['Pinpoint pupils', 'Slow breathing', 'Nodding off', 'Blue skin']
    },
    {
      id: 'methamphetamine',
      name: 'Methamphetamine',
      description: 'Crystal meth, speed, amphetamines',
      icon: Zap,
      color: 'bg-orange-500',
      symptoms: ['Dilated pupils', 'Rapid heartbeat', 'Skin sores', 'Extreme weight loss']
    },
    {
      id: 'alcohol',
      name: 'Alcohol',
      description: 'Beer, wine, liquor, chronic drinking',
      icon: Wine,
      color: 'bg-purple-500',
      symptoms: ['Hand tremors', 'Jaundice', 'Alcohol odor', 'Poor coordination']
    },
    {
      id: 'gambling',
      name: 'Gambling',
      description: 'Casinos, online betting, compulsive gambling',
      icon: Dices,
      color: 'bg-green-500',
      symptoms: ['Chasing losses', 'Hidden debts', 'Mood swings', 'Lying about money']
    }
  ];
  
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          What type of addiction are you concerned about?
        </h2>
        <p className="text-gray-600">
          Select the substance or behavior that best matches your concerns
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        {substances.map((substance) => (
          <motion.div
            key={substance.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              p-6 rounded-lg border-2 cursor-pointer transition-all duration-200
              ${selectedSubstance === substance.id 
                ? 'border-blue-500 bg-blue-50 shadow-lg' 
                : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
              }
            `}
            onClick={() => onSelect(substance.id as any)}
          >
            <div className="flex items-start space-x-4">
              <div className={`${substance.color} p-3 rounded-lg text-white`}>
                <substance.icon size={24} />
              </div>
              
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-1">
                  {substance.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {substance.description}
                </p>
                
                <div className="space-y-1">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Common Signs:
                  </p>
                  {substance.symptoms.map((symptom, index) => (
                    <div key={index} className="text-xs text-gray-600">
                      • {symptom}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}