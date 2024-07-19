import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedRows: [],
};

const rowSelectionSlice = createSlice({
  name: "rowSelection",
  initialState,
  reducers: {
    setSelectedRows: (state, action) => {
      console.log("action.payload :>> ", action.payload);
      state.selectedRows = action.payload;
    },
  },
});

export const { setSelectedRows } = rowSelectionSlice.actions;
export const selectedRow = (state) => state.rowSelection.selectedRows;
export default rowSelectionSlice.reducer;
