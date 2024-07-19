import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import "./Style.css";

const MuiDataGrid = ({
  rows,
  columns,
  onRowSelectionModelChange,
  checkboxSelection,
  rowSelectionModel,
  columnVisibilityModel,
  disablePagination,
}) => {
  return (
    <Grid container className="data-grid-container">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: disablePagination ? rows.length : 5,
            },
          },
        }}
        pageSizeOptions={disablePagination ? [rows.length] : [5]}
        disableRowSelectionOnClick
        rowSelectionModel={rowSelectionModel}
        onRowSelectionModelChange={onRowSelectionModelChange}
        checkboxSelection={checkboxSelection}
        columnVisibilityModel={columnVisibilityModel}
        pagination={!disablePagination}
      />
    </Grid>
  );
};

export default MuiDataGrid;
