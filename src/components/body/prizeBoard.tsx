import React, { useEffect } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {},
  box: {
    backgroundColor: "#3F72AF",
    color: "#F9F7F7",
  },
});

const PrizeBoard: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.box}>
        <Typography>NUTHTANON</Typography>
      </Box>
    </Box>
  );
};

export default PrizeBoard;
