export const SavingsFrequency = {
  Daily: 1,
  Weekly: 2,
  Monthly: 3,
};

export const SavingsType = {
  PersonalTargetSavings: 1,
  FixedLockSavings: 2,
  FixedFlexibleSavings: 3,
  GroupTargetSavings: 4,
  GroupChallengeSavings: 5,
  GroupContributorySavings: 6,
};

export const GroupSavingsType = {
  GroupTargetSavings: 1,
  GroupChallengeSavings: 2,
  GroupContributorySavings: 3,
};

export const InvestmentType = {
  MutualFunds: 1,
  FixedDeposits: 2,
  TreasuryBills: 3,
  RealEstate: 4,
  ForeignCurrency: 5,
  Ethical: 6,
  Bonds: 7,
};

export const GroupSavingsStatus = {
  Pending: 1,
  InProgress: 2,
  Completed: 3, // target reached
  Cancelled: 4,
  Finished: 5, // maturity date reached
  Withdrawn: 6,
};

export const GroupInvitationStatus = {
  Pending: 1,
  Accepted: 2,
  Declined: 3,
};

export const DocumentApprovalStatus = {
  Submitted: 1,
  Approved: 2,
  Rejected: 3,
  NotUploaded: 4,
  Uploaded: 5,
}
