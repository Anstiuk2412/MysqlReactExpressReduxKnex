export const middlewares = [];

export const addMiddlware = (req, fn) => {

}

export const runMiddwares = (req, res) => {
    for (let middlware in middlewares) {
        middleware(req);
    }
}
