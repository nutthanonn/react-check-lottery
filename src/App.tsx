import React from "react";
import "./styles.css";

import Home from "./page/home";
import Nav from "./components/header/nav";

import Box from "@mui/material/Box";

const App: React.FC = () => {
  return (
    <Box>
      <Nav />
      <Home />
    </Box>
  );
};

export default App;
