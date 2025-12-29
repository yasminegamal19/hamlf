import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import i18n from "../../../i18n/i18n";
const BASE_URL = process.env.REACT_APP_BASE_URL;


// send form
export const sendContact = createAsyncThunk(
  "contact/send",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}contact_us`,
        formData
      );

      return response.data;
    } catch (error) {
      return rejectWithValue("حدث خطأ أثناء الإرسال");
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    isLoading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetContactState: (state) => {
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContact.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(sendContact.fulfilled, (state) => {
        state.isLoading = false;
        state.success = true;
      })

      .addCase(sendContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetContactState } = contactSlice.actions;
export default contactSlice.reducer;