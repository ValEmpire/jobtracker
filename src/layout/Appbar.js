import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
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
            <Button LinkComponent={Link} to="/login" color="inherit">
              Login
            </Button>
            <Button LinkComponent={Link} to="/register" color="inherit">
              Register
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
