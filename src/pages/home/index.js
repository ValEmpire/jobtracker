import React, { useEffect } from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import Layout from "../../layout";
import GitHubIcon from "@mui/icons-material/GitHub";
import { loginWithGithub } from "../../firebase/action";
import { useNavigate } from "react-router-dom";

import { onAuthStateChanged, getAuth } from "firebase/auth";

const App = (props) => {
  const navigate = useNavigate();

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/tracker");
      }

      return null;
    });

    return () => {
      unsubscribe();
    };
  }, [auth, navigate]);

  const loginWithGithubHandler = () => {
    loginWithGithub();
  };

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
  );
};

export default App;
