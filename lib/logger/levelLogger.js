
import config from 'config';

const logLevels = {
    'OFF': 0,
    'FATAL': 1,
    'ERROR': 2,
    'WARN': 3,
    'INFO': 4,
    'DEBUG': 5,
    'TRACE': 6,
    'ALL': 7
}
const logLevelDefault = 7//default level

export const logging = (level, message) => {
    /*IF ELSE CORRECT VALUE GET FROM LEVEL*/
    const configerValues = logLevels[config.get("logLevel")]
    const levelValue = logLevels[level]
    if (configerValues >= levelValue) {
        console.log(`[${level}] ${message}`)
    }
}


