import http from "http";
import * as router from "../router/router.js";
import {PORT} from "../../index.js";
import {middlewares, runMiddwares} from "../middleware/middleware.js";

export let errorHandler = () => {
};

const server = http.createServer((req, res) => {
    if (middlewares) {
        runMiddwares(req, middlewares)
    }
    if (!router.parseRoute(req, res, router.routes)) {
        errorHandler(`Router not found`);
    }
});

export default {
    createServer: () => (server),
    listen: (port) => {
        server.listen(port, () => {
            console.log(`server started on port: ${PORT}`)
        });
    },
    get: (url, callback) => {
        router.addRoute('GET', url, callback);
    },
    post: (url, callback) => {
        router.addRoute('POST', url, callback);
    },
    put: (url, callback, id) => {
        router.addRoute('PUT', url, callback, id);
    },
    delete: (url, callback, id) => {
        router.addRoute('DELETE', url, callback, id);
    },
    addMiddlware: (fn) => {
        middlewares.push(fn)
    },
    errorHandler: (callback) => {
        errorHandler = callback;
    },
};