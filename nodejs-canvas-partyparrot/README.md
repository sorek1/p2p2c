# node-canvas Example

[Demo](https://ppaas.now.sh)

This example is basically a fork of [PPaaS](https://github.com/francoislg/PPaaS) with some minor changes. It shows how to use node-canvas with Now 2.0.

## Upgrade to the latest version of node-canvas
`canvas` is a popular library which exposes the browser canvas API to NodeJS. The latest 2.0 version fixed [a lot of](https://github.com/Automattic/node-canvas/blob/master/CHANGELOG.md) issues, as well as prebuilds support, and it's even slimmer than 1.x.

The new APIs works perfectly with just a few small changes in `ParrotFrameHandler.js`.

## Config `@now/node-server`
First we need to [increase the max lambda size](https://zeit.co/blog/customizable-lambda-sizes) to `40mb` cause it exceeds the default limit.

Also, PPaaS has "baseparrots" images which will be read at runtime. So these assets cannot be compiled and bundled by [ncc](https://github.com/zeit/ncc). We need to disable the `bundle` option so all files will be copied to the right place.

In summary, the `@now/node-server` config looks like this:

```json
{
  "src": "index.js",
  "use": "@now/node-server",
  "config": {
    "maxLambdaSize": "40mb",
    "bundle": false
  }
}
```

## Use `cache-control` to avoid duplicated requests
With the ability to [config custom routes and headers](https://zeit.co/docs/v2/deployments/configuration/#routes), you could simplily add this route to your `now.json`:

```json
{
  "src": "/(.+)",
  "dest": "index.js",
  "headers": {
    "cache-control": "public, max-age=31536000, immutable"
  }
}
```

Now it has built-in CDN and parrot memoization support!

## Add a homepage
The last step is to add a homepage for `/`. Create an `index.html` file and add another static build to your `now.json`:

```json
{
  "src": "index.html",
  "use": "@now/static"
}
```

And we are now ready to deploy the app:

```
now
```
