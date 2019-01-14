const cookieSession = require("cookie-session");

module.exports = cookieSession({
  name: "user-from-twitter",
  keys: [process.env.COOK_KEY],
  domain: "serverless-express.now.sh"

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000, // 24 hours
});
