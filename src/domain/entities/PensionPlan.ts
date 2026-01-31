// Domain Entity: Plan de Pensión

export interface PensionPlan {
  id: string;
  name: string;
  description: string;
  minContribution: number;
  maxContribution: number;
  expectedReturn: string;
  riskLevel: 'bajo' | 'medio' | 'alto';
  benefits: string[];
  isPopular: boolean;
}

export interface PensionPlanDetails extends PensionPlan {
  longDescription: string;
  requirements: string[];
  taxBenefits: string;
  withdrawalConditions: string[];
}
