//refacter code

import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@mui/styles";
import { observer } from "mobx-react";
import { LotteryStoreImpl } from "../../store/lotteryStore";
import { AllShowPrizeNumberProps } from "../../interfaces/AllShowPrizeNumber";

interface PrizeNumberProps {
  store: LotteryStoreImpl;
}

const useStyles = makeStyles({
  root: {
    height: "40vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    "@media only screen and (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
  boxPrize: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  title: {
    fontWeight: "lighter",
  },
  boxAll: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const PrizeNumber: React.FC<PrizeNumberProps> = observer(({ store }) => {
  const classes = useStyles();
  const [prizeNumber, setPrizeNumber] = useState<AllShowPrizeNumberProps>();

  useEffect(() => {
    async function fetch() {
      const res = await store.prize_number();
      setPrizeNumber(res);
    }

    fetch();
  }, [store, store.DataSelect]);

  return (
    <Box className={classes.root}>
      <Box id="รางวัลที่-1" className={classes.boxAll}>
        <Typography variant="h3" className={classes.title}>
          {prizeNumber?.prizeFirst[0]}
        </Typography>
        <Typography variant="body2">รางวัลที่ 1</Typography>
      </Box>
      <Box className={classes.boxAll}>
        <Box id="3-ตัวหน้า" className={classes.boxPrize} sx={{ width: 200 }}>
          {prizeNumber?.runningNumberFrontThree.map((item) => {
            return (
              <Typography variant="h4" className={classes.title} key={item}>
                {item}
              </Typography>
            );
          })}
        </Box>
        <Typography variant="body2">รางวัลสามตัวหน้า</Typography>
      </Box>
      <Box className={classes.boxAll}>
        <Box id="3-ตัวหน้า" className={classes.boxPrize} sx={{ width: 200 }}>
          {prizeNumber?.runningNumberBackThree.map((item) => {
            return (
              <Typography variant="h4" className={classes.title} key={item}>
                {item}
              </Typography>
            );
          })}
        </Box>
        <Typography variant="body2">รางวัลสามตัวหลัง</Typography>
      </Box>

      <Box className={classes.boxAll}>
        <Box id="2 ตัว" className={classes.boxPrize}>
          <Typography variant="h5">
            {prizeNumber?.runningNumberBackTwo[0]}
          </Typography>
        </Box>
        <Typography variant="body2">รางวัลสองตัวท้าย</Typography>
      </Box>
    </Box>
  );
});

export default PrizeNumber;
