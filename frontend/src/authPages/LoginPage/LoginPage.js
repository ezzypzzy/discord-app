// useState is a Hook that lets you add React state to function components.
// useEffect is a Hook that lets you use lifecycle methods in function components.
import React, { useState, useEffect } from "react";
import AuthBox from "../../shared/components/AuthBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";
import LoginPageFooter from "./LoginPageFooter";
import { validateLoginForm } from "../../shared/utils/validators";
// connect helps us to connect our component to the redux store
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";
// import { useHistory } from "react-router-dom"; // <-- DEPRECATED
import { useNavigate } from "react-router-dom";


// --> REDUX IS BEING USED TO PASS THE 'login' ACTION FROM THE STORE TO THE COMPONENT AS A PROP,
// THEREBY ALLOWING US TO DISPATCH THE ACTION FROM THE COMPONENT.
// --> HOW IS THIS COMING THROUGH THE PROPS?
// BECASUE WE ARE MAPPING ALL OF THE ACTIONS USING getActions, THANKS TO THE connect FUNCTION.
const LoginPage = ({ login }) => {
  // const history = useHistory();
  const navigate = useNavigate();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  // because both fields are empty at the beginning
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password })); // <-- run the validation function
  }, [mail, password, setIsFormValid]); // <-- dependency array (if any of these changes, useEffect will run)
  // setIsFormValid is used within the effect, but it does not change over time.
  // (The state updater function doesn't change throughout the lifetime of the component)
  // therefore, it doesn't need to be included in the dependencies array.

  const handleLogin = () => {
    const userDetails = {
      mail,
      password,
    };

    // login(userDetails, history);
    // ALL OF THE userDetails ARE BEING PASSED TO THE login ACTION
    // --> IN THE store/actions/authActions.js FILE,
    // THE getActions FUNCTION IS EXECUTED, WHICH RETURNS AN OBJECT WITH ALL THE ACTIONS THAT CAN BE DISPATCHED.
    // --> HERE, IN login ACTION, IT IS RECEIVING THE userDetails AND history OBJECT AS ARGUMENTS
    // AND login ACTION IS DISPATCHED USING THESE ARGUMENTS.
    // --> IN THE login ACTION, WE ARE CALLING THE login API FROM THE api.js FILE
    // TO MAKE A POST REQUEST TO THE SERVER TO LOGIN THE USER AND GET THE USER DETAILS RESPONSE.
    // --> IF THE RESPONSE IS SUCCESSFUL, WE ARE STORING THE USER DETAILS IN THE LOCAL STORAGE OF THE BROWSER
    // AND DISPATCHING THE setUserDetails ACTION TO SET THE USER DETAILS IN THE STORE.
    // SINCE WE ARE USING REDUX THUNK,
    // WE ARE ABLE TO DISPATCH THE setUserDetails ACTION IN AN ASYNCHRONOUS FUNCTION.
    // --> WE CAN ALSO DISPATCH MULTIPLE ACTIONS HERE.
    // --> setUserDetails IS ONLY AN OBJECT/HELPER FUNCTION CONTAINING
    // THE TYPE OF THE ACTION WE WOULD LIKE TO DISPATCH AND THE PAYLOAD, i.e. THE userDetails.
    // --> AFTER THAT, WE ARE USING THE history OBJECT TO REDIRECT THE USER TO THE DASHBOARD PAGE.
    // NOW,
    // IN OUR reducers/authReducer.js FILE,
    // THAT ACTION WILL BE FOUND AND THE NEW STATE WILL BE SET IN THE STORE.
    login(userDetails, navigate);
  };

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};

// Now we can connect the actions that they will be mapped to the props of the component.
const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch), // <-- this will add all the actions to the props of the component
  }
};

// connect takes two arguments: mapStateToProps and mapDispatchToProps (both are optional)
export default connect(null, mapActionsToProps)(LoginPage);

// Thanks to react-redux, we can now access/execute the actions such as login and register
// from the props of the component since we mapped them to the props of the component.
