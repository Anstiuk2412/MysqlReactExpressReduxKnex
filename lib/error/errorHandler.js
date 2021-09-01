/*
const errors = [];

function AddErrorHandler(text, statusCode) {
    const error = {
        text: text,
        statusCode: statusCode
    }
    errors.push(error)
}

function ErrorHandler(res, errors) {
    for(let error in errors){
            console.log(`${error}:${errors[error]}`)

    }
}

module.exports = {
    AddErrorHandler, ErrorHandler, errors
}
*/
module.exports = {
    simpleErrorHandler: (res,status, code) => {
        const err = new Error();
        err.status = status;
        err.code = code;
        res.end(JSON.stringify({err}))
    }
};