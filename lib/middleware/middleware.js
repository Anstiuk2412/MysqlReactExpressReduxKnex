export const middlewares = [];

export const runMiddwares = (req, middlwares) => {
    for (let middlware in middlewares) {
        let body = middlwares[middlware](req);
        return body
    }
}

