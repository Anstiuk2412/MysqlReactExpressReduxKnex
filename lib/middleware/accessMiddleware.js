import fs from 'fs';
import {logging} from "../logger/levelLogger.js";

export function accessMiddleware(req) {
    /*Current time*/
    let today = new Date();
    let date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' ' + time;
    /*Parameters http request*/
    const {httpVersion, method, socket, url, headers} = req;
    const {host} = headers
    const agent = headers['user-agent']
    const {remoteFamily, remoteAddress} = socket;
    /*Save logging*/
    let accessing = `${dateTime} ${method} ${url} ${agent} ${host} HTTP/ ${httpVersion} ${remoteAddress} ${remoteFamily}\n` //
    let accessingLog = `${dateTime} ${method} ${url} ${agent} ${host} HTTP/ ${httpVersion} ${remoteAddress} ${remoteFamily}`
    const path = 'log/accessingLog.txt'//Path to File

    if (fs.existsSync(path)) { // if file exist write
        logging('INFO',accessingLog)
        fs.appendFile(path, accessing, function (err) {
            if (err) throw err;
        })
    } else {//if file absent create file and write
        fs.writeFile(path, accessing, function (err) {
            if (err) throw err;
        })
    }
}