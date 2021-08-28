const middlewares = [];

const addMiddlware = (fn) => {
    middlewares.push(fn)
}

const runMiddwares = (req, middlwares) => {
    for (let middlware in middlewares) {
        middlwares[middlware](req)
    }
}
module.exports = {
    middlewares, addMiddlware, runMiddwares
}
