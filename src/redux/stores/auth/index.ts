import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface AuthStates {
}

const defaultState: AuthStates = {
  tokenInfo: null, user: null,
  isLogin: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState: defaultState,
  reducers: {
    login: (state): AuthStates => {
      return {
        ...state,
        isLogin: true
      }
    }
  },
})

export const {login} = authSlice.actions
export default authSlice.reducer
