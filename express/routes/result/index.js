const { join } = require("path");

const app = require("../../util/app");
const baseTemplate = require("../../util/baseTemplate");

function getTwitterMeta(imageUrl) {
  return `
<meta name="twitter:card" content="photo" />
<meta name="twitter:site" content="@zeihq" />
<meta name="twitter:title" content="I got dreamified!" />
<meta name="twitter:description" content="By Serverless Express on Now 2.0" />
<meta name="twitter:image" content="${imageUrl}" />
<meta name="twitter:url" content="${imageUrl}" />
`.trim().replace(/\n/mg, '')
}

app.get("*", async (req, res) => {
  const url = `https://api.deepai.org/job-view-file/${req.query.id}/outputs/output.jpg`
  res.append("content-type", "text/html");
  res.end(
    baseTemplate(`
    <img alt="Dream" src=${url} /><br>
    <a
        class="button"
        href="/">Make Your Own!</a
      >`, getTwitterMeta(url)),
  );
});

module.exports = app;
