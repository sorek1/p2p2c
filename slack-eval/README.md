# Slack Eval

**[Live Demo](https://serverless-eval.now.sh/)**

This repo is an example app featured in [this blog post](https://zeit.co/blog/slack-apps-with-now).
Please be sure to read the blog post to fully understand the concepts demonstrated here.

## Getting Started

1. Create a [new app with Slack](https://api.slack.com/apps?new_app=1).
2. Add the required [secrets](https://zeit.co/docs/v2/deployments/environment-variables-and-secrets/) (found in `now.json`) to your Now account.
   - You'll need your Slack app's **Client ID** and **Client Secret**
   - Both can be found on the Slack app's **Basic Information** page
3. Deploy this project with `now`.
4. Alias your deployment to match your cookie domain: `now alias [deployment-url] [chosen-alias]`.
5. 🎉

## Feedback

Please feel free to [open an issue](https://github.com/zeit/now-examples/issues)
or [write us on Twitter](https://twitter.com/zeithq) with any feedback you may have about this project.
