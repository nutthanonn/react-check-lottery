import React from "react";
import PrizeNumber from "../components/body/prizeNumber";
import SelectDate from "../components/body/selectDate";
import FormCheck from "../components/body/formCheck";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

import { LotteryStore } from "../store/lotteryStore";

const useStyles = makeStyles({
  root: {},
  blockItem: {
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
    margin: 50,
  },
});

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.blockItem}>
        <Box className={classes.boxContainer}>
          <Box className={classes.container}>
            <Grid container sx={{ border: 1 }}>
              <Grid item md={8}>
                <PrizeNumber store={LotteryStore} />
              </Grid>
              <Grid item md={4}>
                <SelectDate store={LotteryStore} />
              </Grid>
            </Grid>
            <FormCheck store={LotteryStore} />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ minHeight: "300vh", position: "relative", bgcolor: "#CCF2F4" }}
      ></Box>
    </Box>
  );
};

export default Home;
