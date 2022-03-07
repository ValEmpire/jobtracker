import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { logoutFirebase } from "../firebase/action";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function ButtonAppBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      }

      return null;
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  const handleLogout = () => {
    logoutFirebase();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                JobTracker
              </Link>
            </Typography>

            {isAuthenticated && (
              <Button onClick={handleLogout} color="inherit">
                Logout
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
