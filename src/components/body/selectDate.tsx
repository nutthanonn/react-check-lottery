import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { API_DateTime } from "../../interfaces/apiDateTime";
import { LotteryStoreImpl } from "../../store/lotteryStore";
import { MdDateRange } from "react-icons/md";
import { makeStyles } from "@mui/styles";
import { observer } from "mobx-react";

interface SelectDateProps {
  store: LotteryStoreImpl;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    alignItem: "center",
  },
  selectForm: {
    width: 200,
  },
});

const SelectDate: React.FC<SelectDateProps> = observer(({ store }) => {
  const classes = useStyles();
  const [data, setData] = useState<API_DateTime[]>([]);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    async function fetch() {
      const res = await store.fetch_API_DateTime();
      setData(res);
      setValue(res[0].id);
    }
    fetch();
  }, [store]);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
    store.change_dataSelect(event.target.value);
  };

  return (
    <Box className={classes.root}>
      <FormControl>
        <Select
          value={value}
          onChange={handleChange}
          className={classes.selectForm}
          size="small"
        >
          {data.map((item) => {
            return (
              <MenuItem key={item.id} value={item.id}>
                <MdDateRange />
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
