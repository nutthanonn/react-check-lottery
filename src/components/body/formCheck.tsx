import React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";

import { LotteryStoreImpl } from "../../store/lotteryStore";
import { observer } from "mobx-react";
import { makeStyles } from "@mui/styles";
import { MdMoney } from "react-icons/md";

interface FormCheckProps {
  store: LotteryStoreImpl;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
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

const item = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const FormCheck: React.FC<FormCheckProps> = observer(({ store }) => {
  const classes = useStyles();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {};

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        {item.map((item) => {
          return (
            <Grid item md={4} key={item} className={classes.gridChild}>
              <Paper
                elevation={1}
                component="form"
                className={classes.formNumber}
              >
                <Box className={classes.IconCenter}>
                  <MdMoney size="20" color="green" />
                </Box>
                <InputBase
                  type="text"
                  sx={{ ml: 1 }}
                  placeholder="เลขล๊อตเตอรี่"
                />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
});

export default FormCheck;
