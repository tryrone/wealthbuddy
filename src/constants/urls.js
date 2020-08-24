const urls = {
  login: "/api/Customer/login",
  startVerifyEmail: "/api/Customer/StartVerifyEmail",
  completeVerifyEmail: "/api/Customer/CompleteVerifyEmail",
  createUser: "/api/Customer/create",
  addBvn: "/api/Customer/AddbvnToProfile",
  startFundNewCard: "/api/Customer/StartFundWalletWithNewCard",
  verifyFundNewCard: "/api/Customer/VerifyFundWalletWithNewCard",
  getCustomerSavings: "/api/Savings/getcustomersavings",
  getPendingSavingsInvitations: "/api/Savings/getpendinginvitations",
  getCustomerCards: "/api/Customer/getcards",
  createPersonalSaving:
    "/api/PersonalTargetSavings/CreateNewPersonalTargetSavings",
  createFixedLocked: "/api/FixedLockSavings/Create",
  createFixedFlexible: "/api/FixedFlexibleSavings/createfixedflexiblesavings",
  getDashboard: "/api/Customer/dashboard",
  getSavingsTransactions: "/api/Savings/getrecentsavingstransactions",
  //Group Target Savings
  createGroupTargetSavings: "/api/GroupTargetSavings/creategroupsavings",
  getGroupTargetSavingsById: "/api/GroupTargetSavings/getgroupsavings/:id",
  startGroupTargetSavings: "/api/GroupTargetSavings/startgroupsavings",
  startGroupTargetWithdraw: "/api/GroupTargetSavings/startwithdraw",
  completeGroupTargetWithdraw: "/api/GroupTargetSavings/completewithdraw",
  treatGroupTargetInvitation: "/api/GroupTargetSavings/treatgroupsavingsinvitation",
  //Group Challenge Savings
  createGroupChallengeSavings: "/api/GroupChallengeSavings/creategroupsavings",
  getGroupChallengeSavingsById: "/api/GroupChallengeSavings/getgroupsavings/:id",
  startGroupChallengeSavings: "/api/GroupChallengeSavings/startgroupsavings",
  startGroupChallengeWithdraw: "/api/GroupChallengeSavings/startwithdraw",
  completeGroupChallengeWithdraw: "/api/GroupChallengeSavings/completewithdraw",
  treatGroupChallengeInvitation: "/api/GroupChallengeSavings/treatgroupsavingsinvitation",
  //Group Contributory Savings
  createGroupContributorySavings: "/api/GroupContributorySavings/creategroupsavings",
  getGroupContributorySavingsById: "/api/GroupContributorySavings/getgroupsavings/:id",
  startGroupContributorySavings: "/api/GroupContributorySavings/startgroupsavings",
  treatGroupContributoryInvitation: "/api/GroupContributorySavings/treatgroupsavingsinvitation",
  //
  uploadProfilePicture: "/api/Customer/UploadProfilePicture",
  uploadUtilityBill: "/api/Customer/UploadUtilityBill",
  uploadIdentification: "/api/Customer/UploadIdentification",
  fundWalletWithExistingCard: "/api/Customer/FundWalletWithExistingCard",
  getAllSavings: "/api/Savings/getallsavingstransactions",
  startPersonalWithdrawal: "/api/PersonalTargetSavings/startwithdraw",
  startFixedFlexibleWithdraw: "/api/FixedFlexibleSavings/startwithdraw",
  startFixedLockWithdraw: "/api/FixedLockSavings/startwithdraw",
  completePersonalWithdrawal: "/api/PersonalTargetSavings/completewithdraw",
  completeFixedFlexibleWithdraw: "/api/FixedFlexibleSavings/completewithdraw",
  completeFixedLockWithdraw: "/api/FixedLockSavings/completewithdraw",
  resetPassword: "/api/Customer/ResetCustomerPassword",
  changePassword: "/api/Customer/ChangeCustomerPassword",
  startCancelPersonalSavings: "/api/PersonalTargetSavings/startcancel",
  completeCancelPersonalSavings: "/api/PersonalTargetSavings/completecancel",
  startCancelFixedFlexibleSavings: "/api/FixedFlexibleSavings/startcancel",
  completeCancelFixedFlexibleSavings:
    "/api/FixedFlexibleSavings/completecancel",
  startCancelFixedLockSavings: "/api/FixedLockSavings/startcancel",
  completeCancelFixedLockSavings: "/api/FixedLockSavings/completecancel",
  getSavingsConfiguration: "/api/Savings/getsavingsconfiguration",
  updateProfile: "/api/Customer/updateothercustomerinfo",
  getBankList: "/api/Customer/getbanklist",
  getUserBanks: "/api/Customer/getbankaccount",
  addBankAccount: "/api/Customer/AddBankAccount",
  sendToken: "/api/Customer/sendtoken",
  verifyAddBankAccount: "/api/Customer/VerifyAddbankAccount",
  createFundInvestment: "/api/Investments/funds/create",
  createTbillsInvestment: "/api/Investments/tbills/create",
  createTerminstrumentsInvestment: "/api/Investments/terminstruments/create",
  investmentConfiguration: "/api/Investments/configurations",
  getAllInvestments: "/api/Investments",
  getAllInvetstmentTransactions: "/api/Investments/transactions/all",
  getPersonalInvestments: "/api/Investments/me",
  investmentTransactionsForFunds: "/api/Investments/funds/transactions",
  fundMutualFund: "/api/Investments/funds/topup",
  fundInvestmentTbills: "/api/Investments/tbills/topup",
  fundInvestmentFixed: "/api/Investments/terminstruments/topup",
  investmentValuation: "/api/Investments/valuation",
  fundsWithdraw: "/api/Investments/funds/withdraw",
  tbillsTerminate: "/api/Investments/tbills/terminate",
  fundsTransactionsList: "/api/Investments/funds/transactions",
  tBillsTransactionsList: "/api/Investments/tbills/transactions",
  fixedTransactionsList: "/api/Investments/terminstruments/transactions",
};

export default urls;
