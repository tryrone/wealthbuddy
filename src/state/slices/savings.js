import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  PersonalTargetSavings,
  FixedFlexibleSavings,
  FixedLockSavings,
  Savings,
  GroupTargetSavings,
  GroupChallengeSavings,
  GroupContributorySavings,
} from "services/network";
import { getDashboardData } from "../ducks/dashboard/actions";
import { getRecentSavingTransactionsData } from "../ducks/recentSavingTransactions/actions";
import { getCustomerSavingsData } from "../ducks/customerSavings/actions";
import { SavingsType } from "constants/enums";

const initialState = {
  createPersonalTargetSavingsLoading: false,
  createPersonalTargetSavingsError: null,
  createPersonalTargetSavingsEntities: [],
  createGroupTargetSavingsLoading: false,
  createGroupTargetSavingsError: null,
  createGroupTargetSavingsEntities: [],
  fetchByIdLoading: false,
  fetchByIdError: null,
  fetchByIdEntities: [],
  startCancelLoading: false,
  startCancelError: null,
  startCancelEntities: [],
  completeCancelLoading: false,
  completeCancelError: null,
  completeCancelEntities: [],
  startWithdrawLoading: false,
  startWithdrawError: null,
  startWithdrawEntities: [],
  completeWithdrawLoading: false,
  completeWithdrawError: null,
  completeWithdrawEntities: [],
  pendingInvitationsLoading: false,
  pendingInvitationsError: null,
  pendingInvitationsEntities: [],
};

export const createPersonalTargetSavings = createAsyncThunk(
  "savings/createPersonalTargetSavings",
  async (payload, thunkAPI) => {
    const response = await PersonalTargetSavings.createPersonalTargetSavings(
      payload
    );

    thunkAPI.dispatch(getDashboardData());
    thunkAPI.dispatch(getCustomerSavingsData());
    thunkAPI.dispatch(getRecentSavingTransactionsData());

    return response.data.data;
  }
);

export const createFixedLockSavings = createAsyncThunk(
  "savings/createFixedLockSavings",
  async (payload, thunkAPI) => {
    const response = await FixedLockSavings.createFixedLock(payload);

    thunkAPI.dispatch(getDashboardData());
    thunkAPI.dispatch(getCustomerSavingsData());
    thunkAPI.dispatch(getRecentSavingTransactionsData());

    return response.data.data;
  }
);

export const createFixedFlexibleSavings = createAsyncThunk(
  "savings/createFixedFlexibleSavings",
  async (payload, thunkAPI) => {
    const response = await FixedFlexibleSavings.createFixedFlexible(payload);

    thunkAPI.dispatch(getDashboardData());
    thunkAPI.dispatch(getCustomerSavingsData());
    thunkAPI.dispatch(getRecentSavingTransactionsData());

    return response.data.data;
  }
);

export const createGroupTargetSavings = createAsyncThunk(
  "savings/createGroupTargetSavings",
  async (payload, thunkAPI) => {
    const response = await GroupTargetSavings.createGroupTargetSavings(payload);

    thunkAPI.dispatch(getDashboardData());
    thunkAPI.dispatch(getCustomerSavingsData());
    thunkAPI.dispatch(getRecentSavingTransactionsData());

    return response.data.data;
  }
);

export const createGroupChallengeSavings = createAsyncThunk(
  "savings/createGroupChallengeSavings",
  async (payload, thunkAPI) => {
    const response = await GroupChallengeSavings.createGroupChallengeSavings(
      payload
    );

    thunkAPI.dispatch(getDashboardData());
    thunkAPI.dispatch(getCustomerSavingsData());
    thunkAPI.dispatch(getRecentSavingTransactionsData());

    return response.data.data;
  }
);

export const createGroupContributorySavings = createAsyncThunk(
  "savings/createGroupContributorySavings",
  async (payload, thunkAPI) => {
    const response = await GroupContributorySavings.createGroupContributorySavings(
      payload
    );

    thunkAPI.dispatch(getDashboardData());
    thunkAPI.dispatch(getCustomerSavingsData());
    thunkAPI.dispatch(getRecentSavingTransactionsData());

    return response.data.data;
  }
);

export const fetchSavingsById = createAsyncThunk(
  "savings/fetchSavingsById",
  async (savingsId) => {
    const response = await Savings.getAllSavings(savingsId);
    return response.data.data;
  }
);

