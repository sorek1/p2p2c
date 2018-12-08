# Static

In this example we will be deploying a simple "Hello World" example with static HTML and CSS.

### Getting started with HTML and CSS

- Create a `index.html` file with the following code:

```html
<html>
	<head>
		<title>Static Example</title>
		<link rel="stylesheet" href="styles.css">
	</head>
	<body>
		<marquee direction="right">Hello from Static on Now 2.0!</marquee>
	</body>
</html>
```

- Create a `styles.css` file with the following code:

```css
body {
	background-color: #000000;
	color: #ffffff;
}
```

### Deploy with Now

First we need to create a `now.json` configuration file to instruct Now how to build the project.

For this example we will be using our newest version [Now 2.0](https://zeit.co/now).

By adding the `version` key to the `now.json` file, we can specify which Now Platform version to use.

We also need to define each builders we would like to use. [Builders](https://zeit.co/docs/v2/deployments/builders/overview/) are modules that take a deployment's source and return an output, consisting of [either static files or dynamic Lambdas](https://zeit.co/docs/v2/deployments/builds/#sources-and-outputs).

In this case we are going to use `@now/html-minifier` to minify the `index.html` and the `styles.css` files. We will also define a name for our project (optional).

```json
{
    "version": 2,
	"name": "static",
	"builds": [
		{ "src": "index.html", "use": "@now/html-minifier" },
		{ "src": "styles.css", "use": "@now/html-minifier" }
  	]
}
```

Visit our [documentation](https://zeit.co/docs/v2/deployments/configuration) for more information on the `now.json` configuration file.

We are now ready to deploy the app.

```
now
```