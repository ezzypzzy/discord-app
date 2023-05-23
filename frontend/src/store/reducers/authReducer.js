// This line initializes the initial state of the authentication section of your Redux store. 
// The 'userDetails' property is set to null, indicating no user is logged in when the app first starts.
const initState = {
  userDetails: null,
}

// This is the reducer function for the authentication section of your Redux store. 
// A reducer function is responsible for updating the state based on the actions it receives.
// The reducer function takes the current state and an action as arguments. 
// If the state argument is not provided, it defaults to 'initState'.
const reducer = (state = initState, action) => {
  // The 'switch' statement is used to perform different actions based on different conditions. 
  // In this case, it's looking at the 'type' property of the 'action' object.
  switch (action.type) {
    // In the case where 'action.type' equals 'DUMMY_ACTION', the state is returned as is 
    // (meaning no changes are made). The '...' is the spread operator, 
    // which is used to make a copy of the state object.
    case 'DUMMY_ACTION':
      return {
        ...state,
      };
      // The 'default' keyword specifies the code to run if there is no case match. 
      // In this instance, it returns the current state without making any changes.
      default:
        return state;
  }
};

export default reducer;