export const fetchGroupChallengeSavingsById = createAsyncThunk(
  "savings/fetchGroupChallengeSavingsById",
  async (savingsId) => {
    const response = await GroupChallengeSavings.fetchGroupChallengeSavingsById(
      savingsId
    );
    return response.data.data;
  }
);

export const fetchGroupSavingsById = createAsyncThunk(
  "savings/fetchGroupSavingsById",
  async ({ savingsID, savingsType }, thunkAPI) => {
    const request = {
      [SavingsType.GroupTargetSavings]:
        GroupTargetSavings.fetchGroupTargetSavingsById,
      [SavingsType.GroupChallengeSavings]:
        GroupChallengeSavings.fetchGroupChallengeSavingsById,
      [SavingsType.GroupContributorySavings]:
        GroupContributorySavings.fetchGroupContributorySavingsById,
    };
    const response = await request[savingsType](savingsID);
    return response.data.data;
  }
);

export const startGroupSavings = createAsyncThunk(
  "savings/startGroupSavings",
  async ({ savingsID, savingsType }, thunkAPI) => {
    const request = {
      [SavingsType.GroupTargetSavings]:
        GroupTargetSavings.startGroupTargetSavings,
      [SavingsType.GroupChallengeSavings]:
        GroupChallengeSavings.startGroupChallengeSavings,
      [SavingsType.GroupContributorySavings]:
        GroupContributorySavings.startGroupContributorySavings,
    };
    const response = await request[savingsType]({ savingsID });

    thunkAPI.dispatch(getDashboardData());
    thunkAPI.dispatch(getCustomerSavingsData());
    thunkAPI.dispatch(getRecentSavingTransactionsData());

    return response.data.data;
  }
);

export const startCancelSavings = createAsyncThunk(
  "savings/startCancel",
  async ({ savingsID, savingsType }) => {
    const request = {
      [SavingsType.PersonalTargetSavings]:
        PersonalTargetSavings.startCancelPersonalTargetSavings,
      [SavingsType.FixedLockSavings]:
        FixedLockSavings.startCancelFixedLockSavings,
      [SavingsType.FixedFlexibleSavings]:
        FixedFlexibleSavings.startCancelFixedFlexibleSavings,
    };
    const response = await request[savingsType](savingsID);
    return response.data.data;
  }
);

export const completeCancelSavings = createAsyncThunk(
  "savings/completeCancel",
  async ({ savingsID, savingsType }, thunkAPI) => {
    const request = {
      [SavingsType.PersonalTargetSavings]:
        PersonalTargetSavings.completeCancelPersonalTargetSavings,
      [SavingsType.FixedLockSavings]:
        FixedLockSavings.completeCancelFixedLockSavings,
      [SavingsType.FixedFlexibleSavings]:
        FixedFlexibleSavings.completeCancelFixedFlexibleSavings,
    };
    const response = await request[savingsType](savingsID);

    thunkAPI.dispatch(getDashboardData());
    thunkAPI.dispatch(getCustomerSavingsData());
    thunkAPI.dispatch(getRecentSavingTransactionsData());

    return response.data.data;
  }
);

export const startWithdrawSavings = createAsyncThunk(
  "savings/startWithdraw",
  async ({ savingsType, formValues }) => {
    const request = {
      [SavingsType.PersonalTargetSavings]:
        PersonalTargetSavings.startPersonalTargetWithdrawal,
      [SavingsType.FixedLockSavings]: FixedLockSavings.startFixedLockWithdraw,
      [SavingsType.FixedFlexibleSavings]:
        FixedFlexibleSavings.startFixedFlexibleWithdraw,
      [SavingsType.GroupTargetSavings]:
        GroupTargetSavings.startGroupTargetWithdraw,
      [SavingsType.GroupChallengeSavings]:
        GroupChallengeSavings.startGroupChallengeWithdraw,
    };
    const response = await request[savingsType](formValues);
    return response.data.data;
  }
);

