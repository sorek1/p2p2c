module.exports = (bodyContent = '' , headContent = '') => `<html lang="en">
<head><title>Serverless Express.js with Now v2</title><meta name="viewport" content="initial-scale=1,width=device-width,user-scalable=0"/><link rel="stylesheet" href="/style.css"/>${headContent}</head><body>
${bodyContent}</body></html>`;
