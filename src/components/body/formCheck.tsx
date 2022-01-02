import React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import { LotteryStoreImpl } from "../../store/lotteryStore";
import { observer } from "mobx-react";
import { makeStyles } from "@mui/styles";

interface FormCheckProps {
  store: LotteryStoreImpl;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
  },
});

const FormCheck: React.FC<FormCheckProps> = observer(({ store }) => {
  const classes = useStyles();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {};

  return (
    <Box className={classes.root}>
      <Paper elevation={1}></Paper>
    </Box>
  );
});

export default FormCheck;
