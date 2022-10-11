# LAB - 02 basic-express-server

### Deployment Test

#### Author: Elaine Huynh
 - tests report

 #### Setup
**.env** requirements
- PORT - 3001

Running the app
- npm start
- Endpoint: /person (with name query)
    - returns String
    - /dogs
        - returns a string
    - /hello
        - returns a string

#### Tests
- Unit Tests: npm run test

#### UML

![UML](UML.png)

WIC - will discuss further in class 9/20

![AWS Beanstalk]()

## Process
    1. Create a basic server
    2. On AWS, use the beanstalk service and create an application - provided the same simple-server (GUI)
    3. When configuring applications, select node.js as the platform and upload the basic server as a zip file 
    4. Once deployed, test the server using the link provided. Ensure all endpoints are working
    5. Configuring aws beanstalk via cli
    1. First, inside of terminal in the directory of basic server, use command aws configure
    2. Enter in the Access key ID and secret access from the deployed basic server
    3. Next, answer a region name prompt (us-west-2) 
    3. and skip default output format
    4. Next, use command eb init and answer config questions
    5. Select an application will prompt and choose create a new application
    6. Name new app accordingly and select Node.js version and say no to CodeCommit
    7. Next use command, eb create - select the default name unless a new name is preferred. Next select application as the load balancer and say no to the Spot Fleet requests
    8. Once finished, check the aws beanstalk console to test out deployed site. 


## Links
- Latest PR on GitHub: https://github.com/nurselaine/basic-express-server/actions
- Heroku link: https://nurselaine-express-server-prod.herokuapp.com/

- GUI deployment: http://simpleserver2-env.eba-3im4fpzh.us-west-2.elasticbeanstalk.com
- CLI deployment: http://simple-server-cli-dev.us-west-2.elasticbeanstalk.com