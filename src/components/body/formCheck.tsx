import React from "react";
import FormCheckItem from "./item/formCheckItem";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { LotteryStoreImpl } from "../../store/lotteryStore";
import { observer } from "mobx-react";
import { makeStyles } from "@mui/styles";
import { LotteryStore } from "../../store/lotteryStore";

interface FormCheckProps {
  store: LotteryStoreImpl;
}

const useStyles = makeStyles({
  root: {
    marginTop: 50,
  },
  formNumber: {
    display: "flex",
    alignItem: "center",
    width: 300,
    padding: "10px 10px",
  },
  IconCenter: {
    display: "flex",
    alignItems: "center",
  },
  gridChild: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
  },
});

const item = [0, 1, 2, 3, 4, 5];

const FormCheck: React.FC<FormCheckProps> = observer(({ store }) => {
  const classes = useStyles();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        {item.map((item) => {
          return <FormCheckItem key={item} id={item} store={LotteryStore} />;
        })}
      </Grid>
      <Box>
        <Button
          type="submit"
          variant="text"
          sx={{ width: 200 }}
          onClick={handleClick}
        >
          Check
        </Button>
      </Box>
    </Box>
  );
});

export default FormCheck;
