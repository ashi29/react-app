import { Grid } from "@mui/material";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import "./Style.css";

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      page={page + 1}
      count={pageCount}
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

const MuiDataGrid = ({
  rows,
  columns,
  onRowSelectionModelChange,
  checkboxSelection,
  rowSelectionModel,
  columnVisibilityModel,
  disablePagination,
}) => {
  const PAGE_SIZE = 5;
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: disablePagination ? rows.length : PAGE_SIZE,
    page: 0,
  });

  return (
    <Grid container className="data-grid-container">
      <DataGrid
        rows={rows}
        columns={columns}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={disablePagination ? [rows.length] : [PAGE_SIZE]}
        disableRowSelectionOnClick
        rowSelectionModel={rowSelectionModel}
        onRowSelectionModelChange={onRowSelectionModelChange}
        checkboxSelection={checkboxSelection}
        columnVisibilityModel={columnVisibilityModel}
        pagination={!disablePagination}
        slots={{
          pagination: CustomPagination,
        }}
      />
    </Grid>
  );
};

export default MuiDataGrid;
