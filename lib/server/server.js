import http from "http";
import * as router from "../router/router.js";
import {PORT} from "../../index.js";
import {middlewares, runMiddwares} from "../middleware/middleware.js";
import {logging} from "../logger/levelLogger.js";
import {requestToBody} from "../helpers/authenticate.js";

export let errorHandler = () => {
};

const server = http.createServer(async (req, res) => {
    if (req['body']) {
        req['body'] = await requestToBody(req)
    }
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
            logging('INFO', `server started on port: ${PORT}`)
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
    errorHandler: (callback) => {
        errorHandler = callback;
    },
};