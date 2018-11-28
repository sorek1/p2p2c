const PDFDocument = require("pdfkit");
const { parse } = require("url");

module.exports = (req, res) => {
  const {
    query: { text }
  } = parse(req.url, true);

  const doc = new PDFDocument();
  doc
    .fontSize(18)
    .font("Helvetica-Bold")
    .text("Serverless PDF Generation with Now", 50, 50);

  doc
    .fillColor("#0076FF")
    .fontSize(14)
    .font("Helvetica")
    .text("Check out the examples", 50, 80)
    .underline(50, 70, 150, 27, { color: "#0076FF" })
    .link(50, 70, 150, 27, "http://github.com/zeit/now-examples");

  doc.fillColor("#000").text("Your text:", 50, 110);
  doc
    .fillColor(text ? "#50E3C2" : "#FF0080")
    .text(text || "No `text` query!", 50, 130);
  doc.pipe(res);
  doc.end();
};
