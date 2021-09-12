import * as User from '../../Models/userModels.js'
import {validation} from "../../../lib/validation/validation.js";
import {schema} from "../../shemas/shemas.js";

// /users   GET
export async function getUsers(req, res) {
    const users = await new User.findAll();
    // set the status code, and content-type
    res.writeHead(200, {"Content-Type": "application/json"});
    // send all users
    res.end(JSON.stringify(users));
}

// /users  POST
export async function createUser(req, res) {
    // create the user
    let users_data = req.body
    //validation request user data
    let message = validation(users_data, schema)
    if (!message) {
        // create the user
        let user = await new User.create(users_data);
        // set the status code and content-type
        res.writeHead(200, {"Content-Type": "application/json"});
        //send the user
        res.end(JSON.stringify(user));
    } else {
        res.end(JSON.stringify(message));
    }
}

// /users/id   PUT
export const updateUser = async (req, res, id) => {
    try {
        // update user
        let user = await new User.update(id);//add validation
        let message = validation(user, schema)
        if (!message) {
            // set the status code and content-type
            res.writeHead(200, {"Content-Type": "application/json"});
            // send the message
            res.end(JSON.stringify({user}));
        } else {
            res.end(JSON.stringify(message));
        }
    } catch (error) {
        // set the status code and content type
        res.writeHead(404, {"Content-Type": "application/json"});
        // send the error
        res.end(JSON.stringify({message: error}));
    }
}

// /users/id   Delete
export async function deleteUser(req, res, id) {
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
