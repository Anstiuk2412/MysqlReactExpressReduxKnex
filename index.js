import server from './lib/server/server.js';//add server
import config from 'config';//add config
import {createUser, deleteUser, getUsers, updateUser} from "./app/Http/Controllers/userController.js";
import {accessMiddleware} from "./lib/middleware/accessMiddleware.js";
import {addMiddlware} from "./lib/middleware/middleware.js";
import {logging} from "./lib/logger/levelLogger.js";
import {render} from "./lib/helpers/renderWebPage.js";
import { findUserWhere } from './database/models/userModel.js';

export const PORT = config.get("PORT");
const app = server;

app.createServer();//create server

/*Routers of api*/
app.get('/users', getUsers);
app.post('/users', createUser);
app.delete(/\/users\/([0-9a-z]+)/, deleteUser);
app.put(/\/users\/([0-9a-z]+)/, updateUser);

/*Router of web page*/
app.get('/', (req, res) => {
    render(res, './client/build/index.html')
});

app.get('/main.js', (req, res) => {
    render(res, './client/build/main.js')
});

/*New middleware*/
addMiddlware(accessMiddleware)
findUserWhere('name', 'Daniil')
/*ErrorHandler*/
app.errorHandler((error) => {
    logging('ERROR', error)
});

/*Listen port*/
app.listen(PORT, () => {
});
