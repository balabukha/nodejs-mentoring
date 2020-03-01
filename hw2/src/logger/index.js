import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({
    method = '',
    query = '',
    params = '',
    level = '',
    message = '',
    service = '',
    timestamp
}) => {
    return `${timestamp}, [${service}], level: ${level}, message: ${message}, method: ${method}, query: ${query}, params: ${params}`;
});

const logger = createLogger({
    format: combine(
        timestamp(),
        myFormat
    ),
    transports: [
        new transports.Console({
            'colorize': true
        }),
        new transports.File({
            'datePattern': 'yyyy-MM-dd HH:mm:ss',
            'filename': './src/logger/errors.log'
        })
    ]
});

export default logger;
