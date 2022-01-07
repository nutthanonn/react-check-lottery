import React from "react";
import FormInput from "../components/body/formInput";
import Footer from "../components/footer/footer";
import PrizeBoard from "../components/body/prizeBoard";
import SelectDate from "../components/body/selectDate";

import Box from "@mui/material/Box";
import Nav from "../components/header/nav";

import { makeStyles } from "@mui/styles";

import { LotteryStore } from "../store/lotteryStore";

const useStyles = makeStyles({
  root: {},
  block: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(to right top, #ffcef3, #fbd8f9, #f8e2fd, #f7ebff, #f8f3ff, #f5f4ff, #f3f4ff, #f1f5ff, #e2f1ff, #cfeeff, #b9ecff, #a1eafb);",
  },
  fixedPage: {
    position: "fixed",
    backgroundColor: "pink",
    borderRadius: 20,
    border: 0,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
  },
  fixedBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 50,
    "@media only screen and (max-width: 850px)": {
      flexDirection: "column",
    },
  },
  relativeBox: {
    position: "relative",
    height: "100vh",
    backgroundColor: "#DBE2EF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <Box>
      <Nav />
      <Box className={classes.block}>
        <Box className={classes.fixedPage}>
          <Box className={classes.fixedBox}>
            <PrizeBoard store={LotteryStore} />
            <SelectDate store={LotteryStore} />
          </Box>
        </Box>
      </Box>
      <Box className={classes.relativeBox}>
        <FormInput store={LotteryStore} />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
