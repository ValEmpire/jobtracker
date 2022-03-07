import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Layout from "../../layout";

const App = (props) => {
  return (
    <Layout>
      <Grid
        container
        justifyContent={"center"}
        height="100vh"
        alignItems={"center"}
      >
        <Grid item md={5} xs={12}>
          <Box textAlign="center">
            <Typography variant="h3">Job Tracker</Typography>
            <Typography variant="h6">Lighthouse Labs Students</Typography>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default App;
