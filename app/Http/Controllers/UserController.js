const User = require('../../Models/userModels')
const {Authenticate} = require("../../../lib/Helpers/Authenticate");

// /users   GET
async function getUsers(req, res) {
    const users = await new User.findAll();
    // set the status code, and content-type
    res.writeHead(200, {"Content-Type": "application/json"});
    // send all users
    res.end(JSON.stringify(users));
}

// /users  POST
async function createUser(req, res) {
    // get the database sent along
    // let users_data = await Authenticate(req);
    // create the user
    let user = await new User.create(req.user_id);
    // set the status code and content-type
    res.writeHead(200, {"Content-Type": "application/json"});
    //send the user
    res.end(JSON.stringify(user));
}

// /users/id   PUT
const updateUser = async (req, res, id) => {
    try {
        // update user
        let message = await new User.update(id);
        // set the status code and content-type
        res.writeHead(200, {"Content-Type": "application/json"});
        // send the message
        res.end(JSON.stringify(message));
    } catch (error) {
        // set the status code and content type
        res.writeHead(404, {"Content-Type": "application/json"});
        // send the error
        res.end(JSON.stringify({message: error}));
    }
}

// /users/id   Delete
async function deleteUser(req, res, id) {
    try {
        // delete user
        let message = await new User.remove(id);
        // set the status code and content-type
        res.writeHead(200, {"Content-Type": "application/json"});
        // send the message
        res.end(JSON.stringify({message}));
    } catch (error) {
        // set the status code and content-type
        res.writeHead(404, {"Content-Type": "application/json"});
        // send the error
        res.end(JSON.stringify({message: error}));
    }
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}
