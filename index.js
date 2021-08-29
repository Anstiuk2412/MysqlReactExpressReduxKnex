import server from './lib/server/server.js';//add server
import config from 'config';//add config
import {createUser, deleteUser, getUsers, updateUser} from "./app/Http/Controllers/userController.js";
import {Authenticate} from "./lib/helpers/authenticate.js";

export const PORT = config.get("PORT");
const app = server;

app.createServer();//create server

/*Routers*/
app.get('/users', getUsers);
app.post('/users', createUser);
app.delete(/\/users\/([0-9a-z]+)/, deleteUser);
app.put(/\/users\/([0-9a-z]+)/, updateUser);
app.addMiddlware(Authenticate)

app.errorHandler((error) => {
    console.log(error)
});

/*Listen port*/
app.listen(PORT, () => {
    console.log("Server start")
});