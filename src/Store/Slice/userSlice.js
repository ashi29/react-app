import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  number: "",
  otp: "",
  countryCode: "",
  dob: "",
  country: "",
  state: "",
  city: "",
  zipcode: "",
  profession: "",
  experience: "",
  accountType: "",
  monthlySalary: "",
};

const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    setField: (state, action) => {
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    },
    resetForm: () => initialState,
  },
});

export const { setField, resetForm } = formDataSlice.actions;

export const selectFormData = (state) => state.formData;
export default formDataSlice.reducer;
