import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  // const currentUser = { displayName: "kerim gurbaz" };
  const currentUser = false;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
            <NavLink
              to={"/"}
              style={{
                backgroundColor: "#fff",
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
              }}
            >
              <TheaterComedyIcon />
            </NavLink>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Movie APP
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {currentUser ? (
              <>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, m: 1, textTransform: "capitalize" }}
                >
                  {currentUser.displayName}
                </Typography>
                <NavLink
                  to={"/login"}
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Logout
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to={"/login"}
                  color="inherit"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  <Button color="inherit">Login</Button>
                </NavLink>
                <NavLink
                  to={"/register"}
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  <Button color="inherit">Register</Button>
                </NavLink>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
