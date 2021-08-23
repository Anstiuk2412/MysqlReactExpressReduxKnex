const data = require("../../database/users");// Use Data about users

function findAll() {
    // return all users
    return new Promise((resolve) => resolve(data));
}

function create(user) {
    return new Promise((resolve) => {
        let newUser = {
            ...user
        };
        // return the new created user
        resolve(newUser);
    });
}

function update(id) {
    return new Promise((resolve, reject) => {
        // get the user by id.
        let user = data.find((user) => user.id === parseInt(id));
        // if no find user, return an error
        if (!user) {
            reject(`No user with id ${id} found`);
        }
        // return the updated user
        resolve(user);
    });
}

function removeUser(id) {
    baseModel.useTable = 'users';
    baseModel.remove(id)
}

function remove(id) {
    return new Promise((resolve, reject) => {
        // get the user by id
        let user = data.find((user) => user.id === parseInt(id));
        // if no find user, return an error
        if (!user) {
            reject(`No user with id ${id} found`);
        }
        // else, return a success message
        resolve(`User deleted successfully`);
    });
}

module.exports = {
    findAll,
    create,
    update,
    remove,
}
