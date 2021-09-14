import fs from 'fs';

export let render = async (res, path) => {
    fs.stat(path, (err, stats) => {
        if (stats) {
            res.statusCode = 200;
            fs.createReadStream(path).pipe(res);
        } else {
            res.statusCode = 404;
            res.end('Sorry, page not found!');
        }
    });
}
