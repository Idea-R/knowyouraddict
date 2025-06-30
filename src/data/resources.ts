import { Resource, EmergencyContact } from '../types';

export const emergencyContacts: EmergencyContact[] = [
  {
    name: 'Emergency Services',
    phone: '911',
    description: 'Immediate emergency medical response',
    priority: 'critical'
  },
  {
    name: 'SAMHSA National Helpline',
    phone: '18006624357',
    description: 'Free, confidential, 24/7 treatment referral service',
    priority: 'critical'
  },
  {
    name: 'Suicide Crisis Lifeline',
    phone: '988',
    description: '24/7 suicide prevention and crisis intervention',
    priority: 'critical'
  },
  {
    name: 'Crisis Text Line',
    phone: '741741',
    sms: 'HOME',
    description: '24/7 crisis support via text message',
    priority: 'high'
  }
];

export const treatmentResources: Resource[] = [
  {
    id: 'samhsa_locator',
    name: 'SAMHSA Treatment Locator',
    type: 'treatment',
    website: 'https://findtreatment.samhsa.gov',
    description: 'Find addiction treatment facilities near you',
    available24_7: true
  },
  {
    id: 'aa_meetings',
    name: 'Alcoholics Anonymous',
    type: 'support_group',
    website: 'https://aa.org',
    description: 'Find local AA meetings and support groups',
    available24_7: false
  },
  {
    id: 'na_meetings',
    name: 'Narcotics Anonymous',
    type: 'support_group',
    website: 'https://na.org',
    description: 'Find local NA meetings and support groups',
    available24_7: false
  },
  {
    id: 'smart_recovery',
    name: 'SMART Recovery',
    type: 'support_group',
    website: 'https://smartrecovery.org',
    description: 'Science-based addiction recovery support',
    available24_7: false
  }
];

export const interventionStrategies = {
  dos: [
    {
      title: 'Express Unconditional Love',
      description: 'Start with "I love you and I\'m worried about you"',
      example: 'No matter what, I love you and want to help you get better.'
    },
    {
      title: 'Use Specific Examples',
      description: 'Mention concrete behaviors you\'ve observed',
      example: 'Yesterday I found you unconscious in the backyard, and I was terrified.'
    },
    {
      title: 'Offer Practical Support',
      description: 'Volunteer to help with treatment logistics',
      example: 'I\'ll drive you to appointments and help with insurance paperwork.'
    },
    {
      title: 'Set Loving Boundaries',
      description: 'Protect yourself while offering appropriate help',
      example: 'I won\'t give you money, but I\'ll pay for treatment directly.'
    }
  ],
  donts: [
    {
      title: 'Don\'t Enable Addiction',
      description: 'Avoid giving money, making excuses, or cleaning up their messes',
      example: 'Don\'t: "Here\'s $50, but promise me you won\'t buy drugs."'
    },
    {
      title: 'Don\'t Make Empty Threats',
      description: 'Only threaten consequences you\'re prepared to follow through on',
      example: 'Don\'t: "I\'ll kick you out" if you\'re not ready to do it.'
    },
    {
      title: 'Don\'t Try to Control Recovery',
      description: 'Recovery must be their choice to be sustainable',
      example: 'Don\'t: Force specific treatment programs or monitor constantly.'
    },
    {
      title: 'Don\'t Take It Personally',
      description: 'Addiction changes brain chemistry and decision-making',
      example: 'Their lying or stealing is about the addiction, not about you.'
    }
  ]
};