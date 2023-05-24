import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
// we will be managing our alert state using redux store
import { connect } from "react-redux";

const AlertNotification = (props) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open // options: true, false
      onClose={() => {}}
      // autoHideDuration={6000}
    >
      <Alert severity="info">Alert message</Alert>
    </Snackbar>
  );
};

export default AlertNotification;