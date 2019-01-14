const app = require("../../util/app");

const baseTemplate = require("../../util/baseTemplate");

app.get("*", (req, res) => {
  res.append("content-type", "text/html");
  const { screen_name, profile_image_url_https } = req.session["user-from-twitter"];

  req.session = null;

  res.end(
    baseTemplate(
      `<div class="container">
  <img class="user-image" alt="${screen_name}" src="${profile_image_url_https}" />
  <h1>Success</h1>
  <h2>You have been sucessfully logged out</h2>
  <a class="button" href="/">Back Home</a>
</div>`,
    ),
  );
});

module.exports = app;
