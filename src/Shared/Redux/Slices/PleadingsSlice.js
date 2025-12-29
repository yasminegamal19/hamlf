import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import i18n from "../../../i18n/i18n";
const BASE_URL = process.env.REACT_APP_BASE_URL;

// all pleadings
export const fetchPleadings = createAsyncThunk(
  "pleadings/fetchAll",
  async ({ page = 1 }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}get_pleadings?page=${page}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          "Content-Type": "application/json",
          "Accept-Language": i18n.language,
        },
      });
      
      return response.data; // Return the whole response including pagination
  
    } catch (error) {
      const message = error.response?.data?.message || "Failed load data";
      return rejectWithValue(message);
    }
  }
);

const PleadingsSlice = createSlice({
  name: "pleadings",
  initialState: {
    pleadings: [],
    isLoading: false,
    error: null,
    success: null,
  },
  reducers: {
    clearState: (state) => {
      state.error = null;
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPleadings.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPleadings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pleadings = action.payload.data.data;
        state.pagination = action.payload.data.pagination;
      })
      .addCase(fetchPleadings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to load data";
      });
  },
});

export const { clearState } = PleadingsSlice.actions;
export default PleadingsSlice.reducer;