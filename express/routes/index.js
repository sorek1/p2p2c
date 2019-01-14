const app = require("../util/app");

const baseTemplate = require("../util/baseTemplate");

app.get("*", (req, res) => {
  res.append("content-type", "text/html");
  if (!req.session["user-from-twitter"]) {
    res.end(
      baseTemplate(
        `<div class="container">
        <h1>🔮</h1>
  <h1>Dreamifier</h1>
  <h2>With Serverless Express</h2>
  <a class="button" href="/login">Login with Twitter</a>
  <a href="https://zeit.co/blog/serverless-express-js-lambdas-with-now-2" target="_blank" class="button button_outline">How it Works</a>
</div>`,
      ),
    );
    return;
  }

  const { screen_name, profile_image_url_https } = req.session["user-from-twitter"];

  res.end(
    baseTemplate(
      `<div class="container">
<img class="user-image" alt="${screen_name}" src="${profile_image_url_https}" />
<h1>Welcome back, ${screen_name}.</h1>
<a class="button" href="/user-zone">Dreamify Me</a>
<a href="https://zeit.co/blog/serverless-express-js-lambdas-with-now-2" target="_blank" class="button button_outline">How it Works</a>
<a class="button button_outline" href="/logout">Logout</a>
</div>`,
    ),
  );
  return;
});

module.exports = app;
