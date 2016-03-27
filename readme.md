# About

This is simple startup project for a hybrid Electron app using Polymer.

# Usage

Download the project then :

```
   npm install
   bower install
```

## Start the app

Start local server:

```
   npm test
   http://localhost:32102/
```

Start the vulcanized app with electron, uses *electron-prebuilt* :
```
   npm start
```

## Create a binary distribution

This will vulcanize the Polymer app, and package the app with *electron-packager*. Packaging options are defined directly inside the gulpfile.

```
   gulp pkg
```
# Demo services

/api/load?id=file-name

/api/save?id=file-name
