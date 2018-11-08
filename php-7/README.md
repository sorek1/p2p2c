# PHP 7

In this example we will be deploying a simple "Hello World" example with PHP.

### Getting started with PHP

- Create a `index.php` file with the following code:

```
<?php echo "Hi from Now Lambda"; ?>
```

### Deploy with Now

First we need to add a `now.json` file to specify we want to use our Platform V2.

By just adding the version key, we can specify which Now Platform to use. We also need to define each builders we would like to use, in this case we are going to use @now/php to build and deploy the all PHP files. We will also define a name for our project (optional).

```
{
    "version": 2,
    "name": "php-7",
    "builds": [
        { "src": "*.php", "use": "@now/php" }
    ]
}
```

We are now ready to deploy the app.

```
now
```