const Vue = require("vue/dist/vue");
const renderer = require("vue-server-renderer").createRenderer();

module.exports = async (req, res) => {
  const app = new Vue({
    data: () => ({ date: Date.now() }),
    template: `<div>Hello World {{ date }}</div>`
  });

  const html = await renderer.renderToString(app);
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
    "Content-Length": Buffer.byteLength(html)
  });
  res.end(html);
};
