import React from "react";

// Utils
import { Colors } from "../utils/constants";

// MUI
import Stack from "@mui/material/Stack";
import { DataGrid as MuiDataGrid } from "@mui/x-data-grid";

// Components
import Typography from "./Typography";

const DataGrid = ({
  columns,
  data,
  loading,
  checkboxSelection = false,
  onSelectionChange,
  selectedList,
  noRowsTitle,
  noRowsDescription,
  height,
  getRowId,
  hideFooter = true,
  navigationBtnTitle = null,
  navigationBtnLink = null,
  ...rest
}) => {
  const NoRowsOverlay = () => {
    return (
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "300px", textAlign: "center" }}
      >
        <Typography variant="h6" mb sx={{ color: Colors.greyDark }}>
          {noRowsTitle}
        </Typography>
        <Typography variant="paragraph">{noRowsDescription}</Typography>
      </Stack>
    );
  };

  return (
    <div style={{ height: height, width: "100%", position: "relative" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <MuiDataGrid
            columns={columns}
            rows={data}
            loading={loading}
            checkboxSelection={checkboxSelection}
            hideFooter={hideFooter}
            disableColumnMenu={true}
            disableSelectionOnClick
            onSelectionModelChange={(newSelectionModel) => {
              onSelectionChange(newSelectionModel);
            }}
            selectionModel={selectedList}
            components={{
              NoRowsOverlay: NoRowsOverlay,
            }}
            getRowId={getRowId}
            {...rest}
          />
        </div>
      </div>
    </div>
  );
};

export default DataGrid;
