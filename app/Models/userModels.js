import {data} from "../../database/users.js";
import * as baseModel from "./baseModel.js";


export function findAll() {
    // return all users
    return new Promise((resolve) => resolve(data));
}

export function create(user) {
    return new Promise((resolve) => {
        let newUser = {
            ...user
        };
        // return the new created user
        resolve(newUser);
    });
}

export function update(id) {
    //update user by id
    return new Promise((resolve, reject) => {
        let user = baseModel.useTable(id)
        baseModel.update(user, id, resolve, reject)
    });
}

export function remove(id) {
    //remove user by id
    return new Promise((resolve, reject) => {
        let user = baseModel.useTable(id)
        baseModel.remove(user, id, resolve, reject)
    });
}
