const deepai = require("deepai");
const { join } = require("path");

deepai.setApiKey(process.env.DEEPAI_KEY);

const app = require("../../util/app");

app.set("view engine", "ejs");
app.set("views", join(__dirname, "../../views"));
app.engine(".ejs", require("ejs").__express);

app.get("*", async (req, res) => {
  if (!req.session["user-from-twitter"]) {
    res.redirect("/");
  }
  const { screen_name, profile_image_url_https } = req.session["user-from-twitter"];

  if (!req.session.dreamified) {
    const resp = await deepai.callStandardApi("deepdream", {
      content: profile_image_url_https.replace("_normal", "_200x200"),
    });

    req.session.dreamified = resp.output_url;
  }

  res.append("content-type", "text/html");

  res.render("userZone", {
    name: screen_name,
    dream: req.session.dreamified,
    shareLink: "https://serverless-express.now.sh/pic/" + req.session.dreamified.split("/")[4],
  });
});

module.exports = app;
