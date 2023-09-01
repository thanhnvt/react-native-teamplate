import { createSlice } from '@reduxjs/toolkit';

export interface AuthStates {
  tokenInfo: unknown;
  user: unknown;
  isLogin: boolean;
}

const defaultState: AuthStates = {
  tokenInfo: null,
  user: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: defaultState,
  reducers: {
    login: (state): AuthStates => ({
      ...state,
      isLogin: true,
    }),
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
