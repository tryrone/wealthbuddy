const urls = {
    login: "/api/Customer/login",
    startVerifyEmail: "/api/Customer/StartVerifyEmail",
    completeVerifyEmail: "/api/Customer/CompleteVerifyEmail",
    createUser: "/api/Customer/create",
    addBvn: "/api/Customer/AddbvnToProfile",
    startFundNewCard: "/api/Customer/StartFundWalletWithNewCard",
    verifyFundNewCard: "/api/Customer/VerifyFundWalletWithNewCard",
    getCustomerSavings: "/api/Savings/getcustomersavings",
    getCustomerCards: "/api/Customer/getcards",
    createPersonalSaving: "/api/PersonalTargetSavings/CreateNewPersonalTargetSavings",
    createFixedLocked: "/api/FixedLockSavings/Create",
    createFixedFlexible: "/api/FixedFlexibleSavings/createfixedflexiblesavings",
    getDashboard: "/api/Customer/dashboard",
    getSavingsTransactions: "/api/Savings/getrecentsavingstransactions",
    createGroupChallengeSavings: "/api/GroupChallengeSavings/creategroupchallengesavings",
    createGroupTargetSavings: "/api/GroupTargetSavings/creategrouptargetsavings",
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
    completeCancelFixedFlexibleSavings: "/api/FixedFlexibleSavings/completecancel",
    startCancelFixedLockSavings: "/api/FixedLockSavings/startcancel",
    completeCancelFixedLockSavings: "/api/FixedLockSavings/completecancel",
    getSavingsConfiguration: "/api/Savings/getsavingsconfiguration",
    saveProfile: "/api/Customer/updateothercustomerinfo",
    getBankList: "/api/Customer/getbanklist",
    getUserBanks: "/api/Customer/getbankaccount",
    addBankAccount:"/api/Customer/AddBankAccount"
}

export default urls;
