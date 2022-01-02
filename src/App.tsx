import React from "react";
import Home from "./page/home";

import Box from "@mui/material/Box";

const App: React.FC = () => {
  return (
    <Box sx={{ minHeight: "300vh" }}>
      <Home />
    </Box>
  );
};

export default App;
