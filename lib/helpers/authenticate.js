export const requestToBody = (req) => {
    return new Promise((resolve, reject) => {
        try {
            let body = "";
            // listen to database sent by client
            req.on("data", (chunk) => {
                // append the string version to the body
                body += chunk.toString();
            });
            // listen till the end
            req.on("end", () => {
                // send back the database
                resolve(JSON.parse(body));
            });
        } catch (error) {
            reject(error);
        }
    });
}
