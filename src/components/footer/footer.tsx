import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { makeStyles } from "@mui/styles";
import { AiOutlineGithub } from "react-icons/ai";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#DBE2EF",
    border: 0,
    boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>Make by Nutthanon</Typography>
        <Tooltip title="Code on github">
          <IconButton
            href="https://github.com/nutthanonn/react-check-lottery"
            target="_blank"
          >
            <AiOutlineGithub />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </Box>
  );
};

export default Footer;
