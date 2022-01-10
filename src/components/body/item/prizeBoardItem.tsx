import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

interface PrizeBoardItemProps {
  id: string;
  name: string;
  number: string[];
}

const useStyles = makeStyles({
  root: {
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  boxNumber: {
    display: "flex",
    flexDirection: "row",
  },
});

const PrizeBoardItem: React.FC<PrizeBoardItemProps> = ({
  id,
  name,
  number,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.boxNumber}>
        {number.map((item, index) => {
          return (
            <Typography variant="h5" sx={{ m: 1 }} key={index}>
              {item}
            </Typography>
          );
        })}
      </Box>
      <Typography variant="body2">{name}</Typography>
    </Box>
  );
};

export default PrizeBoardItem;
