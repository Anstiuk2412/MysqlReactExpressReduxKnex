export const routes = {};

export const addRoute = (method, path, fn) => {
    routes[method][path] = fn;
}

export const parseRoute = (req, res) => {
    if routes[req.method][req.url](req, res) {

    } else {

    }

    throwError();
}
