import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";

import { makeStyles } from "@mui/styles";
import { FaRegNewspaper } from "react-icons/fa";

import { observer } from "mobx-react";
import { LotteryStoreImpl } from "../../store/lotteryStore";
import { lotteryMonthListData } from "../../interfaces/lotteryMonthListData";

interface SelectDateProps {
  store: LotteryStoreImpl;
}

const useStyles = makeStyles({
  root: {},
});

const SelectDate: React.FC<SelectDateProps> = observer(({ store }) => {
  const classes = useStyles();
  const [date, setDate] = useState<lotteryMonthListData[]>([]);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    async function fetch() {
      const res = await store.fetch_data_per_half_month();
      setDate(res);
      setValue(res[0].id); // งวดล่าสุด
    }

    fetch();
  }, [store]);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
    store.change_lottery_date(event.target.value);
  };

  return (
    <Box className={classes.root}>
      <FormControl>
        <Select
          onChange={handleChange}
          value={value}
          size="small"
          sx={{ width: 200 }}
        >
          {date.map((item) => {
            return (
              <MenuItem value={item.id} key={item.id}>
                <FaRegNewspaper />
                &nbsp;
                {item.date}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
});

export default SelectDate;
