import React from "react";
import Nav from "../components/header/nav";
import SelectDate from "../components/body/selectDate";
import FormCheck from "../components/body/formCheck";

import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

import { LotteryStore } from "../store/lotteryStore";

const useStyles = makeStyles({
  root: {
    display: "block",
    minHeight: "100vh",
    backgroundColor: "#F4F9F9",
  },
  boxContainer: {
    display: "flex",
    position: "fixed",
    justifyContent: "center",
  },
  container: {
    marginTop: 50,
  },
});

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.boxContainer}>
        <Box className={classes.container}>
          <SelectDate store={LotteryStore} />
          <FormCheck store={LotteryStore} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
