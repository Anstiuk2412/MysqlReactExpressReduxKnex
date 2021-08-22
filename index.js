const http = require("http"); // Use Node.js http
const {getUsers, createUser, updateUser, deleteUser} = require('./app/Http/Controllers/UserController')// Use userController
const PORT = 3000;// Set port 3000

const server = http.createServer(async (req, res) => {

    // Router /users   GET
    if (req.url === "/users" && req.method === "GET") {
        await getUsers(req, res)
    }

    // Router /users/  POST
    else if (req.url === "/users" && req.method === "POST") {
        await createUser(req, res)
    }

    // Router /user/:id PUT
    else if (req.url.match(/\/users\/([0-9]+)/) && req.method === "PUT") {
        // get the id from url
        const id = req.url.split("/")[2];
        await updateUser(req, res, id)
    }

    // Router /users/:id   DELETE
    else if (req.url.match(/\/users\/([0-9]+)/) && req.method === "DELETE") {
        // get the id from url
        const id = req.url.split("/")[2];
        await  deleteUser(req,res, id)
    }

    // Error route
    else {
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({message: "Route not found"}));
    }
});

//Start server
server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});