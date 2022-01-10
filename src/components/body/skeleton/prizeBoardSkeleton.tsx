import React from "react";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    "@media only screen and (max-width: 790px)": {
      flexDirection: "column",
    },
  },
  boxNumber: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginRight: 5,
  },
});

const item: number[] = [1, 2, 3, 4];

const PrizeBoardSkeleton: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {item.map((item) => {
        return (
          <Box className={classes.boxNumber} key={item}>
            <Skeleton variant="text" width={100} />
            <Skeleton variant="text" width={120} />
          </Box>
        );
      })}
    </Box>
  );
};

export default PrizeBoardSkeleton;
