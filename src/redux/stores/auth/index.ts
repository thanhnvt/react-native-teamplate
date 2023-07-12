import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface AuthStates {
  tokenInfo: any
  user: any
  isLogin: boolean
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
      console.log("login",state);
      return {
        ...state,
        isLogin: true
      }
    }
  },
})

export const {login} = authSlice.actions
export default authSlice.reducer
