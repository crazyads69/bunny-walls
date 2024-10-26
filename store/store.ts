import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/store/slice/authSlice";
import { auth } from "@/util/firebaseConfig";

const store = configureStore({
    reducer: {
        // Add reducers here
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
