import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openClient: false,
  openVendor: false,
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    toggleDrawerClient: (state) => {
      state.openClient = !state.openClient;
    },
    toggleDrawerVendor: (state) => {
      state.openVendor = !state.openVendor;
    },
    setDrawerOpenClient: (state, action) => {
      state.openClient = action.payload;
    },
    setDrawerOpenVendor: (state, action) => {
      state.openVendor = action.payload;
    },
  },
});

export const {
  toggleDrawerClient,
  toggleDrawerVendor,
  setDrawerOpenClient,
  setDrawerOpenVendor,
} = drawerSlice.actions;
export const selectDrawerOpenClient = (state) => state.drawer.openClient;
export const selectDrawerOpenVendor = (state) => state.drawer.openVendor;
export default drawerSlice.reducer;
