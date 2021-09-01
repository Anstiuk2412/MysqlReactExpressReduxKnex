import config from 'config';

export const LogLevels = {
    0: 'OFF', 1: 'FATAL', 2: 'ERROR', 3: 'WARN', 4: 'INFO', 5: 'DEBUG', 6: 'TRACE', 7: 'ALL'
}

export const logging = (level, message) => {
    let configerValues = config.get("logLevel")
    let configerValueNumber = Object.keys(LogLevels).find(key => LogLevels[key] === configerValues);
    let levelValueNumber =Object.keys(LogLevels).find(key => LogLevels[key] === level);
    if (configerValueNumber>=levelValueNumber){
        console.log(`[${level}] ${message}`)
    }
}


