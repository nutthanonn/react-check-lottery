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
});

const PrizeBoardItem: React.FC<PrizeBoardItemProps> = ({
  id,
  name,
  number,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h5">{number}</Typography>
      <Typography variant="body2">{name}</Typography>
    </Box>
  );
};

export default PrizeBoardItem;
