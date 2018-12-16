/**
 * For maximum consistency, each UI has the same HTML
 * wrapper, with similar content.
 */
module.exports = frameworkName => html =>
  `<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
        <title>${frameworkName}: ZEIT Serverless SSR</title>
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        ${html}
    </body>
</html>`;
