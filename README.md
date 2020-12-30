# mongo-uri
Build and parse MongoDB URIs easily.

# Available Methods
| Name | Required Params | Return Type
--- | --- | ---
| buildUri | `Object` Connection host address and login credentials | `String` MongoDB Connection URI
| parseUri | `String` MongoDB Connection URI | `Object` Connection host address and login credentials

# buildUri
#### Params

| Name | Data Type | Required | Description | Default
--- | --- | --- | --- | ---
| `host` | String | Yes | Host Address for the MongoDB Server |
| `username` | String | Yes | Login username |
| `password` | String | Yes | Login password |
| `authdb` | String | Yes | Authentication Source Database |
| `srv` | Boolean | No | If true, the URI generated will have SRV enabled. | `false`
| `db` | String | No | The database to which MongoDB has to connect | "test"
| `port` | Integer | No | Port Number | If not specified, the URI will be generated without port number.

# parseUri
#### Params
| Name | Data Type | Required | Description | Default
--- | --- | --- | --- | ---
uri | String | Yes | The connection URI to parse

# Examples
```javascript
const mongoUri = require("mongo-uri");

let uri = mongoUri.buildUri({
    host: "cluster0.mongodb.net",
    username: "test",
    password: "password",
    authDb: "admin",
    srv: false,
    db: "mydb",
    port: 27017
});

console.log(uri);
// mongodb://test:password@cluster0.mongodb.net:27017/mydb?authSource=admin

let data = mongoUri.parseUri(uri);
console.log(data);
/*
{
    host: "cluster0.mongodb.net",
    username: "test",
    password: "password",
    authDb: "admin",
    srv: true,
    db: "mydb",
    port: 27017
}
*/
```