import React from "react";

import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {},
  nav: {
    backgroundColor: "black",
  },
});

const Nav: React.FC = () => {
  const classes = useStyles();
  const tigger = useScrollTrigger();

  return (
    <Box>
      <CssBaseline />
      <Toolbar className={classes.nav}>
        <Typography>Nutthanon</Typography>
      </Toolbar>
    </Box>
  );
};

export default Nav;
