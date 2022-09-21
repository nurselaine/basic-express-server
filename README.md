# LAB - 02 basic-express-server

### Deployment Test

#### Author: Elaine Huynh
 - tests report

 #### Setup
    **.env** requirements
    - PORT - 3001

    Running the app
    - npm start
    - Endpoint: /person (with or without name query)
        - returns String

            Hello World

#### Tests
    - Unit Tests: npm run test
    - Lint Tests: npm run lint

**UML**

WIC - will discuss further in class 9/20



## DEMO notes
- create an error handler folder
    - Files can be made for which ever error codes
    - How do you use mutliple error handlers
        app.use(handler1, handler2, etc, etc)
- Modularize files: Create a src folder that holds error handlers, tests, and app.js
    - In app.js export two functions (app and start) - app represents the express server while start is listening for port 3001/3002 or whatever you're on
    - in index.js, import the start function from app.js to "start" the server - this saves money because it is reducing the amount of times a servers requests are run
- Tests!: create a test folder labelled "__tests__"
    - a file called server.test.js is then using supertest which is a library that provides all the functions we use to run tests
    - tests have been written for all endpoints


## Links
- git repo: https://github.com/nurselaine/server-deployment-practice
- Heroku link: https://nurselaine-server-deploy-prod.herokuapp.com/
