import React from "react";
import Nav from "../components/header/nav";
import SelectDate from "../components/body/selectDate";
import FormCheck from "../components/body/formCheck";

import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

import { LotteryStore } from "../store/lotteryStore";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: "90vw",
    marginTop: 50,
  },
});

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <Box>
      <Nav />
      <Box className={classes.root}>
        <Box className={classes.container} sx={{ border: 1 }}>
          <SelectDate store={LotteryStore} />
          <FormCheck store={LotteryStore} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