export const completeWithdrawSavings = createAsyncThunk(
  "savings/completeWithdraw",
  async ({ savingsType, formValues }, thunkAPI) => {
    const request = {
      [SavingsType.PersonalTargetSavings]:
        PersonalTargetSavings.completePersonalTargetWithdrawal,
      [SavingsType.FixedLockSavings]:
        FixedLockSavings.completeFixedLockWithdraw,
      [SavingsType.FixedFlexibleSavings]:
        FixedFlexibleSavings.completeFixedFlexibleWithdraw,
      [SavingsType.GroupTargetSavings]:
        GroupTargetSavings.completeGroupTargetWithdraw,
      [SavingsType.GroupChallengeSavings]:
        GroupChallengeSavings.completeGroupChallengeWithdraw,
    };
    const response = await request[savingsType](formValues);
    thunkAPI.dispatch(getDashboardData());
    return response.data.data;
  }
);

export const getPendingSavingsInvitations = createAsyncThunk(
  "savings/getPendingInvitations",
  async () => {
    const response = await Savings.getPendingSavingsInvitations();
    return response.data.data;
  }
);

const savings = createSlice({
  name: "savings",
  initialState,
  reducers: {
    setPendingSavingsInvitations: (state, action) => {
      state.pendingInvitationsEntities = action.payload;
    },
  },
  extraReducers: {
    [fetchSavingsById.pending]: (state) => {
      state.fetchByIdLoading = true;
      state.fetchByIdError = null;
    },
    [fetchSavingsById.fulfilled]: (state, action) => {
      state.fetchByIdEntities = action.payload;
      state.fetchByIdLoading = false;
      state.fetchByIdError = null;
    },
    [fetchSavingsById.rejected]: (state, action) => {
      state.fetchByIdEntities = null;
      state.fetchByIdLoading = false;
      state.fetchByIdError = action.error;
    },
    [startCancelSavings.pending]: (state) => {
      state.startCancelLoading = true;
      state.startCancelError = null;
    },
    [startCancelSavings.fulfilled]: (state, action) => {
      state.startCancelEntities = action.payload;
      state.startCancelLoading = false;
      state.startCancelError = null;
    },
    [startCancelSavings.rejected]: (state, action) => {
      state.startCancelEntities = null;
      state.startCancelLoading = false;
      state.startCancelError = action.error;
    },
    [completeCancelSavings.pending]: (state) => {
      state.completeCancelLoading = true;
      state.completeCancelError = null;
    },
    [completeCancelSavings.fulfilled]: (state, action) => {
      state.completeCancelEntities = action.payload;
      state.completeCancelLoading = false;
      state.completeCancelError = null;
    },
    [completeCancelSavings.rejected]: (state, action) => {
      state.completeCancelEntities = null;
      state.completeCancelLoading = false;
      state.completeCancelError = action.error;
    },
    [startWithdrawSavings.pending]: (state) => {
      state.startWithdrawLoading = true;
      state.startWithdrawError = null;
    },
    [startWithdrawSavings.fulfilled]: (state, action) => {
      state.startWithdrawEntities = action.payload;
      state.startWithdrawLoading = false;
      state.startWithdrawError = null;
    },
    [startWithdrawSavings.rejected]: (state, action) => {
      state.startWithdrawEntities = null;
      state.startWithdrawLoading = false;
      state.startWithdrawError = action.error.message;
    },
    [completeWithdrawSavings.pending]: (state) => {
      state.completeWithdrawLoading = true;
      state.completeWithdrawError = null;
    },
    [completeWithdrawSavings.fulfilled]: (state, action) => {
      state.completeWithdrawEntities = action.payload;
      state.completeWithdrawLoading = false;
      state.completeWithdrawError = null;
    },
    [completeWithdrawSavings.rejected]: (state, action) => {
      state.completeWithdrawEntities = null;
      state.completeWithdrawLoading = false;
      state.completeWithdrawError = action.error.message;
    },
    [getPendingSavingsInvitations.pending]: (state) => {
      state.pendingInvitationsLoading = true;
      state.pendingInvitationsError = null;
    },
    [getPendingSavingsInvitations.fulfilled]: (state, action) => {
      state.pendingInvitationsEntities = action.payload;
      state.pendingInvitationsLoading = false;
      state.pendingInvitationsError = null;
    },
    [getPendingSavingsInvitations.rejected]: (state, action) => {
      state.pendingInvitationsEntities = null;
      state.pendingInvitationsLoading = false;
      state.pendingInvitationsError = action.error;
    },
  },
});

export const { setPendingSavingsInvitations } = savings.actions;

export default savings.reducer;
