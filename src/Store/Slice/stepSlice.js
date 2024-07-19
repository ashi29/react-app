import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addClientStep: 0,
  addVendorStep: 0,
  addProjectStep: 0,
};

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    setAddClientStep: (state, action) => {
      state.addClientStep = action.payload;
    },
    setAddVendorStep: (state, action) => {
      state.addVendorStep = action.payload;
    },
    setAddProjectStep: (state, action) => {
      state.addProjectStep = action.payload;
    },
  },
});

export const { setAddClientStep, setAddVendorStep, setAddProjectStep } =
  stepSlice.actions;

export const selectAddClientStep = (state) => state.step.addClientStep;
export const selectAddVendorStep = (state) => state.step.addVendorStep;
export const selectAddProjectStep = (state) => state.step.addProjectStep;

export default stepSlice.reducer;
