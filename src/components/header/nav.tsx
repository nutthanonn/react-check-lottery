import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  onScrolll: {
    backgroundColor: "#DBE2EF",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    transition: "all 0.5s linear",
    padding: 15,
    color: "white",
  },
  nav: {
    backgroundColor: "white",
    transition: "all 0.5s ease",
    padding: 20,
    color: "black",
  },
});

const Nav: React.FC = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
  });

  return (
    <AppBar sx={{ border: 0, boxShadow: 0 }}>
      <CssBaseline />
      <Toolbar className={trigger ? classes.onScrolll : classes.nav}>
        <Typography variant="h3">Lottery</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
