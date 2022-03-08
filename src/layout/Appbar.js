import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { logoutFirebase } from "../firebase/action";
import { useAuthStatus } from "../hooks/auth";

export default function ButtonAppBar() {
  const navigate = useNavigate();

  const user = useAuthStatus();

  const handleLogout = () => {
    logoutFirebase();

    navigate("/");
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              JobTracker
            </Link>
          </Typography>

          {user && (
            <Button onClick={handleLogout} color="inherit">
              Logout
            </Button>
          )}
          {user === null && (
            <Button onClick={handleLogin} color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
