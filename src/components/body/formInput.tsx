import React, { useState } from "react";

import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { FaRegNewspaper } from "react-icons/fa";
import { injectStyle } from "react-toastify/dist/inject-style";

import { observer } from "mobx-react";
import { LotteryStoreImpl } from "../../store/lotteryStore";
import { ToastContainer, toast } from "react-toastify";

interface FormInputProps {
  store: LotteryStoreImpl;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  formCheck: {
    display: "flex",
    justifyContent: "center",
    margin: 10,
    width: 300,
  },
  formInput: {
    padding: "5px 10px",
  },
});

if (typeof window !== "undefined") {
  injectStyle();
}

const FormInput: React.FC<FormInputProps> = observer(({ store }) => {
  const classes = useStyles();
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 6) {
      setValue(event.target.value);
    }
  };

  const toastifyFunc = (text: string, key: string) => {
    if (key === "won-lottery") {
      toast.success(text, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else if (key === "lose-lottery") {
      toast.info(text, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.warning(text, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const formSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (isNaN(parseInt(value))) {
      toastifyFunc("กรุณาตรวจสอบหมายเลขอีกครั้ง", "error-lottery");
    } else {
      const res = store.check_lottery_number(value);
      if (res.length > 0) {
        toastifyFunc(
          `ยินดีด้วยค่ะคุณถูก${res[0].name} เงินรางวัล ${res[0].reward.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ","
          )} บาทค่ะ`,
          "won-lottery"
        );
      } else {
        toastifyFunc("เสียใจด้วยค่ะคุณไม่ถูกรางวัล", "lose-lottery");
      }
      setValue("");
    }
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h4" sx={{ m: 2 }}>
        ตรวจสลากกินแบ่งรัฐบาลงวดที่ {store.ThaiDate}
      </Typography>
      <Box component="form" onSubmit={formSubmit} className={classes.root}>
        <Paper elevation={1} className={classes.formCheck}>
          <Box sx={{ p: "10px" }}>
            <FaRegNewspaper />
          </Box>
          <InputBase
            className={classes.formInput}
            placeholder="number"
            value={value}
            onChange={handleChange}
            type="text"
          />
        </Paper>
        <Button variant="text" type="submit" sx={{ color: "black" }}>
          Check lottery
        </Button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
        />
      </Box>
    </Box>
  );
});

export default FormInput;
