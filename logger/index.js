const { createLogger, format, transports } = require('winston');
require('winston-mongodb');

const { combine, timestamp, prettyPrint, colorize, simple, errors, splat, json } = format;

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    errors({ stack: true }),
    splat(),
    json(),
    prettyPrint()
  ),
  transports: [
    new transports.File({ filename: './logger/logger.info.log', level: 'info' }),
    new transports.File({ filename: './logger/logger.error.log', level: 'error' }),
  ],
});

// logger.add(transports.MongoDB, {
//   db: 'mongodb://localhost/vidly',
//   level: 'error',
// });

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: combine(colorize(), simple()),
    })
  );
}

module.exports = { logger };
