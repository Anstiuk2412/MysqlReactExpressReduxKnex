let errorHandler = () => ();

export const handleError = (fn) => {
    errorHandler = fn;
}

export const throwError = () => {
    errorHandler();
}
