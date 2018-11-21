# German-Shepherd

BackEnd sample project
Currently version is LoopBack 3.0

## Usage

1) After pull code, run:

```console
foo@bar:~$ npm install
```


2) To start server, run:

```console
foo@bar:~$  npm start
```


3) Configure the app:

```javascript
 {
  "restApiRoot": "/api",
  "host": "0.0.0.0",
  "port": 3000,
  "url": "https://localhost:3000/",
  "swagger": {
    "protocol": "https"
  }
}
```


4) To configure the data source, edit `core/config/datasources.json` as following:
```javascript
 {
  ...
  "accountDS": {
    "name": "accountDS",
    "connector": "mysql",
    "host": "demo.strongloop.com",
    "port": 3306,
    "database": "loopback-example-mysql",
    "username": "demo",
    "password": "L00pBack"
  }
}
```

## Addition plugins
  * [Tensorflow integration](https://github.com/truongkhanhduy95/German-Shepherd/tree/master/core/plugins/tensorflow).
  * [Container Storage](https://github.com/truongkhanhduy95/German-Shepherd/tree/master/core/plugins/storage-helper).
  * [Word2Vec](https://github.com/truongkhanhduy95/German-Shepherd/tree/master/core/plugins/word2vec).

## More about LoopBack
  * [Documentation](https://loopback.io/doc/).
  * [API documentation](https://apidocs.strongloop.com/loopback).
  * [GitHub repository](https://github.com/strongloop/loopback).
