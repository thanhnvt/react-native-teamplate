import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface AuthStates {
}

const defaultState: AuthStates = {tokenInfo: null, user: null}

const authSlice = createSlice({
  name: 'auth',
  initialState: defaultState,
  reducers: {
    login: (): AuthStates => {
      return {}
    }
  },
})

export const {login} = authSlice.actions
export default authSlice.reducer
