export const middlewares = [];

export const runMiddwares = (req, middlwares) => {
    for (let middlware in middlewares) {
        req = middlwares[middlware](req);
        return req
    }
}

