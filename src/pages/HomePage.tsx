import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Heart, Users, AlertTriangle } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface HomePageProps {
  onStartAssessment: () => void;
}

export function HomePage({ onStartAssessment }: HomePageProps) {
  const features = [
    {
      icon: AlertTriangle,
      title: 'Emergency Detection',
      description: 'Automatic alerts for life-threatening symptoms requiring immediate medical attention',
      color: 'text-red-600'
    },
    {
      icon: Heart,
      title: 'Evidence-Based Assessment',
      description: 'Comprehensive evaluation based on medical literature and expert guidelines',
      color: 'text-blue-600'
    },
    {
      icon: Shield,
      title: 'Safe Intervention Guidance',
      description: 'Proven strategies for approaching loved ones with compassion and effectiveness',
      color: 'text-green-600'
    },
    {
      icon: Users,
      title: 'Professional Resources',
      description: 'Direct connections to treatment centers, hotlines, and support groups',
      color: 'text-purple-600'
    }
  ];
  
  const warningSignsExamples = [
    'Sleeping in unusual places (like the backyard)',
    'Leg twitching or involuntary muscle movements',
    'Extremely small pupils or extremely large pupils',
    'Dramatic changes in weight or appearance',
    'New social circle or secretive behavior',
    'Money or valuables going missing'
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Concerned About Someone's Behavior?
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Get help identifying addiction signs and find immediate resources. 
            This tool could save a life.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <Button
              onClick={onStartAssessment}
              size="lg"
              className="text-xl px-8 py-4 mr-4 mb-4 sm:mb-0"
            >
              Start Assessment
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <div className="text-sm text-gray-500">
              Anonymous • Confidential • Free
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Emergency Notice */}
      <div className="bg-red-50 border-l-4 border-red-500 p-6 mx-4 sm:mx-8 lg:mx-auto lg:max-w-4xl mb-12">
        <div className="flex items-center">
          <AlertTriangle className="text-red-500 mr-3" size={24} />
          <div>
            <h3 className="text-red-800 font-bold text-lg">EMERGENCY SITUATIONS</h3>
            <p className="text-red-700 mt-1">
              If someone is unconscious, not breathing normally, or in immediate danger, 
              <strong> CALL 911 IMMEDIATELY</strong>. Don't wait to complete this assessment.
            </p>
          </div>
        </div>
      </div>
      
      {/* Common Warning Signs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Common Warning Signs You Might Notice
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {warningSignsExamples.map((sign, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{sign}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800 text-sm">
              <strong>Note:</strong> These are just examples. Our assessment covers many more signs 
              and helps you understand what they might mean for different types of addiction.
            </p>
          </div>
        </div>
      </div>
      
      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How This Tool Helps
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Designed by addiction specialists to help families recognize concerning behaviors 
            and respond appropriately.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className={`${feature.color} mb-4 flex justify-center`}>
                <feature.icon size={32} />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Substances Covered */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Substances & Behaviors Covered
            </h2>
            <p className="text-gray-600 text-lg">
              Our assessment covers the most common and dangerous forms of addiction
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Fentanyl/Opioids', description: 'Synthetic opioids, heroin, prescription painkillers', color: 'bg-red-100 text-red-800' },
              { name: 'Methamphetamine', description: 'Crystal meth, speed, amphetamines', color: 'bg-orange-100 text-orange-800' },
              { name: 'Alcohol', description: 'Beer, wine, liquor, chronic drinking', color: 'bg-purple-100 text-purple-800' },
              { name: 'Gambling', description: 'Casinos, online betting, compulsive gambling', color: 'bg-green-100 text-green-800' }
            ].map((substance, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className={`${substance.color} text-sm font-bold px-2 py-1 rounded-full text-center mb-3`}>
                  {substance.name}
                </div>
                <p className="text-gray-600 text-sm">
                  {substance.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Privacy & Safety */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-6">
            <Shield className="text-blue-600 mr-3" size={32} />
            <h2 className="text-2xl font-bold text-gray-900">
              Your Privacy & Safety
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-blue-600 mb-2">
                <Shield size={24} className="mx-auto" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Anonymous</h3>
              <p className="text-gray-600 text-sm">
                No personal information required. All responses are anonymous.
              </p>
            </div>
            
            <div>
              <div className="text-green-600 mb-2">
                <Clock size={24} className="mx-auto" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Quick Exit</h3>
              <p className="text-gray-600 text-sm">
                Press Escape key anytime to quickly exit to Google for safety.
              </p>
            </div>
            
            <div>
              <div className="text-purple-600 mb-2">
                <Heart size={24} className="mx-auto" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Compassionate</h3>
              <p className="text-gray-600 text-sm">
                Guidance based on love, understanding, and evidence-based approaches.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Help?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step toward understanding and helping your loved one.
          </p>
          <Button
            onClick={onStartAssessment}
            variant="secondary"
            size="lg"
            className="text-blue-600 bg-white hover:bg-gray-100"
          >
            Start Assessment Now
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}