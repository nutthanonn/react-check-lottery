import React from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    position: "sticky",
    top: 0,
    left: 0,
    zIndex: 999,
  },
  nav: {
    backgroundColor: "#CCF2F4",
    border: 0,
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px",
    transition: "all 0.5s ease",
    height: "8vh",
  },
  navScroll: {
    backgroundColor: "#F4F9F9",
    transition: "all 1s ease",
    height: "8vh",
  },
});

const Nav: React.FC = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
  });

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Toolbar className={trigger ? classes.nav : classes.navScroll}>
        <Typography>Nutthanon</Typography>
      </Toolbar>
    </Box>
  );
};

export default Nav;
