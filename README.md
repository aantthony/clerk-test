# Instructions

For pages/api requests, the Clerk middleware is responding with 401, but it seems to go away if the user agent doesn't start with `Mozilla/`.

e.g.

```
curl --request POST \
  --url http://localhost:3000/api/graphql \
  --header 'User-Agent: Mozilla/' \
  --data '{}'
```

^ responds with 401

vs

```
curl --request POST \
  --url http://localhost:3000/api/graphql \
  --header 'User-Agent: Xozilla/' \
  --data '{}'
```

^ responds with 200
