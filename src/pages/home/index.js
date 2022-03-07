import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const App = (props) => {
  return (
    <Grid
      container
      justifyContent={"center"}
      height="90vh"
      alignItems={"center"}
    >
      <Grid item md={5} xs={12}>
        <Box textAlign="center">
          <Typography variant="h3">Job Tracker</Typography>
          <Typography variant="h6">Lighthouse Labs Students</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default App;
