import React from "react";
import Home from "./page/home";
import Nav from "./components/header/nav";

import Box from "@mui/material/Box";

const App: React.FC = () => {
  return (
    <Box>
      <Nav />
      <Home />
      <Box
        sx={{ minHeight: "300vh", position: "relative", bgcolor: "#CCF2F4" }}
      ></Box>
    </Box>
  );
};

export default App;
