import { Symptom } from '../types';

export const fentanylSymptoms: Record<string, Symptom[]> = {
  physical: [
    {
      id: 'pinpoint_pupils',
      name: 'Extremely Small "Pinpoint" Pupils',
      description: 'Pupils that remain tiny even in dim light',
      severity: 'high',
      emergencyFlag: false
    },
    {
      id: 'slow_breathing',
      name: 'Shallow or Slow Breathing (< 12 breaths/min)',
      description: 'Respiratory depression - immediate medical attention required',
      severity: 'critical',
      emergencyFlag: true
    },
    {
      id: 'nodding_off',
      name: 'Frequent "Nodding Off" or Falling Asleep Standing',
      description: 'Microsleep episodes during activities or conversations',
      severity: 'high'
    },
    {
      id: 'blue_skin',
      name: 'Blue or Gray Skin, Lips, or Fingernails',
      description: 'Cyanosis indicating oxygen deprivation',
      severity: 'critical',
      emergencyFlag: true
    },
    {
      id: 'track_marks',
      name: 'Needle Marks or Track Marks',
      description: 'Injection sites on arms, legs, feet, or other areas',
      severity: 'high'
    },
    {
      id: 'weight_loss',
      name: 'Dramatic Weight Loss',
      description: 'Significant weight reduction over weeks/months',
      severity: 'moderate'
    }
  ],
  behavioral: [
    {
      id: 'social_withdrawal',
      name: 'Extreme Social Withdrawal',
      description: 'Avoiding family, friends, and normal activities',
      severity: 'high'
    },
    {
      id: 'money_missing',
      name: 'Money or Valuables Going Missing',
      description: 'Theft from family/friends to fund addiction',
      severity: 'high'
    },
    {
      id: 'new_associates',
      name: 'New Social Circle with Known Drug Users',
      description: 'Sudden change in friend groups',
      severity: 'high'
    },
    {
      id: 'unusual_sleeping',
      name: 'Sleeping in Unusual Places',
      description: 'Found sleeping outdoors, in cars, or strange locations',
      severity: 'moderate'
    },
    {
      id: 'leg_twitching',
      name: 'Leg Twitching or Muscle Spasms',
      description: 'Involuntary leg movements, especially when resting',
      severity: 'moderate'
    }
  ]
};

export const methamphetamineSymptoms: Record<string, Symptom[]> = {
  physical: [
    {
      id: 'dilated_pupils',
      name: 'Extremely Dilated Pupils',
      description: 'Pupils remain large even in bright light',
      severity: 'high'
    },
    {
      id: 'rapid_heartbeat',
      name: 'Rapid or Irregular Heartbeat',
      description: 'Heart rate over 100 BPM at rest',
      severity: 'critical',
      emergencyFlag: true
    },
    {
      id: 'hyperthermia',
      name: 'Elevated Body Temperature/Excessive Sweating',
      description: 'Overheating that could lead to heat stroke',
      severity: 'critical',
      emergencyFlag: true
    },
    {
      id: 'meth_mouth',
      name: 'Severe Dental Decay ("Meth Mouth")',
      description: 'Rapid tooth decay, blackened or missing teeth',
      severity: 'high'
    },
    {
      id: 'skin_sores',
      name: 'Open Sores or Scabs from Skin Picking',
      description: 'Self-inflicted wounds from compulsive picking',
      severity: 'high'
    },
    {
      id: 'extreme_weight_loss',
      name: 'Rapid, Extreme Weight Loss',
      description: 'Significant weight reduction in short period',
      severity: 'high'
    }
  ],
  behavioral: [
    {
      id: 'hyperactivity',
      name: 'Extreme Hyperactivity or Agitation',
      description: 'Inability to sit still, pacing, restlessness',
      severity: 'moderate'
    },
    {
      id: 'paranoia',
      name: 'Paranoia or Extreme Suspicion',
      description: 'Unfounded beliefs about being watched or followed',
      severity: 'high'
    },
    {
      id: 'repetitive_behaviors',
      name: 'Repetitive Behaviors or Tasks',
      description: 'Obsessive focus on meaningless activities',
      severity: 'moderate'
    }
  ]
};

export const alcoholSymptoms: Record<string, Symptom[]> = {
  physical: [
    {
      id: 'tremors',
      name: 'Hand Tremors or Shaking',
      description: 'Especially noticeable in the morning',
      severity: 'high',
      emergencyFlag: true
    },
    {
      id: 'jaundice',
      name: 'Yellowing of Skin or Eyes',
      description: 'Sign of liver damage requiring immediate medical attention',
      severity: 'critical',
      emergencyFlag: true
    },
    {
      id: 'alcohol_odor',
      name: 'Persistent Alcohol Odor',
      description: 'Smell of alcohol on breath, clothing, or person',
      severity: 'moderate'
    },
    {
      id: 'bloodshot_eyes',
      name: 'Bloodshot or Watery Eyes',
      description: 'Red, irritated eyes from alcohol consumption',
      severity: 'low'
    },
    {
      id: 'coordination_problems',
      name: 'Poor Coordination and Balance',
      description: 'Stumbling, difficulty with fine motor skills',
      severity: 'moderate'
    }
  ],
  behavioral: [
    {
      id: 'drinking_patterns',
      name: 'Drinking at Inappropriate Times',
      description: 'Morning drinking, drinking before work/school',
      severity: 'high'
    },
    {
      id: 'hiding_alcohol',
      name: 'Hiding Alcohol or Drinking Secretly',
      description: 'Concealing alcohol consumption from others',
      severity: 'moderate'
    },
    {
      id: 'neglecting_responsibilities',
      name: 'Neglecting Work, School, or Family Duties',
      description: 'Alcohol use interfering with obligations',
      severity: 'high'
    }
  ]
};

export const gamblingSymptoms: Record<string, Symptom[]> = {
  behavioral: [
    {
      id: 'chasing_losses',
      name: 'Chasing Losses with Bigger Bets',
      description: 'Increasing bet amounts to recover previous losses',
      severity: 'high'
    },
    {
      id: 'secret_debts',
      name: 'Hidden Debts or Secret Credit Cards',
      description: 'Concealing financial obligations from family',
      severity: 'high'
    },
    {
      id: 'lying_about_gambling',
      name: 'Lying About Time Spent Gambling',
      description: 'Concealing actual hours or money spent gambling',
      severity: 'moderate'
    },
    {
      id: 'selling_possessions',
      name: 'Selling Personal Possessions',
      description: 'Disposing of valuables to fund gambling',
      severity: 'high'
    },
    {
      id: 'mood_swings',
      name: 'Mood Tied to Gambling Outcomes',
      description: 'Extreme highs after wins, deep lows after losses',
      severity: 'moderate'
    }
  ],
  psychological: [
    {
      id: 'preoccupation',
      name: 'Constantly Thinking About Gambling',
      description: 'Obsessive thoughts about next gambling opportunity',
      severity: 'moderate'
    },
    {
      id: 'withdrawal_symptoms',
      name: 'Restlessness When Not Gambling',
      description: 'Anxiety, irritability when unable to gamble',
      severity: 'moderate'
    }
  ]
};