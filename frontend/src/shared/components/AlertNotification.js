import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
// connect hook because we will be managing our alert state using redux store
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";

// These actions are coming from the alertActions.js file
// as we have used the mapActionsToProps function below
const AlertNotification = ({
  showAlertMessage,
  alertMessageContent,
  closeAlertMessage,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={showAlertMessage} // options: true, false
      onClose={closeAlertMessage}
      autoHideDuration={6000}
    >
      <Alert severity="info">{alertMessageContent}</Alert>
    </Snackbar>
  );
};

// mapStoreStateToProps function allows us to access the state of the store in this component
// --> For this, have to setup the store in store.store.js file
// we will add our alertReducer to the combineReducers function in store.store.js file
// --> This alert is being recieved from the store (rootReducer).
const mapStoreStateToProps = ({ alert }) => {
  return {
    ...alert,
  }
}

// Again, recieving dispatch, thanks to connect hook
const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  }
};

export default connect(mapStoreStateToProps, mapActionsToProps)(AlertNotification);