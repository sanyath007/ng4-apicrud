# ng4-apicrud

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Deploy Angular Application to Heroku

Install them into your application by running this commands in your terminal:

npm install @angular/cli@latest @angular/compiler-cli --save-dev

In your package.json, copy

"@angular/cli”: “1.4.9”,
"@angular/compiler-cli": "^4.4.6",

from devDependencies to dependencies

Create postinstall script in package.json
Under “scripts”, add a postinstall command like so:

"postinstall": "ng build --aot -prod"

This tells Heroku to build the application using Ahead Of Time (AOT) compiler and make it production-ready. This will create a dist folder where all html and javascript converted version of our app will be launched from.

Add Node and NPM engines
You will need to add the Node and NPM engines that Heroku will use to run your application. Preferably, it should be same version you have on your machine. So, run node -v and npm -v to get the correct version and include it in your package.json file like so:

//package.json
"engines": {
    "node": "6.11.0",
    "npm": "3.10.10"
}

Copy typescript to dependencies.
Copy "typescript": "~2.3.3" from devDependencies to dependencies to also inform Heroku what typescript version to use.

Install Enhanced Resolve 3.3.0
Run the command npm install enhanced-resolve@3.3.0 --save-dev

Install Server to run your app
Locally we run ng serve from terminal to run our app on local browser. But we will need to setup an Express server that will run our production ready app (from dist folder created) only to ensure light-weight and fast loading.

Install Express server by running:

npm install express --save

Create a server.js file in the root of the application and paste the following code.

// server.js
//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

Change start command
In package.json, change the “start” command to node server.js so it becomes:

"start": "node server.js"

Here’s what the complete package.json looks like. Yours may contain more depending on your application-specific packages.

Push changes to GitHub and Test in Heroku.
