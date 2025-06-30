import React, { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { AssessmentForm } from './components/assessment/AssessmentForm';
import { AssessmentResults } from './components/assessment/AssessmentResults';
import { EmergencyButton } from './components/emergency/EmergencyButton';
import { DisclaimerModal } from './components/disclaimer/DisclaimerModal';
import { NaloxoneGuide } from './components/resources/NaloxoneGuide';
import { useAppStore } from './store/appStore';
import { calculateAssessmentScore } from './utils/scoring';
import { AssessmentData } from './types';

type AppState = 'home' | 'assessment' | 'results' | 'naloxone';

function App() {
  const [currentPage, setCurrentPage] = useState<AppState>('home');
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  
  const { 
    disclaimerAccepted, 
    acceptDisclaimer, 
    setCurrentAssessment, 
    setAssessmentResult,
    assessmentResult,
    clearCurrentAssessment
  } = useAppStore();
  
  useEffect(() => {
    if (!disclaimerAccepted) {
      setShowDisclaimer(true);
    }
  }, [disclaimerAccepted]);
  
  const handleStartAssessment = () => {
    if (!disclaimerAccepted) {
      setShowDisclaimer(true);
      return;
    }
    setCurrentPage('assessment');
  };
  
  const handleAssessmentComplete = (data: AssessmentData) => {
    setCurrentAssessment(data);
    const result = calculateAssessmentScore(data);
    setAssessmentResult(result);
    setCurrentPage('results');
  };
  
  const handleStartOver = () => {
    clearCurrentAssessment();
    setCurrentPage('home');
  };
  
  const handleDisclaimerAccept = () => {
    acceptDisclaimer();
    setShowDisclaimer(false);
    setCurrentPage('assessment');
  };
  
  const handleDisclaimerDecline = () => {
    window.location.href = 'https://www.google.com';
  };
  
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onStartAssessment={handleStartAssessment} />;
      case 'assessment':
        return <AssessmentForm onComplete={handleAssessmentComplete} />;
      case 'results':
        return assessmentResult ? (
          <AssessmentResults 
            result={assessmentResult} 
            onStartOver={handleStartOver}
          />
        ) : null;
      case 'naloxone':
        return <NaloxoneGuide />;
      default:
        return <HomePage onStartAssessment={handleStartAssessment} />;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => setCurrentPage('home')}
                className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
              >
                Know Your Addict
              </button>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => setCurrentPage('home')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage('naloxone')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'naloxone' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Naloxone Guide
              </button>
              <a
                href="https://findtreatment.samhsa.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Find Treatment
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Emergency Button - Always Visible */}
      <EmergencyButton />
      
      {/* Main Content */}
      <main className="pb-12">
        {renderCurrentPage()}
      </main>
      
      {/* Disclaimer Modal */}
      <DisclaimerModal
        isOpen={showDisclaimer}
        onAccept={handleDisclaimerAccept}
        onDecline={handleDisclaimerDecline}
      />
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Emergency Resources</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <a href="tel:911" className="hover:text-blue-300">
                    911 - Emergency Services
                  </a>
                </div>
                <div>
                  <a href="tel:18006624357" className="hover:text-blue-300">
                    SAMHSA: 1-800-662-4357
                  </a>
                </div>
                <div>
                  <a href="tel:988" className="hover:text-blue-300">
                    Suicide Crisis: 988
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Treatment Resources</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <a href="https://findtreatment.samhsa.gov" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                    Treatment Locator
                  </a>
                </div>
                <div>
                  <a href="https://aa.org" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                    Alcoholics Anonymous
                  </a>
                </div>
                <div>
                  <a href="https://na.org" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                    Narcotics Anonymous
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Important Notice</h3>
              <p className="text-sm text-gray-300">
                This tool is for educational purposes only and does not replace professional medical advice. 
                In emergencies, call 911 immediately.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2024 Know Your Addict. Educational tool designed to help families recognize addiction signs.</p>
          </div>
        </div>
      </footer>
      
      {/* Bolt.new Badge */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .bolt-badge {
            transition: all 0.3s ease;
          }
          @keyframes badgeIntro {
            0% { transform: rotateY(-90deg); opacity: 0; }
            100% { transform: rotateY(0deg); opacity: 1; }
          }
          .bolt-badge-intro {
            animation: badgeIntro 0.8s ease-out 1s both;
          }
          .bolt-badge-intro.animated {
            animation: none;
          }
          @keyframes badgeHover {
            0% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.1) rotate(22deg); }
            100% { transform: scale(1) rotate(0deg); }
          }
          .bolt-badge:hover {
            animation: badgeHover 0.6s ease-in-out;
          }
        `
      }} />
      <div className="fixed bottom-4 right-4 z-50">
        <a 
          href="https://bolt.new/?rid=os72mi" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block transition-all duration-300 hover:shadow-2xl"
        >
          <img 
            src="https://storage.bolt.army/black_circle_360x360.png" 
            alt="Built with Bolt.new badge" 
            className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg bolt-badge bolt-badge-intro"
            onAnimationEnd={(e) => e.currentTarget.classList.add('animated')}
          />
        </a>
      </div>
    </div>
  );
}

export default App;