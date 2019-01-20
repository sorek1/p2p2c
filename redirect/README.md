# Redirect

In this example we will be deploying a simple redirect from a `www` domain to a naked one. This will be an entirely separate deployment from your main one. You just need to deploy it one time and then you can forget about it.

### Deploy with Now

Create a new folder on your local machine and create a new `now.json` file. To redirect, you only need to use the `routes` property of a `now.json` file (no need to have a `builds` property in there, since it's just doing a redirect).

By adding the `version` key to the `now.json` file, we can specify to use the latest Now Platform version to use `routes`.

Following that, we can add a `routes` property that sets a status of `301`, a permanent redirect, and sends a `location` header of the redirect destination:

```json
{
    "version": 2,
    "alias": [
        "www.example.sh"
    ],
    "routes": [
       { "src": "/(.*)", "status": 301, "headers": { "Location": "https://example.sh/$1" }}
    ]
}
```

> Visit our [documentation](https://zeit.co/docs/v2/deployments/configuration) for more information on the `now.json` configuration file.

Finally, deploy the redirect using [Now CLI](https://zeit.co/docs/v2/getting-started/installation):

```
now
```

Once the deployment is created, you can [alias it](https://zeit.co/docs/v2/domains-and-aliases/adding-a-domain/) to the defined alias in the `now.json` file by running:

```
now alias
```

Now, when visiting either the alias (www.example.sh) or deployment URL, the visitor will get redirected to the location set via the `routes` in the `now.json` file.
