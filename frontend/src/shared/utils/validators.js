export const validateLoginForm = ({ mail, password }) => {
  const isMailValid = validateMail(mail);
  const isPasswordValid = validatePassword(password);

  return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({ mail, username, password }) => {
  const isMailValid = validateMail(mail);
  const isUsernameValid = validateUsername(username);
  const isPasswordValid = validatePassword(password);

  return isMailValid && isUsernameValid && isPasswordValid;
};

const validatePassword = (password) => {
  // test if password contains only letters and numbers, and is between 3 and 30 characters long
  const passwordPattern = /^[a-zA-Z0-9]{3,30}$/;
  return passwordPattern.test(password);
};

export const validateMail = (mail) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(mail);
};

const validateUsername = (username) => {
  return username.length >= 3 && username.length <= 12;
};