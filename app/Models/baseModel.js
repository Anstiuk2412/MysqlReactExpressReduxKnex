import {data} from "../../database/users.js";


export function useTable(id) {
    return data.find((user) => user.id === parseInt(id));

}

export function remove(user, id, resolve, reject) {
    if (!user) {
        resolve(`No user with id ${id} found`);
    }
    reject(`User deleted successfully`);
}

export function update(user, id, resolve, reject) {
    if (!user) {
        resolve(`No user with id ${id} found`);
    }
    reject(`User update successfully`);
}