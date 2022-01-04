import React, { useEffect } from "react";

import Box from "@mui/material/Box";
import Nav from "../components/header/nav";
import PrizeBoard from "../components/body/prizeBoard";
import SelectDate from "../components/body/selectDate";

import { makeStyles } from "@mui/styles";

import { LotteryStore } from "../store/lotteryStore";

const useStyles = makeStyles({
  root: {},
  block: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  fixedPage: {
    position: "fixed",
  },
});

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <Box>
      <Nav />
      <Box className={classes.block}>
        <Box className={classes.fixedPage}>
          <PrizeBoard />
          <SelectDate store={LotteryStore} />
        </Box>
      </Box>
      <Box
        sx={{ position: "relative", height: "100vh", bgcolor: "#DBE2EF" }}
      ></Box>
    </Box>
  );
};

export default Home;
