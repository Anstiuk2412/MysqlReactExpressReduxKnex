const http = require("http"); // Use Node.js http
const config = require("config");//Config file
const {addRoute, routes, parseRoute} = require("./lib/Router/router")//Use Router
const {getUsers, createUser, updateUser, deleteUser} = require('./app/Http/Controllers/UserController')
// Use userController
const PORT = config.get("PORT");// Set port 3000

const server = http.createServer(async (req, res) => { //Create Server
    await parseRoute(req, res, routes);//Start  routing
});

addRoute("GET", "/users", getUsers)//Router Get
addRoute("POST", "/users", createUser)//Router Post
addRoute("PUT", /\/users\/([0-9a-z]+)/, updateUser)//Router PUT
addRoute("DELETE", /\/users\/([0-9a-z]+)/, deleteUser)//Router Delete


//Start server
server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});