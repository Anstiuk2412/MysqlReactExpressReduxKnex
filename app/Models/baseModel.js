import {data} from "../../database/users.js";

export function useTable(id) {
    //find user by id
    return data.find((user) => user.id === parseInt(id));
}

export function remove(user, id, resolve, reject) {
    //remove by id
    if (!user) {
        resolve(`No user with id ${id} found`);
    }
    reject(`User deleted successfully`);
}

export function update(id, resolve, reject) {
    //update by id
    let user = data.find((user) => user.id === parseInt(id));
    // if no find user, return an error
    if (!user) {
        reject(`No user with id ${id} found`);
    }
    // return the updated user
    resolve(user);

}