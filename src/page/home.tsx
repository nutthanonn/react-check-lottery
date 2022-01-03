import React from "react";
import PrizeNumber from "../components/body/prizeNumber";
import SelectDate from "../components/body/selectDate";
import FormCheck from "../components/body/formCheck";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

import { LotteryStore } from "../store/lotteryStore";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100vw",
  },
  blockItem: {
    display: "block",
    minHeight: "100vh",
    backgroundColor: "#F4F9F9",
  },
  boxContainer: {
    display: "flex",
    position: "fixed",
    justifyContent: "center",
    "@media only screen and (max-width: 800px)": {
      position: "relative",
    },
  },
  container: {
    margin: 50,
  },
  gridChildCenter: {
    display: "flex",
    justifyContent: "space-around",
  },
});

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.blockItem}>
        <Box className={classes.boxContainer}>
          <Box className={classes.container}>
            <Grid
              container
              sx={{
                bgcolor: "#A4EBF3",
                p: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item md={9} xs={12} sm={12}>
                <Typography variant="h3">รางวัลที่ออก</Typography>
                <PrizeNumber store={LotteryStore} />
              </Grid>
              <Grid item md={3}>
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
