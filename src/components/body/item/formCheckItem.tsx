import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import { MdMoney } from "react-icons/md";

import { makeStyles } from "@mui/styles";
import { observer } from "mobx-react";
import { LotteryStoreImpl } from "../../../store/lotteryStore";

interface FormCheckItemProps {
  id: number;
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

const FormCheckItem: React.FC<FormCheckItemProps> = observer(
  ({ id, store }) => {
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const number = event.target.value;
      store.change_Lottery_Number(id, event.target.value);
    };

    return (
      <Grid item md={4} className={classes.gridChild}>
        <Paper elevation={1} component="form" className={classes.formNumber}>
          <Box className={classes.IconCenter}>
            <MdMoney size="20" color="green" />
          </Box>
          <InputBase
            type="number"
            sx={{ ml: 1 }}
            placeholder="เลขล๊อตเตอรี่"
            onChange={handleChange}
            value={store.LotterNumberClient[id]}
          />
        </Paper>
      </Grid>
    );
  }
);

export default FormCheckItem;
