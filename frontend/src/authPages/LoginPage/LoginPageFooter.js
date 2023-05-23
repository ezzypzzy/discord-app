import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
// A hook that returns the history object that you can use to navigate the app.
// ===>>> useHistory is replaced with useNavigate in v6
// import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToRegisterPage = () => {
    // does --> history.push({ pathname: '/register' });
    // history.push('/register');
    // does --> navigate('/register', { replace: true });
    navigate("/register");
  };

  const getFormNotValidMessage = () => {
    return "Please fill in all fields correctly. Password must be between 3 and 30 characters long, and contain only letters and numbers";
  };

  const getFormValidMessage = () => {
    return "Click to log in";
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label={"Log in"}
            onClick={handleLogin}
            disabled={!isFormValid}
            additionalStyles={{ marginTop: "30px" }}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account? "
        redirectText="Create an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
};

export default LoginPageFooter;
