// useState is a Hook that lets you add React state to function components.
// useEffect is a Hook that lets you use lifecycle methods in function components.
import React, { useState, useEffect } from "react";
import AuthBox from "../../shared/components/AuthBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";
import LoginPageFooter from "./LoginPageFooter";
import { validateLoginForm } from "../../shared/utils/validators";

const LoginPage = () => {
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
    console.log("Mail: ", mail);
    console.log("Password: ", password);
    console.log("Logging in...");
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

export default LoginPage;
