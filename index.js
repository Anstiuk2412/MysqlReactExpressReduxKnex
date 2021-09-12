import server from './lib/server/server.js';//add server
import config from 'config';//add config
import {createUser, deleteUser, getUsers, updateUser} from "./app/Http/Controllers/userController.js";
import {accessMiddleware} from "./lib/middleware/accessMiddleware.js";
import {addMiddlware} from "./lib/middleware/middleware.js";
import {logging} from "./lib/logger/levelLogger.js";
import fs from 'fs';

export const PORT = config.get("PORT");
const app = server;

app.createServer();//create server

/*Routers of api*/
app.get('/users', getUsers);
app.post('/users', createUser);
app.delete(/\/users\/([0-9a-z]+)/, deleteUser);
app.put(/\/users\/([0-9a-z]+)/, updateUser);

/*Router of web page*/
app.get('/', (req, res) =>{
        fs.createReadStream('client/src/index.html').pipe(res);
    }
)

/*New middleware*/
addMiddlware(accessMiddleware)

/*ErrorHandler*/
app.errorHandler((error) => {
    logging('ERROR', error)
});

/*Listen port*/
app.listen(PORT, () => {
});