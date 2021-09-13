import fs from 'fs';

export let render = async (res, htmlFile) => {
    fs.stat(`client/src/${htmlFile}`, (err, stats) => {
        if (stats) {
            res.statusCode = 200;
            fs.createReadStream(`client/src/${htmlFile}`).pipe(res);
        } else {
            res.statusCode = 404;
            res.end('Sorry, page not found!');
        }
    });
}
