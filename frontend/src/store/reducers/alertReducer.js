import alertActions from "../actions/alertActions";

const initState = {
  showAlertMessage: false,
  alertMessageContent: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    // case authActions.SET_ALERT_MESSAGE:
    //   return {
    //     ...state,
    //     showAlertMessage: true,
    //     alertMessageContent: action.alertMessageContent,
    //   };
    // case authActions.CLEAR_ALERT_MESSAGE:
    //   return {
    //     ...state,
    //     showAlertMessage: false,
    //     alertMessageContent: null,
    //   };
    // default:
    //   return state;
    case alertActions.OPEN_ALERT_MESSAGE:
      return {
        ...state,
        showAlertMessage: true,
        alertMessageContent: action.content,
      };
    case alertActions.CLOSE_ALERT_MESSAGE:
      return {
        ...state,
        showAlertMessage: false,
        alertMessageContent: null,
      };
    default:
      return state;
  }
};

export default reducer;
