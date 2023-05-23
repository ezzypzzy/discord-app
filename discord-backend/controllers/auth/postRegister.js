const User = require("../../models/user");
const bcrypt = require("bcryptjs");

const postRegister = async (req, res) => {
  try {
    const { username, password, mail } = req.body;

    // Check if user already exists 
    const userExists = await User.exists({ mail: mail.toLowerCase() });

    if (userExists) {
      // 409 Conflict response status code indicates a request conflict with current state of the server
      return res.status(409).json({ error: "E-mail already in use" });

      // Encrypt the password
      // 10 is the salt rounds value (default is 10)
      const encryptedPassword = await bcrypt.hash(password, 10);

      // Create user document and save it to the database
      const user = await User.create({
        username,
        mail: mail.toLowerCase(),
        password: encryptedPassword,
      });
    }
    
    // Create JWT token and return that to the client (saved at the client side)
    // with this token, user will be able to access the protected routes
    const token = "JWT TOKEN";

    res.status(201).json({ 
      userDetails: {
        mail: user.mail,
        token,
        username
      },
     });

  } catch (err) {
    return res.status(500).json({ error: err.message }).send("Server error");
  }
};

module.exports = postRegister;