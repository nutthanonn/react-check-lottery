import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@mui/styles";
import { observer } from "mobx-react";
import { LotteryStoreImpl } from "../../store/lotteryStore";
import { prizeProps } from "../../interfaces/lotteryPrize";

interface PrizeBoardProps {
  store: LotteryStoreImpl;
}

const useStyles = makeStyles({
  root: {},
  box: {
    backgroundColor: "#3F72AF",
    color: "#F9F7F7",
  },
});

const PrizeBoard: React.FC<PrizeBoardProps> = observer(({ store }) => {
  const classes = useStyles();
  const [prize, setPrize] = useState<(prizeProps[] | undefined)[]>([]);

  useEffect(() => {
    async function fetch() {
      if (store.LotteryDate) {
        const res = await store.fetch_data_prize();
        setPrize(res);
      }
    }

    fetch();
  }, [store, store.LotteryDate, store.LotteryHalfMonthData]);

  return (
    <Box className={classes.root}>
      <Box className={classes.box}>
        <Typography>NUTHTANON</Typography>
      </Box>
    </Box>
  );
});

export default PrizeBoard;
