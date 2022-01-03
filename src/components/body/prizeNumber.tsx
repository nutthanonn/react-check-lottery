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
    height: "30vh",
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
  }, [store, store.DataDateTime]);

  return (
    <Box className={classes.root}>
      <Box id="รางวัลที่-1">
        <Typography variant="h3"></Typography>
      </Box>
      <Box id="3-ตัวหน้า">
        <Typography variant="h4"></Typography>
        <Typography variant="h4"></Typography>
      </Box>
      <Box id="3-ตัวหลัง">
        <Typography variant="h4"></Typography>
        <Typography variant="h4"></Typography>
      </Box>
      <Box id="2 ตัว">
        <Typography variant="h5"></Typography>
      </Box>
    </Box>
  );
});

export default PrizeNumber;
