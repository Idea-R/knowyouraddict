export interface Symptom {
  id: string;
  name: string;
  description: string;
  severity: 'low' | 'moderate' | 'high' | 'critical';
  emergencyFlag?: boolean;
}

export interface AssessmentData {
  substanceType: 'fentanyl' | 'methamphetamine' | 'alcohol' | 'gambling';
  physicalSymptoms: string[];
  behavioralSymptoms: string[];
  psychologicalSymptoms: string[];
  timeline: string;
  concernLevel: number;
}

export interface AssessmentResult {
  totalScore: number;
  riskLevel: 'low' | 'moderate' | 'high' | 'critical';
  emergencyFlag: boolean;
  recommendations: string[];
  resources: Resource[];
}

export interface Resource {
  id: string;
  name: string;
  type: 'hotline' | 'treatment' | 'support_group' | 'emergency';
  phone?: string;
  sms?: string;
  website?: string;
  description: string;
  available24_7: boolean;
}

export interface EmergencyContact {
  name: string;
  phone: string;
  sms?: string;
  description: string;
  priority: 'critical' | 'high' | 'moderate';
}