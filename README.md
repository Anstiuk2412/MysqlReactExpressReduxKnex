# Simple Abstract Framework by Node JS

*by Anastiuk*

### At first you need install correct version node.js

if use asdf
>asdf install nodejs lts

### 1)Let start the server

Command for start server by:
> node index

### )In this abstract Framework I add CRUD operation

We have:
- getUsers /users
- createUser /users (abstract create)
- updateUser /users/id (abstract update)
- deleteUser /users/id  (abstract delete)

### 3)During the implementation, the MVC pattern was used.  The part responsible for the data is located in the Model directory.  The part responsible for interpreting user actions in the Controller directory.

### 4)Routing realize how

>else if (req.url === "**URLPATH**" && req.method === "**METHOD**") {
>**Controller**(req, res)
>}
