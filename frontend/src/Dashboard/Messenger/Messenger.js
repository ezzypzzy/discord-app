import React from "react";
import { styled } from "@mui/system";

const MainContainer = styled("div")({
  flexGrow: 1, // This is the key to make the Messenger component take up the remaining space in the Dashboard component.
  backgroundColor: "#36393F",
  marginTop: "48px",
  display: "flex",
});

const Messenger = () => {
  return (
    <MainContainer>
      
    </MainContainer>
  )
};

export default Messenger;
