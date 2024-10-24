import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import User from "../../model/authModel";

interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    isLoading: boolean;
}

// Initial state
const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    isLoading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Set loading state
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        // Set user
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
            state.isAuthenticated = action.payload !== null;
            state.isLoading = false; // Make sure to set loading to false when user is set
        },
        logoutSuccess: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.isLoading = false;
        },
    },
});

export const { setLoading, setUser, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
