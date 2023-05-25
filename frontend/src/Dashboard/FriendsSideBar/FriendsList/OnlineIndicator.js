import React from "react";
import { Box } from "@mui/material"; // Box is a div with some extra features to align items better
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const OnlineIndicator = () => {
  return <Box
    style={{
      color: "#3BA55D",
      diplay: "flex",
      alignItems: "center",
      position: "absolute",
      right: "5px",
    }}
  >
    <FiberManualRecordIcon />
  </Box>;
};

export default OnlineIndicator;
