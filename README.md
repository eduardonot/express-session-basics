## About

This JS has the objective to provide a basic understanding of Sessions while using MongoDB.

#### Authentication

It has a very simple authentication module using JWT.

#### Best practices with this JS project

This code will provide you a basic User Signup and Login routes. Using MongoDB, it stores user and session data which is where you can in fact verify if it is saving according to your wish.

#### JSON and REST Client

Once I wasn't using HTML files here, I opted by using JSON and POST it via REST Client. So, if you want to have a proper use for Request Body, please use the following:

###### POST/user-signup

```JSON
"name": "Your name here",
"email": "Your email here",
"password": "Your password here",
"repassword": "Your password confirmation here"
```

###### POST/login

```JSON
"email": "Your email here",
"password": "Your password here"
```