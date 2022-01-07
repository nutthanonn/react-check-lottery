import React, { useEffect, useState } from "react";
import PrizeBoardItem from "./item/prizeBoardItem";
import PrizeBoardSkeleton from "./skeleton/prizeBoardSkeleton";

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
    borderRadius: 10,
    color: "#F9F7F7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: 20,
    "@media only screen and (max-width: 790px)": {
      flexDirection: "column",
    },
  },
});

const PrizeBoard: React.FC<PrizeBoardProps> = observer(({ store }) => {
  const classes = useStyles();
  const [prize, setPrize] = useState<prizeProps[] | null>(null);

  useEffect(() => {
    setPrize(store.PrizeNumber);
  }, [store, store.PrizeNumber]);

  //skeleton when fetch data
  useEffect(() => {
    setPrize(null);
  }, [store, store.LotteryDate]);

  return (
    <Box className={classes.root}>
      {prize && (
        <Box className={classes.box}>
          {prize.map((item) => {
            return (
              <PrizeBoardItem
                key={item.id}
                id={item.id}
                name={item.name}
                number={item.number}
              />
            );
          })}
        </Box>
      )}
      {!prize && (
        <Box className={classes.box}>
          <PrizeBoardSkeleton />
        </Box>
      )}
    </Box>
  );
});

export default PrizeBoard;
