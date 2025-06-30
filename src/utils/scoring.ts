import { AssessmentData, AssessmentResult } from '../types';
import { fentanylSymptoms, methamphetamineSymptoms, alcoholSymptoms, gamblingSymptoms } from '../data/symptoms';

const severityWeights = {
  low: 1,
  moderate: 2,
  high: 3,
  critical: 4
};

export function calculateAssessmentScore(data: AssessmentData): AssessmentResult {
  let totalScore = 0;
  let emergencyFlag = false;
  
  // Get symptoms for the substance type
  let symptoms;
  switch (data.substanceType) {
    case 'fentanyl':
      symptoms = fentanylSymptoms;
      break;
    case 'methamphetamine':
      symptoms = methamphetamineSymptoms;
      break;
    case 'alcohol':
      symptoms = alcoholSymptoms;
      break;
    case 'gambling':
      symptoms = gamblingSymptoms;
      break;
    default:
      symptoms = {};
  }
  
  // Calculate scores for each category
  const allSymptoms = [
    ...(symptoms.physical || []),
    ...(symptoms.behavioral || []),
    ...(symptoms.psychological || [])
  ];
  
  const selectedSymptoms = [
    ...data.physicalSymptoms,
    ...data.behavioralSymptoms,
    ...data.psychologicalSymptoms
  ];
  
  selectedSymptoms.forEach(symptomId => {
    const symptom = allSymptoms.find(s => s.id === symptomId);
    if (symptom) {
      totalScore += severityWeights[symptom.severity];
      if (symptom.emergencyFlag) {
        emergencyFlag = true;
      }
    }
  });
  
  // Add concern level to score
  totalScore += data.concernLevel;
  
  // Determine risk level
  let riskLevel: 'low' | 'moderate' | 'high' | 'critical';
  if (emergencyFlag || totalScore >= 20) {
    riskLevel = 'critical';
  } else if (totalScore >= 15) {
    riskLevel = 'high';
  } else if (totalScore >= 8) {
    riskLevel = 'moderate';
  } else {
    riskLevel = 'low';
  }
  
  // Generate recommendations based on risk level
  const recommendations = generateRecommendations(riskLevel, emergencyFlag, data.substanceType);
  
  return {
    totalScore,
    riskLevel,
    emergencyFlag,
    recommendations,
    resources: []
  };
}

function generateRecommendations(
  riskLevel: string, 
  emergencyFlag: boolean, 
  substanceType: string
): string[] {
  if (emergencyFlag || riskLevel === 'critical') {
    return [
      'CALL 911 IMMEDIATELY if overdose symptoms are present',
      'Contact SAMHSA National Helpline: 1-800-662-HELP (4357)',
      'Do not leave the person alone',
      'Remove access to substances if safely possible',
      'Prepare for emergency medical intervention'
    ];
  }
  
  if (riskLevel === 'high') {
    return [
      'Plan structured intervention within 48 hours',
      'Consult with addiction specialist',
      'Research treatment facilities',
      'Gather support system (family, friends)',
      'Prepare evidence of addiction impact'
    ];
  }
  
  if (riskLevel === 'moderate') {
    return [
      'Have honest conversation about concerns',
      'Express observations without judgment',
      'Offer support and resources',
      'Set clear boundaries if needed',
      'Monitor situation closely'
    ];
  }
  
  return [
    'Continue monitoring behavior patterns',
    'Maintain open communication',
    'Express care and concern',
    'Stay informed about warning signs',
    'Re-assess in 2-4 weeks if concerns persist'
  ];
}