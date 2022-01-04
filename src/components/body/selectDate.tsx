import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";

import { makeStyles } from "@mui/styles";

import { observer } from "mobx-react";
import { LotteryStoreImpl } from "../../store/lotteryStore";

interface SelectDateProps {
  store: LotteryStoreImpl;
}

const useStyles = makeStyles({
  root: {},
});

const SelectDate: React.FC<SelectDateProps> = observer(({ store }) => {
  const classes = useStyles();
  const [value, setValue] = useState<string>("1");

  useEffect(() => {}, [store]);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
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
          <MenuItem value="1">NUtthanon</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
});

export default SelectDate;
