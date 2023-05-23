import React from "react";
// The Box component serves as a wrapper component for most of the CSS utility needs.
import Box from "@mui/material/Box";
// The styled function is used to create a custom component.
import { styled } from "@mui/system";

const BoxWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100%',
  background: '#5865F2',
})

const AuthBox = (props) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: 700,
          height: 400,
          bgcolor: '#36393F',
          borderRadius: '5px',
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          padding: '25px',
        }}
      >
        {/* Everything passed between Authbox, for example, <AuthBox>LoginPage</AuthBox> */}
        {/* will be placed right here inside as props.children */}
        { props.children }
      </Box>
    </BoxWrapper>
  )
}

export default AuthBox;