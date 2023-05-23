const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postLogin = async (req, res) => {
  try {
    const { password, mail } = req.body;

    const user = await User.findOne({ mail: mail.toLowerCase() });

    // If password matches, create a JWT token and return that to the client
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        {
          userId: user._id,
          mail: user.mail,
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: "24h",
        }
      );

      return res.status(200).json({
        userDetails: {
          mail: user.mail,
          token,
          username: user.username,
        },
      });
    }

    // 401 Unauthorized response
    return res.status(401).json({ error: "Invalid credentials" });
  } catch (err) {
    return res.status(500).json({ error: err.message }).send("Server error");
  }
};

module.exports = postLogin;