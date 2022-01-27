import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export function BasicAlerts({ children }) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert variant="outlined" severity="warning">
        {children}
      </Alert>
    </Stack>
  );
}
