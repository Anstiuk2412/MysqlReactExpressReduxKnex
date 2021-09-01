let accessing = []//our accessing logs

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
    accessing.push(`${dateTime} ${method} ${url} ${agent} ${host} HTTP/ ${httpVersion} ${remoteAddress} ${remoteFamily}`)

    console.log(accessing[accessing.length-1].toString())
}