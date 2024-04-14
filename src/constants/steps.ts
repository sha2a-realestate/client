export enum CompleteProfileStep {
  PersonalInfo = 'personal-info',
  AgentType = 'agent-type'
}

export type CompeleteProfileStepsListProps = {
  title: CompleteProfileStep;
  order: number;
};

export const CompeleteProfileStepsList: CompeleteProfileStepsListProps[] = [
  {
    title: CompleteProfileStep.PersonalInfo,
    order: 1
  },
  {
    title: CompleteProfileStep.AgentType,
    order: 2
  }
];
