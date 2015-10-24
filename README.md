# node-es6-seed

This is my opiniated seed for writing RESTful services in nodeJS using ES6, unit and acceptance testing. 

## Setup

You need [NodeJS and NPM](https://nodejs.org/) installed. The main commands are: 

* `node bootstrap-app.js`: Launch the server
* `node bootstrap-test-unit.js`: Launch the unit tests
* `node bootstrap-test-acceptance.js`: Launch the acceptance tests

Tooltip: You can use [nodemon](https://github.com/remy/nodemon) instead of node to have a file watcher running: `npm install -g nodemon`.

## Architecture

### Project structure

```
├── app/                         * Source of the application
│   ├── api/                     * Every Services/Routes
│   ├── app.js                   * Entry point of the application, launches the server
│   ├── app.router.js            * Main router
├── bootstrap-app.js             * Bootsrap the application for ES6
├── bootstrap-test-acceptance.js * Bootsrap the acceptance tests for ES6
├── bootstrap-test-unit.js       * Bootsrap the unit tests for ES6
├── acceptance/                  * Acceptance tests
│   ├── config.json              * Config for acceptance tests
│   └── src/                     * Spec files
├── node_modules/                * NPM third party modules
├── nodemon.json                 * Nodemon config file
├── package.json                 * Third party libraries list
├── README.md                    * This file
├── test-acceptance.js           * Entry point for acceptance tests
└── test-unit.js                 * Entry point for unit tests
```

### Web Service

A web service is specified by a route and is in the app/api folder. Here is the common structure for a web service:

```
app/api/                         * Every web services
└── hello                        * Folder of the web service
    ├── hello.controller.js      * No logic, just passing the request parameters to the service
    ├── hello.router.js          * Set routes to controller methods
    ├── hello.service.js         * The logic of the web service
    └── hello.service.spec.js    * The unit tests corresponding
```
