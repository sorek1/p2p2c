# Serverless Express.js

**[Live Demo](https://serverless-express.now.sh/)**

This repo is an example app featured in [this blog post](https://zeit.co/blog/serverless-express-js-lambdas-with-now-2). Please be sure to read the blog post to fully understand the concepts demonstrated here.

## Getting Started

1. Create an app on [Twitter for Developers](https://developer.twitter.com/).
1. Add the required [secrets](https://zeit.co/docs/v2/deployments/environment-variables-and-secrets/) (found in `now.json`) to your Now account.
   - `COOK_KEY` can be any arbitrary string. It is used to sign the user's cookie.
1. Update the callback URL (`routes/login/index.js`, line 14) to be one from your Twitter app.
1. Deploy this project with `now`.
1. 🎉

## Feedback

Please feel free to [open an issue](https://github.com/zeit/now-examples/issues) or [write us on Twitter](https://twitter.com/zeithq) with any feedback you may have about this project.
