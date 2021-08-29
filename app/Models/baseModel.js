import {data} from "../../database/users.js";
import {errorHandler} from "../../lib/server/server.js";


export function useTable(id) {
    //find user by id
    return data.find((user) => user.id === parseInt(id));
}

export function remove(user, id, resolve, reject) {
    //remuve by id
    if (!user) {
        resolve(`No user with id ${id} found`);
    }
    reject(`User deleted successfully`);
}

export function update(user, id, resolve, reject) {
    //update by id
    if (!user) {
        errorHandler(`No user with id ${id} found`)
        resolve(`No user with id ${id} found`);
    }
    reject(`User update successfully`);
}