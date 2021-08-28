const {notFound, simpleErrorHandler} = require("../Error/errorHandler");
const routes = [];

function addRoute(method, path, handler) {
    const route = {
        method: method,
        path: path,
        handler: handler
    }
    routes.push(route)
}

async function parseRoute(req, res, routes) {
    // Find route
    const route = routes.find((route) => {
        const methodMatch = route.method === req.method;
        let pathMatch = false;

        if (typeof route.path === 'object') {
            // if path regex
            pathMatch = req.url.match(route.path);
        } else {
            // if path is string
            pathMatch = route.path === req.url;
        }

        return pathMatch && methodMatch;
    });

    // Extract "id" from route and send to controller
    let id = null;
    if (route && typeof route.path === 'object') {
        id = req.url.match(route.path)[1];
    }

    // Extract request body
    if (route) {
        return route.handler(req, res, id);
    } else {
        /*AddErrorHandler(404,"Not Found")*/
        simpleErrorHandler(res, 404, 'not found');
        /*res.end(JSON.stringify({Code: 404, Message:'Error'}));*/
    }
}

module.exports = {
    addRoute, parseRoute, routes
}