import {logging} from "../logger/levelLogger.js";

export const validation = (request, schema) => {
    const requestKeys =Object.keys(request) // List of request keys
    const schemaRequiredParams =schema.required //List of schema required params
    //Check if all parameters are specified
    if (requestKeys.toString() != schemaRequiredParams.toString()) {
        let notSpecified = schemaRequiredParams.filter(param => requestKeys.indexOf(param) < 0);//Not specified request key
         const message=`You haven't some variable ${notSpecified}`
        logging('ERROR', message)
        return message
    } else {
        for (const field in request) {
            //Validate type of request
            const message =`Wrong type of ${field}`
            if (typeof request[field] != schema.properties[field].type) {
                logging('ERROR', message)
                return message
            }
        }
    }
}