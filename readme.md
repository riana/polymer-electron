# About

This is simple startup project for a hybrid Electron app using Polymer.

# Usage

Download the project then :

```
   npm install
   bower install
```


Start local server, store data in *local folder* :
```
   npm test
   http://localhost:32102/
```

Start vulcanized app with electron, store data in *production folder* and serve @32101 :
```
   npm start
```

Create binary package:

```
   gulp pkg
```
# Demo services

/api/load?id=file-name

/api/save?id=file-name
