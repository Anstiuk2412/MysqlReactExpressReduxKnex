export const middlewares = [];

export const runMiddwares = (req, middlwares) => {
    for (let middlware in middlewares) {
        middlwares[middlware](req);
    }
}

export const addMiddlware = (fn) => {
    middlewares.push(fn)//middleware.addMiddleware
}