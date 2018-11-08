# Static

In this example we will be deploying a simple "Hello World" example with static HTML and CSS.

### Getting started with HTML and CSS

- Create a `index.html` file with the following code:

```
<html>
	<head>
		<title>Static Example</title>
		<link rel="stylesheet" href="styles.css">
	</head>
	<body>
		<marquee direction="right">Hello from Static on Now Lambda!</marquee>
	</body>
</html>
```

- Create a `styles.css` file with the following code:

```
body {
	background-color: #000000;
	color: #ffffff;
}
```

### Deploy with Now

First we need to add a `now.json` file to specify we want to use our Platform V2.

By just adding the version key, we can specify which Now Platform to use. By default all files are will be treated as static, for this case we don't need to define any builder.

```
{
    "version": 2,
    "name": "static"
}
```

We are now ready to deploy the app.

```
now
```