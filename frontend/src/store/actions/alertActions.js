// Writing the names of the actions that will be used in the alertReducer.js file.
const alertActions = {
  OPEN_ALERT_MESSAGE: "ALERT.OPEN_ALERT_MESSAGE",
  CLOSE_ALERT_MESSAGE: "ALERT.CLOSE_ALERT_MESSAGE",
};

export const getActions = (dispatch) => {
  return {
    // opernAlertMessage is the action that will be dispatched when we want to open the alert.
    // content is the message to be displayed in the alert
    openAlertMessage: (content) => dispatch(openAlertMessage(content)),
    closeAlertMessage: () => dispatch(closeAlertMessage()),
  };
};

// Creating the actions (defining the action type and the payload)
export const openAlertMessage = (content) => {
  return {
    type: alertActions.OPEN_ALERT_MESSAGE,
    content,
  };
};

export const closeAlertMessage = () => {
  return {
    type: alertActions.CLOSE_ALERT_MESSAGE,
  };
};

export default alertActions;