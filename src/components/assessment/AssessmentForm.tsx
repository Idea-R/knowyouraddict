import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, User, Activity, Brain, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { SubstanceSelector } from './SubstanceSelector';
import { SymptomChecker } from './SymptomChecker';
import { Button } from '../ui/Button';
import { AssessmentData } from '../../types';
import { fentanylSymptoms, methamphetamineSymptoms, alcoholSymptoms, gamblingSymptoms } from '../../data/symptoms';

interface AssessmentFormProps {
  onComplete: (data: AssessmentData) => void;
}

export function AssessmentForm({ onComplete }: AssessmentFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [substanceType, setSubstanceType] = useState<'fentanyl' | 'methamphetamine' | 'alcohol' | 'gambling'>('fentanyl');
  const [selectedSymptoms, setSelectedSymptoms] = useState<{
    physical: string[];
    behavioral: string[];
    psychological: string[];
  }>({
    physical: [],
    behavioral: [],
    psychological: []
  });
  const [timeline, setTimeline] = useState('');
  const [concernLevel, setConcernLevel] = useState(5);
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const steps = [
    { id: 'substance', title: 'Substance Type', icon: Activity },
    { id: 'physical', title: 'Physical Signs', icon: User },
    { id: 'behavioral', title: 'Behavioral Changes', icon: Brain },
    { id: 'timeline', title: 'Timeline', icon: Clock }
  ];
  
  const getSymptoms = () => {
    switch (substanceType) {
      case 'fentanyl': return fentanylSymptoms;
      case 'methamphetamine': return methamphetamineSymptoms;
      case 'alcohol': return alcoholSymptoms;
      case 'gambling': return gamblingSymptoms;
      default: return {};
    }
  };
  
  const symptoms = getSymptoms();
  
  const handleSymptomChange = (category: 'physical' | 'behavioral' | 'psychological', symptomId: string, checked: boolean) => {
    setSelectedSymptoms(prev => ({
      ...prev,
      [category]: checked 
        ? [...prev[category], symptomId]
        : prev[category].filter(id => id !== symptomId)
    }));
  };
  
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const submitAssessment = () => {
    const data: AssessmentData = {
      substanceType,
      physicalSymptoms: selectedSymptoms.physical,
      behavioralSymptoms: selectedSymptoms.behavioral,
      psychologicalSymptoms: selectedSymptoms.psychological || [],
      timeline,
      concernLevel
    };
    
    onComplete(data);
  };
  
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <SubstanceSelector
            selectedSubstance={substanceType}
            onSelect={setSubstanceType}
          />
        );
      
      case 1:
        return symptoms.physical ? (
          <SymptomChecker
            symptoms={symptoms.physical}
            selectedSymptoms={selectedSymptoms.physical}
            onSymptomChange={(id, checked) => handleSymptomChange('physical', id, checked)}
            title="Physical Signs"
            icon={<User className="text-blue-600" size={24} />}
          />
        ) : null;
      
      case 2:
        return symptoms.behavioral ? (
          <SymptomChecker
            symptoms={symptoms.behavioral}
            selectedSymptoms={selectedSymptoms.behavioral}
            onSymptomChange={(id, checked) => handleSymptomChange('behavioral', id, checked)}
            title="Behavioral Changes"
            icon={<Brain className="text-purple-600" size={24} />}
          />
        ) : null;
      
      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Clock className="text-green-600" size={24} />
              <h3 className="text-xl font-bold text-gray-900">Timeline & Concern Level</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  When did you first notice these signs?
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select timeframe</option>
                  <option value="days">Within the last few days</option>
                  <option value="weeks">Within the last few weeks</option>
                  <option value="months">Within the last few months</option>
                  <option value="years">Over a year ago</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How concerned are you? (1 = Slightly concerned, 10 = Extremely concerned)
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={concernLevel}
                  onChange={(e) => setConcernLevel(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>1 - Slightly</span>
                  <span className="font-bold text-blue-600">{concernLevel}</span>
                  <span>10 - Extremely</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm text-gray-500">
            {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>
      
      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="secondary"
          onClick={prevStep}
          disabled={currentStep === 0}
          className="flex items-center space-x-2"
        >
          <ChevronLeft size={20} />
          <span>Previous</span>
        </Button>
        
        {currentStep === steps.length - 1 ? (
          <Button
            variant="primary"
            onClick={submitAssessment}
            className="flex items-center space-x-2"
          >
            <span>Complete Assessment</span>
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={nextStep}
            className="flex items-center space-x-2"
          >
            <span>Next</span>
            <ChevronRight size={20} />
          </Button>
        )}
      </div>
    </div>
  );
}