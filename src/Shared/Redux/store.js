import { configureStore } from "@reduxjs/toolkit";
import PleadingsSlice from '../Redux/Slices/PleadingsSlice';
import contactSlice from '../Redux/Slices/ContactSlice';
const store = configureStore({
    reducer: {
        pleadings : PleadingsSlice,
        contact : contactSlice
    }
})

export default store;