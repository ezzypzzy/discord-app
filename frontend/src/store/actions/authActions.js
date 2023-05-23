import * as api from "../../api";

export const authActions = {
  // This is the redux action type that will be dispatched when the user details are set in the store.
  // Defining the name of the action SET_USER_DETAILS here will help us to avoid typos in the reducer.
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

export const getActions = (dispatch) => {
  // getActions function returns an object with all the actions that can be dispatched.
  return {
    // login action is dispatched when the user logs in.
    // If succesfull login or registration, we will use the history object from the react-router-dom
    // which will execute push method to redirect user to the dashboard page, i.e.
    // after successfully storing our JWT token in the redux store and our localStorage of browser.
    login: (userDetails, history) => dispatch(login(userDetails, history)),
    register: (userDetails, history) =>
      dispatch(register(userDetails, history)),
  };
};

const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS, // This is the action type that will be dispatched.
    userDetails,
  };
};

// Creating Actions
// Redux thunk is used to make async calls in our Redux actions.
const login = (userDetails, history) => async (dispatch) => {
  const response = await api.login(userDetails);

  if (response.error) {
    // Show error message in alert
  } else {
    // userDetails is the user object returned from the API (server) after successful login.
    // returns undefined if response.data is undefined else returns response.data.userDetails
    const { userDetails } = response?.data;
    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    // Dispatch the action to set the user details in the store.
    dispatch(setUserDetails(userDetails));
    history.push("/dashboard");
  }
};

const register = (userDetails, history) => async (dispatch) => {
  const response = await api.register(userDetails);

  if (response.error) {
    // Show error message in alert
  } else {
    // userDetails is the user object returned from the API (server) after successful login.
    // returns undefined if response.data is undefined else returns response.data.userDetails
    const { userDetails } = response?.data;
    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    // Dispatch the action to set the user details in the store.
    dispatch(setUserDetails(userDetails));
    history.push("/dashboard");
  }
};
