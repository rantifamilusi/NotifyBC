---
permalink: /docs/config-rsaKeys/
---

# RSA Keys

When _NotifyBC_ starts up, it checks if an RSA key pair exists in database as dynamic config. If not it will generate the dynamic config and save it to database. This RSA key pair is used to exchange confidential information with third party server applications through user's browser. For an example of use case, see [Subscription API](../api-subscription/). To make it work, send the public key to the third party and have their server app encrypt the data using the public key. To obtain public key, call the REST [Configuration API](..api-config/#get-configurations) from an admin ip, for example, by running _cURL_ command

```bash
~ $ curl -X GET 'http://localhost:3000/api/configurations?filter=%7B%22where%22%3A%20%7B%22name%22%3A%20%22rsa%22%7D%7D'
```
or you can open API explorer, expand `GET /configurations` and set filter to

```json
{ "where": { "name": "rsa" } }
```

The response should be something like

```json
[
  {
    "name": "rsa",
    "value": {
      "private": "-----BEGIN RSA PRIVATE KEY-----\nMIIEpgIBAAKCAQEA8Hl+/cF3AOxKVRHtZpeSDM+LLGc2hkDkKxRXe72maUAzDUoO\noNd6wd02Cf6iO7kj0RSDHXUyINxCgvXy2Q7gME4zRN5WG4ItWZ7FITeNgJJW1r+J\nshDjTwKVpMvcKHy0vyUl25ah7hnwGK6PbJvFWMmtIBw6Rs5DaERAlmilgkuUgdri\naA4YhhS4pCJLvO2p9wZd+dLWUT+tpsOZGeecC8If3fyShgrocMbd8pYYDzf65oCt\nVaLaNdERaIJSDcmbHxFpeBdEQEzxw2qRPbUCnSgQb8cVFLJ2eOEn5LylWhU96A1S\n3w1IlRm5N2zG0En58Vruo26gEtl5KFu0zivlawIDAQABAoIBAQCAawFsFcKtVYIk\nh9xVax/tg2/5GG0/qKuwbb6CMDcMAeLBeAjzz96YZL+U+sw8RJRh9ShHtOw+LCHA\nugMj8xO5+Cjc4DbvnccGEwmGwZnpTTzelY687tPUv7aWON+rJ12GrhnXeEulUWis\nZZvmDhGHZrvzZ9+fLEtHBRvQtrWcLCN0G5l1Z1KEWUj23vn1HZpfNvqigIbC05Pq\nWUewRZShHUklhzky6DwLklWUKv2951ypd5CHhYfXn0eXjeyqcoYeZzoCSGqtvZar\nVVOCPBKPn3cLZVKzYd02WO4CV07SpHCBtYPWf4OvXbOY6wV1Vc92S0K+ijASDDc0\nB7Vjgb8RAoGBAPg4dSbn9GWNHydveidi2Zt4kftEW18C9xHbJ3t+QkhpLjq2kwcY\no0iOWkEd4d1l0lKAVanBQazrazKiSyq1PJSJDyL3osHItA7Twq+gCXOfXw/0LbJh\napK5DH3S2ZTM42wOdZLYIHvSqRuYUmnzhy9+Ads87b/ICCctUMCLz1afAoGBAPgC\n4/zE/Au/A3wb48AywfmJ5kqPO0V7lqLrn/aBwdF1H/DHQ95cSuKrTEIysZxz52bh\n7mAHjnWnY4zFNaUvcruHw78NOxUJvje8cDIUsrTefh+qmctiGR119z7iso9FlsxR\np/o5BVT/K8q76xtkpOln2A0rc8sBNwtCoeeUzfm1AoGBAInH/O99raF49iQTswCN\n1DCCerW4uedBZBebSI06BlzfVXPtyCsWN/ycV+jxR2B3lomJBwPVbDkp7DUM9SBd\nvaTNd4N3ZfafC6N3VAfck6KEgmX+qibsABY1dYOaOIBqQorGc+jw4wcYZhoVMRny\nvcVU8n7ZkTb1N+FXPA3FDXANAoGBAOuSg0/TI71cgEjgjOJA1DLco1vq1NfY3mp9\n+QFCmwEDiYVBINwTOiY3o0W1tTLwfLoinDOmudBTYKGTqLLwcMBj4rCUNqxzBrUW\nTlOjiWN3esFFYLPoyAZNyL14wzaHWQdWAIISq1fi0IvPFzB71pDFTFimD2SiENCn\nR/YaR9OJAoGBAM21MRvTEMHF/EvqZ/X6t2zm9dtA22L2LeVy68aEdo82F/1RFvCM\nGBWjGS7G7fXk/tV/YHbjibhgktvLu3Rss1wlHfGEjtDAIdp9dqH0cNxMgy/eTfoy\nFfzV3l7pNSdILn1bNqoMz9CaYK7CGIYpBWCbRJlRSYw2FHJwl5tzgmkk\n-----END RSA PRIVATE KEY-----",
      "public": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA8Hl+/cF3AOxKVRHtZpeS\nDM+LLGc2hkDkKxRXe72maUAzDUoOoNd6wd02Cf6iO7kj0RSDHXUyINxCgvXy2Q7g\nME4zRN5WG4ItWZ7FITeNgJJW1r+JshDjTwKVpMvcKHy0vyUl25ah7hnwGK6PbJvF\nWMmtIBw6Rs5DaERAlmilgkuUgdriaA4YhhS4pCJLvO2p9wZd+dLWUT+tpsOZGeec\nC8If3fyShgrocMbd8pYYDzf65oCtVaLaNdERaIJSDcmbHxFpeBdEQEzxw2qRPbUC\nnSgQb8cVFLJ2eOEn5LylWhU96A1S3w1IlRm5N2zG0En58Vruo26gEtl5KFu0zivl\nawIDAQAB\n-----END PUBLIC KEY-----"
    },
    "id": "591cda5d6c7adec42a1874bc",
    "updated": "2017-05-17T23:18:53.385Z"
  }
]
```

The public key is the string `-----BEGIN PUBLIC KEY-----...-----END PUBLIC KEY-----`

In a multi-node deployment, when the cluster is first started up, database is empty and rsa key pair doesn't exist. To prevent multiple rsa keys being generated by different nodes, only the [master node](../config-nodeRoles/) can generate the rsa key pair. other nodes will wait for the key pair available in database before proceeding with rest bootstrap.

::: danger Expose RSA public key to only trusted party
Dispite of the adjective public, NotifyBC's public key should only be distributed to trusted third party. The trusted third party should only use the public key at server backend. Using the public key in client-side JavaScript poses a security loophole.
:::
