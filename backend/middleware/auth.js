const jwt = require("jsonwebtoken");

// we are getting all the config variables from .env file
const config = process.env;

const verifyToken = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers["authorization"];

  if (!token) {
    // forbidden
    return res.status(403).send("A token is required for authentication");
  }

  try {
    // Token comes usually in the authorization header with a Bearer prefix, removing that
    token = token.replace(/^Bearer\s/, "");

    // if can verify the token, set req.user and pass to next middleware
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    // if invalid token
    return res.status(401).send("Invalid Token");
  }

  next();
};

module.exports = verifyToken;