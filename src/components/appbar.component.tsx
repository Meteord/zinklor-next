import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import React from "react";
import { useLocation } from 'react-router-dom';

const ZinklorAppBar: React.FC = () => {
  const location = useLocation();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "darkgreen"
        }}
      >
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button
                component={Link}
                to={`/game`}
                color="inherit"
                sx={{
                  color: location.pathname === '/game' ? 'white' : 'grey',
                }}
              >
                Spielen
              </Button>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button
                component={Link}
                to={`/ultimatives`}
                color="inherit"
                sx={{
                  color: location.pathname === '/ultimatives' ? 'white' : 'grey',
                }}
              >
                Ultimatives
              </Button>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button
                component={Link}
                to={`/admin`}
                color="inherit"
                sx={{
                  color: location.pathname === '/admin' ? 'white' : 'grey',
                }}
              >
                Erweitern
              </Button>
            </Typography>
            <Button
              color="inherit"
            >
              Einstellungen
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default ZinklorAppBar;
