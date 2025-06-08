import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for your slice's state
interface AuthState {
  username: string | null;
  password: string | null;
  agent_id: string | null;
  numbers: string[] | null;
}

// Define the initial state
const initialState: AuthState = {
  username: null,
  password: null,
  agent_id: null,
  numbers: null,
};

// Create the authSlice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserDetails: (state, action: PayloadAction<AuthState>) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.agent_id = action.payload.agent_id;
      state.numbers = action.payload.numbers;
    },
    logout: (state) => {
      state.username = null;
      state.password = null;
      state.agent_id = null;
      state.numbers = null;
    },
  },
});

// Export actions
export const { setUserDetails, logout } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
