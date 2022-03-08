import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import Layout from "../../layout";
import GitHubIcon from "@mui/icons-material/GitHub";
import { loginWithGithub } from "../../firebase/action";
import { useGuard } from "../../hooks/auth";

const App = (props) => {
  useGuard();

  const loginWithGithubHandler = () => {
    loginWithGithub();
  };

  return (
    <>
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
              <img
                src="/images/lighthouselabs.jpg"
                alt="lighthouselabs"
                width={"200px"}
              />
              <Typography variant="h6">Lighthouse Labs</Typography>
              <Box mt={2}>
                <Button
                  style={{ backgroundColor: "#0D1117" }}
                  variant="contained"
                  endIcon={<GitHubIcon />}
                  size="large"
                  onClick={loginWithGithubHandler}
                >
                  Login with Github
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default App;
